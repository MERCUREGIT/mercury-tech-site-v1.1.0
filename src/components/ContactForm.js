import React, { Component } from 'react';

class ContactForm extends Component {
    state = { 

     }


     handleSubmit = (e) =>{

            // fetch('https://mywebsite.com/endpoint/', {
            //     method: 'POST',
            //     headers: {
            //       'Accept': 'application/json',
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //       firstParam: 'yourValue',
            //       secondParam: 'yourOtherValue',
            //     })
            //   })


        
         e.preventDefault();

     }

    render() { 
        return (
        <form onSubmit={this.handleSubmit} id="contactForm" className="row contact_form">

        <div className="col-lg-12 form-group">
          <input className="form-control" type="text" id="name" name="name" placeholder="Jackson nelson" />
        </div>
        <div className="col-lg-12 form-group">
          <input className="form-control" type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="col-lg-12 form-group">
          <input className="form-control" type="text" id="subject" name="subject" placeholder="Sujet" />
        </div>
        <div className="col-lg-12 form-group">
          <textarea className="form-control" name="message" id="message" cols="30" rows="10"
            placeholder="Message"></textarea>
        </div>
        <div className="col-lg-12 text-right form-group">
          <button type="submit" className="theme_btn">
            Envoyez
          </button>
        </div>
        
      </form> );
    }
}
 
export default ContactForm;

