import React, { useEffect, useState } from 'react';
import data_product from './data.js'
import { Link } from 'react-router-dom';


const MainPage = () => {
    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value


    const arrowRightClick = () => {
        console.log("right check");
        setCurrentPosition((prevIndex) => prevIndex === 0 ? data_product.length - 1 : prevIndex - 1);
        console.log(currentPosition)
    }

    const arrowLeftClick = () => {
        console.log("left check");
        setCurrentPosition((prevIndex) => prevIndex === data_product.length - 1 ? 0 : prevIndex + 1);
        console.log(currentPosition)
    }
    
    return (
        <div className="main mt-2">
            {/* <h1 className='font-stroke'>

                <marquee><ul className='d-flex'>
                    <li className='list'>DROPING SOON</li>
                    <li className='list'>COMING SOON</li>
                </ul></marquee>

            </h1>

            <h1 className='border-title'>

                <marquee><ul className='d-flex'>
                    <li className='list'>DROPING SOON</li>
                    <li className='list'>COMING SOON</li></ul>
                </marquee>
            </h1> */}

            <div className="container d-flex justify-content-between">
                <span className="number">{currentPosition}/{data_product.length}</span>
                <span className="arrow">
                    <i className="fa fa-caret-left  mx-1" aria-hidden="true" onClick={arrowRightClick}></i>
                    <i className="fa fa-caret-right  mx-1" aria-hidden="true" onClick={arrowLeftClick}></i>
                </span>
            </div>

            <div className="container mt-2 card-show">

                {
                    data_product.slice(currentPosition,currentPosition+4).map((item, index) => {
                        return (
                            <div className="card bg-light d-flex justify-content-between" key={index}>
                                <Link to={`/${item.id}`}><img src={item.image} className="card-img-top img-shoe" alt="..." /></Link>
                                <div className="card-body ">
                                    <h4>{item.name}</h4>
                                    <h4>{item.title}</h4>
                                    <p className="card-text font-10">{item.release}</p>

                                </div>
                                <div className="green text-end">
                                    {item.text}
                                </div>
                            </div>
                        )
                    })
                }




            </div>
        </div>
    )
}

export default MainPage