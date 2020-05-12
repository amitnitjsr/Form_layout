import React, { Component } from 'react'
import {
    Button, Card, CardBody, Row, Col, Dropdown, DropdownToggle,
    DropdownMenu, DropdownItem
} from 'reactstrap';
import '../Profile/Notification.css';

const dropdownList = [{ label: 'One', value: 'One' }, { label: 'Two', value: 'Two' }];

class Mytask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_alert: false,
            success: false,
            failed: false,
            not_alert: false,
            dropdownOpen1: false,
            dropdownOpen2: false,
            selectValue1: 'Dropdown',
            selectValue2: 'Dropdown',
            textSQL: '',
        }
    }

    changeHandler = (name) => {
        this.setState((prevState) => {
            return { [name]: !prevState[name] }
        });
    }

    selectHandler = (name, val) => {
        this.setState({ [name]: val })
    }

    render() {

        return (

            < div >
                <Row style={{ padding: '10px' }} >
                    <Col sm="12" md={{ size: 6, offset: 6 }}><Button>Task_1</Button>
                    </Col>
                </Row>
                <Row >
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <Card >
                            <CardBody >
                                <Row className='detail-row'>
                                    <Col>Source Name</Col>
                                    <Col>
                                        <Dropdown
                                            isOpen={this.state.dropdownOpen1}
                                            toggle={() => this.changeHandler('dropdownOpen1')}>
                                            <DropdownToggle style={{ position: 'relative', width: '108px' }} caret>
                                                {this.state.selectValue1}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {dropdownList.map((val) => {
                                                    return <DropdownItem key={val.value} value={val.value}
                                                        onClick={() => this.selectHandler('selectValue1', val.value)}>{val.value}</DropdownItem>

                                                })}
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Enable logging</Col>
                                    <Col>
                                        <input type="checkbox" checked={this.state.success}
                                            onClick={() => this.changeHandler('success')} />
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Provide SQL</Col>
                                    <Col>
                                        <textarea rows="4" cols="24" onChange={() => this.changeHandler('textSQL')}>
                                            {this.state.textSQL}
                                        </textarea>
                                    </Col>
                                </Row>
                                <Row className='detail-row'>
                                    <Col>Target Result</Col>
                                    <Col>
                                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={() => this.changeHandler('dropdownOpen2')}>
                                            <DropdownToggle style={{ position: 'relative', width: '108px' }} caret>
                                                {this.state.selectValue2}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {dropdownList.map((val) => {
                                                    return <DropdownItem key={val.value} value={val.value}
                                                        onClick={() => this.selectHandler('selectValue2', val.value)}>{val.value}</DropdownItem>

                                                })}
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col></Col><Col></Col>
                                    <Col ><Button color="danger" >Cancel</Button></Col>
                                    <Col ><Button color="success">Submit</Button></Col>
                                    <Col sm="4"><Button color="primary">Validate</Button></Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default Mytask;