import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Navbar.css';

function Navbar(props) {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
                <div className="col-md-1 col-sm-1 ml-auto">
                    <Row>
                        <Col >
                            <svg className="bi bi-person-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </Col>
                        <Col >
                            User
                        </Col>
                    </Row>

                </div>

            </nav>
        </React.Fragment >
    );
}

export default withRouter(Navbar);