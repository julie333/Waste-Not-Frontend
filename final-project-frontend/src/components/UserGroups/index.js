import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { red600 } from 'material-ui/styles/colors'


class UserGroups extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        var groups = Object.keys(this.props.groupsToRender).length > 0 ? this.props.groupsToRender : [];

        console.log('this.props ', this.props)
        console.log('this.props.groupsToRender ', this.props.groupsToRender)

        return (    
<div className="UserGroups">
 
        <AutoRotatingCarousel
        label="Your Groups"
        open
         mobile={true}
         style={{ position: 'inherit', width: '100%',  fontFamily: 'Nunito',  }}
     >
      {groups.map((slide,index) => (
    
         <Slide
          key={slide.id}
          media={<img src= {slide.groupImage}/>}
          mediaBackgroundStyle={{ backgroundColor: '#E24E42' }}
          contentStyle={{ backgroundColor: red600,  fontFamily: 'Nunito', }}
          title={slide.groupName}
          subtitle={slide.description}
        />
           
        ))}

      </AutoRotatingCarousel>     
 
</div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(UserGroups);
