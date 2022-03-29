import React,{Component} from 'react';
import Cover from "../helpers/Cover";
import PatnersSection from "../components/PatnersSection";
import {homeText} from "../Data/generalData";


class  About extends Component {

 

render(){
return(
 
    <div >
            <section className="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('https://aureliusenterprise.com/wp-content/uploads/2017/08/about-us.jpg') no-repeat center center / cover"}}>
            <div className="overlay_bg"></div>
            <div className="container">
                <div className="bread_content">
                <h2>À propos de nous</h2>
                </div>
            </div>
            </section>

            <section className="mission_area sec_pad">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-6 ">
                        <Cover size ={"100vh"} image={"url('/assets/img/about/Vision_Mission.jpg') no-repeat center 100% / cover"}/>
                        </div>
                        <div className="col-lg-6 shadow rounded">
                        <div className="section_title text-center">
                                {/* <h6 className="wow fadeInUp">Ou vas Mercury-Tech</h6> */}
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Notre Vision
                                   
                                </h1>
                            </div>
                            <hr></hr>
                            <p>
                            Conduire l’Afrique à la numérisation informatique et à l’innovation.
                            </p>
                            <div className="section_title text-center">
                                {/* <h6 className="wow fadeInUp">Ou vas Mercury-Tech</h6> */}
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Notre Mission
                                </h1>
                                <hr></hr>
                            </div>
                            <p>
                            Mercury Tech a pour mission de transformer et de reconstruire et de faire de l’Afrique l’une des plus grandes industries technologiques mais aussi un endroit meilleur pour y vivre. Ceci en :
                            </p>
                            <div className="container">
                                <div className="row py-2">
                                  
                                    <div className="round flat-white wow fadeInUp" data-wow-delay="0.4s" style={{borderColor:"white",  width: "20px"}}>
                                        
                                    </div>
                                    <div className="col-9">
                                        Fournissant la meilleure qualité des services et produits informatiques (services numériques) dans le marché africain et international et aux entreprises avec facilité et flexibilité à un coût optimal.
                                    </div>
                                </div>
                                <div className="row py-2">
                                <div className="round flat-white wow fadeInUp" data-wow-delay="0.4s" style={{borderColor:"white", width: "20px"}}>
                                        
                                    </div>
                                    <div className="col-9">
                                    Encourager l’adoption et l’utilisation de la technologie en Afrique.
                                    </div>
                                </div>
                                <div className="row py-2">
                                <div className="round flat-white wow fadeInUp" data-wow-delay="0.4s" style={{borderColor:"white", width: "20px"}}>
                                        
                                    </div>
                                    <div className="col-9">
                                    Réduire la fracture numérique de notre continent avec une de grandes industries technologiques.
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
           
           
                    </div>
                </div>
            </section>

            <Cover title="Qui Nous Sommes" overlay={true} size ={"80vh"} image={"url('/assets/img/about/Qui_sommes_nous.jpg') no-repeat center 50% / cover"}/>

            <WhoWeAre />
            <section className="process_area sec_pad bg_color">
            <div className="container pt-0">
                <div className="section_title text-center">
                <h6>Notre processus de travaille</h6>
                <h1>NOTRE PROCESSUS</h1>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="process_inner">
                    
                    {/* add inner process here */}

                    <div className="precess_item media">
                        <div className="icon flat-white">01</div>
                        <div className="media-body">
                            <h6>Créer votre package de service</h6>
                        <p>
                        Mercury Tech vous propose en fonction de vos besoins et de votre budget des packages taillés sur mesures pour vous. Aussi nos propositions comprennent une OFFRE A LA CARTE qui vous permet d’affinité au mieux l’accompagnement que vous souhaitez que notre entreprise vous procure. Faites-nous confiance dans la réalisation de vos travaux et vous serez plus que satisfait.
                        </p>
                        </div>
                    </div>
                    <div className="precess_item media">
                        <div className="icon flat-white ">02</div>
                        <div className="media-body">
                    <h6>Offre à la carte</h6>
                        <p>
                        À Mercury Tech, notre offre à la carte vous permet de tailler votre service à votre besoin. Vous choisissez le service, Mercury Tech le réalise et vous accompagne au quotidien pour l’atteinte de vos objectifs.
                        </p>
                        </div>
                    </div>
                    <div className="precess_item media">
                        <div className="icon flat-white ">03</div>
                        <div className="media-body">
                            <h6>Contactez-nous</h6>
                        <p>
                        Mercury Tech est situé à Emana en face de l’hôpital Deo Gracia <br/>
                        <a href="tel:+237672038679">+(237) 672 038 679</a><br/>
                        Courriel : contact@mercury-cm.com

                        </p>
                        </div>
                    </div>
                    <div className="precess_item media">
                        <div className="icon flat-white">04</div>
                        <div className="media-body">
                            <h6>Nous réalisons votre projet</h6>
                        <p>
                        Mercury Tech est une équipe de professionnel qualifiée qui réalise des projets pour vous aider dans l’atteinte de vos objectifs. Grâce à nos différents pôles nous travaillons avec rigueur et professionnalisme.
                        </p>
                        </div>
                    </div>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="process_img rounded" style={{background: "url('assets/img/about/Le Process-01.jpg') no-repeat center center / contain"}}></div>
                </div>
                </div>
            </div>
            </section>
        
            <SpecialChezMercury list = {homeText.section1.subText}/>

    
            <PatnersSection />
  
    </div>
);
}}




function WhoWeAre(){
    return <div className="customIndex zindex-modal  container-fluid">
                <div className="row">
                <div  className="shadow wow fadeInUp bg-white rounded mx-auto col-11 py-2 col-md-9 mt-0 mb-4 px-md-5">
                        <p className="offset px-5">
                            Mercury Tech est un collectif de jeune ingénieur camerounais diplômé en informatique soucieux de numérisés l’Afrique pour qu’elle s’arrime aux autres continents. Constituée de jeunes dynamique, créatifs, rigoureux et professionnel, Mercury Tech est la start-up du futur qui vient faire la différence sur le marché comme son slogan le dit MAKE A DIFFERENCE.
                            <br/>
                            <br/>
                          
                            Choisir Mercury c’est choisir la différence et l’innovation. L’équipe Mercury Tech travaille d’arrache-pied pour satisfaire sa clientèle de plus en plus grandissante. Le respect des délais est un fer de lance pour nous et vous apporté des solutions informatiques qualifiante représente notre raison d’être.
                        </p>
                    </div>
                </div>
           </div>
}


function SpecialChezMercury ({list}){
    return <>
                <section className="" >
                    <div className="container" >
                        <h1 className='text-center'>Qu’est ce qui est spécial chez Mercury Tech</h1>
                    </div>
                </section> 
                <div id="special" className="container">
                        
                        <div className="row px-3 py-5">
                            {list.map(item=><SpecialChezMercuryItem key={item.id} item={item} />)}
                        </div>
                    </div>
            </>
        
    
}

function SpecialChezMercuryItem({item}){
return <div  className="col-12 my-3 col-md-6 mx-auto">
                <div className="precess_item media">
                    <div className={"icon flat-white"} ><span className={item.icon}></span></div>
                        <div className="media-body">
                            <h6>{item.title}</h6>
                        <p>{item.mainText}</p>
                        </div>
                    </div>

                </div>
}





export default About