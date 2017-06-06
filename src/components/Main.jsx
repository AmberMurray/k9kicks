import React, { Component } from 'react';
import '../App.css';
import { ResponsiveEmbed  } from 'react-bootstrap';


const responsiveEmbedInstance = (
  <div className='container'>
  <div className='col-md-6 col-md-offset-3'>
    <ResponsiveEmbed a16by9>
      <embed type="image/svg+xml" src="http://aprilpug.com/wp-content/uploads/2014/03/Dog-Shoes.jpg" />
    </ResponsiveEmbed>
  </div>
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
