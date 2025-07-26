import { NotebookPen, Pizza, Store } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="relative w-full h-[85vh]">
        <div className="absolute top-0 h-[85vh] w-full z-[-1] bg-[#FFFFFF]">
          <img
            className="w-full h-full z-[1]  overflow-hidden object-cover"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-about-header-img-bg.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#0000009c] top-0"></div>
        </div>
        <div className="absolute top-[60vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-7xl font-black tracking-tight text-center">
            ABOUT
          </h1>
          <p className="text-lg text-white tracking-tight text-center mt-9">
            Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna
            tristique ornare aliquam orci augue vestibulum dignissim vel
            aliquam.
          </p>
        </div>
      </div>
      <div className="w-full h-[380vh] md:h-[340vh] lg:h-[180vh] bg-[#F7F6F2] tracking-tighter flex px-15">
        <div className="w-full mt-10">
          <h2 className="text-red-500 font-semibold text-xl">Our Story</h2>
          <h1 className="text-black text-4xl lg:text-5xl xl:text-6xl font-bold mt-8">
            Authentic Italian Pizzeria
          </h1>
          <p className="text-md lg:text-lg opacity-85 mt-7 w-[50vw]">
            Varius eu mauris est vitae ultrices et, justo, at in ut faucibus
            libero pellentesque facilisis molestie suspendisse lacinia gravida
            sed habitasse diam nec nulla.
          </p>
          <div className="flex flex-col lg:flex-row gap-x-15">
            <div className="w-[60vw] mt-15">
              <img
                className="w-[50vw] h-[100vh] lg:h-[70vh]"
                src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-founder-img.jpg"
                alt=""
              />
              <h1 className="mt-5 lg:text-2xl font-semibold">Antonio Baggio</h1>
              <h2 className="text-lg lg:text-xl mt-2 opacity-80">
                Founder of The Pizzania
              </h2>
            </div>

            <div className="w-[60vw]  text-start">
              <h1 className="text-xl lg:text-2xl font-semibold mt-15">
                It's All About The Family
              </h1>
              <p className="text-md lg:text-lg mt-5">
                Imperdiet orci, volutpat consequat fermentum, proin tempus et
                tellus, vulputate adipiscing auctor nulla in malesuada et amet,
                aliquam laoreet mauris gravida consectetur malesuada est
                ultricies diam vestibulum velit sit aliquet pellentesque vitae.
              </p>
              <h1 className="text-xl lg:text-2xl font-semibold mt-15">
                Generations in The Making
              </h1>
              <p className="text-md lg:text-lg mt-5 ">
                Cursus ultricies in maecenas pulvinar ultrices integer quam
                amet, semper dictumst sit interdum venenatis pellentesque nunc
                libero vestibulum velit sit aliquet pellentesque vitae mauris
                gravida consectetur malesuada.
              </p>
            </div>
            <div className="w-[70vw] mt-5 lg:-mt-35">
              <img
                src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-vintage-building-img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="fixed top-0 h-[100vh] w-full -z-[19]"
        src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-near-fireplace-img.jpg"
        alt=""
      />
      <section className="w-full h-[125vh] relative bg-[#fff0] tracking-tighter ">
        <div className="w-[45vw] h-[120vh] bg-[#fff] mt-10 ml-5 md:mt-20 md:ml-20 px-5 md:px-10 py-10">
          <h1 className="text-red-500 text-sm md:text-xl lg:text-2xl font-semibold">The Pizzania</h1>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mt-8">
            Incredible Dishes Start Here
          </h1>
          <p className="mt-6 text-sm md:text-md lg:text-lg">
            Semper dictumst sit interdum venenatis pellentesque nunc libero
            vestibulum velit sit aliquet pellentesque vitae.
          </p>
          <div className="flex gap-x-5">
            <Store className="text-red-500 w-[10vw] h-[10vw] mt-6 " />
            <div>
              <h1 className="mt-6 text-md md:text-xl lg:text-2xl font-semibold ">
                4,200 square feet of space
              </h1>
              <p className="text-[3vw] md:text-sm lg:text-md ">
                Bibendum rhoncus amet tellus ornare lobortis sit aliquet elit,
                hac nisi, mauris ac tellus velit sollicitudin.
              </p>
            </div>
          </div>
          <div className="flex gap-x-5">
            <Pizza className="text-red-500 w-[10vw] h-[10vw] mt-2" />
            <div>
              <h1 className="text-md md:text-xl lg:text-2xl mt- font-semibold ">
                Heritage You Can Taste
              </h1>
              <p className="text-[3vw] md:text-sm lg:text-md mt-2">
                Pretium, condimentum magna amet egestas ligula pretium magna
                rutrum a in arcu, mauris porttitor fermentum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full h-[143vh]">
        <img className="h-full"
          src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-fresh-ingredients-img-1.jpg"
          alt=""
        />
        <div className="absolute bg-[#fff] top-1/2 -translate-y-1/2 right-20">
          <div className="w-[40vw] h-[130vh] bg-[#fff] mt-5 mr-5 md:mt-10 md:mr-10 px-5 md:px-10">
            <h1 className="text-red-500 text-sm md:text-xl lg:text-2xl font-semibold">
             Authentic
            </h1>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mt-8">
              Recipe With Roots
            </h1>
            <p className="mt-6 text-sm md:text-md lg:text-lg ">
              Semper dictumst sit interdum venenatis pellentesque nunc libero vestibulum velit sit aliquet pellentesque vitae.
            </p>
            <div className="flex gap-x-5">
              <NotebookPen className="text-red-500 w-[10vw] h-[10vw] mt-6" />
              <div>
                <h1 className="mt-6 text-md md:text-xl lg:text-2xl font-semibold ">
                 Handmade "Secret" Ingredients
                </h1>
                <p className="text-[3vw] md:text-sm lg:text-md mt-2">
                  Bibendum rhoncus amet tellus ornare lobortis sit aliquet elit,
                  hac nisi, mauris ac tellus velit sollicitudin.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <Pizza className="text-red-500 w-[10vw] h-[10vw] mt-6" />
              <div>
                <h1 className="mt-6 text-md md:text-xl lg:text-2xl font-semibold ">
                  Authentic Italian Flavors
                </h1>
                <p className="text-[3vw] md:text-sm lg:text-md mt-2">
                  Pretium, condimentum magna amet egestas ligula pretium magna
                  rutrum a in arcu, mauris porttitor fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
}

export default About;
