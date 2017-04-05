import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import ReactDOM from 'react-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import RaisedButton from 'material-ui/FlatButton';

const style = {
    width: '100%',
    height: '100vh',
    backgroundColor: '#222',
    fontFamily: 'Nunito',
    fontSize: 70,
    textAlign: 'center'
}

const buttonStyle = {
    width: 600,
    marginBottom: '3%',
    marginRight: 'auto',
    marginLeft: '10%',

    color: 'white'
};


export default class App extends Component {

    handleClick = (event) => {

        event.preventDefault();
        this.props.router.push('/login');
    };

    render() {

        const images = [{
            original: 'http://res.cloudinary.com/julie333/image/upload/v1491409781/wasting_mgnl7q.jpg',
            description: 'These shouldnt be going in there!',
        }, {
            original: 'http://res.cloudinary.com/julie333/image/upload/e_oil_paint:30/v1491409395/eduard-militaru-88755_niucuh.jpg',
            description: 'Planning on changing your Deco ?',
        }, {
            original: 'http://res.cloudinary.com/julie333/image/upload/e_art:eucalyptus/v1491411079/teddy_u2ejwf.jpg',
            description: 'Have a new Favorite?',
        }, {
            original: 'http://res.cloudinary.com/julie333/image/upload/v1491411128/teddy2_dujaor.jpg',
            description: 'Make it someone else`s new Favorite',
        }, {
            original: 'http://res.cloudinary.com/julie333/image/upload/e_art:incognito/v1491410124/tomt_fuqbxb.jpg',
            description: 'Eliminate the culture of waste',
        }, {
            original: 'http://res.cloudinary.com/julie333/image/upload/v1491409064/share_thi8ig.jpg',
            description: 'If you cant USE it, why not SHARE?',
        }]

  return (
    <div style={style}>
        <ImageGallery
          items={images}
          slideInterval={4000}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showBullets={false}
          showThumbnails={false}
          showNav={false}
          showIndex={false}
          onImageLoad={this.handleImageLoad}/>  
          <RaisedButton style={{width: '100%',height:'7%'}}
                        labelStyle={{fontSize: '40', color:'whitesmoke'}}
                        label=" Join Us. "
                        backgroundColor="#222" 
                        hoverColor="#ff4081" 
                        onClick={this.handleClick}
                        icon={<img src="logo.png" alt="logo"/>}
                      />
    </div>
 );
}}

