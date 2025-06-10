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
          <h1 className="heading-1 bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent mb-4">
            DPIIT Recognition Certificate
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
              <div className="aspect-[5/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-dashed border-primary/30">
                <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <img
                      src={certificate}
                      alt="certificate pic"
                      className="w-full h-full aspect-[5/3]"
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
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900 rounded-2xl shadow-2xl shadow-primary/10 border border-primary/20 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-tertiary p-8 text-black">
                <h2 className="text-2xl font-bold mb-2 font-raleway">
                  Certificate Details
                </h2>
                <p className="text-black/80 font-inter">
                  Official Recognition Information
                </p>
              </div>

              {/* Details Grid */}
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-primary/30">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                        <FaAward className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400 font-poppins">
                          Certificate Number
                        </p>
                        <p className="text-xl font-bold text-primary font-raleway">
                          DIPP173951
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-primary/30">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                        <FaBuilding className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-400 font-poppins">
                          Status
                        </p>
                        <p className="text-xl font-bold text-primary font-raleway">
                          Active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-gray-800 rounded-xl border border-primary/20">
                    <p className="text-sm font-medium text-gray-400 mb-2 font-poppins">
                      Company Name
                    </p>
                    <p className="text-2xl font-bold text-primary font-raleway">
                      DOTS&DECIMALS INFOTECH LLP
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-900 rounded-lg border border-primary/20">
                      <div className="flex items-center mb-2">
                        <FaCalendarAlt className="w-4 h-4 text-tertiary mr-2" />
                        <p className="text-sm font-medium text-gray-400 font-poppins">
                          Incorporation Date
                        </p>
                      </div>
                      <p className="text-lg font-semibold text-white font-raleway">
                        22-07-2024
                      </p>
                    </div>

                    <div className="p-4 bg-gray-900 rounded-lg border border-primary/20">
                      <div className="flex items-center mb-2">
                        <FaCalendarAlt className="w-4 h-4 text-tertiary mr-2" />
                        <p className="text-sm font-medium text-gray-400 font-poppins">
                          Issued On
                        </p>
                      </div>
                      <p className="text-lg font-semibold text-white font-raleway">
                        31-08-2024
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-secondary/30">
                    <div className="flex items-center mb-3">
                      <FaBullseye className="w-5 h-5 text-secondary mr-2" />
                      <p className="text-sm font-medium text-gray-400 font-poppins">
                        Industry Sector
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-white font-raleway">
                      Marketing & Digital Marketing (SEO Automation)
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-tertiary/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <FaShieldAlt className="w-5 h-5 text-tertiary mr-2" />
                        <p className="text-sm font-medium text-gray-400 font-poppins">
                          Valid Until
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full font-poppins border border-primary/30">
                        10 Years Validity
                      </span>
                    </div>
                    <p className="text-xl font-bold text-primary mb-2 font-raleway">
                      21-07-2034
                    </p>
                    <p className="text-sm text-gray-300 font-inter">
                      Valid for 10 years from incorporation date, provided
                      annual turnover doesn't exceed ₹100 Cr.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl shadow-lg shadow-primary/10 p-8 border border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <FaBuilding className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-primary font-raleway">
                  Government of India
                </h3>
                <p className="text-sm text-gray-300 font-poppins">
                  Department for Promotion of Industry and Internal Trade
                </p>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto font-inter">
              For any queries regarding this certificate or startup recognition
              program, please contact the Department for Promotion of Industry
              and Internal Trade through official channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
