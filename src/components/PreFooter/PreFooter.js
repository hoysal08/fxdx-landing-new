import fxdxtokenicon from "../../img/fxdx-token-icon.svg";
import btctokenicon from "../../img/btc-token-icon.svg";
import ethtokenicon from "../../img/eth-token-icon.svg";
import usdctokenicon from "../../img/usdc-token-icon.svg";
import usdttokenicon from "../../img/usdt-token-icon.svg";
import roadmap from "../../img/roadmap.svg";
import React, { useState, useEffect, useRef} from 'react';

import "./PreFooter.css";

export function PreFooter() {

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to send email using the email state value
        console.log(`Sending email to ${email}`);
    };    
    


    return(
        <div className="pre-footer-section">
            
            <div className="technical-analysis">
                <div className="title">
                    Well executed technical analysis
                </div>
            </div>

            <div className="token-list">
                <img src={btctokenicon} alt="btc token icon" />
                <img src={ethtokenicon} alt="eth token icon" />
                <img src={fxdxtokenicon} alt="fxdx token icon" className="fxdxtokenicon"/>
                <img src={usdttokenicon} alt="usdt token icon" />
                <img src={usdctokenicon} alt="usdc token icon" />
            </div>

            <div className="caption">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i adipiscing elit. Nunc vulputate libero et velit i 
            </div>

            <div className="email-caption">
                Ready to start trading cryptocurrency?
            </div>

            <div className="email-title">
                New users can earn up to $50 in crypto rewards.
            </div>

            <form onSubmit={handleSubmit} className="email-input">
                <input 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    style={{ 
                        padding: '10px', 
                        borderRadius: '100px',
                        border : "none",
                        fontSize: '1rem',
                        color : "#ABABB9",
                        paddingLeft : "1.5rem",
                        backgroundColor: 'rgb(24 26 35)'
                    }} 
                    placeholder="Enter your email address"
                />
                <button type="submit">Get Started</button>
            </form>

            <div className="roadmap-title">
                Road map
            </div>

            <div className="roadmap-caption">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i adipiscing elit. Nunc vulputate libero et velit i 
            </div>

            <section className="roadmap-body section" >

                <span className="roadmap-image-container">
                    <img src={roadmap} alt="roadmap" className="roadmap-image" />
                </span>

            </section>
            

        </div>
    )

}