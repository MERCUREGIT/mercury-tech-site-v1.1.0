import React,{Component} from 'react'
import {portfolioCardData} from "../Data/generalData";
import ProjectCard from '../components/ProjectCard';
import {FacebookShareButton, FacebookIcon, TwitterIcon, PinterestIcon, PinterestShareButton,TwitterShareButton,WhatsappShareButton, WhatsappIcon} from "react-share"

class  PortfolioDetail extends Component {

   projectElement = ()=>{
    return portfolioCardData.find(e=>e.project_id === this.props.match.params.item )
  }

render(){
  // project_image_list:[],
  
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section class="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div class="overlay_bg"></div>
      <div class="container">
        <div id='detail' class="bread_content">
          <h2>{this.projectElement().project_name}</h2>
          
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--portfolio_details_area--> */}
    <section class="portfolio_details_area sec_pad">
      <div class="container">
        <div class="portfolio_details_info">
          <div class="row">
            <div class="col-lg-12 portfolio_detail_img">
              <img src={this.projectElement().project_image_list[0]} alt="" /> 
            </div>
            <div class="col-md-6 portfolio_detail_img">
              <img src={this.projectElement().project_image_list[1]} alt="" />
            </div>
            <div class="col-md-6 portfolio_detail_img">
              <img src={this.projectElement().project_image_list[2]} alt="" />
            </div>
          </div>

          <div class="details_content">
            <div class="details_text">
       
                <h2>Mock-Up PSD Object Support for House</h2>
           
              <p>
                {this.projectElement().project_description}
              </p>
            </div>
            <div class="p_details_info">
              <div class="item">
                Date:
                <p>{this.projectElement().project_date}</p>
              </div>
              <div class="item">
                Client:
                <p>{this.projectElement().project_client}</p>
              </div>
              <div class="item">
                Category:
                <p>
                  <p> {this.projectElement().project_category}</p>
                </p>
              </div>
            </div>
          </div>
          <div class="p_social_icon">
            <h5>Share:</h5>
    
              <FacebookShareButton 
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className="fab fa-facebook-f">
                 <FacebookIcon round  size={36} />
              </FacebookShareButton>
            <TwitterShareButton
              url= {"https://twitter.com/MercuryTech1"}
              title={"sqsq"}
              quote={"45"}
              hashtag={"#make_A_Difference"}
              related={"https://twitter.com/MercuryTech1"}>
                  < TwitterIcon round  size={36}/>
            </TwitterShareButton>

            <PinterestShareButton description ={this.projectElement().project_name}>
              <PinterestIcon round  size={36}/>
            </PinterestShareButton>
            <WhatsappShareButton title={this.projectElement().project_name} seperator=" ">
                <WhatsappIcon round  size={36}/>
            </WhatsappShareButton>
            
          </div>
        </div>
        <div class="row portfolio_gallery">
          <div class="col-lg-12">
            <h2 class="p_title">More Projects</h2>
          </div>
          {portfolioCardData.filter(item=>item.project_category === this.projectElement().project_category && item.project_id !==this.projectElement().project_id).slice(0,3).map(item=><ProjectCard portfolioCardData ={item}/>)}
        </div>
      </div>
    </section>

</div>
);
}}
export default PortfolioDetail