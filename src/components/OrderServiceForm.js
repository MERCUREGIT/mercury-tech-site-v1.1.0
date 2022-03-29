import React, {Component,useEffect } from 'react';
import  {TweenLite, Linear} from "gsap";
import { v4 as uuidv4 } from 'uuid';
import {subServiceList as data} from '../Data/Servicedata';
import {serviceNameList as services} from '../Data/Servicedata';
import { RequestServiceContext } from '../context/RequestServiceContext';
import CSSPlugin from 'gsap/CSSPlugin';
import { NavLink} from "react-router-dom";


class OderServiceForm extends Component {
    static contextType = RequestServiceContext;

    subServiceList = data;
    serviceNameList =services;
    mainservice =[];

    c = CSSPlugin
    state ={
        serviceRequested:"",
        id:uuidv4(),
        price:0,
        number:0
    }

     handleServiceChange = (target) =>{
         let submitedService = target.value

        this.mainservice.forEach(element => {
            if(element.name === submitedService.toString()){
                this.setState({price:element.unitPrice})
            }
        });
 
        this.setState({serviceRequested:submitedService})
        
     }

     handleQty =(value)=>{
         if(value>0)
            this.setState({number:parseInt(value, 10)}) 
         else return
     }


    render() { 
    
        const {addRequestItem,removeRequestItem, serviceList} = this.context

            switch(this.props.serviceName){
                        case this.serviceNameList[0]:
                            //  development
                            this.mainservice = this.subServiceList.development.products;
                                break;
                        case this.serviceNameList[1]:
                            // design services
                            this.mainservice = this.subServiceList.design.products;
                                break;
                        case this.serviceNameList[2]:
                            // training services
                            this.mainservice = this.subServiceList.formation.products;
                                break;
                        case this.serviceNameList[3]:
                            // maintenance services
                            this.mainservice = this.subServiceList.maintenance.products;
                                break;
                        case this.serviceNameList[4]:
                            // networking and security services
                            this.mainservice = this.subServiceList.networkingAndSecurity.products;
                                break;               
                default: {this.mainservice = []}}      

        return ( 
       <>
        <form  onSubmit={(e) => { e.preventDefault();
            
            if(this.state.number>0 && this.state.serviceRequested !== ""){

                addRequestItem(this.state)
            }else{alert("Vous devez choisir aumoin un service")}
           
            }}>
            <div className="row mx-auto form-row align-items-center">
              <div className="col-5 my-1">
                <label className="mr-sm-2" for="service">Choisiser un Service</label>
                    <select onChange={e=>this.handleServiceChange(e.target)} value={this.state.serviceRequested} className="custom-select mr-sm-2  mx-auto" id="service">
                        {/* <option selected>Choose...</option> */}
                        {this.mainservice.map(service=>  <option selected={true} key={uuidv4()}  value={service.name}>{service.name}</option>)}
                    </select>
              </div>
              <div className="col-auto my-1">
                <label className="mr-sm-2  mx-auto" for="count">Provide quantity needed</label>
                <input onChange={e=>this.handleQty(e.target.value)}  value={this.state.number}  type="number" id="count" class="form-control" placeholder="Qty" />
              </div>

              <div className="col-3 my-1  mx-auto">
                <br/>
                <button type= "submit" className="btn btn-dark"><i class="fas fa-plus-circle"></i></button>
              </div>
            </div>
        </form> 
        {/* Forms lits items */}
            <SelectedServiceList removeRequestItem={removeRequestItem} listItem ={serviceList}/>
       </>
        );
    }
}


export function SelectedServiceList({listItem,removeRequestItem}){


    return <ul className="list-group mt-2 shadow">
                {listItem.length === 0 ? <p style={{padding:"10px"}} > Select a set of items to add to your service card </p> : 
                listItem.map(item =>  <SelectedServiceListItem removeRequestItem={removeRequestItem} listItem ={item} />)}
                
           </ul>
}


export function SelectedServiceListItem({listItem,removeRequestItem}){
       // reference to the DOM node
   let myElement = null;


    useEffect(()=>{
           // gsap animation
    const from = { opacity: 0, ease: Linear.ease , x:20};
    const to = { opacity: 1, x:0 };
    TweenLite.fromTo(myElement, 0.25, from, to); 
    // ref={servicedetail => myElement = servicedetail} 
    })
    return  <li className=" list-group-item d-flex justify-content-between align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">{listItem.serviceRequested}</div>
                        <div className="col-2">N<sup>0</sup> <span className="badge badge-danger badge-pill">{listItem.number}</span></div>
                        <div id="Site Web Portfolio" className="col-1" onClick={()=>removeRequestItem(listItem)}><i class="fas fa-trash-alt"></i></div>
                        
                        <div className="col-1"><NavLink to = "/order"><i class="fas fa-edit"></i></NavLink></div>
                    </div>
                </div>
            </li>
}
 
export default OderServiceForm;