import tradingpage from "../../img/trading-page.svg";
import freeexit from "../../img/free-exit.svg";
import singlesidedliquidity from "../../img/single-sided-liquidity.svg";
import liquidityhistory from "../../img/liquidity-history.svg";
import rewardhistory from "../../img/reward-history.svg";
import stablerewards from "../../img/stable-rewards.svg";
import rewardredemption from "../../img/reward-redemption.svg";
import liquiditymanager from "../../img/liquidity-manager.png";
import accountpage from "../../img/account-page.gif";
import claimreward from "../../img/claim-reward.gif";

import "./LiquidityExperience.css";

export function LiquidityExperience() {

    return(
        <div className="liquidity-section">

            <div className="title">
                <div>Epic Liquidity Management Experience</div>
            </div>

            <div className="trading-terminal">
                <img src={accountpage} alt="trading terminal" />
            </div>

            <div className="caption">
                {/* <span> */}
                    Investors can earn consistent stable rewards and redeem them easily while keeping track of their reward and liquidity history, and have the freedom of single-sided liquidity and free exit options for their investments on a cryptocurrency platform.
                {/* </span> */}
            </div>
            <div className="feature-list">
                <div className="feature">
                    <span><img src={rewardredemption} alt=" Reward Redemption" />
                    Reward Redemption.</span> Redeem rewards with any token of your choice.
                </div>
                <div className="feature">
                    <span><img src={stablerewards} alt="Stable Rewards" />
                    Stable Rewards.</span> Reward are stored as stable coins that can be claimed anytime.
                </div>
                <div className="feature">
                    <span><img src={rewardhistory} alt="Reward History" />
                    Reward History.</span> Track reward distribution and your claimed history. 
                </div>
                <div className="feature">
                    <span><img src={liquidityhistory} alt=" Liquidity History" />
                    Liquidity History.</span> Track FLP minting and burning for performance evaluation.
                </div>
                <div className="feature">
                    <span><img src={singlesidedliquidity} alt="Single sided liquidity" />
                    Single sided liquidity.</span>  Provide liquidity to FLP pool with any compatible token and earn rewards.
                </div>
                <div className="feature">
                    <span><img src={freeexit} alt="Free Exit" />
                    Free Exit.</span> Withdraw liquidity from FLP pool with any compatible token and get your assets back.
                </div>
            </div>

            <div className="image-feature-list">
                <div className="image-feature">
                    <div className="title">
                        Reward Redemption
                    </div>
                    <div className="caption">
                        Redeem your rewards with any token of the FLP pool.
                    </div>

                    <div className="image">
                        <img src={claimreward} alt="position confirmation" />
                    </div>
                </div>

                <div className="image-feature">
                    <div className="title">
                        Supervision of liquidity management
                    </div>
                    <div className="caption">
                        Manage your liquidity by tracking FLP minting and burning for performance evaluation.
                    </div>

                    <div className="image">
                        <img src={liquiditymanager} alt="take profit" />
                    </div>
                </div>
            </div>
             
             
        </div>
    )

}