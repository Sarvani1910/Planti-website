import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../Assets/user(1).jpj'
import user2 from '../../../Assets/user(3).png'
import user3 from '../../../Assets/user(4).png'

const Activity = () => {
    return (
        <div className='activitySection'>
            <div className='heading flex'>
                <h1>Reset Activity</h1>
                <button className='btn flex'>
                    See All  
                    <BsArrowRightShort className='icon' />
                </button>
            </div>

            <div className='secContainer grid'>
                <div className='singleCustomer flex'>
                    <img src={user} alt="Customer" />
                    <div className='customerDetails'>
                        <span className='name'>Balu</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className='duration'>
                        2 min ago
                    </div>
                </div>

                <div className='singleCustomer flex'>
                    <img src={user2} alt="Customer" />
                    <div className='customerDetails'>
                        <span className='name'>Geetha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className='duration'>
                        5 min ago
                    </div>
                </div>

                <div className='singleCustomer flex'>
                    <img src={user3} alt="Customer" />
                    <div className='customerDetails'>
                        <span className='name'>Hema</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className='duration'>
                        10 min ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity