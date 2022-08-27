import React from 'react';
import Cookies from 'js-cookie';

export class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: 0
        };
        this.update = this.update.bind(this);
    };

    update(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.props.saveProfileData(data);
        let description = event.target.value;
        this.setState({
            characters: description.length
        })
        
    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 150;
        

        
        return (
            <React.Fragment>
                <div className="four wide column">
                    <h3>Description</h3>
                    <div className="tooltip">Write a description of your company.</div>
                </div>
                <div className="ten wide column">
                    <div className='field'>
                        <textarea maxLength={characterLimit} name='summary' placeholder='Please provide a Short summary about yourself' value={this.props.summary}></textarea>
                        <p>Summary must be no more than { characters } characters</p>
                    </div>
                    <div className="field" >
                        <textarea maxLength={characterLimit} name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." value={this.props.description} ></textarea>
                    </div>
                    <p>Description must be between { characters }- { characterLimit } characters.</p>
                    <button type="button" className="ui teal button" onClick={this.update}>Save</button>
                </div>
            </React.Fragment>
        )
    }
}
