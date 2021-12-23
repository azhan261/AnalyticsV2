import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

function Footer() {
    return (
        <div>
         <footer className="footer">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-md-9 py-5">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">About us</h2>
                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <ul className="ftco-footer-social p-0">
                    <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                      <div className="row">
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">Services</h2>
                          <ul className="list-unstyled">
                            <li><a href="#" className="py-1 d-block">Market Analysis</a></li>
                            <li><a href="#" className="py-1 d-block">Accounting Advisor</a></li>
                            <li><a href="#" className="py-1 d-block">General Consultancy</a></li>
                            <li><a href="#" className="py-1 d-block">Structured Assestment</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">Discover</h2>
                          <ul className="list-unstyled">
                            <li><a href="#" className="py-1 d-block">About us</a></li>
                            <li><a href="#" className="py-1 d-block">Contract us</a></li>
                            <li><a href="#" className="py-1 d-block">Terms &amp; Conditions</a></li>
                            <li><a href="#" className="py-1 d-block">Policies</a></li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">Resources</h2>
                          <ul className="list-unstyled">
                            <li><a href="#" className="py-1 d-block">Security</a></li>
                            <li><a href="#" className="py-1 d-block">Global</a></li>
                            <li><a href="#" className="py-1 d-block">Charts</a></li>
                            <li><a href="#" className="py-1 d-block">Privacy</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-md-5">
                <div className="col-md-12">
                  <p className="copyright">
                    Copyright ©
                    All rights reserved  Syntics.co
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-md-5 py-4 aside-stretch-right pl-lg-5">
              <h2 className="footer-heading">Free consultation</h2>
              <form action="#" className="form-consultation">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control submit px-3">Send A Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
