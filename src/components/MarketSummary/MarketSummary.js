import "./MarketSummary.css";

export function MarketSummary() {
    return (
        <div className="market-summary-section">
            <div className="title">
                Market Summary
            </div>

            <div className="table">
                <div className="table-header">
                    <span>Name</span>
                    <span>Last Price</span>
                    <span>Market cap</span>
                    <span>Change</span>
                </div>

                <div className="table-body">
                    <div className="row">
                        <span>BTC<p>Bitcoin</p></span>
                        <span>$28,500</span>
                        <span>$850 Bn</span>
                        <span>+3.41%</span>
                    </div>
                    <div className="row">
                        <span>ETH<p>Ethereum</p></span>
                        <span>$2,850</span>
                        <span>$450 Bn</span>
                        <span>+3.41%</span>
                    </div>
                    <div className="row">
                        <span>USDC</span>
                        <span>$1.01</span>
                        <span>$65 Bn</span>
                        <span>+0.041%</span>
                    </div>
                    <div className="row">
                        <span>USDT</span>
                        <span>$1.00</span>
                        <span>$85 Bn</span>
                        <span>+0.041%</span>
                    </div>
                </div>
            </div>

            <div className="trade-button">
                <a target="_blank" rel="noreferrer" href="https://app.fxdx.exchange/trade">Trade now</a>
            </div>
        </div>
    )
}