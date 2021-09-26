import React from 'react';
import './Booked.css'
const Booked = (props) => {
    const { img, name } = props.hired;
    return (
        // displaying booked items
        <div className="d-flex justify-content-between bg-list text-center mb-3 w-75" >
            <p><img className='' src={img} alt="100x100" width='120' height='150' /></p>
            <p className='text-white mt-5 mx-5'>{name}</p>
        </div>
    );
};

export default Booked;