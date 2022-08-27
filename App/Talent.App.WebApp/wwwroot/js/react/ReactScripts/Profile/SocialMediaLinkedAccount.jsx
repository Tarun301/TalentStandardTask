/* Social media JSX */
import React from 'react';
import { Button, Popup, Icon } from 'semantic-ui-react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                LinkedIn: "",
                GitHub: ""
            } 

        this.state = {
            showEditSection: false,
            newLinkedAccounts: details
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveLinkedAccounts = this.saveLinkedAccounts.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)


    }

    openEdit() {
        const details = Object.assign({}, this.props.details)
        this.setState({
            showEditSection: true,
            newLinkedAccounts: details
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newLinkedAccounts)
        data[event.target.name] = event.target.value
        this.setState({
            newLinkedAccounts: data
        })
    }

   

        

    componentDidMount() {
        $('.ui.button.social-media')
            .popup(Popup);
    }

    saveLinkedAccounts() {

        console.log(this.state.newLinkedAccounts)
        const data = Object.assign({}, this.state.newLinkedAccounts)
        this.props.saveProfileData(data)
        this.closeEdit()
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

   renderEdit(){
    return (
        <div className="ui sixteen wide column">

            <ChildSingleInput
                inputType="text"
                label="Linkedinurl"
                name="linkedinurl"
                value={this.state.newLinkedAccounts.LinkedIn}
                controlFunc={this.handleChange}
                maxLength={80}
                placeholder="Enter your LinkedIn Url"
                errorMessage="Please enter a valid LinkedIn Url"
            />

            <ChildSingleInput
                inputType="text"
                label="GitHuburl"
                name="gitHuburl"
                value={this.state.newLinkedAccounts.GitHub}
                controlFunc={this.handleChange}
                maxLength={80}
                placeholder="Enter your GitHub Url"
                errorMessage="Please enter a valid GitHub Url"
            />

            <button type="button" className="ui teal button" onClick={this.saveLinkedAccounts}>Save</button>
            <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
        
            
        </div>

        
    )

    
   }
   renderDisplay(){
    let GitHub = this.props.SocialMediaLinkedAccount ? `${this.props.SocialMediaLinkedAccount.GitHub}` : ""
    let LinkedIn = this.props.SocialMediaLinkedAccount ? `${this.props.SocialMediaLinkedAccount.LinkedIn}` : ""
    return (
        <div className='row'>
            <div className="ui sixteen wide column">

                <React.Fragment>

                    
                    <Button color='linkedin'>
                    <Icon name='linkedin' /> LinkedIn
                    <p>{LinkedIn}</p>
                    </Button>

                    <Button color='black'>
                    <Icon name='github' /> GitHub
                    <p>{GitHub}</p>
                    </Button>

                </React.Fragment>
                <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>

            </div>
        </div>
        
    )
}

}