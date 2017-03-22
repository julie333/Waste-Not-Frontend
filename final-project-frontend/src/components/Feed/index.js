import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { displayfeed } from '../../store/actions.js'
import { connect } from 'react-redux';
import './index.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    height: '50vh',
    width: '95%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Feed extends Component {

    addFeed = () => {
   console.log("Iam here")
        const fetchFeedAction = displayfeed(this.props.currentUser);
        this.props.dispatch(fetchFeedAction)
           .then((data) => {
                console.log(data)
            });
           
    };


    render() {
        console.log('in the feed');


        
        return (
            <div className="Feed">
                <div className="Feed-header">
                    <h2>Hey there! What would you like to share?</h2>
                </div>

                <RaisedButton label="Sign Up" primary={true} 
                    onClick={this.addFeed}/> 
                    <Paper style={style} zDepth={3}>
                        <List>
                            { 
                                
                                // this.addFeed.map(function(elem, index) {
                                //  return <ListItem key={ index } primaryText={elem} />
                                // }) 
                    
                             }
                        </List>
                    </Paper>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Feed);
