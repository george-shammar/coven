import React, { useState } from "react";
import { Row, Col, Container, Form, Dropdown, Collapse } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link } from "react-router-dom";

// img
import user1 from "../../../assets/images/user/01.jpg";
import user2 from "../../../assets/images/user/02.jpg";
import user3 from "../../../assets/images/user/03.jpg";
import user4 from "../../../assets/images/user/04.jpg";
import user5 from "../../../assets/images/user/05.jpg";
import user6 from "../../../assets/images/user/06.jpg";
import user7 from "../../../assets/images/user/07.jpg";

const Todo = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <div id="content-page" className="content-page">
        <Container className="relative">
          <Row>
            <Col lg="3">
              <Card>
                <Card.Body>
                  <div className="iq-todo-page">
                    <Form className="position-relative">
                      <Form.Group className="form-group mb-0">
                        <Form.Control
                          type="text"
                          className="form-control todo-search"
                          id="exampleInputEmail002"
                          placeholder="Search"
                        />
                        <Link className="search-link" to="#">
                          <span className="material-symbols-outlined lh-1">
                            search
                          </span>
                        </Link>
                      </Form.Group>
                    </Form>
                    <div className="add-new-project mt-3 mb-3">
                      <Link
                        to="#"
                        className="d-block nrw-project d-flex align-items-center"
                      >
                        <i className="material-symbols-outlined me-2">add</i>add
                        Project
                      </Link>
                    </div>
                    <ul className="todo-task-list p-0 m-0">
                      <li>
                        <Link
                          to="/dashboard/app/todo"
                          onClick={() => setOpen1(!open1)}
                          className="d-flex align-items-center"
                        >
                          <i className="material-symbols-outlined md-14 me-2">
                            filter_none
                          </i>
                          Secrat Project
                        </Link>
                        <Collapse in={open1}>
                          <ul
                            id="todotask1-collapse"
                            to="#todotask1"
                            className="sub-task   mt-2 p-0"
                          >
                            <li className="active">
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-primary md-18 me-1">
                                  fiber_manual_record{" "}
                                </i>{" "}
                                All Task{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-warning md-18 me-1">
                                  {" "}
                                  fiber_manual_record{" "}
                                </i>{" "}
                                People{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined text-danger md-18 me-1">
                                    fiber_manual_record
                                  </i>{" "}
                                  Files{" "}
                                </div>
                                <span className="badge bg-danger float-end">
                                  44
                                </span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-primary md-18 me-1">
                                  fiber_manual_record
                                </i>{" "}
                                Statistics{" "}
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="d-flex align-items-center"
                          onClick={() => setOpen2(!open2)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open1}
                        >
                          <i className="material-symbols-outlined md-14 me-2">
                            filter_none
                          </i>
                          Bnie Mobile App
                        </Link>
                        <Collapse in={open2}>
                          <ul
                            id="todotask2-collapse"
                            to="#todotask2"
                            className="sub-task  mt-2 p-0"
                          >
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">
                                  fiber_manual_record
                                </i>
                                All Task{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined filled text-warning md-18 me-1">
                                  fiber_manual_record
                                </i>{" "}
                                People{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined filled text-danger md-18 me-1">
                                    fiber_manual_record
                                  </i>{" "}
                                  Files{" "}
                                </div>
                                <span className="badge bg-danger float-end">
                                  20
                                </span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined filled text-primary md-18 me-1">
                                  fiber_manual_record
                                </i>{" "}
                                Statistics{" "}
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="d-flex align-items-center"
                          onClick={() => setOpen3(!open3)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open1}
                        >
                          <i className="material-symbols-outlined md-14 me-2">
                            filter_none
                          </i>
                          New Portfolio Site
                        </Link>
                        <Collapse in={open3}>
                          <ul
                            id="todotask3-collapse"
                            to="#todo-task3"
                            className="sub-task  mt-2 p-0"
                          >
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-primary md-18 me-1">
                                  fiber_manual_record{" "}
                                </i>{" "}
                                All Task{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-warning md-18 me-1">
                                  {" "}
                                  fiber_manual_record{" "}
                                </i>{" "}
                                People{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-between"
                              >
                                <div className="d-flex align-items-center">
                                  <i className="material-symbols-outlined text-danger md-18 me-1">
                                    fiber_manual_record
                                  </i>{" "}
                                  Files{" "}
                                </div>
                                <span className="badge bg-danger float-end">
                                  10
                                </span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="d-flex align-items-center"
                              >
                                <i className="material-symbols-outlined text-primary md-18 me-1">
                                  fiber_manual_record
                                </i>{" "}
                                Statistics{" "}
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="9">
              <Row>
                <Col sm="12">
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="todo-date d-flex me-3">
                          <i className="ri-calendar-2-line text-success me-2"></i>
                          <span>Wednesday, 08th January, 2020</span>
                        </div>
                        <div className="todo-notification d-flex align-items-center  mt-2 mt-md-0">
                          <div className="notification-icon position-relative d-flex align-items-center me-3">
                            <Link
                              to="#"
                              className="material-symbols-outlined md-18"
                            >
                              notifications
                            </Link>
                            <span className="bg-danger text-white">5</span>
                          </div>
                          <button type="button" className="btn bg-soft-success">
                            Add Task
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="8">
                  <Card>
                    <Card.Body className="p-0">
                      <ul className="todo-task-lists m-0 p-0">
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user1}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                Landing page for secret Project
                              </h6>
                              <span className="badge bg-warning ms-1 ms-md-3 my-1 my-md-0 text-white">
                                Expirinq
                              </span>
                              <p className="mb-0">by Danlel Cllfferton</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check1"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check1"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3 active-task">
                          <div className="user-img img-fluid">
                            <img
                              src={user1}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Fix Critical Crashes</h6>
                              <p className="mb-0">by Cralg Danles</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check2"
                                  defaultChecked
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check2"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user2}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                IOS App - Redesign the contact
                              </h6>
                              <span className="badge bg-success ms-1 ms-md-3 my-1 my-md-0">
                                Ending
                              </span>
                              <p className="mb-0">by Simona Gomez </p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check3"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check3"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user3}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>
                                Final Meetup for the Secrat Project Client
                              </h6>
                              <p className="mb-0">bt Serena Gemoz</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check4"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check4"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user4}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Code the Parsing Element</h6>
                              <p className="mb-0">by Jeena Gaze</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check5"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check5"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user5}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6 className="d-inline-block">
                                Test the Bug, that causes design
                              </h6>
                              <span className="badge bg-danger ms-1 ms-md-3 my-1 my-md-0">
                                Urgent
                              </span>
                              <p className="mb-0">by migule Slimmonas</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check6"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check6"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user6}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Android App Design</h6>
                              <p className="mb-0">by Becky Dimes</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check7"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check7"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center p-3">
                          <div className="user-img img-fluid">
                            <img
                              src={user7}
                              alt="story-img"
                              className="rounded-circle avatar-40"
                            />
                          </div>
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="ms-3">
                              <h6>Skype Meetup with clients</h6>
                              <p className="mb-0">by James Romero</p>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                              <Form.Check className="form-check">
                                <Form.Check.Input
                                  type="checkbox"
                                  name="todo-check"
                                  className="form-check-input"
                                  id="check8"
                                />
                                <Form.Check.Label
                                  className="form-check-label"
                                  htmlFor="check8"
                                ></Form.Check.Label>
                              </Form.Check>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <Card.Body>
                      <div className="iq-todo-right">
                        <Form className="position-relative">
                          <Form.Group className="form-group mb-0">
                            <Form.Control
                              type="text"
                              className="form-control todo-search"
                              id="exampleInputEmail002"
                              placeholder="Search"
                            />
                            <Link className="search-link" to="#">
                              <span className="material-symbols-outlined lh-1">
                                search
                              </span>
                            </Link>
                          </Form.Group>
                        </Form>
                        <div className="iq-todo-friendlist mt-3">
                          <ul className="suggestions-lists m-0 p-0">
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user1}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Paul Molive</h6>
                                  <p className="mb-0">trainee</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user2}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Anna Mull</h6>
                                  <p className="mb-0">Web Developer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user3}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Paige Turner</h6>
                                  <p className="mb-0">trainee</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user4}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Barb Ackue</h6>
                                  <p className="mb-0">Web Designer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user5}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Greta Life</h6>
                                  <p className="mb-0">Tester</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user6}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Ira Membrit</h6>
                                  <p className="mb-0">Android Developer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 align-items-center">
                              <div className="user-img img-fluid">
                                <img
                                  src={user7}
                                  alt="story-img"
                                  className="rounded-circle avatar-40"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between w-100">
                                <div className="ms-3">
                                  <h6>Pete Sariya</h6>
                                  <p className="mb-0">Web Designer</p>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                  <Dropdown>
                                    <Link to="#">
                                      <Dropdown.Toggle as="span">
                                        <i className="material-symbols-outlined md-18">
                                          more_vert
                                        </i>
                                      </Dropdown.Toggle>
                                    </Link>
                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined md-18">
                                          person
                                        </i>
                                        Unfollow
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          cancel
                                        </i>
                                        Unfriend
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        className="d-flex align-items-center"
                                      >
                                        <i className="material-symbols-outlined me-2 md-18">
                                          lock
                                        </i>
                                        block
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <Link to="#" className="btn btn-primary d-block">
                            <i className="ri-add-line"></i> Load More
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Todo;
