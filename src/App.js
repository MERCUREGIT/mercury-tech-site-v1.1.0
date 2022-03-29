import React, {Component,Suspense, lazy} from 'react';
import { Route, Redirect } from "react-router-dom";
import ScrollToTop from "./helpers/scroll-top";


const Home = lazy(()=>import('./pages/home')) ;
const PortfolioDetail = lazy(()=>import('./pages/Portfolio_detail')) ;
const About = lazy(()=>import('./pages/About')) ;
const Portfolio = lazy(()=>import('./pages/Portfolio'));
const Community = lazy(()=>import('./pages/Community')) ;
const Contact = lazy(()=>import('./pages/Contact')) ;
const Footer = lazy(()=>import('./components/Footer'));
const TopNavigation = lazy(()=>import('./components/TopNavigation'));
// import ThemeContextProvider from './context/ThemeContext';
const LanguageContextProvider = lazy(()=>import('./context/LanguageContext')) ;
const RequestServiceContextProvider = lazy(()=>import('./context/RequestServiceContext'));
const TeamBiography = lazy(()=>import('./pages/TeamBiography'));
const Order = lazy(()=>import('./pages/Order'));
const  Services = lazy(()=>import('./pages/Services'));

class App extends Component {
  render(){
    return (
      <div className="content-wrapper">

      <ScrollToTop>
        <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
        <LanguageContextProvider>
            <RequestServiceContextProvider>
              <TopNavigation />
                  <Route path={process.env.PUBLIC_URL +"/"} exact component = {Home} />
                  <Route path={process.env.PUBLIC_URL +"/about"} exact component = {About} />
                  <Route path={process.env.PUBLIC_URL +"/services"} exact component = {Services} />
                  <Route path={process.env.PUBLIC_URL +"/portfolio"} exact component = {Portfolio} />
                  <Route path={process.env.PUBLIC_URL +"/portfolio_detail/:item"} exact component = {PortfolioDetail} />
                  <Route path={process.env.PUBLIC_URL +"/community" }exact component = {Community} />
                  <Route path={process.env.PUBLIC_URL +"/contact"} exact component = {Contact} />
                  <Route path={process.env.PUBLIC_URL +"/biography/:name"} exact component = {TeamBiography} />
                  <Route path={process.env.PUBLIC_URL +"/order"} exact component = {Order} />
                  <Redirect to='/' />
              <Footer/>
            </RequestServiceContextProvider>
        </LanguageContextProvider>
      </Suspense>
    </ScrollToTop>
      </div>
      );
  }

    
}

export default App;
