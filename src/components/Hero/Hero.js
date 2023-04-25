import { useEffect } from 'react';
import "./Hero.css";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillThunderbolt } from 'react-icons/ai';
import tradingpage from "../../img/trading-page.svg";

export function Hero() {

    // useEffect(() => {
    //     const rootStyle = document.documentElement.style;
      
    //     let theta = 0;
    //     const intervalId = setInterval(() => {
    //       theta++;
          
    //       const x = Math.cos(theta * Math.PI / 180);
    //       const y = Math.sin(theta * Math.PI / 180);
          
    //       const offsetX = `${x * 100}px`;
    //       const offsetY = `${y * 100}px`;
          
    //       rootStyle.setProperty('--border-offset-x', offsetX);
    //       rootStyle.setProperty('--border-offset-y', offsetY);
    //     }, 25);
    
    //     return () => clearInterval(intervalId);
    //   }, []);


    return(
        <div className="hero-section">
            <div className="introduction">
                <AiFillThunderbolt color="#288BFF"/>
                <span>Introducing FXDX</span>
                <HiOutlineArrowRight />
            </div>

            <div className="hero">
                <h1 className="trading">Trading</h1>
                <h1 className="supercharged">Supercharged</h1>
                <h1 className="supercharged small">Supercharged</h1>
                {/* <h1 className="supercharged small">Charged</h1> */}
            </div>

            <div className="hero-caption">
                {/* <span> */}
                    Maximize Your Trading Profits with High-Speed Execution, No Trading Fees, 
                    and Competitive Pricing for a Legendary Trading Experience.
                {/* </span> */}
            </div>

            <div className="links">
                <a target="_blank" rel="noreferrer" href="https://testnet.fxdx.exchange/">Launch App</a>
                <a target="_blank" rel="noreferrer" href="https://fxdx.readthedocs.io/en/latest/introduction.html">Docs</a>
            </div>

            <div className="trading-terminal">
                <img src={tradingpage} alt="trading terminal" />
            </div>

            {/* <div class="container">
                <div class="shiny glow"></div>

                <div class="shiny border"></div>

                <div class="content">
                <img src={tradingpage} alt="trading terminal" />

                </div>
            </div> */}


        </div>
    )

}