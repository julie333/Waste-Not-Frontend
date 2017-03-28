import Map from 'google-maps-react';

class GoogleMaps extends Component {

<Map google={this.props.google} zoom={14}>

  <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

  <InfoWindow onClose={this.onInfoWindowClose}>
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
      </div>
  </InfoWindow>
</Map>

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(GoogleMaps);