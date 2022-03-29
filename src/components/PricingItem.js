import React,{Component} from 'react'

class  PricingItem extends Component {
render(){
return(
    <div className=" col-lg-4 col-sm-6">
    <div className="h_price_item wow fadeInUp rounded" data-wow-delay="0.2s">
      <div className="price_head">
<div className="p_top"><h6>{this.props.offerName}</h6></div>
        <div className="price">
          {this.props.offerPrice}<sup>FCFA</sup>
          <span>{this.props.offerDuration}</span>
        </div>
      </div>
      <ul className="list-unstyled">
       
       {this.props.offerDescription.map(offerDescription =>
       <li className="p_list pt-0">
          <h6>{offerDescription.title}</h6>
          <p>
           {offerDescription.body}
          </p>
        </li> )}
       
        

        
      </ul>
      <button className="theme_btn">Order Now</button>
    </div>
  </div>

);
}}
export default PricingItem