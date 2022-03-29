import React,{Component} from 'react'

class  HomeBestWorkCard extends Component {
render(){
return(

<div className="col-lg-4 col-sm-6">
    <div className="portfolio_item img_hover wow fadeInUp">
              <img src="assets/img/home-two/portfolio1.jpg" alt="" />
        <div className="hover_content">
            <h5>New App Agency</h5>
            <p>Design & Development</p>
            <a href="assets/img/home-two/portfolio1.jpg" className="icon popup"><i className="fas fa-plus"></i></a>
        </div>
    </div>
</div> 

);
}}
export default HomeBestWorkCard