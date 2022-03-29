import React from 'react'
import "../components/styles/cover.css";



function  Community() {

return(
<main role="main" style={{height:"100vh"}} className="  container">
    <div className="row align-middle">
        <div className="col-12 col-md-6 community">
            
        </div>
        <div className="col-12 col-md-6  joinCommunity">
            <h1 className="cover-heading">Rejoin notre communautée</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <div className="lead">
              <button className="btn btn-lg btn-secondary">
                join our Community
              </button>
              <button className=" ml-5 btn btn-lg btn-secondary">
              Connecter vous
              </button></div>
        </div>
    </div>
  </main>

);
}
export default Community;