import React from 'react'
import { Link} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

const Footer = (props) => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('dark');
    if (mode !== null) {
      document.body.classList=''
    switch (mode) {
        case "true":
            document.body.classList='dark'
        break;
        case "false":
             document.body.classList=''
        break;
        default:
             document.body.classList=''
            break;
    }
    }
    return (
            <>
                <footer className="iq-footer bg-white">
                    <Container fluid>
                        <Row>
                            <Col lg="6">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><Link to="/dashboard/extrapages/privacy-policy">Privacy Policy</Link></li>{' '}
                                    <li className="list-inline-item"><Link to="/dashboard/extrapages/terms-of-service">Terms of Use</Link></li>
                                </ul>
                            </Col>
                            <Col lg="6" className="d-flex justify-content-end">
                                <span>Copyright 2020<Link to="#"> SocialV </Link> All Rights Reserved.</span>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        )
}

export default (Footer)