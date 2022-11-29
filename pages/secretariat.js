import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';
import SecretariatCard from '../components/SecretariatCard';
import data from '../data/data.json'
import TeamCard from '../components/TeamCard';


export default function Secretariat() {


    return (
        <div className='bg-gray-100' >
            <NavBar navbar={true} />

            <div className='   text-5xl pt-24 text-center'>
                Senior Secretariat
            </div>

            <div>
                <div className='flex mt-24 w-[1500px] m-auto gap-20 flex-wrap justify-center p-2'>
                    {data.secretariat.map((i) => {
                        return (
                            <SecretariatCard
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                position={i.position}
                                description={i.description}
                            />
                        )

                    })}
                </div>
            </div>\
            <div className='  text-5xl pt-24 text-center'>
                Meet Our Team
            </div>
            <div>
                <div className='flex bg-white mt-24 w-[1500px] m-auto gap-32 flex-wrap justify-center p-10'>
                    {data.vertical.map((i) => {
                        return (
                            <TeamCard
                                key={i.id}
                                id={i.id}
                                vertical={i.vertical}
                                member={i.member}
                            />
                        )

                    })}
                </div>
            </div>

            <Footer />
        </div >
    )
}
