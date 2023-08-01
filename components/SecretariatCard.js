import React from 'react'
import Image from 'next/image'


export default function SecretariatCard(props) {

    return (
        <div className="">
            <div className="p-2 w-[390px] rounded ">

                <div className=' relative bg-gradient-to-t from-yellow-600 h-[390px] rounded-t-xl'>
                    <Image className='absolute  '
                        src={props.src}
                        width={650}
                        height={680}
                        alt="char images"
                    />
                </div>

                <div className='bg-white h-[180px] justify-center m-auto rounded-b-xl text-center'>
                    <h2 className="text-3xl mt-2 mb-1 pt-6 font-bold">{props.name}</h2>
                    <h4 className="mb-2 mt-8 text-3xl text-[#189BA5]">{props.position}</h4>

                </div>

            </div>
        </div>
    )
}