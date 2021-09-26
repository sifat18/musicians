import React, { useEffect, useState } from 'react';
import Booked from '../Booked/Booked';
import Singer from '../Singers/Singer';
import './HirePage.css';
const HirePage = () => {
    // delcaring state variables
    const [singers, setsingers] = useState([]);
    const [booked, setbooked] = useState([]);
    // loading data
    useEffect(() => {
        fetch("./musician.JSON").then(res => res.json()).then(data => setsingers(data))
    }, [])
    // adding to list event
    const handleclick = (e, id) => {
        const musician = singers.find(singer => singer.key === id)
        musician.disabled = true;
        const list = [...booked, musician];
        setbooked(list);
        console.log(e);
    }
    // total calculation function
    const compute = () => {
        let sum = 0;
        booked.forEach(musician => {
            sum += musician.hiringCost;
        })
        return sum;
    }
    return (

        <div className='hirepage'>
            {/* available musicians */}
            <div className='singers'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {singers.map(singer => <Singer key={singer.key} musician={singer} click={handleclick}></Singer>)}
                </div></div>
            {/* booked musicians */}
            <div className='booklist'>
                <div className=' w-75  ms-5 mb-5 bg'>
                    <p className='fw-bold border-bottom mx-4 pb-1 text-success'>Total Booked: {booked.length}</p>
                    <p className='fw-bold border-bottom mx-4 mb-5 pb-1 text-success'>Total Cost: $ {compute()}</p>
                    {booked.map(list => <Booked key={list.key} hired={list} ></Booked>)}

                </div>
            </div>

        </div>
    );
};

export default HirePage;