import React from "react";
import {serviceNameList, subServiceList} from '../Data/Servicedata'
import {PropTypes} from "prop-types"


 function ServiceCardItem ({serviceName, showmore}){

let  mainservice;

 switch(serviceName){
    case serviceNameList[0]:
        //  development
        mainservice = subServiceList.development;
            break;
    case serviceNameList[1]:
        // design services
        mainservice = subServiceList.design;
            break;
    case serviceNameList[2]:
        // training services
        mainservice = subServiceList.formation;
            break;
    case serviceNameList[3]:
        // maintenance services
        mainservice = subServiceList.maintenance;
            break;
    case serviceNameList[4]:
        // networking and security services
        mainservice = subServiceList.networkingAndSecurity;
            break;
    default : mainservice=[]}

  return<div className=" mx-auto pb-2 mb-5 col-md-6 rounded " style={{}}>
          <div className="offer_item wow fadeInUp">
          <div className="rounded portfolio_item img_hover wow fadeInUp" >
            <img src={mainservice.image} style={{height:"100%",width:"100%" }}  alt="" />
            <div className="hover_content" style={{height:"100%",width:"100%", paddingTop:"10%", backgroundColor:"rgba(0,0,0,0.5)"}}>
              {/* <h5 className ="text-underline">Nos travaux</h5> */}
              <h3 className ="text-center text-white text-uppercase" style={{paddingTop:"20%"}}>{serviceName}</h3>
            </div>
          </div>
            <div className="content text-center mt-1 pt-0">
              <p className="px-2">
                {mainservice.description.substr(0,150) + "..."} 
              </p>

              <button onClick={showmore} name={serviceName} className="theme_btn shadow">Lire la suite</button>
            </div>
          
          </div>
        </div>
  }
 
  ServiceCardItem.propTypes ={
    serviceName: PropTypes.string.isRequired,
    showmore: PropTypes.func.isRequired
    }

export default ServiceCardItem;