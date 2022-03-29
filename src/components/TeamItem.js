import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


export default function TeamItem({facebook,twitter,behance ,pininterrest, whatsapp, name, post}) {
    return ( <div className="col-lg-4 col-sm-6">
    <div className="team_item wow">
    <div className="img img_hover">
        <img src="assets/img/home-one/team5.jpg" alt="" />
        <a href="assets/img/home-one/team5.jpg" className="icon popup"><i className="fas fa-plus"></i></a>
    </div>
    <div className="tema_content">
        <Link to={`/biography/${name}`}>
        <h6>{name}</h6>
        </Link>
        <p>{post}</p>
    </div>
    <div className="team_social_icon">
        <a target="blank" href={facebook}><i className="fab fa-facebook-f"></i></a>
        <a target="blank" href={twitter}><i className="fab fa-twitter"></i></a>
        <a target="blank" href={behance}><i className="fab fa-behance"></i></a>
        {/* <a href="#"><i className="fab fa-dribbble"></i></a> */}
        {/* <a href="#"><i className="fab fa-tumblr"></i></a> */}
        <a target="blank" href={pininterrest}><i className="fab fa-pinterest-p"></i></a>
        <a target="blank" href={whatsapp}><i className="fab fa-whatsapp"></i></a>
    </div>
    </div>
</div>)
}

TeamItem.propTypes= {
    facebook:PropTypes.string
    ,twitter:PropTypes.string
    ,behance:PropTypes.string
     ,pininterrest:PropTypes.string
     , whatsapp:PropTypes.string,
      name:PropTypes.string.isRequired,
      post:PropTypes.string
}