import './App.css';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import {Hero} from "../components/Hero/Hero";
import {MarketSummary} from "../components/MarketSummary/MarketSummary";
import {TradingExperience} from "../components/TradingExperience/TradingExperience";
import {LiquidityExperience} from "../components/LiquidityExperience/LiquidityExperience";
import {PreFooter} from "../components/PreFooter/PreFooter";
import {Waitlist} from "../components/Waitlist/Waitlist";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>

          <Route exact path="/">
            <Header />
            <Hero />
            {/* <MarketSummary /> */}
            <TradingExperience />
            <LiquidityExperience />
            <PreFooter />
            <Footer />
          </Route>

          <Route path="/waitlist">
            <Waitlist />
          </Route>

          <Route path="*">
            <Header />
            <Hero />
            {/* <MarketSummary /> */}
            <TradingExperience />
            <LiquidityExperience />
            <PreFooter />
            <Footer />
          </Route>

        </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
