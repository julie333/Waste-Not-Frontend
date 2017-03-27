import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import { formBox, groupsFormStyle, groupsFormTitle,imageStyle, buttonStyle,style } from './constants.js';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { addGroup } from '../../store/actions.js';
import ImageUpload from '../ImageUpload';



class AddGroup extends Component {

       constructor(props) {
        super(props);
                
}

    submitNewGroupData = (group) => {
        event.preventDefault();
        var adminId = this.props.currentUser.id;
        const addGroupAction = addGroup(this.state,adminId); 
        console.log('this.state inside the form ', this.state);
        console.log('this.props ', this.props);
      
    };


    groupNameInput = (event) => {
        this.setState({
            groupName: event.currentTarget.value,
        })

    };


    descriptionInput = (event) => {
        this.setState({
            description: event.currentTarget.value
        })
    };

    imageUrlInput = (groupImage) => {
        this.setState({
            groupImage: groupImage,
        })
        console.log("Success",groupImage)
    };

                            
    render () {
        return (
            <div>
                <div style={groupsFormTitle}>
                    <h2>Add New Group</h2>
                </div>
                <div style={formBox}>
                    <Paper style={groupsFormStyle} zDepth={5}>

                            <form  style={style}  onSubmit={this.submitNewGroupData}>
                            
                                {/*group Name*/}
                                  <TextField  style={style} 
                                    hintText="Group name"
                                    floatingLabelText="Group name"
                                    onChange={this.groupNameInput}
                                  /><br />

                                 {/*Description*/}
                                  <TextField  style={style} 
                                    hintText="Short Description"
                                    floatingLabelText="Description"
                                    onChange={this.descriptionInput}
                                  /><br />

                                  {/*Image*/}
                                  <p  style={style} >Upload Group Image</p>
                                  {console.log(this.props)}
                                  <div style={imageStyle} >
                                  <ImageUpload 
                                  imageUrlInput={this.imageUrlInput}
                                  />
                                  </div>

                               <FlatButton style={buttonStyle} backgroundColor="#A2AB58" 
                                           hoverColor="#67BCDB" label="Start New Group"
                                           onClick={this.submitNewGroupData}/> 
                            </form>
                        </Paper>
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(AddGroup);







      
             
       


