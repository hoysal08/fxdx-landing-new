import fxdxtokenicon from "../../img/fxdx-token-icon.svg";
import btctokenicon from "../../img/btc-token-icon.svg";
import ethtokenicon from "../../img/eth-token-icon.svg";
import usdctokenicon from "../../img/usdc-token-icon.svg";
import usdttokenicon from "../../img/usdt-token-icon.svg";
import roadmap from "../../img/roadmap.svg";
import roadmapCropped from "../../img/roadmapCropped.png";
import React, { useState, useEffect, useRef, useCallback } from "react";
import singlesidedliquidity from "../../img/single-sided-liquidity.svg";
import liquidityhistory from "../../img/liquidity-history.svg";
import rewardhistory from "../../img/reward-history.svg";
import stablerewards from "../../img/stable-rewards.svg";
import rewardredemption from "../../img/reward-redemption.svg";
import liquiditymanager from "../../img/liquidity-manager.png";
import walletmoneyicon from "../../img/wallet-money-icon.svg";
import drophumidityicon from "../../img/drop-humidity-icon.svg";
import propertymortgageicon from "../../img/property-mortgage-icon.svg";
import Group from "../../img/Group.svg";

import "./PreFooter.css";
import { isValidEmail } from "../../utils/emailValidation";

export function PreFooter() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send email using the email state value
    console.log(`Sending email to ${email}`);
    setEmail("");
  };

  const getServerBaseUrl=()=>{
        if(process.env.REACT_APP_BACKEND_URL){
          return process.env.REACT_APP_BACKEND_URL
        }
  }

  const subscribeEmail = useCallback(() => {
    const isValid = isValidEmail(email);

    if (isValid) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email || "" }),
      };

      fetch(`${getServerBaseUrl()}/emails/subscribe`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            // helperToast.error("Something went wrong. Please try again.");
            return;
          }

          // helperToast.success("Email was subscribed successfully");
        })
        .catch((err) => {
          // helperToast.error("Something went wrong. Please try again.");
          console.log(err);
        });
    } else {
      // helperToast.error("Invalid Email");
    }
  }, [email]);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollHandler = (e) => {
      if (scrollRef.current.contains(e.target)) {
        const isScrollingLeft = e.deltaY < 0;
        const container = scrollRef.current;
        const isEndReached = isScrollingLeft
          ? container.scrollLeft === 0
          : container.scrollLeft + container.clientWidth >=
            container.scrollWidth;

        if (!isEndReached) {
          container.scrollLeft += e.deltaY;
          e.preventDefault();
        } else {
          window.scrollBy({
            top: 0,
            left: isScrollingLeft ? -100 : 100,
            behavior: "smooth",
          });
        }
      }
    };

    scrollRef.current.addEventListener("wheel", scrollHandler, {
      passive: false,
    });

    return () => {
      scrollRef.current.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  return (
    <div className="pre-footer-section">
      <div className="technical-analysis">
        <div className="title">Well executed</div>
        <div className="title">technical analysis</div>
      </div>

      <div className="token-list">
        <img src={btctokenicon} alt="btc token icon" />
        <img src={ethtokenicon} alt="eth token icon" />
        <img
          src={fxdxtokenicon}
          alt="fxdx token icon"
          className="fxdxtokenicon"
        />
        <img src={usdttokenicon} alt="usdt token icon" />
        <img src={usdctokenicon} alt="usdc token icon" />
      </div>

      <div className="feature-list">
        <div className="feature">
          <span>
            <img src={drophumidityicon} alt="Diversified Listings" />
            Diversified Listings.
          </span>
          Offering blue chip assets for our traders with deep liquidity.
        </div>
        <div className="feature">
          <span>
            <img src={propertymortgageicon} alt="Robust Risk Control" />
            Robust Risk Control.
          </span>
          Systematically managed on-chain fee model depending market conditions.
        </div>
        <div className="feature">
          <span>
            <img src={Group} alt="Powerful Oracle" />
            Powerful Oracle.
          </span>
          Built-in with battle tested outlier detection, our oracle delivers
          best possible pricing.
        </div>
        <div className="feature">
          <span>
            <img src={walletmoneyicon} alt="Multi-asset Structure" />
            Multi-asset Structure.
          </span>
          Allowing anyone to supply collateral or liquidity with any asset of
          their choice.
        </div>
      </div>

      <div className="new-user-reward">
        <p className="title-small">Ready to start trading cryptocurrency?</p>
        <p className="info-big">
          New users can earn up to $50 in crypto rewards.
        </p>
      </div>

      <div className="new-user-reward-mobile">
        <p className="title-small">Ready to start?</p>
        <p className="info-big">Earn up to $50 in crypto rewards.</p>
      </div>

      <div className="email-subsciption">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e)=>handleEmailChange(e)}
        />
        <button className="email-btn" onClick={(e)=>handleSubmit(e)}>Get Started</button>
      </div>

      <div className="email-subsciption-mobile">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e)=>handleEmailChange(e)}
        />
        <button className="email-btn" onClick={(e)=>handleSubmit(e)}>Get Started</button>
      </div>

      <div className="roadmap-title">Roadmap</div>

      <div className="roadmap-caption">
        Building for an exceptional user experience, one step at a time.
      </div>

      <section className="scroll-roadmap-body section" ref={scrollRef}>
        <span className={`scroll-roadmap-image-container`}>
          <img src={roadmap} alt="roadmap" className="scroll-roadmap-image" />
        </span>
      </section>
    </div>
  );
}