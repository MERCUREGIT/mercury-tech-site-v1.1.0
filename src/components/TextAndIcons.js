import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

function TextAndIcons({item}) {
    return  <div className="col-lg-3 col-sm-6 ">
              <div className="service_promo_item wow fadeInUp" data-wow-delay="0.5s">
                <div className="round flat-white">
                  <i className={item.icon}></i>
                </div>
                  <h3>{item.title}</h3>
                <p>
                {item.mainText.substr(0,51) + "..."} <br/> <Link to="/about#special">lire plus</Link> 
                </p>
              </div>
            </div>}

export default TextAndIcons;