import React,{Component, useState} from 'react'
import ProjectCard from '../components/ProjectCard';
import {portfolioCardData, catergoryList} from "../Data/generalData"

class  Portfolio extends Component {
render(){
return(
<div>
{/* <!--breadcrumb_area--> */}
    <section className="breadcrumb_area parallax_effect" data-background="img/bg.jpg" style={{background: "url('assets/img/breadcrumb_bg.jpg') no-repeat center center / cover"}}>
      <div className="overlay_bg"></div>
      <div className="container">
        <div className="bread_content">
          <h2>Our Portfolio</h2>
        </div>
      </div>
    </section>
    {/* <!--breadcrumb_area-->
    <!--portfolio_area--> */}
    <PortfolioCatergoryList/>
 
</div>
);
}}

function ProjectCardList({matchItemList}){

  if(matchItemList.length !== 0){
    return  <div className="row portfolio_gallery wow fadeInUp" id="work-portfolio">{matchItemList.map(item=><ProjectCard  portfolioCardData ={item}/>)}</div>
  }
  else{
    return <div className="row portfolio_gallery wow fadeInUp" id="work-portfolio">
       {portfolioCardData.map(item=><ProjectCard key={item.project_id}  portfolioCardData ={item}/>)}
       </div>
  }

  }


function PortfolioCatergoryList(){
  const [list, setList] = useState([])

  const filter =(e)=>{
    let matchItem= catergoryList.find((item)=>item.id === e.target.name)
    setList(portfolioCardData.filter(e=>e.project_category === matchItem.name)) 
  }


  return     <section className="portfolio_area_three sec_pad wow fadeInUp">
              <div className="container">
                <div className="p_filter_info d-flex justify-content-center">
                  <h5>Short Portfolio:</h5>
                  <div id="portfolio_filter" className="portfolio_filter">
                    <div onClick={e=>setList(portfolioCardData)} className="work_portfolio_item active">All</div>
                    {catergoryList.map(e=><PortfolioCatergoryItem key={e.id} item={e} filter={filter}/>)}
                  </div>
                </div>
              <ProjectCardList matchItemList={list}/>
              </div>
            </section>
}

function PortfolioCatergoryItem({item, filter}){
  return  <div className="work_portfolio_item wow fadeInUp">
            <button onClick={e=>filter(e)} style={{border:"none", backgroundColor:"white"}} name={item.id}>{item.name}</button> 
          </div>
}

export default Portfolio