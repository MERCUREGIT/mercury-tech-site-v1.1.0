import React,{Component} from 'react'
import ServiceCardItem from "../components/ServiceCardItem";
import {serviceNameList} from '../Data/Servicedata'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class  ServiceCardItemList extends Component {

render(){
return(
<>
{serviceNameList.map(service=> <ServiceCardItem key={uuidv4()} showmore = {this.props.toggleShowServiceDetail} serviceName = {service}/> )}

</>
);
}}

ServiceCardItemList.propTypes ={

    toggleShowServiceDetail: PropTypes.func.isRequired
}

export default ServiceCardItemList