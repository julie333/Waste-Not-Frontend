import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'

class UserGroups extends Component {

    displayGroups = () => {
        event.preventDefault();
        this.setState({
            groupsToRender: this.props.groupsToRender
        })

        console.log(this.props.groupsToRender)
        this.props.router.push('/groups');
    };


    render() {

        var groups = Object.keys(this.props.groupsToRender).length > 0 ? this.props.groupsToRender : [];

        return (
            <div className="UserGroups">

        { Object.keys(groups).length > 0 &&
   
          <AutoRotatingCarousel
          label="Your Groups"
          open
          mobile={true}
          style={{position: 'inherit', width: '100%',  fontFamily: 'Nunito'}}
          onStart={this.displayGroups}
          >
            { groups.map((slide,index) => (      
                <Slide
                key={slide.id}
                media={<img src={slide.groupImage} alt="group"/>}
                mediaBackgroundStyle={{ backgroundColor: 'whitesmoke' }}
                contentStyle={{ backgroundColor: '#67BCDB',  fontFamily: 'Nunito', }}
                title={slide.groupName}
                subtitle={slide.description}
                />        
            ))}
          </AutoRotatingCarousel>     
         }
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(UserGroups);
