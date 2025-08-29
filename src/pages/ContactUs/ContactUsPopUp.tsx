import React from "react";
import { useState } from "react";

const ContactUsPopUp = ({ open, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-primary/35 w-[100%] h-screen z-50 flex justify-center items-center ${
          open ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-purple-200 rounded-xl shadow p-6 transition-all text-black ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          {/* {children} */}
          <div className="h-[8px]"></div>
          <div className="flex justify-center">
            <p className="text-[20px] font-semibold">Contact Us</p>
          </div>

          <div className="flex justify-center"></div>
          <div className="h-[15px]"></div>
          <div className="">
            <div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <div className="border-b-2 border-black">
                    <input
                      type="text"
                      placeholder="FullName"
                      className="bg-purple-200 text-black bordnon w-[100%]"
                    />
                  </div>
                </div>
                <div className="border-b-2 border-black">
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-purple-200 text-black bordnon w-[100%]"
                  />
                </div>
              </div>
              <div className="my-[1rem]">
                <p className="text-[1.1rem] font-semibold">Message</p>
                <div className="w-[21.95rem] h-[6.5rem] p-1 border-2 border-purple-400 bg-purple-200  rounded-[25px]">
                  <input
                    type="text"
                    className="bordnon w-[20.75rem] h-[5.5rem] bg-purple-200"
                  />
                </div>
              </div>

              <div className=""></div>
            </div>
          </div>
          {/* <div className="h-[12.13rem]"></div> */}
        </div>
      </div>
    </>
  );
};

export default ContactUsPopUp;
