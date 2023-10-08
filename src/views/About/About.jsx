import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css"

const About = () => {
  return (
    <section id='about'>
      <Container fluid>
      <Row>
        <Col><h1 className='aboutTitle'>LEARN MORE ABOUT US</h1></Col>
      </Row>
      <Row>
        <Col><p className='aboutDescription'>At Gadgetgrove we understand that in today's fast-paced world, staying up-to-date with the latest technology is essential. That's why we've curated a wide range of products to cater to all your gadget needs. Whether you're a tech enthusiast, a busy professional, a fitness fanatic, or a homebody, we have something for everyone.,  </p></Col>
      </Row>
      <Row>
        <button className='btn btnReadMore'>Read More</button>
      </Row>
    </Container>
      {/* <div className='about-image'>
        <img src={aboutimage} alt=''/>
        
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>At Gymfinity, we salute those who have served our nation and honor their commitment to health and fitness. Our mission is to provide a supportive and empowering environment for veterans and individuals of all backgrounds to achieve their fitness goals. We understand the unique challenges and needs that veterans face, and we are here to help you on your fitness journey.</p>
        <button>Read More</button>
      </div> */}
    </section>
  )
};

export default About;
