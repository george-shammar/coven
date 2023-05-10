import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const BlankPage = () => {
    return (
        <>
            <div id='content-page' className='content-page'>

           <Container>
                <Row>
                    <Col lg="12">
                        Add Your HTML Content Here.....
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default BlankPage