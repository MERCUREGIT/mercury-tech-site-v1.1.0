import React, { Component } from "react";

import Cover from "../helpers/Cover";
import ServiceCardItemList from "../components/ServiceCardItemList";
import ServiceDetail from "../components/ServiceDetails";
// import PatnersSection from "../components/PatnersSection";
// import HomePortfolioItemList from "../helpers/HomePortfolioItemList";
import TeamFeatureArea from "../components/TeamFeatureArea";


class Home extends Component {
  state = {
  services: {
    showServiceDetail:false,
    serviceName: ""
  }  
  }
  
   toggleShowServiceDetail = (e) =>{

      let showFlag = this.state.showServiceDetail ? false : true;
      let service =  e.target.name;
      this.setState({
       showServiceDetail: showFlag,
        serviceName: service
      });
    }
    

    render(){
        return(
<div className="body_wrapper">
    <Cover overlay={true} size ={"80vh"} image={"url('/assets/img/home -01-01.jpg') no-repeat center 50% / cover"} subtitle={"Make a Difference"} title={"MERCURY TECH"} linkPath={"/about"}/>

    {/* welcome section */}
    <div className="container">
      <div className="row shadow mt-5 rounded concave-white ">
          <div className="col-12 col-md-6 p-5 align-middle  wow fadeInUp " data-wow-delay="0.2s">
            <h1 className ="text-center"> BIENVENUE </h1>
            <br/>
            <p className="fadeInRight" data-wow-delay="0.35s">
                Mercury tech est une entreprise réunissant des ingénieurs en informatique. Mercury a pour objectif de fournir des solutions et formations informatiques contextualisées adaptées aux besoins de chaque entreprise, mais aussi à des personnes soucieuses de s’arrimer à l’ère du numérique. Rigoureux, professionnel, dynamique et créatif, Mercury Tech propose des solutions SMART de haute qualité dans les domaines du développement de logiciel, conception graphique, maintenance matérielle et logicielle, formation en informatique, sécurité informatique et réseaux informatique.
            </p>
          </div>
          <div className="col-6 d-none d-md-inline-block wow fadeInUp p-0 fadeInLeft" data-wow-delay="0.3" style={{width:"100%", backgroundImage:"url('/assets/img/home/bienvenue-01.png')", backgroundRepeat:"no-repeat", backgroundPosition:"center" ,backgroundSize:"cover", padding:"20px"}} >
          </div>
      </div>
    </div>
    {/* welcome section */}
  
    <TeamFeatureArea />
    
 
    {/* <!--Features_area-->
    <!--offer_area--> */}
    {/* <section className="offer_area sec_pad bg_color container">
      <div className="container">
        <div className="section_title text-center wow  fadeInUp">
          <h6>What We</h6>
          <h2>Our Best Projects</h2>
        </div>
        <div className="row justify-content-center">

      <HomePageBestProjectCard />
      <HomePageBestProjectCard />
      <HomePageBestProjectCard />

        </div>
      </div>
    </section> */}
    {/* <!--offer_area--> 

    
    {/* <!-- Promo area -->
    <!--portfolio_area_two--> */}
    {/* <section className="portfolio_area_two sec_pad">
      <div className="container">
       
        <div className="row justify-content-center">
         <HomePortfolioItemList />
         </div>
         <div className="constainer p-5">
           <div className="row justify-content-center">
           <a className="theme_btn" href="/portfolio" > See More </a>
           </div>
       </div>
      </div>
    </section> */}
   

    <Cover overlay={true} size ={"80vh"}  image={"url('assets/img/aProposdeNosServices -01.jpg') no-repeat center 50% / cover"} title={"Nos Services"} linkPath={"/portfolio"} />
             

      <div className="container">
       
          {this.state.showServiceDetail ?  <ServiceDetail serviceName = {this.state.serviceName} showmore = {this.toggleShowServiceDetail} /> : 
            <div className="row mt-5 mb-5">
                <ServiceCardItemList toggleShowServiceDetail ={this.toggleShowServiceDetail}/>
            </div>
          }
        
      </div>
         {/* <!--Features_area--> */}
    <section className="features_area">
      <div className="overlay_bg"></div>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8">
            <div className="features_info">
              <div className="section_title color_w wow fadeInUp">
                <h6>POURQUOI NOUS CONFIER VOS PROJETS?</h6>
                <h2>NOS VALEURS</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp">
                    <div className="icon">01</div>
                    <div className="media-body">
                     
                        <h6>Intégrité et respect social</h6>
                     
                      <p>
                       
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">02</div>
                    <div className="media-body">
                        <h6>Éthique, droits sociaux et moraux</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.3s">
                    <div className="icon">03</div>
                    <div className="media-body">
                      
                        <h6>Utiliser la technologie pour responsabiliser et améliorer les projets</h6>
                     
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="precess_item media wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon">04</div>
                    <div className="media-body">
                     
                        <h6>Conformités strictes aux normes et aux meilleures pratiques</h6>
                      
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center wow fadeInLeft" data-wow-delay="0.2s">
            <img src="assets/img/home/s6.jpg" style={{width:"100%"}} alt="" />
          </div>
        </div>
      </div>
    </section>
    
    {/* <!-- service area -->
    <!-- h_blog post area --> */}
    {/* <section className="h_blog_post_area sec_pad">
      <div className="container">
        <div className="section_title text-center color_w wow fadeInUp">
          <h2>Our Events</h2>
        </div>
        <div className="row justify-content-center">
          <EventTile />
          <EventTile />
          <EventTile />
      </div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
          <a href="#" className="theme_w_btn border_btn">More Post</a>
        </div>
      </div>
    </section> */}
 
{/* <PatnersSection /> */}
  
<br></br>
<br></br>

          </div>
        );
        
    }
}








export default Home;
