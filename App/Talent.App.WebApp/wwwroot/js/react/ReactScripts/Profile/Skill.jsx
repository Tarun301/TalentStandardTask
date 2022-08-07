import React from 'react';
import { Button, ButtonGroup } from 'semantic-ui-react';
import Cookies from 'js-cookie';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        const Skill = props.Skill ?
            Object.assign({}, props.Skill)
            : {
                Skill: "",
                Level: ""
            } 

        this.state = {
            showAddSection: false,
            newSkills: Skill
        }

        this.openAdd = this.openAdd.bind(this)
        this.closeAdd = this.closeAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this);
        this.renderAdd = this.renderAdd.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)

    }

    openAdd() {
        const Skill = Object.assign({}, this.props.Skill)
        this.setState({
            showAddSection: true,
            newSkills: Skill
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

    handleSave(event) {
        alert('Your Skills is updated Successfully');
        event.preventDefault();
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

                <button type="button" className="ui teal button" onClick={this.handleSave}>Save</button>
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
