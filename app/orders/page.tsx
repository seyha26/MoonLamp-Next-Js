"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useUser } from "@clerk/nextjs";
import { OrderTypes } from "@/types/orderType";
import { formatDate } from "@/utils/formatDate";
import formatPrice from "@/utils/formaPrice";

const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderTypes[]>([]);
  const cartStore = useCartStore();
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async function () {
      if (user && user.id) {
        await fetch("/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not okay");
            }

            return res.json();
          })
          .then((data) => {
            if (Array.isArray(data)) {
              setOrders(data);
            } else {
              console.error(
                "Data received from the server is not an array:",
                data
              );
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    fetchData();
  }, [user]);

  if (!user) {
    return (
      <div className="w-[89%] m-auto text-center my-10">
        <h2 className="font-bold text-2xl text-primary uppercase">
          WOAH THERE...
        </h2>
        <p>You must be signed in to view orders.</p>
      </div>
    );
  }

  return (
    <div className="w-[89%] pb-10 max-w-[1400px] m-auto flex flex-col gap-3">
      <div className="text-center my-2">
        <h2 className="font-bold text-2xl text-primary uppercase">
          Hello {user.username}!
        </h2>
        <p>Below are your recent orders</p>
      </div>
      {orders.length < 1 ? (
        <p className="font-bold text-center text-lg uppercase">
          No recent orders
        </p>
      ) : (
        <>
          {orders.map((order, index) => (
            <div key={index} className="bg-gray-200 p-5 rounded-lg">
              <p>Order ID: {order.id.replace(/\D/g, "")}</p>
              <p>Order Amount: {formatPrice(order.amount)}</p>
              <p>Order Date: {formatDate(order.createDate)}</p>
              <p>Order Status: {order.status}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrdersPage;
