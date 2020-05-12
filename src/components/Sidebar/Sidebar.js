import React, { Component } from 'react'
import './Sidebar.css';
import { withRouter, Link } from 'react-router-dom';
import { Collapse, Button, Col, Row } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: false,
            task: false
        }
    }
    toggle = (name) => {
        this.setState((prevState) => {
            return { [name]: !prevState[name] }
        })
    }

    render() {
        return (
            <div className="sidenav">
                <Row className='btn-pos'>
                    <Button color="primary" onClick={() => this.toggle('profile')} style={{ marginBottom: '1rem', width: '78px' }}>Profile</Button>
                    <Collapse isOpen={this.state.profile}>
                        <Col>
                            <Link to="./profile"><Button className='btn-width'>Setting</Button></Link>
                            <Link to="./notification"><Button>Notification</Button></Link>
                        </Col>
                    </Collapse>
                </Row>

                <Row className='btn-pos'>
                    <Button color="primary" onClick={() => this.toggle('task')} style={{ marginBottom: '1rem' }}>Mytask</Button>
                    <Collapse isOpen={this.state.task}>
                        <Col>
                            <Link to="./tast_1"><Button className='btn-width'>Task_1</Button></Link>
                            {/* <Link to="./notification"><Button>Task_2</Button></Link> */}
                        </Col>
                    </Collapse>
                </Row>
            </div>
        )
    }
}

export default withRouter(Sidebar);