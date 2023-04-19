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
import fxdxtokenicon from "../../img/fxdx-token-icon.svg";
import btctokenicon from "../../img/btc-token-icon.svg";
import ethtokenicon from "../../img/eth-token-icon.svg";
import usdctokenicon from "../../img/usdc-token-icon.svg";
import usdttokenicon from "../../img/usdt-token-icon.svg";

import "./PreFooter.css";

export function PreFooter() {

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
                <img src={fxdxtokenicon} alt="fxdx token icon" />
                <img src={usdttokenicon} alt="usdt token icon" />
                <img src={usdctokenicon} alt="usdc token icon" />
            </div>

        </div>
    )

}