import React,{Component} from 'react';
import { NavLink} from "react-router-dom";

import { LanguageContext } from '../context/LanguageContext';
import { RequestServiceContext } from '../context/RequestServiceContext';

const style={borderBottom:"2px solid red"}

class  TopNavigation extends Component {
  // static contextType = RequestServiceContext; 
render(){

   // console.log("checking context data passed",this.context);
 

return(

    <LanguageContext.Consumer>{(LanguageContext)=>{
      // const {isFrench, toggleLanguage} = LanguageContext
      return (
               <>
              <div 
              // style={{position:"fixed"}} 
                className="header_top">
                  <div className="container">
                  <div className="row">
                  {/* <div className="col-12 col-md-2">
                    {isFrench ? "Translate to" : "Tranduire en"} <button onClick = {toggleLanguage} className ="btn btn-danger">
                      {isFrench ? "En" : "Fr"}
                    </button>
                  </div> */}
                    <div className="col-md-6 col-sm-5">
                      <div className="header_social_icon">
                        <a target="blank" href="https://www.facebook.com/MercuryTechcm"><i className="fab fa-facebook-f"></i></a>
                        <a target="blank" href="https://twitter.com/home"><i className="fab fa-twitter"></i></a>
                        <a target="blank" href="https://www.behance.net/Mercury-Tech/"><i className="fab fa-behance"></i></a>
                        <a target="blank" href="https://www.pinterest.com/business/hub/"><i className="fab fa-pinterest-p"></i></a>
                        <a target="blank" href="https://wa.me/message/HRV355IUCIHAP1"><i className="fab fa-whatsapp"></i></a>
                      </div>
                    </div>
                    <div className=" col-md-6 col-sm-7 text-right">
                        
                      <span>   Service client: <span>8:00 am - 8:30 pm</span>  <CartItem/> </span> 
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg" id="header">
                <div className="container">
                <NavLink to="/" className ="navbar-brand "> <img src="assets/img/Logo.png" style={{height:"70px", width:"70px"}} alt="logo" /> </NavLink>
            
                  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="menu_toggle"> </span>
                  </button>
        
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto menu">
                        <li className="nav-item  active"> <NavLink activeStyle={style} exact  to="/"  className ="nav-link">  Home </NavLink></li>
                        <li className="nav-item"> <NavLink  activeStyle={style} exact  to="/about" className ="nav-link ">  About </NavLink></li>
                        <li className="nav-item"> <NavLink  activeStyle={style} exact  to="/services"  className ="nav-link">Services </NavLink> </li>
                        {/* <li className="nav-item"><NavLink activeStyle={style} exact  to="/portfolio" className ="nav-link">  Portfolio </NavLink> </li> */}
                        {/* <li className="nav-item"> <NavLink activeStyle={style} exact  to="/community" className ="nav-link">  Community </NavLink></li> */}
                        <li className="nav-item"> <NavLink activeStyle={style} exact  to="/contact" className ="nav-link">  Contact </NavLink></li>
                    </ul>
                  </div>
                </div>
              </nav>
           </>
             );
    }}
  
    </LanguageContext.Consumer>
    );
}

}


function CartItem() {
  return <RequestServiceContext.Consumer>
        {
          serviceContext => {
            const {serviceList} = serviceContext 
            return <NavLink to = "/order">  <span className='ml-1 badge p-1 badge badge-danger'>Services <i className="fas fa-chart-pie"></i>  {serviceList.length} </span> </NavLink>
          }   
        }
    </RequestServiceContext.Consumer> 
}



export default TopNavigation