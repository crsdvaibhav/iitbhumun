import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Image from 'next/image';


export default function SecretariatCard(props) {

    return (
        <div className="bg-gray-100 flex flex-wrap flex-direction-row  min-h-screen justify-center items-center h-[253px] w-full rounded-xl ">


            <div className="p-2 justify-center m-auto text-center rounded-xl w-[370px]  ">
                <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[170px]'>

                </div>
                <div className='bg-white h-[200px] justify-center m-auto'>
                    <h2 className="text-lg mb-2 pt-8">{props.name}</h2>
                    <h4 className=" text-sm mb-2 pt-2">{props.position}</h4>

                    <p className="text-lg ">{props.description}</p>

                </div>

            </div>

        </div>
    )
}