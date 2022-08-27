/* Language section */
import React, { Component } from "react";
import { Button, ButtonGroup } from 'semantic-ui-react';
import Cookies from 'js-cookie';

export default class Language extends Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                language: "",
                level: ""
            } 

        this.state = {
            showAddSection: false,
            newLanguages: details
        }

        this.openAdd = this.openAdd.bind(this)
        this.closeAdd = this.closeAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveLanguages = this.saveLanguages.bind(this);
        this.renderAdd = this.renderAdd.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)

    }

    openAdd() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showAddSection: true,
            newLanguages: details
        })
    }

    closeAdd() {
        this.setState({
            showAddSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newLanguages)
        data[event.target.name] = event.target.value
        this.setState({
            newLanguages: data
        })
        
    }

    saveLanguages(_event) {
        console.log(this.state.newLanguages)
        const data = Object.assign({}, this.state.newLanguages)
        this.props.updateProfileData(data)
        this.closeAdd()
    }

   

    render() {
        return (
            this.state.showAddSection ? this.renderAdd() : this.renderDisplay()
        )
    }


    renderAdd() {
        return (
            
                <div className='ui sixteen wide column'>
                    

                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Language">Add Language</option>
                        <option value="English">English</option>
                        <option value="Korean">Korean</option>
                        <option value="French">French</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Mandarian Chinese">Mandarian Chinese</option>
                        <option value="Spanish">Spanish</option>
                    </select>
              
               
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Language Level">Language Level</option>
                        <option value="Basic">Basic</option>
                        <option value="Conversational">Conversational</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native/Bilingual">Native/Bilingual</option>
                    </select>
                </label>

                

                <button type="button" className="ui teal button" onClick={this.saveLanguages}>Save</button>
                <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                </div>
         
        )

        
    }

    renderDisplay(){
        return(
            <div className='row'>
                <div className="ui sixteen wide column">
                
                    <React.Fragment>
                        <ButtonGroup widths='3' >
                        <Button>Language</Button>
                        <Button>Level</Button>
                        <button type="button" className="ui right floated teal button" onClick={this.openAdd}>Add New</button>
                        </ButtonGroup>

                        

                    </React.Fragment>
                    
                </div>
            </div>
        )
    }
}

