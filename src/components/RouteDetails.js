import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class RouteDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Tripitizi" />
                    <h1>Voici l'itineraire</h1>
                    </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}


export default RouteDetails
