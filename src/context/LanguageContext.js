import React, {Component, createContext} from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = { 
        isFrench: true
     }

    toggleLanguage = () =>{this.setState({ isFrench: !this.state.isFrench})}
    
    render() { 
        return ( 
            <LanguageContext.Provider value={{...this.state, toggleLanguage: this.toggleLanguage}}> 
                {this.props.children}
            </LanguageContext.Provider>
         );
    }
}
 
export default LanguageContextProvider;