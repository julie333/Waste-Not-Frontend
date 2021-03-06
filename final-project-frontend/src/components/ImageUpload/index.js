import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'waste-not1';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/julie333/upload';


class ImageUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        };
    }


    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
                this.props.imageUrlInput(this.state.uploadedFileCloudinaryUrl)
                console.log(this.state.uploadedFileCloudinaryUrl)
            }
        });
    }


    render() {
        return (
            <div>
		        <div className="FileUpload">
		          	<Dropzone
			            onDrop={this.onImageDrop.bind(this)}
			            multiple={false}
			            accept="image/*">
			            <div>Drop an image or click to select a file to upload.</div>
		          	</Dropzone>
		        </div>

		        <div>
		          	{this.state.uploadedFileCloudinaryUrl === '' ? null :
		          	<div>
		            	<p>{this.state.uploadedFile.name}</p>
		          		<img src={this.state.uploadedFileCloudinaryUrl} alt="uploaded file"/>
		         	</div>}
       			</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ImageUpload);
