import React, { Component } from 'react';
import { connect } from 'react-redux';

const style = {
    marginTop: '1%',
    marginLeft: '1%',
    cssFloat:'left',
}

export default class Logo extends Component {

  render() {
        return (
            <div style={style} className="Logo">
            	<img src="http://res.cloudinary.com/julie333/image/upload/v1490977913/logo_CP6_icon_co0hel.ico"/>
            </div>
        );
    }
}



