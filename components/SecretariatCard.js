import React from 'react'
import Image from 'next/image'


export default function SecretariatCard(props) {

    return (
        <div className="">
            <div className="p-2   w-[350px] ">

                <div className=' relative bg-[#F5CE3F] h-[140px] rounded-t-xl'>
                    <Image className='absolute '
                        src="/images/image-14.svg"
                        width={850}
                        height={380}
                        alt="char images"
                    />
                </div>

                <div className='bg-white h-[180px] justify-center m-auto rounded-b-xl text-center'>
                    <h2 className="text-2xl mb-2 pt-6 font-bold">{props.name}</h2>
                    <h4 className="mb-2 mt-10 text-2xl">{props.position}</h4>

                    {/* <p className="text-lg  pt-4">{props.description}</p> */}

                </div>

            </div>
        </div>
    )
}