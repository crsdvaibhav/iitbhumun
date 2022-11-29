import React from 'react'


export default function TeamCard(props) {
    return (
        <div>
            <h2 className='text-[#189BA5] text-xl '>{props.vertical}  Team</h2>
            <div className='text-center p-2'>
                <p className='p-1 text-lg'>{props.member}</p>
                <p className='p-1 text-lg'>{props.member}</p>
                <p className='p-1 text-lg'>{props.member}</p>
                <p className='p-1 text-lg'>{props.member}</p>
            </div>
        </div>
    )
}