import React,{Component} from 'react'
import HomePortfolioItem from "../components/HomePortfolioItem";
import { v4 as uuidv4 } from 'uuid';
import {portfolioCardData} from "../Data/generalData"

class  HomePortfolioItemList extends Component {


annimationDelay = ["0.1s","0.2s","0.3s","0.4s","0.5s","0.6s"]


render(){
return(
    <>
        {this.annimationDelay.map((delay,index)=> {

            const  bestProject= portfolioCardData.filter(ele=>ele.best)
            if(bestProject.length >index){
                return <HomePortfolioItem key={uuidv4()}  portfolioCardData={bestProject[index] ? bestProject[index] : "no best"}   annimationDelay ={delay}/>
            }
            else {
                return false;
            }
            
            })}


    </> 
);
}}




export default HomePortfolioItemList