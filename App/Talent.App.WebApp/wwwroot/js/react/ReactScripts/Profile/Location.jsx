import React, { useState } from 'react'
import Cookies from 'js-cookie'
import  {Countries} from '../../../../util/jsonFiles/countries.json';
import { Location } from '../Employer/CreateJob/Location.jsx';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export class Address extends React.Component {
    constructor(props) {
        super(props)

        const Address = props.Address ?
            Object.assign({}, props.Address)
            : {
                number: "",
                street: "",
                suburb: "",
                postcode: ""

            }

        this.state = {
            showEditSection: false,
            newMailAddress: Address
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveMailAddress = this.saveMailAddress.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        

    }

    openEdit() {
        const Address = Object.assign({}, this.props.Address)
        this.setState({
            showEditSection: true,
            newMailAddress: Address
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newMailAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newMailAddress: data
        })
    }

    saveMailAddress() {
        console.log(this.props.profileData)
        console.log(this.state.newMailAddress)
        const data = Object.assign({}, this.state.newMailAddress)
        this.props.profileData(this.props.profileData, data)
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
                    inputType="text"
                    label="Number"
                    name="number"
                    value={this.state.newMailAddress.number}
                    controlFunc={this.handleChange}
                    maxLength={40}
                    placeholder="Enter your House Number"
                    errorMessage="Please enter a valid House Number"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Street"
                    name="street"
                    value={this.state.newMailAddress.street}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your street name"
                    errorMessage="Please enter a valid street name"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Suburb"
                    name="suburb"
                    value={this.state.newMailAddress.suburb}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your suburb name"
                    errorMessage="Please enter a valid suburb name"
                />
               
                
                <ChildSingleInput
                    inputType="text"
                    label="Post code"
                    name="postcode"
                    value={this.state.newMailAddress.postcode}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your post code"
                    errorMessage="Please enter a valid post code"
                />
                 
                
                <button type="button" className="ui teal button" onClick={this.saveMailAddress}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>

            </div>
        )
    }

    renderDisplay() {
        let address = this.props.Address ? `${this.props.Address.number} ${this.props.Address.street} ${this.props.Address.suburb} ${this.props.Address.postcode}` : ""
        


        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                    <p>Address: {address}</p>
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
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
