import React, { Component } from 'react';
import Header from './Header';
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, Image, Glyphicon} from 'react-bootstrap';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
   fetch('/api/users/:id')
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.setState({ users });
      })
  }


  render() {
    const thumb = this.state.users.map(user =>{
      return(
        <Col xs={6} md={4} key={user.pid}>
          <Thumbnail src={user.image_url} alt="image200x200">
            <h3>
            <Link to={`/products/${user.pid}`} key={product.pid}>{product.product_name}</Link></h3>
            <p>${product.price}</p>
            <span>
              <DropdownButton title="qty" id="bg-vertical-dropdown-2">
                {this.makeMenuItems(product.quantity)}
              </DropdownButton>
            </span>
            <p>
              <Button bsStyle="primary">Add to cart</Button>&nbsp;
            </p>
          </Thumbnail>
        </Col>
      )
    })

    return (
    <div>
      <Header />
          <row>
            <SideBar class="col-md-1" filter={this.state.filter}/>
            <Grid class="col-md-10">
          <Row>
            {thumb}
          </Row>
        </Grid>
      </row>
  </div>

    );
  }
}
export default Checkout;
