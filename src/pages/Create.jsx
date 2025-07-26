import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = () => {
    toast.success("Created successfully!");
    reset();
    navigate("/created");
  };
  return (
    <>
      <div className="relative w-full h-[95vh] tracking-tighter">
        <div className="absolute top-0 h-[85vh] w-full z-[-1]">
          <img
            className="w-full h-full z-[1] rounded-b-4xl overflow-hidden object-cover"
            src="https://images.squarespace-cdn.com/content/v1/56beafd58a65e2eeeab6b645/1612328888320-GXTMD9VT5V5NEIIEO3C6/shutterstock_627052364.jpg?format=1500w"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#000000b0] top-0"></div>
        </div>
        <div className="absolute top-[45vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-7xl font-black tracking-tight text-center">
            Create Your Own
          </h1>
        </div>
      </div>
      <div className="w-full h-[330vh] md:h-[280vh] lg:h-[180vh] tracking-tighter px-5 mt-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[65vw] h-[200vh] lg:h-[150vh]  rounded-l-4xl mx-auto">
          <h1 className="text-red-500 font-bold text-6xl text-center ">
            Steps For Creating Your Own Pizza
          </h1>
          <p className="text-lg mt-5 text-center">
            Erat pharetra suscipit tincidunt in eget ultricies lectus posuere
            arcu.
          </p>
          <div className="flex w-full h-full px-5 mt-10 ">
            <div className="w-[70vw] lg:w-[25vw] flex flex-col gap-10">
              <div className="">
                <h1 className="text-xl text-red-500 font-semibold tracking-tighter">
                  Step 1
                </h1>
                <h1 className="mt-5 text-4xl text-black tracking-tighter font-semibold">
                  Choose Your Size
                </h1>
                <p className="mt-5 font-semibold text-lg tracking-tighter ">
                  8″, 12″, 14″, 18″
                </p>
              </div>
              <div>
                <h1 className="text-xl text-red-500 font-semibold tracking-tighter mt-5">
                  Step 2
                </h1>
                <h1 className="mt-5 text-4xl text-black tracking-tighter font-semibold">
                  Choose Your Sauce
                </h1>
                <p className="mt-5 font-semibold text-lg tracking-tighter ">
                  Marinara, BBQ, Spicy BBQ, oil,
                  <br /> alfredo, or hot sauce
                </p>
              </div>
            </div>
            <div className="w-[80vw] lg:w-[40vw] px-8">
              <h1 className="text-xl text-red-500 font-semibold tracking-tighter">
                Step 3
              </h1>
              <h1 className="mt-5 text-4xl text-black tracking-tighter font-semibold">
                Choose Your Topping
              </h1>
              <h2 className="mt-5 font-semibold text-2xl tracking-tighter ">
                Traditional Topping
              </h2>
              <section className="flex gap-x-20 text-lg mt-5">
                <div>
                  <ul>
                    <li>
                      {" "}
                      <span>→</span> Roasted Peppers
                    </li>
                    <li className="mt-2">
                      <span>→</span> Extra Mozzarella
                    </li>
                    <li className="mt-2">
                      <span>→</span> Canadian Bacon
                    </li>
                    <li className="mt-2">
                      <span>→</span> Sliced Sausage
                    </li>
                    <li className="mt-2">
                      <span>→</span> Sun-Dried Tomatoes
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="">
                      <span>→</span> Fresh Basil
                    </li>
                    <li className="mt-2">
                      <span>→</span> Bell Peppers
                    </li>
                    <li className="mt-2">
                      <span>→</span> Caramelized Onions
                    </li>
                    <li className="mt-2">
                      <span>→</span> Feta Cheese
                    </li>
                    <li className="mt-2">
                      <span>→</span> Italian Beef
                    </li>
                  </ul>
                </div>
              </section>
              <div>
                <h2 className="mt-5 font-semibold text-2xl tracking-tighter ">
                  Premium Topping
                </h2>
                <section className="flex gap-x-20 text-lg mt-5">
                  <div>
                    <ul>
                      <li className="">
                        {" "}
                        <span>→</span> Ricotta Cheese
                      </li>
                      <li className="mt-2">
                        <span>→</span> Fresh Mozzarella
                      </li>
                      <li className="mt-2">
                        <span>→</span> Goat Cheese
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li className="">
                        <span>→</span> Portabella Mushrooms
                      </li>
                      <li className="mt-2">
                        <span>→</span> Prosciutto di Parma
                      </li>
                      <li className="mt-2">
                        <span>→</span> Fresh Arugula
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Form  */}
        <div className="w-full lg:w-[30vw] h-[150vh] lg:h-[130vh] bg-amber-50 rounded-r-4xl px-10">
          <h1 className="text-red-500 font-bold text-5xl text-center pt-5 ">
            Let's Create Your Own
          </h1>
          <form onClick={handleSubmit(SubmitHandler)}>
            <h1 className="text-2xl font-medium">Size</h1>
            <select className="border border-gray-400 rounded px-6 w-full lg:w-[20vw] py-2 mt-3">
              <option>8″</option>
              <option>12″</option>
              <option>14″</option>
              <option>18″</option>
            </select>
            <h1 className="text-2xl font-medium mt-8">Sauce</h1>
            <select className="border border-gray-400 rounded px-6 w-full lg:w-[20vw] py-2 mt-3">
              <option>Marinara</option>
              <option> BBQ</option>
              <option>Spicy BBQ</option>
              <option>Oil</option>
              <option>alfredo</option>
              <option>hot sauce</option>
            </select>
            <h1 className="text-4xl font-medium mt-8">Topping</h1>
            <h1 className="text-2xl font-medium mt-5">Traditional Topping</h1>
            <select className="border border-gray-400 rounded px-6 w-full lg:w-[20vw] py-2 mt-3">
              <option>Extra Mozzarella</option>
              <option> Canadian Bacon</option>
              <option>Sliced Sausage</option>
              <option>Sun-Dried Tomatoes</option>
              <option>Roasted Peppers</option>
              <option>Fresh Basil</option>
              <option>Bell Peppers</option>
              <option>Caramelized Onions</option>
              <option>Feta Cheese</option>
              <option>Italian Beef</option>
            </select>
            <h1 className="text-2xl font-medium mt-5">Premium Topping</h1>
            <select className="border border-gray-400 rounded px-6 w-full lg:w-[20vw] py-2 mt-3">
              <option>Ricotta Cheese</option>
              <option> Goat Cheese</option>
              <option>Prosciutto di Parma</option>
              <option>Fresh Mozzarella</option>
              <option>Portabella Mushrooms</option>
              <option>Fresh Arugula</option>
            </select>
            <div className="flex items-center justify-center lg:justify-self-start">
              <button className="mt-8 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-8 py-2 rounded text-xl font-bold">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

};

export default Create;
