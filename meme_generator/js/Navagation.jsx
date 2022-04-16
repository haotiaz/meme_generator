import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

class Navigation extends React.Component {
    /* Navagation bar that has a search bar */
  
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