import { useState, useEffect } from 'react';
import Select from 'react-select';
import Link from 'next/link';
import { Button, Input, Radio, Textarea } from '@material-tailwind/react';

export default function Register() {
  const [user, setUser] = useState();
  const [formInput, setFormInput] = useState({ name: '', age: 0 });

  console.log(formInput);

  const handleSubmit = () => {
    SheetDB.write(process.env.NEXT_PUBLIC_SHEETDB_API, {
      sheet: 'Sheet1',
      data: formInput,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));

    setFormInput({ name: '', age: 0 });
  };

  const [check, setCheck] = useState(false);

  const committees = [
    { value: 'commitee1', label: 'Committee 1' },
    { value: 'commitee2', label: 'Committee 2' },
    { value: 'committee3', label: 'Committee 3' },
  ];

  const countries = [
    { value: 'india', label: 'India' },
    { value: 'uk', label: 'UK' },
    { value: 'usa', label: 'USA' },
  ];

  return (
    <div className="pb-12 w-full bg-[url(../public/images/BG-1.svg)]">
      <div className={check ? 'hidden' : 'block'}>
        <div className="place-items-center flex justify-center font-semibold text-center py-12">
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

        <div className=" bg-[url(../public/images/Group-242.svg)] gap-8 bg-no-repeat bg-center bg-auto bg-origin-padding grid grid-cols-1 place-items-center px-10  lg:grid lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <Input
              size="lg"
              label="Name"
              color="cyan"
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
            />
            <Input
              size="lg"
              color="cyan"
              label="Age"
              type="number"
              onChange={(e) =>
                setFormInput({ ...formInput, age: e.target.value })
              }
            />
            <div className="mb-8">
              <label className="text-[#189BA5] font-normal flex text-base mb-2">
                Gender
              </label>
              <div className="flex gap-10">
                <Radio id="html" name="type" label="Female" color="cyan" />
                <Radio
                  id="react"
                  name="type"
                  label="Male"
                  defaultChecked
                  color="cyan"
                />
                <Radio
                  id="react"
                  name="type"
                  label="Prefer not to say"
                  defaultChecked
                  color="cyan"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3">
              <Input size="lg" label="City" />
              <Input size="lg" label="Country" />
            </div>
            <Input size="lg" label="Name of Institution" color="cyan" />
            <Input size="lg" label="Mobile No." type="tel" color="cyan" />
            <Input size="lg" label="E-mail" type="email" color="cyan" />
          </div>
          <div className="flex flex-col space-y-8">
            <Input label="Refferal Code (if any)" size="lg" color="cyan" />
            <div className="text-lg text-[#189BA5] font-semibold">
              Details of previous MUNs
            </div>
            <Input size="lg" label="No. of MUNs" color="cyan" />
            <Input size="lg" label="List of Previous MUNs" color="cyan" />
            <Textarea
              label="Awards in Previoius MUNs (if any)"
              size="lg"
              color="cyan"
            />
            <div className="mb-8 flex items-center space-x-2">
              <span className="font-bold text-sm">NOTE:</span>
              <span className="font-xs text-red-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur, dolores.
              </span>
            </div>
            <div>
              <Button onClick={handleSubmit}>Submit</Button>
              <button className="border border-[#1A1E21] rounded-lg w-36 h-11 mr-4">
                <span className="font-semibold text-lg ">Cancel</span>
              </button>
              <button
                className="border bg-[#1A1E21] border-[#1A1E21] rounded-lg w-32 h-11 ml-4"
                onClick={() => {
                  setCheck(true);
                }}
              >
                <span className="font-semibold text-lg  text-[#FFFFFF]">
                  Next
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={check ? 'block' : 'hidden'}>
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
            <p className="font-medium text-[#189BA5] flex py-2">
              Select a committee
            </p>
            <Select options={committees} />
          </div>
          <div>
            <div className="w-72 pb-4">
              <p className="font-medium text-[#189BA5] flex py-2">
                Select a country
              </p>
              <Select options={countries} />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setCheck(false);
              }}
              className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2"
            >
              Back
            </button>
            <Link href="thankyou">
              <button className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2">
                <a>Register!</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
