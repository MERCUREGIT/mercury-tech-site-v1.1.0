import React from "react"
import TextAndIcons from "./TextAndIcons"
import {homeText} from "../Data/generalData";

const TeamFeatureArea =() =>
{
return (
<section className="sevice_promo_area_two sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center p-5">
            {homeText.section1.mainTitle}
            </h1>
          </div>
          {homeText.section1.subText.map(item=> <TextAndIcons key={item.id} item={item} />)}
        </div>
      </div>
    </section>
)
}

export default TeamFeatureArea;