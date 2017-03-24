import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';

const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};

class ToggleButton extends Component {

    addOrRemoveProduct = (product, isInputChecked) => {
        console.log('ISINPUTCHECKED', isInputChecked)
    }

    render() {
        return (
            <div style={styles.block}>
                <Toggle label="Join" style={styles.toggle} onToggle={this.addOrRemoveProduct} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ToggleButton);
