import React from 'react'
import Cookies from 'js-cookie'
import { Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export class Address extends React.Component {
    constructor(props) {
        super(props)

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                number: "",
                street: "",
                suburb: "",
                country: "",
                city: "",
                postcode: ""
            }

        this.state = {
            showEditSection: false,
            newAddress: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveAddress = this.saveAddress.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        

    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newAddress: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
    }

    saveAddress(){
        
        console.log(this.state.newAddress)
        const data = Object.assign({}, this.state.newAddress)
        this.props.saveProfileData(data)
        this.closeEdit()
    }

   
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
       
    }

    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="number"
                    label="Number"
                    name="number"
                    value={this.state.newAddress.number}
                    controlFunc={this.handleChange}
                    maxLength={10}
                    placeholder="Enter the House Number"
                    errorMessage="Please Enter A valid House number"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Street"
                    name="street"
                    value={this.state.newAddress.street}
                    controlFunc={this.handleChange}
                    maxLength={40}
                    placeholder="Enter the Street Name"
                    errorMessage="Please Enter A valid street name"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Suburb"
                    name="suburb"
                    value={this.state.newAddress.suburb}
                    controlFunc={this.handleChange}
                    maxLength={40}
                    placeholder="Enter the Suburb Name"
                    errorMessage="Please Enter A valid Suburb Name"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Country"
                    name="country"
                    value={this.state.newAddress.country}
                    controlFunc={this.handleChange}
                    maxLength={20}
                    placeholder="Enter the Country Name"
                    errorMessage="Please Enter A valid country name"
                />
                <ChildSingleInput
                    inputType="text"
                    label="City"
                    name="city"
                    value={this.state.newAddress.city}
                    controlFunc={this.handleChange}
                    maxLength={20}
                    placeholder="Enter the City Name"
                    errorMessage="Please Enter A valid City Name"
                />
                <ChildSingleInput
                    inputType="number"
                    label="Postcode"
                    name="postcode"
                    value={this.state.newAddress.postcode}
                    controlFunc={this.handleChange}
                    maxLength={10}
                    placeholder="Enter the PostCode"
                    errorMessage="Please Enter A valid PostCode"
                />

                <button type="button" className='ui teal button' onClick={this.saveAddress}>Save</button>
                <button type="button" className='ui button' onClick={this.closeEdit}>Cancel</button>

            </div>
        )
    }

    renderDisplay(){

        let number = this.props.details ? this.props.details.number : ""
        let street = this.props.details ? this.props.details.street : ""
        let suburb = this.props.details ? this.props.details.suburb : ""
        let country = this.props.details ? this.props.details.country : ""
        let city = this.props.details ? this.props.details.city: ""
        let postcode = this.props.details ? this.props.details.postcode : ""

        return (
            <div className='row'>
                <div className='ui sixteen wide column'>
                    <React.Fragment>
                        <div className='ui buttons'>
                            <button className='ui button'>Number</button>
                            <button className='ui button'>Street</button>
                            <button className='ui button'>Suburb</button>
                            <button className='ui teal button' onClick={this.openEdit}>Edit</button>
                        </div>

                        <p>{number}</p>
                        <p>{street}</p>
                        <p>{suburb}</p>
                        <p>{country}</p>
                        <p>{city}</p>
                        <p>{postcode}</p>
                    </React.Fragment>

                </div>

            </div>
        )



    }

}

export class Nationality extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    
    
    render (){
        return (
            <div className='ui sixteen wide column'>
                <form>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Select your Nationality">Select your Nationality</option>
                            <option value="England">England</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </label>
                </form>
            </div>
        );
    }
}
