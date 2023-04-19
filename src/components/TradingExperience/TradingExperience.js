import tradingpage from "../../img/trading-page.svg";
import advorders from "../../img/adv-orders.svg";
import onchainengine from "../../img/onchain-engine.svg";
import robustoracle from "../../img/robust-oracle.svg";
import socialprofit from "../../img/social-profit.svg";
import lowfees from "../../img/low-fees.svg";
import multicollateral from "../../img/multi-collateral.svg";
import positionconfirmation from "../../img/position-confirmation.png";
import TP_SL from "../../img/tp-sl.png";

import "./TradingExperience.css";

export function TradingExperience() {

    return(
        <div className="trader-section">

            <div className="title">
                <div>Legendary Trading Experience</div>
            </div>

            <div className="trading-terminal">
                <img src={tradingpage} alt="trading terminal" />
            </div>

            <div className="caption">
                {/* <span> */}
                Built for traders, our platform offers zero trading fees and low funding fees, advanced order management, and robust oracle pricing - all
                on-chain. Experience trading like a legend.
                {/* </span> */}
            </div>

            <div className="feature-list">
                <div className="feature">
                    <span><img src={lowfees} alt="low fees" />
                    Low funding Fees.</span> Charging the lowest funding fees to all position in loss irrespective of size and duration.
                </div>
                <div className="feature">
                    <span><img src={onchainengine} alt="onchain engine" />
                    On-chain Engine.</span> Trade directly from your wallet on-chain securely.
                </div>
                <div className="feature">
                    <span><img src={multicollateral} alt="multi collateral" />
                    Multi-Collateral.</span> Open position with any token of choice listed in the pool. as collateral.
                </div>
                <div className="feature">
                    <span><img src={robustoracle} alt="robust oracle" />
                    Robust Oracle Pricing.</span> Built with powerful outlier detection mechanism for resilient pricing updates.
                </div>
                <div className="feature">
                    <span><img src={socialprofit} alt="social profit" />
                    Socialized Profit Model.</span> Sharing profits with your counterparties, making them a winner, traders a hero.
                </div>
                <div className="feature">
                    <span><img src={advorders} alt="advanced orders" />
                    Advanced Order Types.</span> Manage your positions and risks with limit, take-profit, and stop-loss order types.
                </div>
            </div>

            <div className="image-feature-list">
                <div className="image-feature">
                    <div className="title">
                        Zero trading fees
                    </div>
                    <div className="caption">
                        FXDX charges 0 trading fees to all traders, irrespective of size, asset or direction.
                    </div>

                    <div className="image">
                        <img src={positionconfirmation} alt="position confirmation" />
                    </div>
                </div>

                <div className="image-feature">
                    <div className="title">
                        Superior trade management
                    </div>
                    <div className="caption">
                        Manage your positions and risks with limit, take-profit, and stop-loss order types. More order types to come by.
                    </div>

                    <div className="image">
                        <img src={TP_SL} alt="take profit" />
                    </div>
                </div>
            </div>
             
             
        </div>
    )

}