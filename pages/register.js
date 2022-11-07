import { useState, useEffect } from "react";
import Select from 'react-select'
import Link from "next/link";

export default function Register() {
    const [user, setUser] = useState();

    const [check, setCheck] = useState(false);

    const committees = [
        { value: 'commitee1', label: 'Committee 1' },
        { value: 'commitee2', label: 'Committee 2' },
        { value: 'committee3', label: 'Committee 3' }
      ]

    const countries = [
        { value: 'india', label: 'India' },
        { value: 'uk', label: 'UK' },
        { value: 'usa', label: 'USA' }
      ]

    return (
        <div className="pb-12 w-full bg-[url(../public/images/BG-1.svg)]">
            <div className={check ? "hidden" : "block"}>
                <div className="place-items-center flex justify-center font-semibold text-center  pt-12 mb-12 ">
                    <div className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full ">
                        1
                    </div>
                    <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
                    <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
                        2
                    </div>
                    <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
                    <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
                        3
                    </div>
                </div>

                <div
                    className=" bg-[url(../public/images/Group-242.svg)] bg-no-repeat bg-center bg-auto bg-origin-padding grid grid-cols-1 place-items-center px-10  lg:grid lg:grid-cols-2"
                >
                    <div>
                        <div>
                            <label className="flex  font-medium text-[#189BA5] ">
                                Name
                            </label>
                            <input
                                name="name"
                                placeholder=""
                                className="border border-[#189BA5] rounded-lg w-96 h-10 mb-8"
                            ></input>
                        </div>
                        <div>
                            <label className=" flex font-medium text-[#189BA5]">
                                Age
                            </label>
                            <input
                                type="number"
                                name="age"
                                placeholder=""
                                className="border border-[#189BA5] rounded-lg w-36 h-10 mb-8"
                            ></input>
                        </div>
                        <div className="mb-8">
                            <label className="text-[#189BA5] font-normal flex text-base mb-2">
                                Gender
                            </label>
                            <input
                                type="radio"
                                value="Female"
                                name="gender"
                                className="w-3 h-3"
                            />
                            <label className=" font-medium text-[#189BA5] text-sm mr-4">
                                Female
                            </label>
                            <input
                                type="radio"
                                value="Male"
                                name="gender"
                                className="w-3 h-3"
                            />
                            <label className=" font-medium text-[#189BA5] text-sm mr-4">
                                Male
                            </label>
                            <input
                                type="radio"
                                value="Prefer Not to Say"
                                name="gender"
                                className="w-3 h-3"
                            />
                            <label className=" font-medium text-[#189BA5] text-sm mr-4">
                                Prefer Not to Say
                            </label>
                        </div>
                        <div className="grid grid-cols-2">
                            <label className="  font-medium text-[#189BA5]">
                                City
                            </label>
                            <label className=" font-medium text-[#189BA5]">
                                Country
                            </label>
                            <input
                                name="city"
                                type="text"
                                placeholder=""
                                className="mb-8 w-44 h-10 border border-[#189BA5] rounded-lg"
                            ></input>
                            <input
                                name="country"
                                type="text"
                                placeholder=""
                                className="w-44 h-10 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex">
                                Name of Institution
                            </label>
                            <input
                                name="institution"
                                type="text"
                                placeholder=""
                                className="mb-8 h-10 w-96 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex">
                                Mobile No.
                            </label>
                            <input
                                name="city"
                                type="number"
                                placeholder=""
                                className="mb-8 h-10 w-64 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex ">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder=""
                                className=" h-10 w-96 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className=" font-medium text-[#189BA5] font-500">
                                Refferal Code &#123; If Any &#125;
                            </label>
                            <br />
                            <input
                                name="email"
                                type="email"
                                placeholder=""
                                className="mb-6 h-10 w-96 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div className="mb-8 text-[#189BA5] font-bold">
                            Details of previous MUNs
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex">
                                No. of MUNs
                            </label>
                            <input
                                name="no_of_muns"
                                type="number"
                                placeholder=""
                                className="mb-6 h-10 w-64  border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex">
                                List of Previous MUNs
                            </label>
                            <input
                                name="list_of_muns"
                                type="text"
                                placeholder=""
                                className="mb-6 h-24 w-96 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div>
                            <label className=" font-medium text-[#189BA5] flex">
                                Awards in Previous MUNs &#123; If Any &#125;
                            </label>
                            <input
                                name="awards"
                                type="text"
                                placeholder=""
                                className="mb-6 h-24 w-96 border border-[#189BA5] rounded-lg"
                            ></input>
                        </div>
                        <div className="mb-8 flex  w-96 ">
                            <span className="font-bold text-sm">NOTE:</span>
                            <span className="font-xs">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Consequatur, dolores.
                            </span>
                        </div>
                        <div>
                            <button className="border border-[#1A1E21] rounded-lg w-36 h-11 mr-4">
                                <span className="font-semibold text-lg ">
                                    Cancel
                                </span>
                            </button>
                            <button className="border bg-[#1A1E21] border-[#1A1E21] rounded-lg w-32 h-11 ml-4" onClick={()=>{setCheck(true)}}>
                                <span className="font-semibold text-lg  text-[#FFFFFF]">
                                    Next
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={check ? "block" : "hidden"}>
                <div className="place-items-center flex justify-center font-semibold text-center  pt-12 mb-12 ">
                    <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
                        1
                    </div>
                    <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
                    <div className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full ">
                        2
                    </div>
                    <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
                    <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
                        3
                    </div>
                </div>
                <div className="flex flex-col items-center py-12">
                    <div className="w-72 pb-4">
                        <p className="font-medium text-[#189BA5] flex py-2">Select a committee</p>
                        <Select options={committees}/>
                    </div>
                    <div>
                        <div className="w-72 pb-4">
                            <p className="font-medium text-[#189BA5] flex py-2">Select a country</p>
                            <Select options={countries}/>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>{setCheck(false)}} className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2">Back</button>
                        <Link href="thankyou"><button className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2"><a>Register!</a></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
