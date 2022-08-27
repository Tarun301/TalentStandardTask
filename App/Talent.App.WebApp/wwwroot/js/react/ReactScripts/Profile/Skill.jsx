import React from 'react';
import { Button, ButtonGroup } from 'semantic-ui-react';
import Cookies from 'js-cookie';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                Skill: "",
                Level: ""
            } 

        this.state = {
            showAddSection: false,
            newSkills: details
        }

        this.openAdd = this.openAdd.bind(this)
        this.closeAdd = this.closeAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savenewSkills = this.savenewSkills.bind(this);
        this.renderAdd = this.renderAdd.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)

    }

    openAdd() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showAddSection: true,
            newSkills: details
        })
    }

    closeAdd() {
        this.setState({
            showAddSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newSkills)
        data[event.target.name] = event.target.value
        this.setState({
            newSkills: data
        })
        
    }

    savenewSkills(event) {
        console.log(this.state.newSkills)
        const data = Object.assign({}, this.state.newSkills)
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
            <form>
                <div className='ui sixteen wide column'>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Add Skills">Add Skills</option>
                        <option value="C#">C#</option>
                        <option value="python">Python</option>
                        <option value="HTML">HTML</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value=".NET">.NET</option>
                        <option value="SQL Server">SQL Server</option>
                    </select>
                </label>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Language Level">Skill Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                    </select>
                </label>

                <button type="button" className="ui teal button" onClick={this.savenewSkills}>Save</button>
                <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                </div>
           </form>  
        )

        
    }

    renderDisplay(){
        return(
            <div className='row'>
                <div className="ui sixteen wide column">
                
                    <React.Fragment>
                        <ButtonGroup widths='3' >
                        <Button>Skill</Button>
                        <Button>Level</Button>
                        <button type="button" className="ui right floated teal button" onClick={this.openAdd}>Add New</button>
                        </ButtonGroup>

                        

                    </React.Fragment>
                    
                </div>
            </div>
        )
    }
}
