import React, {Component} from 'react'
import TopNavigation from './TopNavigation'

const Header =  () =>
{
return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-5">
              <div className="header_social_icon">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-behance"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
                <a href="#"><i className="fab fa-tumblr"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="col-md-5 col-sm-7 text-right">
              <p>Customer Service Hours: <span>8:00 am - 8:30 pm</span></p>
            </div>
          </div>
        </div>
      </div>
      <TopNavigation/>
</header>

)
}
export default Header