import React from 'react'
// import heroImage from "../assets/hero-students.jpg";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-background ">
        <div className="items-center justify-center h-screen flex p-3">
          <div className="w-[40%] h-[70%]">
            {/* <img src={heroImage} alt="" className="h-[100%] max-sm:hidden" /> */}
          </div>

          <div className="w-[40%] h-[70%] bg-white">
            <div className="">
              <div className="lg:text-2xl font-semibold flex justify-center">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;