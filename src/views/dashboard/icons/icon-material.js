import React from 'react'

// react-bootstrap
import {Row, Col, Container, Button} from 'react-bootstrap'

// router
import {Link} from 'react-router-dom'

// component
import Card from '../../../components/Card'

const material = [
    {
        iconname: 'search',
        name: 'search'
    },
    {
        iconname: 'home',
        name: 'Home'
    },
    {
        iconname: 'settings',
        name: 'Settings'
    },
    {
        iconname: 'done',
        name: 'Done'
    },
    {
        iconname: 'info',
        name: 'Info'
    },
    {
        iconname: 'check_circle',
        name: 'Check Circle'
    },
    {
        iconname: 'delete',
        name: 'Delete'
    },
    {
        iconname: 'shopping_cart',
        name: 'Shopping Cart'
    },
    {
        iconname: 'visibility',
        name: 'Visibility'
    },
    {
        iconname: 'logout',
        name: 'Logout'
    },
    {
        iconname: 'description',
        name: 'Description'
    },
    {
        iconname: 'favorite_border',
        name: 'Favorite Border'
    },
    {
        iconname: 'lock',
        name: 'Lock'
    },
    {
        iconname: 'schedule',
        name: 'Schedule'
    },
    {
        iconname: 'language',
        name: 'Language'
    },
    {
        iconname: 'face',
        name: 'Face'
    },
    {
        iconname: 'help_outline',
        name: 'Help Outline'
    },
    {
        iconname: 'event',
        name: 'Event'
    },
    {
        iconname: 'verified',
        name: 'Verified'
    },
    {
        iconname: 'thumb_up',
        name: 'Thumb Up'
    },
    {
        iconname: 'dashboard',
        name: 'Dashboard'
    },
    {
        iconname: 'login',
        name: 'Login'
    },
    {
        iconname: 'help',
        name: 'Help'
    },
    {
        iconname: 'task_alt',
        name: 'Task Alt'
    },
    {
        iconname: 'paid',
        name: 'Paid'
    },
    {
        iconname: 'article',
        name: 'Article'
    },
    {
        iconname: 'lightbulb',
        name: 'Lightbulb'
    },
    {
        iconname: 'open_in_new',
        name: 'Open In New'
    },
    {
        iconname: 'history',
        name: 'History'
    },
    {
        iconname: 'assignment',
        name: 'Assignment'
    }
]

const Material = () => {
  return (
      <>
          <div id='content-page' className='content-page'>
        <Container>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Material Icon</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Use Class <code>&#x3C;span className=&#x22;material-symbols-outlined&#x22;&#x3E; search &#x3C;/span&#x3E;</code></p>
                            <Row className="mt-3">
                                {
                                    material.map((item,idex) => {
                                        return(
                                            <Col sm="6" ms="4" lg="2" key={idex}>
                                                <Link className="iq-icons-list d-flex align-items-center" to="#"><i className="material-symbols-outlined me-1">{item.iconname}</i>{item.name}</Link>
                                            </Col>
                                        )
                                    })
                                }
                                <Col sm="12" className="text-center mt-3">
                                    <Button href="https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Outlined" target="blank">
                                    View All Icon
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
              </Container>
              </div>
    </>
  )
}

export default Material