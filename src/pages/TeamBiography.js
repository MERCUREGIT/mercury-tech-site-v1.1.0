import React, {Component} from 'react';

class TeamBiography extends Component {
    state = {  }
    
    render() { 
        console.log('props passed to component', this.props.match.params.name)
        return ( <h1> About {this.props.match.params.name} </h1> );
    }
}
 
export default TeamBiography;