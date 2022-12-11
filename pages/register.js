import { useState, useEffect } from 'react';
import SheetDB from 'sheetdb-js';
import Select from 'react-select';
import Link from 'next/link';
import {
  Alert,
  Button,
  Input,
  Radio,
  Textarea,
} from '@material-tailwind/react';

export default function Register() {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [check, setCheck] = useState(false);
  const [member, setMember] = useState(false);
  const [solo, setSolo] = useState(true);

  const [formInput, setFormInput] = useState({
    name: '',
    age: 0,
    gender: '',
    city: '',
    country: '',
    name_of_Institution: '',
    mobile: '',
    email: '',
    referral: '',
    no_of_MUNs: '',
    previous_MUNs: '',
    awards: '',
    committees1: '',
    committees2: '',
    committees3: '',
    countries1_1: '',
    countries1_2: '',
    countries1_3: '',
    countries2_1: '',
    countries2_2: '',
    countries2_3: '',
    countries3_1: '',
    countries3_2: '',
    countries3_3: '',
  });
  const [formInput2, setFormInput2] = useState({
    name: '',
    age: 0,
    gender: '',
    city: '',
    country: '',
    name_of_Institution: '',
    mobile: '',
    email: '',
    referral: '',
    no_of_MUNs: '',
    previous_MUNs: '',
    awards: '',
    committees1: '',
    committees2: '',
    committees3: '',
    countries1_1: '',
    countries1_2: '',
    countries1_3: '',
    countries2_1: '',
    countries2_2: '',
    countries2_3: '',
    countries3_1: '',
    countries3_2: '',
    countries3_3: '',
  });

  const handleSubmit = (event) => {
    SheetDB.write('https://sheetdb.io/api/v1/yz9189tqxczi6', {
      sheet: 'Sheet1',
      data: formInput,
    })
      .then((result) => {
        event.preventDefault();
        event.target.reset();
      })
      .catch((err) => console.log(err));

    SheetDB.write('https://sheetdb.io/api/v1/yz9189tqxczi6', {
      sheet: 'Sheet2',
      data: formInput2,
    })
      .then((result) => {
        event.preventDefault();
        event.target.reset();
      })
      .catch((err) => console.log(err));

    setFormInput({
      name: '',
      age: 0,
      gender: '',
      city: '',
      country: '',
      name_of_Institution: '',
      mobile: '',
      email: '',
      referral: '',
      no_of_MUNs: '',
      previous_MUNs: '',
      awards: '',
      committees1: '',
      committees2: '',
      committees3: '',
      countries1_1: '',
      countries1_2: '',
      countries1_3: '',
      countries2_1: '',
      countries2_2: '',
      countries2_3: '',
      countries3_1: '',
      countries3_2: '',
      countries3_3: '',
    });
    setFormInput2({
      name: '',
      age: 0,
      gender: '',
      city: '',
      country: '',
      name_of_Institution: '',
      mobile: '',
      email: '',
      referral: '',
      no_of_MUNs: '',
      previous_MUNs: '',
      awards: '',
      committees1: '',
      committees2: '',
      committees3: '',
      countries1_1: '',
      countries1_2: '',
      countries1_3: '',
      countries2_1: '',
      countries2_2: '',
      countries2_3: '',
      countries3_1: '',
      countries3_2: '',
      countries3_3: '',
    });
  };

  const handleCheck = (e) => {
    console.log(formInput);
    console.log(error);
    if (!error) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  const handleCheck2 = (e) => {
    console.log(formInput2);
    console.log(error);
    if (!error) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleMember = (e) => { };

  useEffect(() => {
    if (
      formInput.name === '' ||
      formInput.age === '0' ||
      formInput.gender === '' ||
      formInput.city === '' ||
      formInput.country === '' ||
      formInput.name_of_Institution === '' ||
      formInput.mobile === '' ||
      formInput.email === '' ||
      formInput.mobile === '' ||
      formInput.no_of_MUNs === ''
    ) {
      setError(true);
    } else {
      setError(false);
    }
    if (member) {
      if (
        formInput2.name === '' ||
        formInput2.age === '0' ||
        formInput2.gender === '' ||
        formInput2.city === '' ||
        formInput2.country === '' ||
        formInput2.name_of_Institution === '' ||
        formInput2.mobile === '' ||
        formInput2.email === '' ||
        formInput2.mobile === '' ||
        formInput2.no_of_MUNs === ''
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }, [formInput, formInput2, member]);

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

  console.log(solo);
  return (
    <div className="bg-[url(../public/images/BG-1.svg)] h-full">
      <div className="pb-12">
        <div className={check ? 'hidden' : 'block'}>
          <div className="place-items-center flex justify-center font-semibold text-center py-12">
            <div
              onClick={() => {
                setCheck(false);
              }}
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div
              onClick={handleCheck}
              className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  "
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
              3
            </div>
          </div>

          <div className="lg:w-3/4 mx-auto w-5/6 flex flex-col items-center justify-between space-y-10">
            <div className=" bg-[url(../public/images/Group-242.svg)] bg-no-repeat bg-center bg-auto bg-origin-padding grid grid-cols-1 place-items-center gap-20 lg:grid lg:grid-cols-2">
              <div className="flex flex-col space-y-8 w-full">
                <Input
                  size="lg"
                  label="Name *"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, name: e.target.value })
                  }
                />
                <Input
                  size="lg"
                  color="cyan"
                  label="Age *"
                  type="number"
                  onChange={(e) =>
                    setFormInput({ ...formInput, age: e.target.value })
                  }
                />
                <div className="mb-8">
                  <label className="text-[#189BA5] font-normal flex text-base mb-2">
                    Gender *
                  </label>
                  <div
                    className="flex gap-10"
                    onChange={(e) =>
                      setFormInput({ ...formInput, gender: e.target.value })
                    }
                  >
                    <Radio
                      name="type"
                      value="Female"
                      label="Female"
                      color="cyan"
                    />
                    <Radio name="type" label="Male" color="cyan" value="Male" />
                    <Radio
                      name="type"
                      value="Prefer_not_to_say"
                      label="Prefer not to say"
                      defaultChecked
                      color="cyan"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3">
                  <Input
                    size="lg"
                    label="City *"
                    onChange={(e) =>
                      setFormInput({ ...formInput, city: e.target.value })
                    }
                  />
                  <Input
                    size="lg"
                    label="Country *"
                    onChange={(e) =>
                      setFormInput({ ...formInput, country: e.target.value })
                    }
                  />
                </div>
                <Input
                  size="lg"
                  label="Name of Institution *"
                  color="cyan"
                  type="text"
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      name_of_Institution: e.target.value,
                    })
                  }
                />
                <Input
                  size="lg"
                  label="Mobile No. *"
                  type=""
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, mobile: e.target.value })
                  }
                />
                <Input
                  size="lg"
                  label="E-mail *"
                  type="email"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-8 w-full">
                <Input
                  label="Refferal Code (if any)"
                  size="lg"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, referral: e.target.value })
                  }
                />
                <div className="text-lg text-[#189BA5] font-semibold">
                  Details of previous MUNs
                </div>
                <Input
                  size="lg"
                  label="No. of MUNs *"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, no_of_MUNs: e.target.value })
                  }
                />
                <Input
                  size="lg"
                  label="List of Previous MUNs"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      previous_MUNs: e.target.value,
                    })
                  }
                />
                <Textarea
                  label="Awards in Previous MUNs (if any)"
                  size="lg"
                  color="cyan"
                  onChange={(e) =>
                    setFormInput({ ...formInput, awards: e.target.value })
                  }
                />
                {error && solo == true && (
                  <Alert
                    color="red"
                    variant="outlined"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    }
                  >
                    Please fill all the required fields
                  </Alert>
                )}
                <div className="flex flex-col items-center w-full">
                  {solo == true &&
                    (
                      <div
                        className={`flex flex-row justify-between items-center space-x-5 w-full ${solo ? 'block' : 'hidden'
                          }`}
                      >
                        <Link href="/home">
                          <Button color="red" className="w-full" variant="outlined">
                            Cancel
                          </Button>
                        </Link>

                        <Button
                          color="cyan"
                          className="w-full"
                          variant="outlined"
                          onClick={handleCheck}
                        >
                          Next
                        </Button>
                      </div>
                    )
                  }
                  {
                    solo == false && (
                      <div
                        className={`flex flex-row justify-between items-center space-x-5 w-full ${solo ? 'hidden' : 'block'
                          }`}
                      >
                        <Button
                          className="w-full"
                          variant="outlined"
                          color="cyan"
                          onClick={() => {
                            setSolo(true)
                            setMember(true)
                          }
                          }
                        >
                          Solo
                        </Button>
                      </div>
                    )
                  }
                  {solo == true && (
                    <div
                      className={`flex flex-row justify-between items-center space-x-5 w-full ${solo ? 'block' : 'hidden'
                        }`}
                    >
                      <Button
                        className="w-full"
                        variant="outlined"
                        color="cyan"
                        onClick={() => {
                          setSolo(false)
                          setMember(true);
                        }
                        }
                      >
                        Team
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`${member && solo == false ? 'block' : 'hidden'}`}>
              <h1 className="text-2xl font-semibold">Team Member</h1>
              <div className=" bg-[url(../public/images/Group-242.svg)] bg-no-repeat bg-center bg-auto bg-origin-padding grid grid-cols-1 place-items-center gap-20 lg:grid lg:grid-cols-2">
                <div className="flex flex-col space-y-8 w-full">
                  <Input
                    size="lg"
                    label="Name *"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, name: e.target.value })
                    }
                  />
                  <Input
                    size="lg"
                    color="cyan"
                    label="Age *"
                    type="number"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, age: e.target.value })
                    }
                  />
                  <div className="mb-8">
                    <label className="text-[#189BA5] font-normal flex text-base mb-2">
                      Gender *
                    </label>
                    <div
                      className="flex gap-10"
                      onChange={(e) =>
                        setFormInput({ ...formInput2, gender: e.target.value })
                      }
                    >
                      <Radio
                        name="type"
                        value="Female"
                        label="Female"
                        color="cyan"
                      />
                      <Radio
                        name="type"
                        label="Male"
                        color="cyan"
                        value="Male"
                      />
                      <Radio
                        name="type"
                        value="Prefer_not_to_say"
                        label="Prefer not to say"
                        defaultChecked
                        color="cyan"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3">
                    <Input
                      size="lg"
                      label="City *"
                      onChange={(e) =>
                        setFormInput({ ...formInput2, city: e.target.value })
                      }
                    />
                    <Input
                      size="lg"
                      label="Country *"
                      onChange={(e) =>
                        setFormInput({ ...formInput2, country: e.target.value })
                      }
                    />
                  </div>
                  <Input
                    size="lg"
                    label="Name of Institution *"
                    color="cyan"
                    type="text"
                    onChange={(e) =>
                      setFormInput({
                        ...formInput2,
                        name_of_Institution: e.target.value,
                      })
                    }
                  />
                  <Input
                    size="lg"
                    label="Mobile No. *"
                    type=""
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, mobile: e.target.value })
                    }
                  />
                  <Input
                    size="lg"
                    label="E-mail *"
                    type="email"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-8 w-full">
                  <Input
                    label="Refferal Code (if any)"
                    size="lg"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, referral: e.target.value })
                    }
                  />
                  <div className="text-lg text-[#189BA5] font-semibold">
                    Details of previous MUNs
                  </div>
                  <Input
                    size="lg"
                    label="No. of MUNs *"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, no_of_MUNs: e.target.value })
                    }
                  />
                  <Input
                    size="lg"
                    label="List of Previous MUNs"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({
                        ...formInput2,
                        previous_MUNs: e.target.value,
                      })
                    }
                  />
                  <Textarea
                    label="Awards in Previous MUNs (if any)"
                    size="lg"
                    color="cyan"
                    onChange={(e) =>
                      setFormInput({ ...formInput2, awards: e.target.value })
                    }
                  />
                  {error && (
                    <Alert
                      color="red"
                      variant="outlined"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      }
                    >
                      Please fill all the required fields
                    </Alert>
                  )}
                  <div className="flex flex-row justify-between items-center space-x-5">
                    <Link href="/home">
                      <Button color="red" className="`w-full" variant="outlined ${
                      solo ?'hidden' : 'block'  
                    }`">
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      color="cyan"
                      className="w-full"
                      variant="outlined"
                      onClick={handleCheck2}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={check ? 'block' : 'hidden'}>
          <div className="place-items-center flex justify-center font-semibold text-center  pt-12 mb-12 ">
            <div
              onClick={() => {
                setCheck(false);
              }}
              className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div
              onClick={() => {
                setCheck(true);
              }}
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
              3
            </div>
          </div>

          <div className="grid grid-flow-col grid-cols-3 items-center py-12 m-auto justify-items-center">
            <div>
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO I
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <Select
                  options={committees}
                  value={committees.value}
                  onChange={(e) =>
                    setFormInput({ ...formInput, committees1: e.value })
                  }
                />
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries1_1: e.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries1_2: e.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries1_3: e.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO II
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <Select
                  options={committees}
                  value={committees.value}
                  onChange={(e) =>
                    setFormInput({ ...formInput, committees2: e.value })
                  }
                />
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries2_1: e.value })
                    }
                  />
                </div>
              </div>{' '}
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries2_2: e.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries2_3: e.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO III
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <Select
                  options={committees}
                  value={committees.value}
                  onChange={(e) =>
                    setFormInput({ ...formInput, committees3: e.value })
                  }
                />
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries3_1: e.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries3_2: e.value })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Select a country
                  </p>
                  <Select
                    options={countries}
                    value={countries.value}
                    onChange={(e) =>
                      setFormInput({ ...formInput, countries3_3: e.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-auto">
            <button
              onClick={() => {
                setCheck(false);
              }}
              className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2"
            >
              Back
            </button>
            <Link href="thankyou">
              {/* <button className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2">
                <a onClick={handleSubmit}>Register!</a>
              </button> */}
              <Button onClick={handleSubmit} className="px-10">
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
