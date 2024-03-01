import './App.css'
import {  Card, Container,  Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <div className='background'></div>
      <div style={{display:'flex', width: '100dvw' , alignItems:"center", justifyContent:'center', marginBottom:'5rem'}}>
      <Card bg={'info'} style={{ display: 'flex', alignItems:'center', flexDirection: 'column', width: '26rem' }}>
      <Card.Img variant="top" src="/logo-name-nosolution.png" style={{aspectRatio:'square', width:'20rem', display:'flex', padding: 0, margin:0,}} />
      <Card.Body style={{paddingBottom: 0, paddingTop: 0}}>
      <Card.Text style={{textAlign:'center'}}>
          DIGITAL SOLUTIONS
        </Card.Text>
        <Card.Title style={{textAlign:'center'}} >Connect With Us</Card.Title>
        <Card.Text>
          If you would like to keep up on the latest  content or book a consultation we can be found below 
        </Card.Text>
      </Card.Body>
      </Card> 
            </div>
            <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <a href='https://www.pattersonhackworth.com'>        
      <Navbar style={{paddingLeft:'1rem'}} className="bg-body-tertiary navbar logo">
        <Container className='navbar' >
          <Navbar.Brand href='https://www.pattersonhackworth.com'>
            <img
                src="/justbrain.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="PHDS Logo"
              />{' '}
              Our Website
              <p style={{fontSize:'1rem' }}>Learn More and Book A Consultation
              </p>
          </Navbar.Brand>

        </Container>
      </Navbar>
      </a>
      <br />
      <a href='https://www.facebook.com/profile.php?id=61557125421790'>
      <Navbar className="bg-body-tertiary navbar logo">
        <Container>
          <Navbar.Brand href="https://www.facebook.com/profile.php?id=61557125421790">
          <img
                src="/5296499_fb_facebook_facebook logo_icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="PHDS Logo"
              />{' '}
            Facebook
            <p style={{fontSize:'1rem'}}>Drop Us a Like!
              </p>
            </Navbar.Brand>
        </Container>
      </Navbar>
      </a>
      <br />
      <a href='https://www.instagram.com/pattersonhackworthds/?hl=en'>
      <Navbar className="bg-body-tertiary navbar logo">
        <Container>
          <Navbar.Brand href="https://www.instagram.com/pattersonhackworthds/?hl=en">
            <img
              src="/instagram_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Instagram Logo"
            />{' '}
            Instagram
            <p style={{fontSize:'1rem'}}>Drop Us Follow!</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </a>
      <br />
      <a href='https://www.tiktok.com/@p_h_digital_solutions'>
      <Navbar className="bg-body-tertiary navbar logo">
        <Container>
          <Navbar.Brand href="https://www.tiktok.com/@p_h_digital_solutions">
            <img
              alt="Tiktok Logo"
              src="/7564186_tiktok_logo_brand_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            TikTok
            <p style={{fontSize:'1rem'}}>Drop Us Follow!</p>
          </Navbar.Brand>
        </Container> 
      </Navbar>
      </a>
      <br />
      <a href='https://www.linkedin.com/company/patterson-hackworth-digital-solutions'>
      <Navbar className="bg-body-tertiary navbar logo">
        <Container>
          <Navbar.Brand href="https://www.linkedin.com/company/patterson-hackworth-digital-solutions">
            <img
              alt="LinkedIn Logo"
              src="/linkedin_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            LinkedIn
            <p style={{fontSize:'1rem'}}>Join Our Network!</p>
          </Navbar.Brand>
        </Container> 
      </Navbar>
      </a>
      <br />
      <a href='https://twitter.com/P_and_H_Digital'>
      <Navbar style={{marginBottom:'5%'}} className="bg-body-tertiary navbar logo">
        <Container>
          <Navbar.Brand href="https://twitter.com/P_and_H_Digital">
            <img
              alt="X Logo"
              src="/11053969_x_logo_twitter_new_brand_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            X (Twitter)
            <p style={{fontSize:'1rem'}}>Drop Us Follow!</p>
          </Navbar.Brand>
        </Container> 
      </Navbar>
      </a>
      </div>



   
    </>
  )
}

export default App
