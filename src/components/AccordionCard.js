import React from 'react'


function AccordionCard ({serviceSpecialization, showSubServiceDetail, hideSubServiceDetail})
 {
    return (
    <div class="card rounded">
        <div class="card-header " id={serviceSpecialization._id}>
            
            {/* <h5 class="mb-0"> */}
                <button class="btn btn-link collapsed"  data-toggle="collapse" data-target={"#"+serviceSpecialization.id}
                aria-expanded="false" aria-controls={serviceSpecialization.id}>
                   <div className="Container-fluid p-0 m-0">
                        <div className="row" style={{padding:0}}>
                            <div className="col-10"> {serviceSpecialization.specialization}</div>
                            <div className="col-2 p-0" style={{color:"red"}}  onClick={()=>showSubServiceDetail(serviceSpecialization.name)}> plus <i class="fas fa-eye"></i></div>
                        </div>
                   </div>
                </button>
            {/* </h5> */}
        </div>

    </div>
    )
 }

export default AccordionCard