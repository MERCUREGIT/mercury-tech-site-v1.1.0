import React,{Component} from 'react'
import AccordionCard from './AccordionCard';
import {subServiceList as data} from '../Data/Servicedata'
import {serviceNameList as services} from '../Data/Servicedata'
import { v4 as uuidv4 } from 'uuid';

class  ServiceAccordion extends Component {

    subServiceList = data;
    serviceNameList =services;


render(){
// let  = this.props.serviceNDame
let mainservice;

 switch(this.props.serviceName){
    case this.serviceNameList[0]:
        //  development
        mainservice = this.subServiceList.development.subText;
            break;
    case this.serviceNameList[1]:
        // design services
        mainservice = this.subServiceList.design.subText;
            break;
    case this.serviceNameList[2]:
        // training services
        mainservice = this.subServiceList.formation.subText;
            break;
    case this.serviceNameList[3]:
        // maintenance services
        mainservice = this.subServiceList.maintenance.subText;
            break;
    case this.serviceNameList[4]:
        // networking and security services
        mainservice = this.subServiceList.networkingAndSecurity.subText;
            break;
        
    default: {mainservice = []}
 }


return(
        <div id="accordion" class="service_faq_info">
            {mainservice.map(service=>  <AccordionCard key={uuidv4()} serviceSpecialization={service} specialization={service.specialization} showSubServiceDetail={this.props.showSubServiceDetail}   hideSubServiceDetail={this.props.hideSubServiceDetail}/> )}
        </div>);
}}

export default ServiceAccordion