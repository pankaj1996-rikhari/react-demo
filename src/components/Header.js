import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
const Header = ()=>{
    return(
        <>
         <header className='sticky-top'>
         <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container>
        <Link to="/" style={{maxWidth: "190px"}}>
        <img src={require('../images/stiklogo.png')} className='img-fluid'/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='text-black me-3 text-decoration-none'>Home</Link>
            <Link to="/about" className='text-black me-3 text-decoration-none'>About</Link>
            <Link to="/service" className='text-black me-3 text-decoration-none'>Services</Link>
            <Link to="/contact" className='text-black me-3 text-decoration-none'>Contact</Link>
            <Link to="/product" className='text-black me-3 text-decoration-none'>Product</Link>
            <Link to="/blog" className='text-black text-decoration-none'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/adduser">
             <button className="btn btn-danger">Add User</button>
        </Link>
      </Container>
    </Navbar>
         </header>
        </>
    )
}
export default Header;