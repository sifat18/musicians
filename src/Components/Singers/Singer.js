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
    return (
        <div className="col">
            <div className="card  card-img">
                <img src={img} className="px-5 card-img-top rounded-circle mt-3" alt="100x100" height='250' width='50%' />
                {/* diplaying data */}
                <div className="card-body">
                    <h5 className="card-title text-white fw-bold">NAME: {name}</h5>
                    <p className="card-text text-white"><span className="fw-bold">Age:</span> {age}</p>
                    <p className="card-text text-white"><span className="fw-bold">Category:</span> {category}</p>
                    <p className="card-text text-white"><span className="fw-bold">Hiring Fee:</span> ${hiringCost}</p>
                    <p className="card-text text-white"><span className="fw-bold">Fanbase:</span> {fanbase}</p>
                    <p className="card-text text-white"><span className="fw-bold">Albums:</span> {albums}</p>
                    <p className='star'><span> Rating:</span> <Rating initialRating={star} emptySymbol='far fa-star' fullSymbol='fas fa-star' readonly></Rating></p>
                    <div className='text-center'>
                        <button className='btn btn-warning fw-bold ' onClick={(e) => props.click(e, key)}>{element}Add to List</button>
                    </div></div>
            </div>
        </div>

    );
};

export default Singer;