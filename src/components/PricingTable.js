import React,{Component} from 'react'
import PricingItem from './PricingItem'

class  PricingTable extends Component {
render(){
return(
    <> <section class="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
    <div class="overlay_bg"></div>
    <div class="container">
      <div class="bread_content">
    <h2>Nos Package Special pour startup</h2>
      <h6>Nous pensons aussi pour les startup</h6>
      </div>
    </div>
  </section>

  <div className="container">
    <div className="section_title text-center wow fadeInUp pt-5">
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis earum laborum assumenda tempore dolore neque quisquam minus explicabo ea dolorem debitis blanditiis doloribus, perferendis iste autem quidem ipsa temporibus voluptatum dolor voluptates odio ipsam porro expedita! Architecto, nam optio. Odit, suscipit consequuntur totam ab quia omnis adipisci laboriosam optio vel eius. Laboriosam, inventore sit. Consequatur laborum labore omnis hic illo officiis temporibus odio est reiciendis numquam quod, id minima asperiores delectus mollitia odit ad corrupti inventore voluptate, tempora qui facere.
        </p>
    </div>
  </div>

<section class="h_pricing_area sec_pad pt-0">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-6">
      <div class="h_price_item wow fadeInUp" data-wow-delay="0.2s">
        <div class="price_head">
          <div class="p_top"><h6>Personal</h6></div>
          <div class="price">
            79<sup>$</sup>
            <span>Monthly</span>
          </div>
        </div>
        <ul class="list-unstyled">
          <li class="p_list">
            <h6> 01 Landing Page</h6>
            <p>
              We will design a landing page with 4 sections
            </p>
          </li>
          <li class="p_list">
            <h6>Social Media</h6>
            <p>
              We will create 2 article for your social networks per month
            </p>
          </li>
          
        </ul>
        {/* <a href="#" class="theme_btn">Order Now</a> */}
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="h_price_item wow fadeInUp" data-wow-delay="0.2s">
        <div class="price_head">
          <div class="p_top"><h6>Enterprise</h6></div>
          <div class="price">
            148<sup>$</sup>
            <span>Monthly</span>
          </div>
        </div>
        <ul class="list-unstyled">
          <li class="p_list">
            <h6> 05 Landing Page</h6>
            <p>
              We will design a landing page with 10 sections
            </p>
          </li>
          <li class="p_list">
            <h6>Social Media</h6>
            <p>
              We will create 10 article for your social networks per month
            </p>
          </li>
          
        </ul>
        {/* <a href="#" class="theme_btn">Order Now</a> */}
      </div>
    
    </div>
    
    
    <PricingItem  
        offerName ={"Startup offers"} 
        offerPrice ={500000} 
        offerDuration ={"Startup offers"} 
        offerDescription ={[
            {
                title:'01 Landing Page',
                body:'We will design a landing page with 4 sections'
            },
            {
                title:'Social Media',
                body:'We will create 2 article for your social networks per month'
            },
           
        ]} 
    />
 </div>
</div>
</section>
</>
);
}}
export default PricingTable