import React, {Component} from "react";

class HomePageBestProjectCard extends Component {
 
    render(){
        return(
            <div className="col-lg-4 col-md-6 rounded shadow">
            <div className="offer_item pt-3 wow fadeInUp">
              <div className="img_hover rounded">
                <img src="assets//img/home-two/offer_img1.jpg" alt="" />
              </div>
              <div className="content">
                <h6>Unlimited Layouts</h6>
                <p>
                  Sed porta sollicitudin eros, vel sagittis turpis consequat
                  nec. Donec ac viverra ligula, in scelerisque leo. Proin
                  massa quam, ornare in porta quis pellentesque porta rutrum
                  erat
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default HomePageBestProjectCard;