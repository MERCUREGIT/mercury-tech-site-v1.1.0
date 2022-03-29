import React,{Component} from 'react'
import {serviceNameList, subServiceList} from '../Data/Servicedata'

class  ServiceDetailTab extends Component {
  state ={
    mainserviceDescription:""
  }

  setServiveDesctiption = () =>{
  switch(this.props.serviceName){
    case serviceNameList[0]:
        //  development
        return subServiceList.development.subText.find(element=> element.name === this.props.subServiceName)
    case serviceNameList[1]:
        // design services
       return subServiceList.design.subText.find(element=> element.name === this.props.subServiceName)
    case serviceNameList[2]:
        // training services
          return subServiceList.formation.subText.find(element=> element.name === this.props.subServiceName)
    case serviceNameList[3]:
        // maintenance services
        return subServiceList.maintenance.subText.find(element=> element.name === this.props.subServiceName)
    case serviceNameList[4]:
        // networking and security services
        return subServiceList.networkingAndSecurity.subText.find(element=> element.name === this.props.subServiceName)
          
    default: return "no service available for now";
 }
  }



render(){


return(
<>
<div class="nav nav-tabs service_tab" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
      aria-controls="nav-home" aria-selected="true">
        Description
    </a>
    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
      aria-controls="nav-profile" aria-selected="false">Nos Travaux</a>
    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
      aria-controls="nav-contact" aria-selected="false"> Sous service Service</a>
       <span className =" p-3" onClick={this.props.hideSubServiceDetail} style={{position:"absolute", top:"25px", right:"25px", color:"red", cursor:"pointer"}} aria-hidden="true"> <i class="fas fa-times-circle"></i> </span>
</div>


  <div class="tab-content service_tab_content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <p style={{height:"200px", overflow:"scroll"}}>
        <img src="assets/img/tab_img.png" alt="" /> {this.setServiveDesctiption().description}
      </p>
    </div>
    <div  class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <p style={{height:"200px" , overflow:"scroll"}}>
        
          <div className="container">
            <div className="row p-0">
              <div className="col-4 g-1"><img src="assets/img/tab_img.png" alt="" />  </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
              <div className="col-4 g-1"> <img src="assets/img/tab_img.png" alt="" /> </div>
            </div>
          </div>

      </p>
    </div>
    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
      <p style={{height:"200px !important"}}>
        <img src="assets/img/tab_img.png" alt="" /> Phasellus
        pulvinar iaculis nunc at placerat. Sed porta sollicitudin
        eros, vel sagittis turpis consequat nec. Donec ac viverra
        ligula, in scelerisque leo. Proin massa quam, ornare in
        porta quis, sagittis vitae lectus. Maecenas dictum, augue
        vel dictum tempus, sapien metus pulvinar sapien, placerat
        pulvinar lectus risus eu erat. Morbi semper, dui sodales
        aliquet imperdiet.
      </p>
    </div>
  </div>
  </>

);
}}





export default ServiceDetailTab