import { useEffect } from "react";

const OurMenu = () => {
  useEffect(()=> {
    window.scrollTo(0,0)

  },[])
  return (
    <>
      <div className="relative w-full h-[85vh]">
        <div className="absolute top-0 h-[85vh] w-full z-[-1]">
          <img
            className="w-full h-full z-[1] rounded-b-full overflow-hidden object-cover"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-our-menu-header-img-bg.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#00000075] top-0"></div>
        </div>
        <div className="absolute top-[45vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-5xl md:text-6xl font-black tracking-tight">
            Our Menu
          </h1>
        </div>
      </div>

      <div className="w-full h-[170vh] md:h-[130vh] mt-10 md:-mt-70 flex flex-col md:flex-row justify-between gap-30 md:justify-between items-center text-black p-5 mb-10">
        <div className="w-[30vw] h-[30vw] md:-mt-40 flex flex-col items-center">
          <img
            className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pasta-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-red-500">
            Pasta
          </h1>
        </div>

        <div className="w-[30vw] h-[30vw] md:mt-10 flex flex-col justify-center items-center">
          <img
            className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pizza-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-red-500">
            Pizza
          </h1>
        </div>

        <div className="w-[30vw] h-[30vw] md:mt-80 mb-10 flex flex-col justify-center items-center">
          <img
            className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-dessert-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold  text-red-500">
            Dessert
          </h1>
        </div>
      </div>

      {/* Pasta */}
      <div className="w-full h-[200vh] md:h-[140vh] tracking-tighter">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between px-10">
          <h1 className="text-5xl lg:text-7xl text-red-500 font-bold w-[20vw]">
            Pasta
          </h1>
          <p className="text-md md:text-lg w-[80vw] md:w-[60vw] mt-5">
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>
        {/* Pasta Items */}
        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-pasta-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPAGHETTI BOLOGNESE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                With Chianti-braised meat sauce and fresh basil.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-pasta-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPAGHETTI BOLOGNESE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                With Chianti-braised meat sauce and fresh basil.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-pasta-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPAGHETTI BOLOGNESE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                With Chianti-braised meat sauce and fresh basil.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-pasta-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPAGHETTI BOLOGNESE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                With Chianti-braised meat sauce and fresh basil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pizza */}
      <div className="w-full h-[300vh] md:h-[150vh] tracking-tighter">
        <div className="w-full flex flex-col md:flex-row justify-between px-10">
          <h1 className="text-5xl lg:text-7xl text-red-500 font-bold w-[20vw]">
            Pizza
          </h1>
          <p className="text-md md:text-lg w-[80vw] md:w-[60vw] mt-5">
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>
        {/* Pizza Items */}
        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizza-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">PAESANO</h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino
                Romano cheese, Sicilian extra-virgin olive oil, and fresh
                garlic.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizza-img-2.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPICY FENNEL
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                House-made fennel sausage, jalapeño, roasted red peppers, garlic
                sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizza-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">PAESANO</h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino
                Romano cheese, Sicilian extra-virgin olive oil, and fresh
                garlic.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizza-img-2.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                SPICY FENNEL
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                House-made fennel sausage, jalapeño, roasted red peppers, garlic
                sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dessert */}
      <div className="w-full h-[250vh] md:h-[140vh] tracking-tighter">
        <div className="w-full flex flex-col md:flex-row justify-between px-10">
          <h1 className="text-5xl lg:text-7xl text-red-500 font-bold w-[20vw]">
            Dessert
          </h1>
          <p className="text-md md:text-lg w-[80vw] md:w-[60vw] mt-5">
            Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus
            mattis risus metus in suscipit scelerisque eu duis penatibus eros
            magna cursus elementum orci.
          </p>
        </div>
        {/* Dessert Items */}
        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-dessert-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                ITALIAN CANNOLI
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                An Italian handcrafted pastry shell filled with fresh ricotta
                cheese and chocolate.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-dessert-img-2.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                TRUFFLE CHOCOLATE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                Crafted with layers of dark, moist chocolate and a silky truffle
                chocolate filling.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-dessert-img-1.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                ITALIAN CANNOLI
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                An Italian handcrafted pastry shell filled with fresh ricotta
                cheese and chocolate.
              </p>
            </div>
          </div>
          <div className="flex mt-20 md:mt-30 px-3 md:px-10 w-full md:w-[70vw] tracking-tighter gap-x-5">
            <img
              className="rounded-md w-36 h-24 hover:ml-2 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-dessert-img-2.jpg"
              alt=""
            />
            <div className="relative flex flex-col w-full md:w-[22vw]">
              <h1 className="text-3xl leading-[1.2] font-semibold">
                TRUFFLE CHOCOLATE
              </h1>
              <p className="text-md lg:text-lg mt-1 text-zinc-600 leading-[1.6]">
                Crafted with layers of dark, moist chocolate and a silky truffle
                chocolate filling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
