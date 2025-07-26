import { Pizza, Smartphone, Store } from "lucide-react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen justify-center text-white">
      <div className="w-full h-[150vh]">
        <div className="absolute top-0 h-[150vh] w-full object-cover z-[-1]">
          <img
            className="w-full h-full object-cover z-[1]"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-hero-bg-img.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] bg-[#0000009c] top-0"></div>
        </div>

        <div className="absolute top-44 lg:top-[60vh] leading-[1.3] left-1/2 -translate-x-1/2 z-[4]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="w-full text-center font-bold text-[10vh]">
              AUTHENTIC ITALIAN PIZZERIA
            </h1>
            <p className="w-[70vw] text-center mt-4">
              Et praesent nulla urna consequat dui arcu cursus diam fringilla
              libero risus, aliquam diam, aliquam ullamcorper urna pulvinar
              velit suspendisse aliquam lacus sollicitudin mauris.
            </p>
          </div>
          <div className="w-full flex justify-center mt-10 gap-10 md:gap-20 flex-col md:flex-row">
            <button className="bg-red-600 py-2 px-4 w-full md:w-fit rounded-md hover:bg-red-400 text-xl">
              Book A Table
            </button>
            <button className="border-white w-full md:w-fit hover:bg-white border-[1.3px] py-2 px-4 hover:text-black text-xl rounded-md">
              TakeAway
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-[230vh] md:h-[110vh]  w-full">
        <div>
          <img
            className="absolute left-1/2 -translate-x-1/2 -top-45 w-[50vh] xl:w-[75vh] z-[1000000] hover:-top-[20vw] hover:transition-all hover:duration-300 hover:ease-in-out rounded-full"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-header-pizza-img.png"
            alt=""
          />
        </div>

        <div className="w-full h-[100vh] flex justify-between items-center flex-col md:flex-row mt-6 text-black p-5">
          <div className="w-full md:w-[30vw] h-[80vh] mt-40 md:mt-50 flex flex-col items-center">
            <img
              className="w-60 h-60 object-cover rounded-full hover:mt-3 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-fresh-ingredients-img.jpg"
              alt=""
            />
            <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-500">
              FRESH INGREDENTS
            </h1>
            <h2 className="text-lg mt-4 text-center">
              Risus egestas felis, purus ultricies tortor feugiat aliquam
              euismod senectus sed amet felis viverra mi bibendum.
            </h2>
          </div>

          <div className="w-full md:w-[30vw] h-[80vh] mt-20 md:mt-98 flex flex-col justify-center items-center">
            <img
              className="w-60 h-60 object-cover rounded-full hover:mt-3 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-secret-recipe-sauce-img.jpg"
              alt=""
            />
            <h1 className="text-center text-4xl mt-4 font-bold text-red-500">
              Handmade Mozarella
            </h1>
            <h2 className="text-lg mt-4 text-center">
              Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium
              condimentum nisl tempus risus imperdiet egestas sit.
            </h2>
          </div>

          <div className="w-full md:w-[30vw] h-[80vh] mt-20 md:mt-30 flex flex-col justify-center items-center">
            <img
              className="w-60 h-60 object-cover rounded-full hover:mt-3 hover:transition-all hover:ease-linear duration-200"
              src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-homemade-mozarella.jpg"
              alt=""
            />
            <h1 className="text-center mt-4 text-4xl font-bold text-red-500">
              Secret Recipe Sauce
            </h1>
            <h2 className="text-lg  mt-4 text-center">
              Placerat id sagittis dolor dictum sit ante dui varius dui eu
              iaculis pellentesque nam lobortis lectus.
            </h2>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[250vh] sm:h-[110vh] mt-40">
        <img
          className="w-full h-full object-cover z-[1]"
          src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-delivery-section-img-bg.jpg"
          alt=""
        />
        <div className="absolute w-full h-full z-[2] bg-[#000000b6] top-0 "></div>

        <div className="z-[4] w-full flex flex-col lg:flex-row px-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white tracking-tighter">
          <div className="left flex flex-col">
            <h1 className="text-7xl font-bold leading-tight text-center">
              Bringing Happiness To You
            </h1>
            <h2 className="text-xl mt-5 leading-tight text-center">
              Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
            </h2>
          </div>

          <div className="right flex flex-col sm:flex-row items-center gap-14 sm:gap-5 mt-5  ">
            <div className="flex flex-col justify-center w-[20vw] items-center ">
              <Smartphone className="text-red-600 w-40 h-30 mt-10 hover:pb-2 hover:transition-all hover:ease-linear duration-200" />
              <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold mt-5">
                Online Delivery
              </h1>
              <a className="mt-5 text-md lg:text-xl text-center whitespace-nowrap" href="http://localhost:5173/">
                Order Online
              </a>
            </div>
            <div className="flex flex-col justify-center w-[20vw] items-center ">
              <Store className="text-red-600 w-40 h-30 hover:pb-2 hover:transition-all hover:ease-linear duration-200" />
              <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold mt-5">
                Click & Collect
              </h1>
              <a className="mt-5 text-md lg:text-xl text-center whitespace-nowrap" href="http://localhost:5173/">
                Takeout Order
              </a>
            </div>
            <div className="flex flex-col justify-center w-[20vw] items-center ">
              <Pizza className="text-red-600 w-40 h-30 hover:pb-2 hover:transition-all hover:ease-linear duration-200" />
              <h1 className=" text-xl md:text-2xl lg:text-4xl text-center font-semibold mt-5">
                Restaurant Dining
              </h1>
              <a className="mt-5 text-md lg:text-xl text-center whitespace-nowrap" href="http://localhost:5173/">
                Book A Table
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] z-[4] mt-30 flex flex-col items-center tracking-tighter">
        <h2 className="text-red-500 text-center font-semibold text-xl">
          Choose Your Flavour
        </h2>
        <h1 className="text-7xl text-center leading-[1.1] mt-3 font-semibold text-black">
          Food that brings people together!
        </h1>
        <p className="text-black mt-5 text-xl leading-[1.4] w-[50vw] tracking-tighter text-center">
          Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
          semper dictumst sit interdum ut venenatis pellentesque nunc.
        </p>
        <button className="mt-15 border border-red-500 px-6 py-2 hover:bg-red-500 rounded hover:text-white text-red-500 text-2xl">
          View All Menu
        </button>
      </div>
      <div className="w-full h-[150h] sm:h-[180vh] md:h-[130vh] mt-10 md:-mt-70 flex flex-col md:flex-row justify-between gap-30 md:justify-between items-center text-black p-5 mb-10">
        <div className="w-[30vw] h-[30vw] md:-mt-40 flex flex-col items-center">
          <img
          className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pasta-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-red-500">Pasta</h1>
        </div>

        <div className="w-[30vw] h-[30vw] md:mt-10 flex flex-col justify-center items-center">
          <img
            className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-pizza-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-red-500">Pizza</h1>
        </div>

        <div className="w-[30vw] h-[30vw] md:mt-80 flex flex-col justify-center items-center">
          <img
            className="w-[40vw] h-[40vw] object-cover rounded-full hover:pb-2 hover:transition-all hover:ease-linear duration-200"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-dessert-img.png"
            alt=""
          />
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-red-500">Dessert</h1>
        </div>
      </div>

      <div className="w-full h-[200vh]">
        <div className="w-full h-20 flex items-center justify-between px-7">
          <h1 className="text-4xl lg:text-7xl font-semibold tracking-tighter text-black">
            Best Deals!
          </h1>
          <button className="border border-red-500 rounded px-6 py-2 text-xl lg:text-2xl text-red-500 hover:bg-red-500 hover:text-white font-normal tracking-tighter ">
            View All
          </button>
        </div>
        <div className="w-full h-[70vh] px-4 py-4 mt-15">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://restaurants.pizzahut.co.in/images/PizzaHutHomePage3.png"
            alt=""
          />
        </div>
        <div className="w-full h-[70vh] flex mt-10 px-10 py-2 gap-30 ">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut100.539b5ae28f90dec75fbe13c4c2e6f860.1.jpg"
            alt=""
          />
          <img
            className="hidden xl:flex w-full h-full object-cover rounded-xl"
            src="https://www.lamilano.pizza/image/mobile_banner/new_offer_banner_m1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
