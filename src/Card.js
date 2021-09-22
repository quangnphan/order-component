import React from "react";
import iconMusic from './images/icon-music.svg';
import Background from './images/illustration-hero.svg';
export default function Card(){
    return(
        <div className="card">
            <div className="background">
                <img src={Background} alt="background"></img>
            </div>
            <div className="summary">
                <h3>Order Summary</h3>
                <h4>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</h4>
                <div className="card-plan">
                    <div className="plan">
                        <img src={iconMusic} alt="icon music"></img>
                        <div>
                            Annual Plan<br></br>
                            <span>$59.99/year</span>
                        </div>
                    </div>
                    <div className="change">
                        <a href="#change">Change</a>
                    </div>
                </div>
                <button className="btn">Proceed to Payment</button>
                <a href="#cancel" className="cancel">Cancel Order</a>
            </div>
        </div>
    )
}