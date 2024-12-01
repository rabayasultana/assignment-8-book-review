import { Link } from "react-router-dom";

const Banner = ({ image }) => {
    return (
        <div>
           <section className=" bg-gray-100 text-gray-800  mx-20 mt-8 rounded-2xl">
        <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse  lg:py-5  ">
              <img
                src={image}
                className="max-w-sm rounded-lg shadow-2xl   h-60 lg:ml-20"
              />
              <div className=" lg:mr-20">
                <h1 className=" text-3xl lg:text-5xl font-bold text-black lg:w-[526px]">
                  Books to freshen up your bookshelf
                </h1>

                <Link
                  to="/listedBooks"
                  className="btn btn-primary text-white bg-green-600 border-none my-4 lg:mt-10"
                >
                  View The List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Banner;