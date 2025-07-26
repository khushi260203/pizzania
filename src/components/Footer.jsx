import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[300vh] lg:h-[110vh]  flex flex-col  bg-[#fff] text-center">
        <div className="w-full flex flex-col items-center tracking-tighter">
          <h2 className="text-red-500 font-semibold text-xl">Our Location</h2>
          <h1 className="text-7xl mt-3 font-semibold text-black">
            Find The Pizzania Near You
          </h1>
          <p className="text-black mt-5 text-xl w-[50vw] tracking-tighter text-center">
            Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
            semper dictumst sit interdum ut venenatis pellentesque.
          </p>
        </div>
        <div className="w-full mt-20 flex flex-col lg:flex-row justify-center items-center gap-30 pl-10 pr-10 tracking-tight">
          <div className="w-[15vw] flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-red-500">Rome</h1>
            <p className="text-center mt-5 text-lg text-black">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="w-[15vw] flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-red-500">Florence</h1>
            <p className="text-center mt-5 text-lg text-black">
              Viale Belfiore, 50, 50144 Firenze FI, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="w-[15vw] flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-red-500">Bologna</h1>
            <p className="text-center mt-5 text-lg text-black">
              Via delle Lame, 55, 40122 Bologna BO, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="w-[15vw] flex flex-col items-center">
            <h1 className="text-5xl font-semibold text-red-500">Venice</h1>
            <p className="text-center mt-5 text-lg text-black">
              S. Marco, 615, 30124 Venezia VE, Italy. +39 123 456 7890
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] md:h-[85vh] bg-[#F7F6F2] flex items-center justify-between text-black tracking-tighter px-5 md:px-10">
        <div className="w-[70vh] h-full flex flex-col justify-center">
          <h2 className="text-2xl lg:text-4xl text-black font-semibold">Free Delivery!</h2>
          <h1 className="text-4xl lg:text-5xl font-bold mt-5 whitespace-nowrap ">
            Download The App Now!
          </h1>
          <p className="text-md lg:text-lg mt-5">
            Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
            pulvinar ipsum mauris etiam mattis nisl.
          </p>
          <div className="flex mt-10 gap-x-10">
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white">
              Google Play
            </button>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white">
              App Store
            </button>
          </div>
        </div>
        <div className="flex w-[60vw] px-5 md:w-[30vw]">
          <img
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-mobile-app-mockup.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-[140vh] md:h-[70vh] flex flex-wrap md:flex-row justify-between items-center bg-[#fff] gap-15 px-10 tracking-tighter ">
        <div className="w-[23vw]">
          <h1 className="font-[cursive] text-red-500 font-semibold text-lg md:text-2xl text-start">
            The Pizzania
          </h1>
          <p className="text-md md:text-lg mt-5 text-start">
            Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices
            sed in urna ipsum ullamcorper auctor.
          </p>
          <div className="flex items-center mt-5 gap-5">
            <FaTwitter className="text-xl md:text-2xl" />
            <FaFacebookF className="text-xl md:text-2xl" />
            <FaInstagram className="text-xl md:text-2xl" />
          </div>
        </div>
        <div className="w-[11vw]">
          <h1 className="text-black font-medium text-xl md:text-2xl text-start">
            About Us
          </h1>
          <ul className="mt-5 text-md md:text-lg text-start">
            <li>Our Story</li>
            <li>Our Location</li>
            <li>Current Deals</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-[10vw]">
          <h1 className="text-black font-medium text-xl md:text-2xl text-start">
            Our Menu
          </h1>
          <ul className="mt-5 text-md md:text-lg text-start">
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Dessert</li>
            <li>Take & Bake</li>
          </ul>
        </div>
        <div className="w-[14vw]">
          <h1 className="text-black font-medium text-xl md:text-2xl text-start">
            Our Location
          </h1>
          <ul className="mt-5 text-md md:text-lg text-start">
            <li>The Pizzania Rome</li>
            <li>The Pizzania Madrid</li>
            <li>The pizzania Paris</li>
            <li>The Pizzania Miami</li>
          </ul>
        </div>
      </div>
      <div className="w-full border-[1px] border-[#FECC00]"></div>
      <div className="w-full h-[10vh] flex justify-between items-center px-5 md:px-10  bg-[#ffffff]">
        <div className="text-md md:text-xl">Copyright &copy; 2025 The Pizzania.</div>
        <div className="text-md md:text-xl">Powered by The Pizzania</div>
      </div>
    </>
  );
};

export default Footer;
