import React from 'react'
import {Row, Col, Container, Card, Button} from 'react-bootstrap'


const  item_invoice = [
    {
        row: '1',
        name: 'Web Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$120.00',
        quantity: '5',
        total: '$2,880.00',
    },
    { 
        row: '2',
        name: 'Web Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$120.00',
        quantity: '5',
        total: '$2,880.00',
    },
    {
        row: '3',
        name: 'Web Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$120.00',
        quantity: '5',
        total: '$2,880.00',
    },
    {
        row: '4',
        name: 'Web Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        price: '$120.00',
        quantity: '5',
        total: '$2,880.00',
    }
]

const Invoice = () => {
    return (
        <>
            <div id='content-page' className='content-page'>
            <Container>
                <Row>
                    <Col sm="12">
                        <Card className="position-relative inner-page-bg bg-primary" style={{height: "150px"}}>
                            <div className="inner-page-title">
                                <h3 className="text-white">Invoice Page</h3>
                                <p className="text-white">lorem ipsum</p>
                            </div>
                        </Card>
                    </Col>
                    <Col sm="12">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg="6">
                                        <svg className="text-primary" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.67733 9.50001L7.88976 20.2602C9.81426 23.5936 14.6255 23.5936 16.55 20.2602L22.7624 9.5C24.6869 6.16666 22.2813 2 18.4323 2H6.00746C2.15845 2 -0.247164 6.16668 1.67733 9.50001ZM14.818 19.2602C13.6633 21.2602 10.7765 21.2602 9.62181 19.2602L9.46165 18.9828L9.46597 18.7275C9.48329 17.7026 9.76288 16.6993 10.2781 15.8131L12.0767 12.7195L14.1092 16.2155C14.4957 16.8803 14.7508 17.6132 14.8607 18.3743L14.9544 19.0239L14.818 19.2602ZM16.4299 16.4683L19.3673 11.3806C18.7773 11.5172 18.172 11.5868 17.5629 11.5868H13.7316L15.8382 15.2102C16.0721 15.6125 16.2699 16.0335 16.4299 16.4683ZM20.9542 8.63193L21.0304 8.5C22.1851 6.5 20.7417 4 18.4323 4H17.8353L17.1846 4.56727C16.6902 4.99824 16.2698 5.50736 15.9402 6.07437L13.8981 9.58676H17.5629C18.4271 9.58676 19.281 9.40011 20.0663 9.03957L20.9542 8.63193ZM14.9554 4C14.6791 4.33499 14.4301 4.69248 14.2111 5.06912L12.0767 8.74038L10.0324 5.22419C9.77912 4.78855 9.48582 4.37881 9.15689 4H14.9554ZM6.15405 4H6.00746C3.69806 4 2.25468 6.50001 3.40938 8.50001L3.4915 8.64223L4.37838 9.04644C5.15962 9.40251 6.00817 9.58676 6.86672 9.58676H10.2553L8.30338 6.22943C7.9234 5.57587 7.42333 5.00001 6.8295 4.53215L6.15405 4ZM5.07407 11.3833L7.88909 16.2591C8.05955 15.7565 8.28025 15.2702 8.54905 14.8079L10.4218 11.5868H6.86672C6.26169 11.5868 5.66037 11.5181 5.07407 11.3833Z" fill="currentColor"></path>
                                        </svg>
                                    </Col>
                                    <Col lg="6" className="align-self-center">
                                        <h4 className="mb-0 float-end">Invoice</h4>
                                    </Col>
                                    <Col sm="12">
                                        <hr className="mt-3"/>
                                        <h5 className="mb-0">Hello, Bni Cysts</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <div className="table-responsive-sm">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Order Date</th>
                                                        <th scope="col">Order Status</th>
                                                        <th scope="col">Order ID</th>
                                                        <th scope="col">Billing Address</th>
                                                        <th scope="col">Shipping Address</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Jan 17, 2016</td>
                                                        <td><span className="badge badge-danger">Unpaid</span></td>
                                                        <td>250028</td>
                                                        <td>
                                                            <p className="mb-0">
                                                                PO Box 16122 Collins Street West<br/>Victoria 8007 Australia<br/>
                                                                Phone: +123 456 7890<br/>
                                                                Email: demo@SocialV.com<br/>
                                                                Web: www.SocialV.com
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0">PO Box 16122 Collins Street West<br/>Victoria 8007 Australia<br/>
                                                                Phone: +123 456 7890<br/>
                                                                Email: demo@SocialV.com<br/>
                                                                Web: www.SocialV.com
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                </Row>            
                                <Row>
                                    <Col sm="12">
                                        <h5>Order Summary</h5>
                                        <div className="table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" scope="col">#</th>
                                                        <th scope="col">Item</th>
                                                        <th className="text-center" scope="col">Quantity</th>
                                                        <th className="text-center" scope="col">Price</th>
                                                        <th className="text-center" scope="col">Totals</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        item_invoice.map((item,idx) => (
                                                            <tr key={idx}>
                                                                <th className="text-center" scope="row">{item.row}</th>
                                                                <td>
                                                                <h6 className="mb-0">{item.name}</h6>
                                                                <p className="mb-0">{item.desc}</p>
                                                                </td>
                                                                <td className="text-center">{item.quantity}</td>
                                                                <td className="text-center">{item.price}</td>
                                                                <td className="text-center"><b>{item.total}</b></td>
                                                            </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <h5 className="mt-5">Order Details</h5>
                                        <div className="table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Bank</th>
                                                        <th scope="col">.Acc.No</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Sub-total</th>
                                                        <th scope="col">Discount</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Threadneedle St</th>
                                                        <td>12333456789</td>
                                                        <td>12 November 2019</td>
                                                        <td>$4597.50</td>
                                                        <td>10%</td>
                                                        <td><b>$4137.75 USD</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col sm="6"></Col>
                                    <Col sm="6" className="text-end">
                                        <Button variant="link mr-3"><span className="d-flex align-items-center"><i className="material-symbols-outlined me-1">print</i> Download Print</span></Button>
                                        <Button>Submit</Button>
                                    </Col>
                                    <Col sm="12" className="mt-5">
                                        <b className="text-danger">Notes:</b>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
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

export default Invoice