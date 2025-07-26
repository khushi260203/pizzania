const Offers = () => {
  return (
    <>
    <div className="relative w-full h-[85vh] tracking-tighter">
        <div className="absolute top-0 h-[85vh] w-full z-[-1]">
          <img
            className="w-full h-full z-[1] overflow-hidden object-cover"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-menu-header-img-bg.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#00000091] top-0"></div>
          
        </div>
        <div className="absolute top-[60vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-7xl font-black tracking-tight text-center">OFFERS</h1>
          <p className="text-lg text-white tracking-tight text-center mt-9">Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.</p>
        </div>
      </div >
      <div className="w-full h-[280vh] md:h-[350vh] lg:h-[280vh] bg-[#F7F6F2] mt-10 ">
        <div className="px-10">
          <h1 className="text-4xl lg:text-6xl font-bold  ">
            Best Deals!
          </h1>
          <div className="w-full h-[60vh] px-5 mt-10">
          <img
            className="w-full h-full object-cover rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://restaurants.pizzahut.co.in/images/PizzaHutHomePage3.png"
            alt=""
          />
        </div>
        <div className="w-full h-[55vh] md:h-[90vh] lg:h-[60vh]  flex flex-col justify-center items-center lg:flex-row px-5 gap-10 mt-10 ">
          <img
            className="w-[45vw] md:w-full h-[30vw] object-cover rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut100.539b5ae28f90dec75fbe13c4c2e6f860.1.jpg"
            alt=""
          />
          <img
            className="w-[45vw] md:w-full h-[30vw] object-cover rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://www.lamilano.pizza/image/mobile_banner/new_offer_banner_m1.webp"
            alt=""
          />
        </div>
        <div className="w-full h-[55vh] md:h-[90vh] lg:h-[60vh] flex flex-col justify-center items-center lg:flex-row px-5 gap-10 mt-10 ">
          <img
            className="w-[45vw] md:w-full h-[30vw]  object-cover overflow-hidden rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://kaspas.co.uk/wp-content/uploads/2024/06/offer-free-birthday-cake-shake.jpg"
            alt=""
          />
          <img
            className="w-[45vw] md:w-full h-[30vw] object-cover overflow-hidden rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pasta-special-offer-design-template-9cf1771720a1039643c62e7f0ed122fd_screen.jpg?ts=1658392738"
            alt=""
          />
        </div>
        <div className="w-full h-[60vh] px-5 mt-10">
          <img
            className="w-full h-full object-cover rounded-xl hover:pb-3 hover:transition-all hover:ease-linear duration-200"
            src="https://png.pngtree.com/png-clipart/20220730/original/pngtree-pasta-western-food-fast-food-food-catering-web-promotion-banner-png-image_8443718.png"
            alt=""
          />
        </div>
        </div>
      </div>
      </>
  )
}

export default Offers
