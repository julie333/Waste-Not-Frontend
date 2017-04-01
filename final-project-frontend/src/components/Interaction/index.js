import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

const style = {
    fontFamily: 'Nunito',
    backgroundColor: '#222',
    textAlign: 'center',
}

class Interaction extends Component {

    render() {

        var message = this.props.message ? this.props.message : "Successful !";
        var open = this.props.open;

        return (
            <div style={{ marginTop : '15%'}}>
                <Snackbar bodyStyle={style}
                  open={open}
                  message={message}
                  autoHideDuration={4000}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Interaction);
