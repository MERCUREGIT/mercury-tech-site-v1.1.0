import React, {Component, createContext} from 'react';



export const RequestServiceContext = createContext();

class RequestServiceContextProvider extends Component {
    state = { serviceList:[]}

    addRequestItem =(item)=>{
        if(this.state.serviceList.find( el => el.serviceRequested === item.serviceRequested)){
            this.state.serviceList.forEach((element, position)=>{
                if(element.serviceRequested === item.serviceRequested){
                  let current =  {...this.state.serviceList[position]};
                        current.number += item.number;
                  let servRequest = [...this.state.serviceList];
                        servRequest[position] = current;
                      this.setState({serviceList:servRequest})
                }})
        }
        else{
            this.setState({serviceList:[...this.state.serviceList,item]});
        }
        
    }
    deleteRequestItem =(element) =>{
        this.setState({serviceList:this.state.serviceList.filter(item=>element.serviceRequested !== item.serviceRequested)});}



    render() { 
        return ( 
                <RequestServiceContext.Provider value={{...this.state, addRequestItem: this.addRequestItem, removeRequestItem:this.deleteRequestItem}}>
                    {this.props.children}
                </RequestServiceContext.Provider>
         );
    }
}
 
export default RequestServiceContextProvider;