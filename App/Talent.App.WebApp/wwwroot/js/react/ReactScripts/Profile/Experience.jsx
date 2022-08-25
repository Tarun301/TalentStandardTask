import React, { Component } from "react";
import Cookies from 'js-cookie';
import { Button } from "semantic-ui-react";
import { ChildSingleInput } from '../Form/SingleInput.jsx';
export default class Experience extends Component {
    constructor(props) {
        super(props)

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                company: "",
                position: "",
                responsibilities: "",
                start: "",
                end: ""
            }

        this.state = {
            showEditSection: false,
            newExperience: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveExperience = this.saveExperience.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newContact: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newExperience)
        data[event.target.name] = event.target.value
        this.setState({
            newExperience: data
        })
    }

    saveExperience() {
        console.log(this.props.Id)
        console.log(this.state.newExperience)
        const data = Object.assign({}, this.state.newExperience)
        this.props.updateProfileData(this.props.Id, data)
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
                    label="Company"
                    name="company"
                    value={this.state.newExperience.company}
                    controlFunc={this.handleChange}
                    required maxLength={20}
                    placeholder="Enter the company name"
                    errorMessage="Please enter a valid company name"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Position"
                    name="position"
                    value={this.state.newExperience.position}
                    controlFunc={this.handleChange}
                    required maxLength={20}
                    placeholder="Enter your position"
                    errorMessage="Please enter a valid position"
                />
                <ChildSingleInput
                    inputType="text"
                    label="Responsibilities"
                    name="responsibilities"
                    value={this.state.newExperience.responsibilities}
                    controlFunc={this.handleChange}
                    required maxLength={80}
                    placeholder="Enter your responsibilities"
                    errorMessage="Please enter a valid responsibilities"
                />

                <ChildSingleInput
                    inputType="text"
                    label="Start"
                    name="start"
                    value={this.state.newExperience.start}
                    controlFunc={this.handleChange}
                    required maxLength={15}
                    placeholder="Enter a start date"
                    errorMessage="Please enter a valid start date"
                />

                <ChildSingleInput
                    inputType="text"
                    label="End"
                    name="end"
                    value={this.state.newExperience.end}
                    controlFunc={this.handleChange}
                    required maxLength={15}
                    placeholder="Enter a end date"
                    errorMessage="Please enter a valid end date"
                />

                <button type="button" className="ui teal button" onClick={this.saveExperience}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {

        let company = this.props.details ? this.props.details.company : ""
        let position = this.props.details ? this.props.details.position : ""
        let responsibilities = this.props.details ? this.props.details.responsibilities : ""
        let start = this.props.details ? this.props.details.start : ""
        let end = this.props.details ? this.props.details.end : ""
        

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>

                        <div className="ui buttons">
                        <button className="ui button">Company</button>
                        <button className="ui button">Position</button>
                        <button className="ui button">Responsibilities</button>
                        <button className="ui button">Start</button>
                        <button className="ui button">End</button>
                        <button className="ui teal button" onClick={this.openEdit}> + Add New</button>
                        </div>

                
                        <p>{company}</p>
                        <p>{position}</p>
                        <p>{responsibilities}</p>
                        <p>{start}</p> 
                        <p>{end}</p>                        
                    </React.Fragment>
                
                </div>
            </div>
        )
    }
}


