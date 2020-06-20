import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Tripitizi" />
                    <h1>Nous recherchons un itineraire</h1>
                    <br/>
                    <RaisedButton
                        label="Chargement ..."
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}

export default Confirm
