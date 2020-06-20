import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import GenderButtom from './GenderButton';

export class UserDetailsForm extends Component {
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
                    <h1>Veuillez renseigner ces éléments</h1>
                    <br />
                    <h2>Choose your gender</h2>
                    <GenderButtom></GenderButtom>
                    <br/>
                      <TextField 
                        hintText="Choose your country" 
                        floatingLabelText="Country"
                        onChange={handleChange('userCountry')}
                        defaultValue={values.userCountry}
                    />
                    <br/>
                    <TextField 
                        hintText="Choose your age" 
                        floatingLabelText="Age"
                        onChange={handleChange('age')}
                        defaultValue={values.age}
                    />
                    <br/>
                    <usePlacesAutocomplete 
                        hintText="Choose your city" 
                        floatingLabelText="Destination"
                        onChange={handleChange('destinationCityName')}
                        defaultValue={values.destinationCityName}
                    />
                    <br/>
                    <TextField 
                        hintText="Choose your city" 
                        floatingLabelText="Destination"
                        onChange={handleChange('destinationCityName')}
                        defaultValue={values.destinationCityName}
                    />
                    <br/>
                    <TextField 
                        hintText="Choose your center of interest" 
                        floatingLabelText="Center of interest"
                        onChange={handleChange('userCenterOfInterest')}
                        defaultValue={values.userCenterOfInterest}
                    />
                    <br/>
                    <TextField 
                        hintText="Choose your type of traveler" 
                        floatingLabelText="Type of Traveler"
                        onChange={handleChange('travelerType')}
                        defaultValue={values.travelerType}
                    />
                    <br/>
                    <RaisedButton
                        label="Planifier"
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}


export default UserDetailsForm
