import React from "react";
import {
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaBullseye,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import certificate from "../../assets/images/certificate.jpg";
const Certificate = () => {
  return (
    <div className="min-h-screen bg-black py-[4rem] ">
      <div className="wrapper">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-tertiary rounded-full mb-6 shadow-lg shadow-primary/20">
            <FaAward className="w-10 h-10 text-black" />
          </div>
          <h1 className="heading-1 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent pb-4">
            {/* DPIIT Recognition Certificate */} DPIIT Recognized by Government
            of India
          </h1>
          <p className="desc text-xl text-gray-300 max-w-2xl mx-auto">
            Officially recognized by Startup India - Department for Promotion of
            Industry and Internal Trade
          </p>
          <div className="flex items-center justify-center mt-4">
            <FaCheckCircle className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary font-medium font-poppins">
              Verified & Active
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-1 gap-12 items-start">
          {/* Certificate Image Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-2xl shadow-2xl shadow-primary/10 p-8 border border-primary/20">
              <div className="aspect-[4/2] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-primary/30">
                <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <img
                      src={certificate}
                      alt="certificate pic"
                      className="w-full h-full aspect-[4/2]"
                    />
                    {/* <FaAward className="w-24 h-24 text-primary mx-auto mb-4" />
                    <p className="text-gray-400 font-inter">
                      Certificate Image
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <FaShieldAlt className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-gray-300 font-poppins">
                    Government Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Details Section */}
        </div>

        {/* Footer Section */}
      </div>
    </div>
  );
};

export default Certificate;
