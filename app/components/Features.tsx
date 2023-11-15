import Image from "next/image";
import moonlamp from "@/public/images/transparentmoonlamp.png";
import { BsBatteryCharging } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { AiFillGift, AiFillSafetyCertificate } from "react-icons/ai";
import { RiWirelessChargingFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
const Features = () => {
  return (
    <section className="py-5" id="features">
      <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
        <div>
          <ul className="space-y-10">
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark">
                <h3>Battery life</h3>
                <div>
                  <BsBatteryCharging size={25} />
                </div>
              </div>
              <p>
                Crafted with precision, our moonlamp radiates soft, ambient
                light and lasts for hours on a single charge.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark">
                <h3>16 Color Variations</h3>
                <div>
                  <IoIosColorPalette size={25} />
                </div>
              </div>
              <p>
                Explore a palette of moods with our moonlamp, offering sixteen
                hues to match any accasion or decor.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark">
                <h3>Perfect Gift</h3>
                <div>
                  <AiFillGift size={25} />
                </div>
              </div>
              <p>
                A unique and thoughtful token, our moonlamp lights up moments
                and smiles, making memories brighter.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image src={moonlamp} width={500} height={500} alt="moonlamp" />
        </div>
        <div>
          <ul className="space-y-10 text-right">
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                <h3>Child Safety</h3>
                <div>
                  <AiFillSafetyCertificate size={25} />
                </div>
              </div>
              <p>
                Designed with car, our moonlamp ensures a gentle glow free of
                harmful elements, keeping young ones enchanted and secure.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                <h3>Bright & Dim Modes</h3>
                <div>
                  <FaRegLightbulb />
                </div>
              </div>
              <p>
                Choose the ambiance; our moonlamp adjusts from a radiant glow to
                a soft whisper of light.
              </p>
            </li>
            <li>
              <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                <h3>100% Wireless</h3>
                <div>
                  <RiWirelessChargingFill size={25} />
                </div>
              </div>
              <p>
                Illuminate spaces without cords; our moonlamp is sleek and
                clutter-free.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
