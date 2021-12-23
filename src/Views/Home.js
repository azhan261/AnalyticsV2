import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

function Home() {
    return (
        <div>
             <div>
        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row d-flex no-gutters">
              <div className="col-md-6 d-flex">
                <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{backgroundImage: 'url(images/about.jpg)'}}>
                </div>
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section pl-md-4 pt-md-5">
                  <span className="subheading">Welcome to Accounting</span>
                  <h2 className="mb-4">We Are the Best Accounting Agency</h2>
                </div>
                <div className="services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-wealth" /></div>
                  <div className="text pl-4">
                    <h4>Market Analysis</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-accountant" /></div>
                  <div className="text pl-4">
                    <h4>Accounting Advisor</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-teamwork" /></div>
                  <div className="text pl-4">
                    <h4>General Consultancy</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
                <div className="services-2 w-100 d-flex">
                  <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-accounting" /></div>
                  <div className="text pl-4">
                    <h4>Structured Assestment</h4>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light ftco-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                <div className="d-block">
                  <div className="icon d-flex mr-2">
                    <span className="flaticon-accounting-1" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Accounting</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                <div className="d-block">
                  <div className="icon d-flex mr-2">
                    <span className="flaticon-tax" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Tax, Compliance &amp; Payroll</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                <div className="d-block">
                  <div className="icon d-flex mr-2">
                    <span className="flaticon-loan" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Financial Services</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex services align-self-stretch px-4 ftco-animate">
                <div className="d-block">
                  <div className="icon d-flex mr-2">
                    <span className="flaticon-budget" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Growth &amp; Funding Access</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-counter bg-light ftco-no-pt" id="section-counter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={50}>0</strong>
                  </div>
                  <div className="text">
                    <span>Years of Experienced</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={8500}>0</strong>
                  </div>
                  <div className="text">
                    <span>Cases Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={20}>0</strong>
                  </div>
                  <div className="text">
                    <span>Awards Won</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={50}>0</strong>
                  </div>
                  <div className="text">
                    <span>Expert Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section bg-light">
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section heading-section-white text-center ftco-animate">
                <span className="subheading">Testimonies</span>
                <h2>Happy Clients &amp; Feedbacks</h2>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_3.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className="d-flex align-items-center">
                          <div className="user-img" style={{backgroundImage: 'url(images/person_2.jpg)'}} />
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt bg-light ftco-faqs">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-faqs w-100">
                  <div className="img mb-4 mb-sm-0" style={{backgroundImage: 'url(images/about-2.jpg)'}}>
                  </div>
                  <div className="img img-2 mb-4 mb-sm-0" style={{backgroundImage: 'url(images/about-1.jpg)'}}>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pl-lg-5">
                <div className="heading-section mb-5 mt-5 mt-lg-0">
                  <span className="subheading">FAQs</span>
                  <h2 className="mb-3">Frequently Asks Questions</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div id="accordion" className="myaccordion w-100" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header p-0" id="headingOne">
                      <h2 className="mb-0">
                        <button href="#collapseOne" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                          <p className="mb-0">How to fixed a problem?</p>
                          <i className="fa" aria-hidden="true" />
                        </button>
                      </h2>
                    </div>
                    <div className="collapse show" id="collapseOne" role="tabpanel" aria-labelledby="headingOne">
                      <div className="card-body py-3 px-0">
                        <ol>
                          <li>Far far away, behind the word mountains</li>
                          <li>Consonantia, there live the blind texts</li>
                          <li>When she reached the first hills of the Italic Mountains</li>
                          <li>Bookmarksgrove, the headline of Alphabet Village</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-0" id="headingTwo" role="tab">
                      <h2 className="mb-0">
                        <button href="#collapseTwo" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                          <p className="mb-0">How to manage your business loans?</p>
                          <i className="fa" aria-hidden="true" />
                        </button>
                      </h2>
                    </div>
                    <div className="collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="card-body py-3 px-0">
                        <ol>
                          <li>Far far away, behind the word mountains</li>
                          <li>Consonantia, there live the blind texts</li>
                          <li>When she reached the first hills of the Italic Mountains</li>
                          <li>Bookmarksgrove, the headline of Alphabet Village</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-0" id="headingThree" role="tab">
                      <h2 className="mb-0">
                        <button href="#collapseThree" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                          <p className="mb-0">How to grow your investments funds?</p>
                          <i className="fa" aria-hidden="true" />
                        </button>
                      </h2>
                    </div>
                    <div className="collapse" id="collapseThree" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="card-body py-3 px-0">
                        <ol>
                          <li>Far far away, behind the word mountains</li>
                          <li>Consonantia, there live the blind texts</li>
                          <li>When she reached the first hills of the Italic Mountains</li>
                          <li>Bookmarksgrove, the headline of Alphabet Village</li>
                          <li>Separated they live in Bookmarksgrove right</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header p-0" id="headingFour" role="tab">
                      <h2 className="mb-0">
                        <button href="#collapseFour" className="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link" data-parent="#accordion" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
                          <p className="mb-0">What are those requirements for businesses?</p>
                          <i className="fa" aria-hidden="true" />
                        </button>
                      </h2>
                    </div>
                    <div className="collapse" id="collapseFour" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="card-body py-3 px-0">
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">News &amp; Blog</span>
                <h2>Latest news from our blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">March 31, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">March 31, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                  </a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div><a href="#">March 31, 2020</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                    </div>
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-secondary">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-7 d-flex align-items-center">
                <h2 className="mb-3 mb-sm-0" style={{color: 'black', fontSize: '22px'}}>Sign Up for Your Free 1st Accounting Consultation</h2>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Price &amp; Plans</span>
                <h2>Affordable Packages</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="block-7">
                  <div className="text-center">
                    <span className="excerpt d-block">Personal</span>
                    <span className="price"><sup>$</sup> <span className="number">49</span> <sub>/mos</sub></span>
                    <ul className="pricing-text mb-5">
                      <li><span className="fa fa-check mr-2" />Brand Strategy</li>
                      <li><span className="fa fa-check mr-2" />Online Marketing</li>
                      <li><span className="fa fa-check mr-2" />Branding Services</li>
                      <li><span className="fa fa-check mr-2" />Creative Marketing</li>
                      <li><span className="fa fa-check mr-2" />Sales Management</li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="block-7">
                  <div className="text-center">
                    <span className="excerpt d-block">Business</span>
                    <span className="price"><sup>$</sup> <span className="number">79</span> <sub>/mos</sub></span>
                    <ul className="pricing-text mb-5">
                      <li><span className="fa fa-check mr-2" />Brand Strategy</li>
                      <li><span className="fa fa-check mr-2" />Online Marketing</li>
                      <li><span className="fa fa-check mr-2" />Branding Services</li>
                      <li><span className="fa fa-check mr-2" />Creative Marketing</li>
                      <li><span className="fa fa-check mr-2" />Sales Management</li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="block-7">
                  <div className="text-center">
                    <span className="excerpt d-block">Ultimate</span>
                    <span className="price"><sup>$</sup> <span className="number">109</span> <sub>/mos</sub></span>
                    <ul className="pricing-text mb-5">
                      <li><span className="fa fa-check mr-2" />Brand Strategy</li>
                      <li><span className="fa fa-check mr-2" />Online Marketing</li>
                      <li><span className="fa fa-check mr-2" />Branding Services</li>
                      <li><span className="fa fa-check mr-2" />Creative Marketing</li>
                      <li><span className="fa fa-check mr-2" />Sales Management</li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="block-7">
                  <div className="text-center">
                    <span className="excerpt d-block">Premium</span>
                    <span className="price"><sup>$</sup> <span className="number">149</span> <sub>/mos</sub></span>
                    <ul className="pricing-text mb-5">
                      <li><span className="fa fa-check mr-2" />Brand Strategy</li>
                      <li><span className="fa fa-check mr-2" />Online Marketing</li>
                      <li><span className="fa fa-check mr-2" />Branding Services</li>
                      <li><span className="fa fa-check mr-2" />Creative Marketing</li>
                      <li><span className="fa fa-check mr-2" />Sales Management</li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-2 py-3">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
    )
}

export default Home
