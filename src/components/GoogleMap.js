import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      //センターにもってきたい経度と緯度を記述
      lat: 35.786203,
      lng: 140.369366
    },
    zoom: 13
  };

  render() {
    return (
      //サイズの大きさを指定
      <div style = {{ height: '50vw', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys = {{ key: `${process.env.GATSBY_GOOGLE_MAP_API_KEY}` }}
          defaultCenter = { this.props.center }
          defaultZoom = { this.props.zoom }
        >
          <AnyReactComponent
            //マーカーの緯度と経度
            lat = { 35.786203 }
            lng = { 140.369366 }
            text = "マーカー"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;