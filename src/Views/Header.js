import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>
            <div>
        <div className="wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bg-wrap">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                      <p className="mb-0 phone pl-md-2">
                        <a href="#" className="mr-2"><span className="fa fa-phone mr-1" /> +00 1234 567</a>
                        <a href="#"><span className="fa fa-paper-plane mr-1" /> <span className="__cf_email__" data-cfemail="b4cddbc1c6d1d9d5ddd8f4d1d9d5ddd89ad7dbd9">[email&nbsp;protected]</span></a>
                      </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end">
                      <div className="social-media">
                        <p className="mb-0 d-flex">
                          <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                          <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                          <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                          <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Analytics</a>
            <form action="#" className="searchform order-sm-start order-lg-last">
              <div className="form-group d-flex">
                <input type="text" className="form-control pl-3" placeholder="Search" />
                <button type="submit" placeholder className="form-control search"><span className="fa fa-search" /></button>
              </div>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Business
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/sales-overview">Sales Overview</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/purchase-overview">Purchase Overview</Link>
                <Link class="dropdown-item" to="/aged-receivables-table">Aged Receivable</Link>
                <div class="dropdown-divider"></div>
                </div>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accounting
                </a>

                
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/reports">Reports</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/balance-sheet">Balance Sheet</Link>
                <Link class="dropdown-item" to="/chart-of-accounts">Chart of Accounts</Link>
                <Link class="dropdown-item" to="/profit-loss">Profit & Loss</Link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/new-manual-journal">Manual Journal</a>
                </div>
                </li>
            
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero-wrap">
          <div className="home-slider owl-carousel">
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
              <div className="overlay" />
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-8 ftco-animate">
                    <div className="text w-100 text-center">
                      <h2>We Business Grow</h2>
                      <h1 className="mb-4">We Help You Businesses Innovate and Grow</h1>
                      <p><a href="#" className="btn btn-white">Connect with us</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
              <div className="overlay" />
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-8 ftco-animate">
                    <div className="text w-100 text-center">
                      <h2>We Support Business</h2>
                      <h1 className="mb-4">The Best Business Support</h1>
                      <p><a href="#" className="btn btn-white">Connect with us</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
              <div className="overlay" />
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-8 ftco-animate">
                    <div className="text w-100 text-center">
                      <h2>We Give Advice</h2>
                      <h1 className="mb-4">Expert Financial Advice</h1>
                      <p><a href="#" className="btn btn-white">Connect with us</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Header
