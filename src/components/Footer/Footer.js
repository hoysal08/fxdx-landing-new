import fxdxlogo from "../../img/fxdxlogo.svg";
import { SiTwitter, SiDiscord } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import "./Footer.css";


export function Footer() {
    return(
        <>
            <div className="footer">
                <div className="footer-left">
                    <div className="logo">
                        <img src= {fxdxlogo} alt="fxdx-logo" />
                    </div>
            
                    <div className="socials-container">
                        <a className="socials" target="_blank" rel="noreferrer" href="https://twitter.com/fxdxdex" >
                            <SiTwitter color="white" />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://t.me/fxdxdex" >
                            <FaTelegramPlane color="white"  />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://test.fxdx.exchange/" >
                            <SiDiscord color="white"  />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://test.fxdx.exchange/" >
                            <SiDiscord color="white"  />
                        </a>
                    </div>
            
                    <div className="socials-container">
                        <a className="socials" target="_blank" rel="noreferrer" href="https://twitter.com/fxdxdex" >
                            <SiTwitter color="white" />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://t.me/fxdxdex" >
                            <FaTelegramPlane color="white"  />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://test.fxdx.exchange/" >
                            <SiDiscord color="white"  />
                        </a>
                        <a className="socials" target="_blank" rel="noreferrer" href="https://test.fxdx.exchange/" >
                            <SiDiscord color="white"  />
                        </a>
                    </div>
                </div>
            
                <div className="footer-right">
                    <div className="menu">
                        <div className="title">
                            Menu
                        </div>
            
                        <a target="_blank" rel="noreferrer" href="">Help Cente</a >
                        <a target="_blank" rel="noreferrer" href="">Blog</a >
                    </div>
                </div>
            
                <div className="footer-right">
                    <div className="terms">
                        <div className="title">
                            Terms
                        </div>
            
                        <a target="_blank" rel="noreferrer" href="">Terms Of Use</a >
                        <a target="_blank" rel="noreferrer" href="">Purchase Policy</a >
                    </div>
                </div>
                <div className="footer-right">
                    <div className="products">
                        <div className="title">
                            Products
                        </div>
            
                        <a target="_blank" rel="noreferrer" href="">Mainnet</a >
                        <a target="_blank" rel="noreferrer" href="">Testnet</a >
                        <a target="_blank" rel="noreferrer" href="">Add Liquidity</a >
                    </div>
                </div>
                <div className="footer-right">
                    <div className="docs">
                        <div className="title">
                            Docs
                        </div>
            
                        <a target="_blank" rel="noreferrer" href="">Analytics</a >
                        <a target="_blank" rel="noreferrer" href="">Earn Dashboard</a >
                        <a target="_blank" rel="noreferrer" href="">Whitepaper</a >
                        <a target="_blank" rel="noreferrer" href="">Github</a >
                        <a target="_blank" rel="noreferrer" href="">Fees</a >
                    </div>
                </div>
            </div>
            <div className="all-rights">
                © All rights reserved by FXDX Exchange
            </div>
        </>
    )
}