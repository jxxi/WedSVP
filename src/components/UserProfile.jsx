import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';
import Sidebar from './Sidebar';


class UserProfile extends React.Component{
    render() {
      return (
        <Container style={{marginTop: 170}}>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Row>
                <h3 style={{ color: '#3f4859' }}>Account Settings</h3>
              </Row>
              <Row className='divider-before'>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <CardImg src="http://68.media.tumblr.com/597a93f9a5d314cb01a9aebc2ae17216/tumblr_ntt5dof1oy1qadpa6o1_1280.jpg" alt="profile" width="200" height="200"></CardImg>
                    <Button>Upload profile photo</Button>
                  </Card>
                </Col>
              </Row>
              <Row className='divider-before'>
                <h3 style={{ color: '#3f4859' }}>Basic Information</h3>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <Form>
                      <FormText className="text-muted">
                        You
                      </FormText>
                      <FormGroup controlId="formFirstName">
                        <FormLabel>First name</FormLabel>
                        <FormControl type="text" placeholder="First name" />
                      </FormGroup>
                      <FormGroup controlId="formLastName">
                        <FormLabel>Last name</FormLabel>
                        <FormControl type="text" placeholder="Last name" />
                      </FormGroup>
                      <FormText className="text-muted">
                        Your Spouse
                      </FormText>
                      <FormGroup controlId="formFirstName">
                        <FormLabel>First name</FormLabel>
                        <FormControl type="text" placeholder="First name" />
                      </FormGroup>
                      <FormGroup controlId="formLastName">
                        <FormLabel>Last name</FormLabel>
                        <FormControl type="text" placeholder="Last name" />
                      </FormGroup>
                    </Form>
                  </Card>
                </Col>
                <Col lg>
                  <Card>
                    <Form>
                      <FormGroup controlId="formDate">
                        <FormText className="text-muted">
                          Wedding Date
                        </FormText>
                        <FormLabel>Wedding Date</FormLabel>
                        <FormControl type="date"/>
                      </FormGroup>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
};

export default UserProfile;