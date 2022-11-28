import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer';
import SecretariatCard from '../components/SecretariatCard';
import data from '../data/data.json'

export default function Secretariat() {


    return (
        <div>
            <NavBar navbar={true} />
            <div className='flex '>
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
        </div>
    )
}
