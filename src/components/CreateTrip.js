import React, { Component } from 'react';
import UserDetailsForm from './UserDetailsForm';
import Confirm from './Confirm';
import RouteDetails from './RouteDetails';

export class CreateTrip extends Component {
    state = {
        step: 1,
        gender: '',
        userCountry: '',
        age: '',
        destinationCityName: '',
        userCenterOfInterest: '',
        travelerType: '',
        
    }
// Proceed to next step
nextStep =  () => {
    const {step} = this.state;
    this.setState({
        step: step +1
    });
}
// Go back to previous step
prevStep =  () => {
    const {step} = this.state;
    this.setState({
        step: step -1
    });
}

// Handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

        
  render() {
      const { step } = this.state;
      const { gender, userCountry,age, destinationCityName, userCenterOfInterest, travelerType} = this.state;
      const values = { gender, userCountry, age, destinationCityName, userCenterOfInterest, travelerType}
        switch (step) {
            case 1:
                return (
                    <UserDetailsForm
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                return (
                <Confirm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                />
            );
            case 3:
                return (
                    <RouteDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    />
                );
        }
    }
}

export default CreateTrip
