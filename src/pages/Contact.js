import React,{Component} from 'react'
import ContactForm from '../components/ContactForm'
class  Contact extends Component {
render(){
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section className="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div className="overlay_bg"></div>
      <div className="container">
        <div className="bread_content">
          <h2>Contactez-Nous</h2>
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--contact_area--> */}
    <section className="contact_area sec_pad">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="contact_info_right">
              <h2>Contact </h2>
              <div className="media c_info_item">
                <div className="icon"><i className="fas fa-home"></i></div>
                <div className="media-body">
                  <h5>Notre Address</h5>
                  <p>
                    Cameroun-Yaoundé, dragage carrefour SNH (En face Unesco)
                  </p>
                </div>
              </div>
              <div className="media c_info_item">
                <div className="icon"><i className="fas fa-headphones"></i></div>
                <div className="media-body">
                  <h5>Téléphone</h5>
                  <p>
                    <span> Bureau:
                      <a href="tel:+237697835780">+237 697 835 780</a></span>
                  </p>
                </div>
              </div>
              <div className="media c_info_item">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div className="media-body">
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:contact@mercury-cm.com">contact@mercury-cm.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_inner">
              <h2>Envoyez un message</h2>
                <ContactForm/>
              <div id="success">Your message succesfully sent!</div>
              <div id="error">
                Opps! There is something wrong. Please try again
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--contact_area--> */}
    {/* <section className="map_area">
      <div id="mapBox2" className="mapBox1">
          <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d254733.3971585353!2d11.83009801712371!3d3.97728887668132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1603798142589!5m2!1sen!2scm" width="600" height="450" frameBorder="0" style={{border:0, height:'100%', width:"100%"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    </section> */}
</div>
);
}}





export default Contact