import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends React.Component {
    /* Index page that searchs for images
     */
  
    constructor(props) {
      super(props);
      let { searchText } = props;
      this.state = {searchText: searchText};
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      this.setState({searchText: event.target.value});
    }
  
    render() {
      let { searchText } = this.state;
      return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="meme-text navbar-text">Meme Generator</Navbar.Brand>
            <Navbar.Collapse>
              <form action="/search/" method="get" className="navbar-form">
                <input type="text" name="q" value={searchText} onChange={this.handleChange} required />
                <input type="submit" value="Search" />
              </form>
            </Navbar.Collapse>
            </Container>
</Navbar>
      );
    }
}
  
export default Navigation;