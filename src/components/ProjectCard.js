import React,{Component} from 'react'
import { HashLink as NavLink } from 'react-router-hash-link';






class  ProjectCard extends Component {
render(){
return(

    <div className="col-lg-4 col-sm-6 ">
        <div className="pr_slider_item shadow">
            <div className="img img_hover rounded-top">
                <img src={this.props.portfolioCardData.image} alt="" />
                <NavLink to={"/portfolio_detail/"+this.props.portfolioCardData.project_id +"#detail"} className="icon popup"><i className="fas fa-plus"></i></NavLink>
            </div>
            <div className="item_content">
            <NavLink to="/portfolio_detail/portfofolio" ><h4>{this.props.portfolioCardData.project_name}</h4></NavLink>
                <p>{this.props.portfolioCardData.project_category}</p>
            </div>
        </div>
    </div> 
);
}}
export default ProjectCard