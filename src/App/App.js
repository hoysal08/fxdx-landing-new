import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {Hero} from "../components/Hero/Hero";
import {MarketSummary} from "../components/MarketSummary/MarketSummary";
import {TradingExperience} from "../components/TradingExperience/TradingExperience";
import {LiquidityExperience} from "../components/LiquidityExperience/LiquidityExperience";
import {PreFooter} from "../components/PreFooter/PreFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MarketSummary />
      <TradingExperience />
      <LiquidityExperience />
      <PreFooter />


      <Footer />
    </div>
  );
}

export default App;
