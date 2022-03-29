import React,{Component} from 'react'
import {clients} from "../Data/generalData"
import { v4 as uuidv4 } from 'uuid';

class  PatnersSection extends Component {
render(){
return(
<section className=" pt-0 mt-0 clients_logo_area sec_pad">
    <div className="container">
      <div className="row">
      <div className=" col-12 section_title text-center color_w wow fadeInUp">
        <h6>we and them </h6>
        <h2>Our Clients</h2>
      </div>
        {clients.map(item=><ClientItem key={uuidv4()} logo={item.logo} annimationDelay={item.annimationDelay} descrption={item.descrption} patnersSiteUrl={item.patnersSiteUrl} />)}
      </div>
    </div>
  </section>
);
}}



function ClientItem({logo,descrption,patnersSiteUrl,annimationDelay})
{
  return  <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={annimationDelay}>
            <a href={patnersSiteUrl} className="c_logo_item"><img src={logo} style={{width:"150px"}} alt={descrption} /></a>
          </div>
}


export default PatnersSection