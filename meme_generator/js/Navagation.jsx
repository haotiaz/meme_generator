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
    }
  
    render() {
      return (
        // <Navbar bg="light" className="navbar py-5" variant="light">
        //     <Container>
        //         <Navbar.Brand href="/" className="meme-text" >Meme Generator</Navbar.Brand>
        //     </Container>
        // </Navbar>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      );
    }
}
  
export default Navigation;