import React,{Component} from 'react'
import ServiceAccordion from './ServiceAccordion';
import ServiceDetailTab from './ServiceDetailTab';
import OrderServiceForm from './OrderServiceForm';
import { v4 as uuidv4 } from 'uuid';
import  {TweenLite, Linear} from "gsap";
import {PropTypes} from 'prop-types';
import {serviceNameList, subServiceList} from '../Data/Servicedata'
import CSSPlugin from 'gsap/CSSPlugin';


class  ServiceDetail extends Component {
  state ={
    name:"",
    id:uuidv4(),
    url:""
  }

  c= CSSPlugin;

   // reference to the DOM node
   myElement = null;
   // reference to the animation
   myTween = null;


  showSubServiceDetail = (subServiceName)=>{this.setState({ name: subServiceName})}

  hideSubServiceDetail = ()=>{this.setState({ name: ""})}
  
  componentDidMount(){
    // setting the URL
    const route = window.location.href.toString().split("#")[0];
    this.setState({url:route.toString()})
    // direct browser to route
    // window.location.href =route + '#'+ this.state.id;
    // gsap animation
    const from = { opacity: 0, ease: Linear.ease , x:200};
    const to = { opacity: 1, x:0 };
    this.myTween = TweenLite.fromTo(this.myElement, 1, from, to); }
  
render(){

return(<div  ref={servicedetail => this.myElement = servicedetail} id={this.state.id} className=" mt-3 row align-items-center modal-body">
           <div className="row justify-content-center">
              <div className="col-sm-12 justify-self-center col-md-9 mb-5 pressed-white">
              <GeneralServiceDescription serviceName={this.props.serviceName} />
              </div>
              <div className="col-sm-12 col-md-3 mb-2 justify-self-center align-self-center"> 
                    <button type="button" name="" onClick ={this.props.showmore} className=" theme_btn" aria-label="Close">
                        <span aria-hidden="true">Retour &times;</span> 
                    </button>
              </div>
           </div>
          <div className="col-lg-5">
            <div className="service_faq_inner">
             <div className="section_title">
                <h6>Best Services</h6>
                <h2>{this.props.serviceName}</h2>
              </div>
                <ServiceAccordion serviceName={this.props.serviceName} showSubServiceDetail ={this.showSubServiceDetail} hideSubServiceDetail={this.hideSubServiceDetail}/>
            </div>
          </div>
          <div className="col-lg-7 d-none d-md-block">
            <div className="service_faq_inner">
              <div className="section_title">
                {
                this.state.name==="" ? "" : <> <h2> Service de<br/> </h2> <h1>{this.state.name }  </h1> </> 
                }
              </div>
              { this.state.name==="" ?  <div>
                <h2>Ajouter des services a votre pagner</h2>
                
                <OrderServiceForm serviceName={this.props.serviceName}/>

              </div>  : <ServiceDetailTab hideSubServiceDetail={this.hideSubServiceDetail} serviceName={this.props.serviceName} subServiceName ={this.state.name} />}
             
            </div>
          </div>
        </div>
);
}}



function GeneralServiceDescription({serviceName}){

  let mainservice;

 switch(serviceName){
    case serviceNameList[0]:
        //  development
        mainservice = subServiceList.development.description;
            break;
    case serviceNameList[1]:
        // design services
        mainservice = subServiceList.design.description;
            break;
    case serviceNameList[2]:
        // training services
        mainservice = subServiceList.formation.description;
            break;
    case serviceNameList[3]:
        // maintenance services
        mainservice = subServiceList.maintenance.description;
            break;
    case serviceNameList[4]:
        // networking and security services
        mainservice = subServiceList.networkingAndSecurity.description;
            break;
        
    default: {mainservice = []}
 }

  return <>
              <h1 className="text-center p-2">{serviceName}</h1>       
              <p  className="p-3 ">
                {mainservice}
              </p>
          </>
}


ServiceDetail.propTypes = {
  serviceName: PropTypes.string.isRequired,
  showmore: PropTypes.func.isRequired
}
export default ServiceDetail