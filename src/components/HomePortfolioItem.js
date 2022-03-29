import React,{Component} from 'react'
import { HashLink as NavLink } from 'react-router-hash-link';


class  HomePortfolioItem extends Component {
render(){
return(
  
  <div className="col-lg-4 col-sm-6 ">
    <NavLink to={"/portfolio_detail/"+this.props.portfolioCardData.project_id +"#detail"} >
    <div className="rounded portfolio_item img_hover wow fadeInUp">
      <img src="assets/img/home-two/portfolio1.jpg" alt="" />
      <div className="hover_content">
        <h5>{this.props.portfolioCardData.project_name ? this.props.portfolioCardData.project_name : this.props.portfolioCardData}</h5>
        <p>lire plus</p>
       {/* insert a way to read more about element */}
      </div>
    </div>
    </NavLink>
  </div>
);
}}
export default HomePortfolioItem