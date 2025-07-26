import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = () => {
    toast.success("Form Submitted!");
    reset();
    navigate("/submitted");
  };

  return (
    <>
      <div className="relative w-full h-[85vh] tracking-tighter">
        <div className="absolute top-0 h-[85vh] w-full z-[-1]">
          <img
            className="w-full h-full z-[1] rounded-b-4xl overflow-hidden object-cover"
            src="https://websitedemos.net/pizzeria-04/wp-content/uploads/sites/791/2021/03/pizzeria-template-contact-header-img-bg.jpg"
            alt=""
          />
          <div className="absolute w-full h-full z-[2] rounded-b-full bg-[#00000075] top-0"></div>
        </div>
        <div className="absolute top-[45vh] left-1/2 -translate-1/2">
          <h1 className="text-white text-7xl font-black tracking-tight text-center">
            CONTACT
          </h1>
        </div>
      </div>
      <div className="w-full h-[180vh] flex flex-col lg:flex-row px-0 lg:px-18 tracking-tighter -mt-14">
        <div className="w-full lg:w-[30vw] rounded-t-4xl lg:rounded-l-4xl bg-[#F7F6F2] h-full px-10 py-10">
          <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start">
            Corporate Office
          </h1>

          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <MapPin className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.
            </p>
          </div>
          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <Phone className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">+39 123 456 7890</p>
          </div>
          <div className="flex gap-x-5 mt-4 lg:mt-7">
            <Mail className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            <p className="text-md">mail@example.com</p>
          </div>

          <div>
            <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start mt-6">
              Press Inquiries
            </h1>
            <div className="flex gap-4 lg:gap-7 flex-col mt-4 lg:mt-7">
              <div className="flex gap-x-5">
                <Phone className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
                <p className="text-md">+39 123 456 7890</p>
              </div>
              <div className="flex gap-x-5">
                <Mail className="w-5 lg:w-10 h-5 lg:h-10 text-red-500 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
                <p className="text-md">mail@example.com</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold items-start mt-6">
              Stay Connected
            </h1>
            <div className="flex items-start gap-5 mt-8 text-red-500 text-3xl ">
              <FaTwitter className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaFacebookF className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaInstagram className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
              <FaYoutube className="w-5 lg:w-10 h-5 lg:h-10 hover:pb-3 hover:transition-all hover:ease-linear duration-200" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60vw] bg-amber-50 rounded-r-4xl px-10 py-10">
          <h1 className="text-4xl font-semibold tracking-tighter ">
            We love to hear from you
          </h1>
          <p className="mt-5 text-lg opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="mt-8 tracking-tighter"
          >
            <h1 className="text-lg">Name</h1>
            <div className="flex gap-x-10">
              <input
                className="border border-gray-400 rounded w-1/2 px-6 py-2 mt-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border border-gray-400 w-1/2 rounded px-6 py-2 mt-2"
                type="text "
                placeholder="Last Name"
              />
            </div>
            <h1 className="text-lg mt-8">Email</h1>
            <input
              className="border border-gray-400 rounded px-6 w-full lg:w-[40vw] py-2 mt-2"
              type="Email "
              placeholder="Email address"
            />
            <h1 className="text-lg mt-8">Phone Number</h1>
            <input
              className="border border-gray-400 rounded px-6 w-full lg:w-[40vw] py-2 mt-2"
              type="number "
              placeholder="Phone no."
            />
            <h1 className="text-lg mt-8">Subject</h1>
            <input
              className="border border-gray-400 rounded px-6 w-full lg:w-[40vw] py-2 mt-2"
              type="text "
              placeholder="Subject"
            />
            <h1 className="text-lg mt-8">Select Location</h1>
            <select className="border border-gray-400 rounded px-6 w-full lg:w-[40vw] py-2 mt-2">
              <option>The Pizzania Roma</option>
              <option>The Pizzania Madrid</option>
              <option>The Pizzania Paris</option>
              <option>The Pizzania Miami</option>
            </select>
            <h1 className="text-lg mt-8">Comment or message</h1>
            <textarea className="border border-gray-400 rounded px-6 w-full lg:w-[40vw] h-[25vh] py-2 mt-2"></textarea>
            <div>
              <button
                onClick={() => handleSubmit()}
                className="mt-8 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-8 py-2 rounded text-xl font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
