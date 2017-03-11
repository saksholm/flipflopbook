import React from 'react';


function withLocation(WrappedComponent){
  return class GeoLocation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        latitude: null,
        longitude: null,
        error: null,
      };
    }

    componentDidMount() {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          this.setState(
            {location: position.coords,
                error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchId);
    }

    render() {
      console.log();
      return <WrappedComponent location={this.state.location} {...this.props} />;

    }
  }

}
export default withLocation;
