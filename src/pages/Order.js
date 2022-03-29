import React, {Component} from 'react';
import { SelectedServiceList } from '../components/OrderServiceForm';
import { RequestServiceContext } from '../context/RequestServiceContext';


class Order extends Component {
    static contextType = RequestServiceContext;
    state = { totalCost:'' }


    costCalculator = (obj) =>{
        let cost = 0;
        obj.forEach((element) => {
               cost += element.price
        });
        return cost;
    }


    render() { 
        const {removeRequestItem, serviceList} = this.context

        return (
        
         <div className="container">
            <div className="row">
                <div className="col-8 my-2 border rounded"  style={{height:"90vh", overflow:"scroll"}}>
                    <div className="mx-auto p-3 row">
                       <h2><i class="rounded-circle border ml-2 flat-white p-1 fab fa-servicestack"></i> Pagner de services </h2>
                    </div>
                       <SelectedServiceList removeRequestItem={removeRequestItem} listItem ={serviceList}/>
                </div>
                <div className="col-sm ">
                    <div className="mx-auto row">
                       <h2>Estimation T<i class="ml-1 flat-white p-3 fas fa-file-invoice"></i> tal</h2>
                    </div>
                    <div className="mx-auto  row">
                       <div className="col-6"><h6> TC </h6></div>
                       <div className="col-6">{this.costCalculator([...serviceList])} Franc CFA</div>
                    </div>
                    <div className="mx-auto  row">
                       <div className="col-6"><h6>TC + TVA(19,25%)</h6></div>
                       <div className="col-6">{this.costCalculator([...serviceList]) + (this.costCalculator([...serviceList])*19.25)/100 } Franc CFA</div>
                    </div>
                    <div className="mx-auto  row">
                       <div className="col-6"><h6> Temps D'execution </h6></div>
                       <div className="col-6">{this.costCalculator([...serviceList])} Jours</div>
                    </div>
                    <form>
                        
                            <input type="text" className="form-control mt-2" placeholder="votre nom" />
                            <input type="text" className="form-control mt-2" placeholder="email" />
                            <input type="text" className="form-control mt-2" placeholder="telephone" />
                    </form>
                    <div className="mx-auto py-3 row">
                        <a className ="theme_btn border"href="/">Soumetre pour execution</a>
                    </div>
                  
                    <div className="mx-auto py-3 row">
                        <h4 className=" py-3 ">NOTRE POLITIQUE D’EXECUTION</h4>
                        <p>
                        À Mercury Tech, nous mettons l’accent sur un travail rapide rigoureux et rentable. Nous sommes conscients que chaque minute représente la conquête d’un client. Time is money. Nous sommes axés sur le respect des datelines fixés. L’offre de nos services est suivie à un accompagnement de qualité pour mettre à niveau nos clients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default Order;