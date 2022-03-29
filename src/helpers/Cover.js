import React,{Component} from 'react'
import {Link} from "react-router-dom";

class  Cover extends Component {
render(){
return(
<div>
<section className= { this.props.overlay ? "promo_area rounded parallax_effect" : " rounded parallax_effect" } data-background="img/bg.jpg" style={{ background: this.props.image, height: this.props.size}}>
      <div className="container">
     
        <div className="promo_content promo_content_two text-center  section_title text-center wow fadeInUp">
          <h2>
            <span>
              {this.props.title}
            </span>
          </h2>
          <p>{this.props.subtitle}</p>
          <div className="line"></div>
          {
          
          this.props.linkPath ? <Link to={this.props.linkPath} className="theme_btn">Read More</Link> : " "
          }
          {/* <a href="#" className="theme_w_btn border_btn">Purchase Now</a> */}
        </div>
      </div>

    </section> 
</div>
);
}}
export default Cover