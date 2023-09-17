import React from "react";

const AboutUs = () => {
    return (
        <div className="aboutus mt-[80px] max-w-[1200px] mx-auto  h-3/4 relative font-poppins p-10">
            <div className=" sm:max-w-[1200px]  md:h-full   flex  min-[250px]:flex-col  ">
                <div className="max-h-1/3">

                    <div className="md:basis-1/3  flex-col ">
                      <h1 className=" mt-2  font-bold font-poppins text-left text-3xl"> About Us</h1>
                      <h1 className=" my-5 font-sans text-xs sm:test-sm md:text-2xl text-left ">Welcome to Agriconnect, your digital hub for all things agriculture. </h1>
                      <img  className=" mt-4 rounded-xl w-full h-[200px] sm:h-[400px] md:h-[550px] shadow-sm shadow-black hidden:sm " src="/images/farmer3.jpg" alt=""/>
                
                    </div>
                   <div className="  md:basis-2/3  mt-12 ">
                      <h1 className=" my-4 font-bold font-poppins text-2xl text-center  ">Our Mission</h1>
                      <p className=" font-poppins  text-xs sm:test-sm md:text-base  mt-4   text-justify "> At Agriconnect, we are on a mission to revolutionize the way farmers and
                          agricultural enthusiasts connect, collaborate, and cultivate success. We believe that agriculture
                          is the backbone of our world, and we are committed to
                          empowering those who work the land by providing them with the tools and resources they need to thrive.
                      </p>
                      <h1 className=" my-8 font-bold font-poppins text-2xl text-center  ">Our Vision</h1>
                      <p className=" font-poppins text-xs sm:test-sm md:text-base mt-4   text-justify "> We envision a world where agriculture is sustainable, profitable, and 
                           accessible to all. Agriconnect is our contribution to this vision, and we invite you to be a part of this exciting journey.
                           Whether you're a farmer, a gardener, an agricultural student, or someone who simply appreciates the importance of agriculture, Agriconnect 
                           is your platform to connect, learn, and grow. Join our community today and be a part of the agricultural revolution.
                      </p>
                    </div>
                </div>
                 <div className=" md:flex max-h-1/3 mt-20"> 
                  <div className="md:basis-2/3 font-poppins  text-center mx-4">
                      <h1 className=" mt-1 font-bold font-poppins text-2xl text-left">Join Us on Our Journey</h1>
                      <div className=" flex flex-col">
                          <p className=" font-poppins text-xs sm:test-sm md:text-base mt-4 mr-4  pr-6 text-justify "> We invite you to be a part of the Agriconnect community. Together, we can shape the future of agriculture
                              and create a more sustainable and prosperous world for all.Thank you for choosing Agriconnect as your 
                              agricultural resource and community. We look forward to connecting with you and working together to drive 
                              positive change in the agricultural industry.Please make sure to customize this content to accurately reflect
                              the unique mission, history, and goals of Agriconnect.
                          </p>
                      </div>
                      <button className="border-2 active:bg-green-900 border-black md:w-24 md:h-10 my-8 bg-green-700 text-center font-poppins text-white rounded-lg"> Join Us</button>
                        
                    </div>
                   <div className="md:basis-1/3 ">
                       <img  className="w-auto h-auto rounded-xl  shadow-md shadow-black "src="/images/agricolus.jpg" alt="Image" />
                   </div>
                  
                </div>
                <div className=" mx-auto md:flex flex-col  h-1/3  ]">
                <h1 className=" my-[40px] font-extrabold font-poppins text-2xl text-center ">Our Team</h1>
                    <div className=" mx-auto basis-1/2 flex flex-row  ">
                        <div className=" mr-4 basis-1/3 h-auto   bg-slate-100 rounded-xl shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2  "src="/images/manicon.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center">Vedant </h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center"> I am the student of Lncte.Currently Pursuing B.tech from CSE-DS.</p>
                            </div>
                        </div>
                        <div className="   ml-2 mr-2 basis-1/3 h-auto   bg-slate-100 rounded-xl  shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2   "src="/images/manicon.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center"> Ayaansh Rajotia </h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center">  I am the student of Lncte.Currently Pursuing B.tech from CSE-DS. </p>
                            </div>
                        </div>
                        <div className=" ml-4  basis-1/3 h-auto   bg-slate-100 rounded-xl  shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2 "src="/images/images.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center"> Tanisha Jain</h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center">  I am the student of Lncte.Currently Pursuing B.tech from CSE-DS. </p>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className=" basis-1/2 h-1/3 flex flex-row mt-10">
                    <div className="  mr-4 basis-1/3 h-auto   bg-slate-100 rounded-xl  shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2 "src="/images/manicon.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center"> Aditya Mishra </h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center">  I am the student of Lncte.Currently Pursuing B.tech from CSE-DS. </p>
                            </div>
                        </div>
                        <div className="mr-2 ml-2  basis-1/3 h-auto   bg-slate-100 rounded-xl  shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2  "src="/images/manicon.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center"> Mayank soni</h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center">  I am the student of Lncte.Currently Pursuing B.tech from CSE-DS.</p>
                            </div>
                        </div>
                        <div className="  basis-1/3 h-auto ml-4 bg-slate-100 rounded-xl  shadow-md shadow-black  border-2 border-black">
                            <div className=" flex justify-center flex-col ">
                                <img  className=" pt-4  mx-auto w-1/2  h-1/2 "src="/images/manicon.png" alt="" />
                                <h1 className="   text-2xl font-poppins font-semibold text-center"> Anshuman Tripathi </h1>
                                <p className=" font-poppins text-xs sm:test-sm md:text-base text-center"> I am the student of Lncte.Currently Pursuing B.tech from CSE-DS. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AboutUs;
