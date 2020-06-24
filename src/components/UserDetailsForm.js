import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import GenderButtom from './GenderButton';
import country-select-demo from './UserCountrySelector';

//It's where user enter its information 

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
                        id="age"
                        hintText="Choose your age" 
                        floatingLabelText="Age"
                        onChange={handleChange("age")}
                        defaultValue={values.age}
                        characterLimit={3}
                        type="number"
                       onInput={(e)=>{ 
                      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)}}
                    />
                    <br/>
                    <country-select-demo />
                    <br/>
                      <TextField 
                        hintText="Country list" 
                        floatingLabelText="Choose your country"
                        onChange={handleChange('userCountry')}
                        defaultValue={values.userCountry}
                    />
                    <br/>
                    <usePlacesAutocomplete 
                        hintText="Destination autocomplete" 
                        floatingLabelText="Choose your city"
                        onChange={handleChange('destinationCityName')}
                        defaultValue={values.destinationCityName}
                    />
                    <br/>
                    <TextField 
                        hintText="Destination autocomplete" 
                        floatingLabelText="Choose your city"
                        onChange={handleChange('destinationCityName')}
                        defaultValue={values.destinationCityName}
                    />
                    <br/>
                    <br/>
                    <TextField 
                        hintText="Date picker" 
                        floatingLabelText="Choose your date"
                        onChange={handleChange('userCenterOfInterest')}
                        defaultValue={values.userCenterOfInterest}
                    />
                    <br/>
                    <TextField 
                        hintText="Center of interest choices" 
                        floatingLabelText="Choose your center of interest"
                        onChange={handleChange('userCenterOfInterest')}
                        defaultValue={values.userCenterOfInterest}
                    />
                    <br/>
                    <TextField 
                        hintText="Type of traveler list" 
                        floatingLabelText="Choose your type of traveler"
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
