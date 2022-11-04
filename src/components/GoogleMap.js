import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { StaticImage } from 'gatsby-plugin-image';


const AnyReactComponent = ({ text }) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, calc(-100% - 10px))",
      }}
    >
      <div
        style={{
          padding: "5px",
          backgroundColor: "white",
          wordBreak: "keep-all",
          // backgroundImage: "url('images/logo.png)'",
          // backgroundSize: "contain",
          // backgroundPosition: "center center",
          // display: "block"
        }}
      >
        {text}
      </div>
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "10px 10px 0px 10px",
          borderColor: "white transparent transparent transparent",
        }}
      />
    </div>
  );
};

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
            text = {"サンパーキング"}
          >
          </AnyReactComponent>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;