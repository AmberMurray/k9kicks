import React, { Component } from 'react';
import '../App.css';
import { ResponsiveEmbed  } from 'react-bootstrap';


const responsiveEmbedInstance = (
  <div style={{width: 660, height: 'auto'}}>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="http://aprilpug.com/wp-content/uploads/2014/03/Dog-Shoes.jpg" />
    </ResponsiveEmbed>
  </div>
);



class Main extends Component {
  render() {
    return (
      responsiveEmbedInstance
    );
  }
}
export default Main;
