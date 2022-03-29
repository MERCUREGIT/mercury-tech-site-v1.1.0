import React,{Component} from 'react'
import {Link} from "react-router-dom";
let styler ={
  // position:"relative",
  // top:"100vh",
}
class  Footer extends Component {
render(){
return(
 <div>
     
     <footer style={styler} className="footer_area">
        {/* <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <div class="f_widget f_latest_widget">
                  <h3 class="f-title">Latest News</h3>
                  <div class="f_latest_info">
                    <div class="media f_latest_item">
                      <div class="img_hover">
                        <i class="fas fa-plus"></i>
                        <img src="assets/img/home-one/f_post_1.jpg" alt="" />
                      </div>
                      <div class="media-body">
                        <a href="#"
                          ><h5>
                            Proper marketing plan
                          </h5></a
                        >
                        <a href="#" class="l_date">5 hours ago</a>
                      </div>
                    </div>
                    <div class="media f_latest_item">
                      <div class="img_hover">
                        <i class="fas fa-plus"></i>
                        <img src="assets/img/home-one/f_post_2.jpg" alt="" />
                      </div>
                      <div class="media-body">
                        <a href="#"
                          ><h5>
                            Retain your customers
                          </h5></a
                        >
                        <a href="#" class="l_date">12 hours ago</a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="f_widget f_link_widget">
                  <h3 class="f-title">Usefull Links</h3>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>About us</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Blog page</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Partners</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Social media</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Services</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Forum</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-angle-right"></i>Contact</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="f_widget f_recnt_widget">
                  <h3 class="f-title">Instagram Gallery</h3>
                  <ul class="list-unstyled recent_post_gallery">
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post1.jpg"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post2.jpg"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post3.jpg"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post4.jpg"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post5.jpg"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fas fa-plus"></i>
                        <img
                          src="assets/img/home-one/f_recent_post6.jpg"
                          alt=""
                      /></a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="f_widget f_tag_widget">
                  <h3 class="f-title">Popular Tags</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">creative</a></li>
                    <li><a href="#">multi-purpose</a></li>
                    <li><a href="#">clear</a></li>
                    <li><a href="#">wordpress</a></li>
                    <li><a href="#">flat</a></li>
                    <li><a href="#">magento</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">retina</a></li>
                    <li><a href="#">wocomerce</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    */}
        <div className="footer_bottom"> 
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <p>
                  Copyright ©
                   { new Date().getFullYear() }
                  <a href="/"> Mercury-Tech</a> All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 col-md-6">
                <ul className="f_menu list-unstyled">
                    <li className="nav-item"> <Link to="/" className ="nav-link text-white">  Home </Link></li>
                    <li className="nav-item"> <Link to="/about" className ="nav-link text-white">  About </Link></li>
                    <li className="nav-item"> <Link to="/services" className ="nav-link text-white">  Services </Link></li>
                    <li className="nav-item"> <Link to="/portfolio" className ="nav-link text-white">  Portfolio </Link></li>
                    <li className="nav-item"> <Link to="/community" className ="nav-link text-white">  Community </Link></li>
                    <li className="nav-item"> <Link to="/contact" className ="nav-link text-white">  Contact </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
 </div>
);
}}
export default Footer;