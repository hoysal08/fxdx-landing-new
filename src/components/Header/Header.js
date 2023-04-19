import fxdxlogo from "../../img/fxdx-logo.svg";
import oplogo from "../../img/op-logo.svg";
import { SiTwitter, SiDiscord } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import "./Header.css";

export function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <div className="logo">
                    <img src= {fxdxlogo} alt="fxdx-logo" />
                </div>

                <div className="page-links">
                    <p className="active">Home</p>
                    <a target="_blank" rel="noreferrer" href="https://testnet.fxdx.exchange/">Testnet</a>
                    <a target="_blank" rel="noreferrer" href="https://fxdx.readthedocs.io/en/latest/introduction.html">
                        Docs
                    </a>
                </div>
            </div>

            <div className="header-right">
                <a className="socials" target="_blank" rel="noreferrer" href="https://twitter.com/fxdxdex" >
                    <SiTwitter color="white" />
                </a>
                <a className="socials" target="_blank" rel="noreferrer" href="https://t.me/fxdxdex" >
                    <FaTelegramPlane color="white"  />
                </a>
                <a className="socials" target="_blank" rel="noreferrer" href="https://testnet.fxdx.exchange/" >
                    <SiDiscord color="white"  />
                </a>

                {/* <div className="settings-icon">
                    <IoMdSettings />
                </div> */}

                <div className="launch-button">
                    <a target="_blank" rel="noreferrer" href="https://testnet.fxdx.exchange/" >
                        Launch Testnet
                        <img src={oplogo} alt="op-logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}