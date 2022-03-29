import React,{Component} from 'react'

import ServiceCardItemList from "../components/ServiceCardItemList";
import ServiceDetail from "../components/ServiceDetails";
import TeamFeatureArea from '../components/TeamFeatureArea';


class  Services extends Component {



  state = {
    services: {
      showServiceDetail:false,
      serviceName: ""
    }  
    }
      
  
      componentDidMount() {
  // search for the content
  
      }
    
     toggleShowServiceDetail = (e) =>{
  
  
        // fetch for content
    
        let showFlag = this.state.showServiceDetail ? false : true;
        let service =  e.target.name;
        this.setState({
         showServiceDetail: showFlag,
          serviceName: service
        });
      }

render(){
return(
 <div>
      <section className="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
        <div className="overlay_bg"></div>
        <div className="container">
          <div className="bread_content">
            <h2>À propos de nos services</h2>
          </div>
        </div>
      </section>
      <TeamFeatureArea />

    <section className="service_area sec_pad pt-0 pb-0">
      <div className="container">
        <div className="section_title text-center">
          {/* <h6>Best Services</h6> */}
          <h2>Nos Services</h2>
        </div>
          {this.state.showServiceDetail ?  <ServiceDetail serviceName = {this.state.serviceName} showmore = {this.toggleShowServiceDetail} /> : 
        <div className="row mt-5 mb-5"><ServiceCardItemList toggleShowServiceDetail ={this.toggleShowServiceDetail}/></div>}
      </div>
    </section>

    <ServiceProcess />



    <div className="container">  
      <div className="row p-5">
        
     
      </div>
    </div>
 </div>


);
}}

const ServiceProcess =()=>{
  return (
    <section className="features_area">
    <div className="overlay_bg"></div>
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-12">
          <div className="features_info">
            <div className="section_title color_w">
              <h6>Que faisons-nous d'autre</h6>
              <h2>Comment exécution nous les services au-prets des clients</h2>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="precess_item media">
                  <div className="icon">01</div>
                  <div className="media-body">
                      <h6>NOS PACKAGES SPÉCIAUX POUR START-UP</h6>
                      <p>
                        En tant qu’entreprise vous vous devez d’avoir ce qu’il y’a de meilleur en terme de numérique. Mercury Tech l’a compris et vous proposes des packages spéciaux pour votre entreprise.
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="precess_item media">
                  <div className="icon">02</div>
                  <div className="media-body">
                    <h6>COMMUNITY MANAGEMENT</h6>
                    <p>
                      Mercury Tech vous aide à vous mettre en valeur sur les réseaux sociaux, nous animons votre communauté pour que votre entreprise soit connue de tous! Pour cela, le community management est la solution qu’il vous faut pour atteindre votre cible.
                    </p>
                  </div>
                </div>
              </div>
             </div>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <img src="assets/img/home-two/s6.png" alt="" />
        </div>
      </div>
    </div>
    <ServiceFeaturePromo/>
  </section>
  
  );
}


const ServiceFeaturePromo=()=>{
  return (    <section className="sevice_promo_area sec_pad" style={{color:"white"}}>
  <div className="container">
    <div className="section_title text-center color_w">
     
      <h2>Qu'es qui sont spécial avec nos services</h2>
    </div>
    <div className="row ">
      <div className="col-lg-3 col-sm-6">
        <div className="service_promo_item">
          <div className="round">
            <i className="fab fa-dropbox"></i>
          </div>
            <h4 style={{color:"white"}}>Exécution rapide </h4>
          <p>
          Exécuter avec professionnalisme et qualité votre travail dans le respect du délai imparti est un devoir quotidien.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="service_promo_item">
          <div className="round">
            <i className="far fa-gem"></i>
          </div>
            <h4 style={{color:"white"}}>Délais de livraison</h4>
          <p>
          Nous orchestrons et mettons en place toutes les stratégies pour respecter les échéanciers
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="service_promo_item">
          <div className="round">
            <i className="fab fa-envira"></i>
          </div>
            <h4 style={{color:"white"}}>Meilleur qualité assurée</h4>
          <p>
          Dans la vision de digitaliser l’Afrique vous propose un rapport qualité prix inégalable dans chacune de nos prestations.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="service_promo_item">
          <div className="round">
            <i className="fas fa-desktop"></i>
          </div>
            <h4 style={{color:"white"}}>Responsive et prompt à la réaction</h4>
          <p>
          Mercury Tech est une équipe de jeunes professionnels, qualifiés et dynamiques prompt à la réaction.

          </p>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

export default Services