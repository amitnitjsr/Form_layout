import React, { Component } from 'react'
import {
    Card, CardBody,
    Button, Row, Col
} from 'reactstrap';
import './Profile.css';
import './Notification.css';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_alert: false,
            success: false,
            failed: false,
            not_alert: false,
        }
    }

    changeHandler = (name) => {
        this.setState((prevState) => {
            return { [name]: !prevState[name] }
        });
    }

    render() {

        return (

            < div >
                <Row style={{ padding: '10px' }} >
                    <Col sm="12" md={{ size: 6, offset: 6 }}><Button>Notification</Button>
                    </Col>
                </Row>
                <Row >
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <Card >
                            <CardBody >
                                <Row className='detail-row'>
                                    <Col>Sends all alerts</Col>
                                    <Col>
                                        <label className="switch">
                                            <input type="checkbox" checked={this.state.all_alert}
                                                onChange={() => this.changeHandler('all_alert')} />
                                            <span className="slider round"></span>
                                        </label>
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Alerts only task success</Col>
                                    <Col>
                                        <label className="switch">
                                            <input type="checkbox" checked={this.state.success}
                                                onChange={() => this.changeHandler('success')} />
                                            <span className="slider round"></span>
                                        </label>
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Alerts only for failed tasks</Col>
                                    <Col>
                                        <label className="switch">
                                            <input type="checkbox" checked={this.state.failed} value='ON'
                                                onChange={() => this.changeHandler('failed')} />
                                            <span className="slider round"></span>
                                        </label>
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>I do not want any alerts</Col>
                                    <Col>
                                        <label className="switch">
                                            <input type="checkbox" checked={this.state.not_alert}
                                                onChange={() => this.changeHandler('not_alert')} />
                                            <span className="slider round"></span>
                                        </label>
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

export default Notification;