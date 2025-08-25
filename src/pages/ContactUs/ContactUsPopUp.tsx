import React from "react";
import { useState } from "react";

const ContactUsPopUp = ({ open, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`bgwhite fixed inset-0 transition-colors w-[100%] h-screen mt[60px] z-50  flex justify-center items-center ${
          open ? "visible  bg-black/20" : "invisible"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-xl shadow p-6 transition-all ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          {/* {children} */}
          <div className="h-[8px]"></div>
          <div className="flex justify-center">
            <p className="text-[20px] font-semibold">Add New Produce</p>
          </div>
          <div className=""></div>
          <div className="h-[29px]"></div>
          <div className="flex justify-center">
            <div>
              <p className="text-[18px]">Upload Photos</p>
              <div className="mt-[15px]">
                <div className="h-[5.38rem] w-[30.75rem] border-2 border-[rgba(20,174,92,1)] border-dashed flex flex-col justify-center items-center">
                  <p className="text-[15px]">
                    Click to upload to drag and drop
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[15px]"></div>
          <div className="flex justify-center">
            <div>
              <p className="text-[17px] mb[15px]">Produce Type</p>
              <div className="border-[rgba(20,174,92,0.36)] rounded-[10px] border-2 w-[20.75rem] h[2.13rem] h-[2.63rem] p-[0.9rem] flex justify-between items-center">
                <input
                  type="text"
                  className="inp w-[47rem] text-[15px]"
                  placeholder="Select Produce Type"
                />
              </div>
              {/* <div className="h-[1.44rem]"></div> */}
              <div className="flex justifybetween">
                <div className="">
                  <div>
                    <p>Quality Grade</p>
                    <div className="border-[rgba(20,174,92,0.36)] rounded-[10px] border-2 w-[14rem] h-[2.63rem] p-[0.9rem] flex justify-between items-center">
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div>
                  <p>Quantity (Basket/bag)</p>

                  <input
                    type="text"
                    className="border-[rgba(20,174,92,0.36)] rounded-[10px] border-2 w-[15.44rem] h-[2.63rem] p-[0.9rem] flex justify-between items-center"
                  />
                </div>
              </div>
              <div>
                <p className="my-[1.25rem] text-[1.1rem] font-semibold">
                  Description
                </p>
              </div>
              <div className="w-[20.75rem] h-[5.5rem] border-2 border-[rgba(20,174,92,0.36)] rounded-[25px]"></div>
            </div>
          </div>
          {/* <div className="h-[12.13rem]"></div> */}
        </div>
      </div>
    </>
  );
};

export default ContactUsPopUp;
