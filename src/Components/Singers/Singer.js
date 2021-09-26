import React from 'react';
import './Singer.css';
// react font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';


const Singer = (props) => {
    // setting icon in a variable
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const { key, category, star, name, hiringCost, age, fanbase, img, albums } = props.musician
    const disable = !props.musician.disabled ? false : props.musician.disabled;

    return (
        <div className="col">
            <div className="card  card-img">
                <img src={img} className="px-5 mx-5 w-75 card-img-top rounded-circle mt-3" alt="100x100" height='150' />
                {/* diplaying data */}
                <div className="card-body">
                    <h5 className="card-title text-center pb-2 text-white fw-bold border-bottom">NAME: {name}</h5>
                    <p className="card-text text-center  pb-2 text-white border-bottom"><span className="fw-bold fs-5">AGE: {age}</span></p>
                    <p className="card-text text-center  pb-2 text-white border-bottom"><span className="fw-bold fs-5">CATEGORY: {category}</span></p>
                    <p className="card-text text-center  pb-2 text-white border-bottom"><span className="fw-bold fs-5">APPOINTMENT-FEE: ${hiringCost}</span></p>
                    <p className="card-text text-center  pb-2 text-white border-bottom"><span className="fw-bold fs-5">FANS: {fanbase}</span></p>
                    <p className="card-text text-center  pb-2 text-white border-bottom"><span className="fw-bold fs-5">ALBUMS: {albums}</span></p>
                    <p className='star border-bottom text-center'><span> Rating:</span> <Rating initialRating={star} emptySymbol='far fa-star' fullSymbol='fas fa-star' readonly></Rating></p>
                    <div className='text-center'>
                        <button className='btn btn-warning fw-bold ' disabled={disable} onClick={(e) => props.click(e, key)}>{element}Add to List</button>
                    </div></div>
            </div>
        </div>

    );
};

export default Singer;