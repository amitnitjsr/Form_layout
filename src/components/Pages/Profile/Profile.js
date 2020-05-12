import React, { Component } from 'react'
import { Card, Button, CardBody, Row, Col, Input } from 'reactstrap';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            DOB: null,
            profession: '',
            designation: '',
            nameVal: false,
            professionVal: false,
            DOBVal: false,
            designationVal: false,
        }

    }
    changeHandler = (e, name, validation) => {
        if (name !== 'DOB') {
            this.setState({ [name]: e.target.value }, () => {
                if (this.state[name].match(/^[a-zA-Z]+$/) && this.state.name.length <= 30) {
                    this.setState({ [validation]: false })
                }
                else
                    this.setState({ [validation]: true })
            })
        }
        else {
            console.log('date', e.target.value)
            this.setState({ [name]: e.target.value })
        }

    }
    render() {

        return (

            < div >
                <Row style={{ padding: '10px' }} >
                    <Col sm="12" md={{ size: 6, offset: 6 }}><Button>Profile</Button>
                    </Col>
                </Row>
                <Row >
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <Card >
                            <CardBody >
                                <Row className='detail-row'>
                                    <Col>Name</Col>
                                    <Col>
                                        <Input invalid={this.state.nameVal} type='text'
                                            value={this.state.name}
                                            onChange={(e) => this.changeHandler(e, 'name', 'nameVal')} />
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>DOB</Col>
                                    <Col><Input type='date'
                                        value={this.state.DOB}
                                        onChange={(e) => this.changeHandler(e, 'DOB', 'DOBVal')}
                                    /></Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Profession</Col>
                                    <Col>
                                        <Input invalid={this.state.professionVal} type='text'
                                            value={this.state.profession}
                                            onChange={(e) => this.changeHandler(e, 'profession', 'professionVal')} />
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Designation</Col>
                                    <Col>
                                        <Input invalid={this.state.designationVal} type='text'
                                            value={this.state.designation}
                                            onChange={(e) => this.changeHandler(e, 'designation', 'designationVal')} />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col></Col><Col></Col>
                                    <Col ><Button color="danger" >Cancel</Button></Col>
                                    <Col sm="4"><Button color="success">Submit</Button></Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Profile;