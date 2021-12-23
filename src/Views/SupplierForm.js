import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getAddAccounts } from '../Apis/ApiForAddAccount';

function SupplierForm() {
  const location = useLocation();
    
  const history = useHistory()
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const accounts = await getAddAccounts()
      setItems(accounts)
    }
    fetchItems()
  }, [])

    return (
        <div>
             <div>
        {/* ======= Contact Section ======= */}
        <section id = "hero" >
          <div className="container" data-aos="fade-up">
          <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h3>Contact Information</h3>
            </div>
              <div>
              <form className="php-email-form" data-aos="fade-up" onSubmit={formik.handleSubmit} >
              <div className="row clearfix">
                      <div className="col-md-12 mt-3 mt-3">
                        <div className="form-group">
                      
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Contact Name</label>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                            <input type="text" name="name"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}   />
                            </div>
                            {formik.errors.name && formik.touched.name ? (<div className='error' style ={{color:'red'}}>{formik.errors.name}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-12 mt-3 mt-3">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Primary Person</label>
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="firstName" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}  required />
                        </div>
                        {formik.errors.firstName && formik.touched.firstName  ? (<div className='error' style ={{color:'red'}}>{formik.errors.firstName}</div>) : null}
                      
                      </div>
                      <div className="col-md-12 mt-3 mt-3">
                        
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}  required />
                        </div>
                        {formik.errors.lastName && formik.touched.lastName  ? (<div className='error' style ={{color:'red'}}>{formik.errors.lastName}</div>) : null}
                      
                      </div>
                  
                      
                      <div className="col-md-12 mt-3" id>
                        <div className="form-group">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Email</label>
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                          <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}   />
                          </div>
                          {formik.touched.email ? (<div className='error' style ={{color:'red'}}>{formik.errors.email}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Phone</label>
                        <input type="text" name="phone" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className = "form-control"  />
                        {formik.touched.phone ? (<div className='error' style ={{color:'red'}}>{formik.errors.phone}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="phoneArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} className = "form-control"  />
                        {formik.touched.dob ? (<div className='error' style ={{color:'red'}}>{formik.errors.dob}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="phoneCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} className = "form-control"  />
                        {formik.touched.dob ? (<div className='error' style ={{color:'red'}}>{formik.errors.dob}</div>) : null}
                      </div>
                     </div>


                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Fax</label>
                        <input type="text" name="fax" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fax} className = "form-control"  />
                        {formik.touched.fax ? (<div className='error' style ={{color:'red'}}>{formik.errors.fax}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="faxArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.faxArea} className = "form-control"  />
                        {formik.touched.faxArea ? (<div className='error' style ={{color:'red'}}>{formik.errors.faxArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="faxCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.faxCountry} className = "form-control"  />
                        {formik.touched.faxCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.faxCountry}</div>) : null}
                      </div>
                     </div>
                     

                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Mobile</label>
                        <input type="text" name="mobile" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} className = "form-control"  />
                        {formik.touched.mobile ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobile}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileArea} className = "form-control"  />
                        {formik.touched.mobileAreadob ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileCountry} className = "form-control"  />
                        {formik.touched.mobileCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileCountry}</div>) : null}
                      </div>
                     </div>

                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Direct dial</label>
                        <input type="text" name="directDial" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.directDial} className = "form-control"  />
                        {formik.touched.directDial ? (<div className='error' style ={{color:'red'}}>{formik.errors.directDial}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileArea} className = "form-control"  />
                        {formik.touched.mobileAreadob ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileCountry} className = "form-control"  />
                        {formik.touched.mobileCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileCountry}</div>) : null}
                      </div>
                     </div>

                     <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Skype Name/Number</label>
                        <input type="text" name="skype" placeholder = "Skype Name/Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skype} className = "form-control"  />
                        {formik.touched.skype ? (<div className='error' style ={{color:'red'}}>{formik.errors.skype}</div>) : null}
                      </div>
                      </div>

                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Website</label>
                        <input type="text" name="website" placeholder = "http://www.website.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.website} className = "form-control"  >http:// </input>
                        {formik.touched.website ? (<div className='error' style ={{color:'red'}}>{formik.errors.website}</div>) : null}
                      </div>
                      </div>

                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Postal Address </label>
                        <input type="text" name="postal" placeholder = "Attention" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postal} className = "form-control"  ></input>
                        {formik.touched.postal ? (<div className='error' style ={{color:'red'}}>{formik.errors.postal}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <textarea  name="address"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} rows="4" cols="50" className = "form-control"  />
                        {formik.touched.address ? (<div className='error' style ={{color:'red'}}>{formik.errors.address}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalCity" placeholder = "City/Town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalCity} className = "form-control"  ></input>
                        {formik.touched.postalCity ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalCity}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalZip" placeholder = "Postal/Zip Code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalZip} className = "form-control"  ></input>
                        {formik.touched.postalZip ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalZip}</div>) : null}
                      </div>
                      </div>
                       <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalCountry" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalCountry} className = "form-control"  ></input>
                        {formik.touched.postalCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalCountry}</div>) : null}
                      </div>
                      </div>

                        <div className="col-md-12 mt-3">
                        <div className="form-group">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Street Address </label>
                          <input type="text" name="street" placeholder = "Attention" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.street} className = "form-control"  ></input>
                          {formik.touched.street ? (<div className='error' style ={{color:'red'}}>{formik.errors.street}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <textarea  name="streetAddress"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} rows="4" cols="50" className = "form-control"  />
                          {formik.touched.address ? (<div className='error' style ={{color:'red'}}>{formik.errors.address}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetCity" placeholder = "City/Town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetCity} className = "form-control"  ></input>
                          {formik.touched.streetCity ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetCity}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetZip" placeholder = "Postal/Zip Code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetZip} className = "form-control"  ></input>
                          {formik.touched.streetZip ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetZip}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetCountry" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetCountry} className = "form-control"  ></input>
                          {formik.touched.streetCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetCountry}</div>) : null}
                        </div>
                        </div>
             
                      <center>
                        
                        <input class="button" type="submit" className = "w-25 mt-2" />
                    </center>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
          </div>
          <hr />
          <br />
          <br />

        <div className="container" data-aos="fade-up">
          <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h3>Contact Information</h3>
            </div>
              <div>
              <form className="php-email-form" data-aos="fade-up" onSubmit={formik.handleSubmit} >
              <div className="row clearfix">
                      <div className="col-md-12 mt-3 mt-3">
                        <div className="form-group">
                      
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Contact Name</label>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                            <input type="text" name="name"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}   />
                            </div>
                            {formik.errors.name && formik.touched.name ? (<div className='error' style ={{color:'red'}}>{formik.errors.name}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-12 mt-3 mt-3">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Primary Person</label>
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="firstName" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}  required />
                        </div>
                        {formik.errors.firstName && formik.touched.firstName  ? (<div className='error' style ={{color:'red'}}>{formik.errors.firstName}</div>) : null}
                      
                      </div>
                      <div className="col-md-12 mt-3 mt-3">
                        
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                        <input type="text" name="lastName" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}  required />
                        </div>
                        {formik.errors.lastName && formik.touched.lastName  ? (<div className='error' style ={{color:'red'}}>{formik.errors.lastName}</div>) : null}
                      
                      </div>
                  
                      
                      <div className="col-md-12 mt-3" id>
                        <div className="form-group">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Email</label>
                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                          <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}   />
                          </div>
                          {formik.touched.email ? (<div className='error' style ={{color:'red'}}>{formik.errors.email}</div>) : null}
                        </div>
                      </div>
                      <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Phone</label>
                        <input type="text" name="phone" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className = "form-control"  />
                        {formik.touched.phone ? (<div className='error' style ={{color:'red'}}>{formik.errors.phone}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="phoneArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} className = "form-control"  />
                        {formik.touched.dob ? (<div className='error' style ={{color:'red'}}>{formik.errors.dob}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="phoneCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} className = "form-control"  />
                        {formik.touched.dob ? (<div className='error' style ={{color:'red'}}>{formik.errors.dob}</div>) : null}
                      </div>
                     </div>


                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Fax</label>
                        <input type="text" name="fax" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fax} className = "form-control"  />
                        {formik.touched.fax ? (<div className='error' style ={{color:'red'}}>{formik.errors.fax}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="faxArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.faxArea} className = "form-control"  />
                        {formik.touched.faxArea ? (<div className='error' style ={{color:'red'}}>{formik.errors.faxArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="faxCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.faxCountry} className = "form-control"  />
                        {formik.touched.faxCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.faxCountry}</div>) : null}
                      </div>
                     </div>
                     

                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Mobile</label>
                        <input type="text" name="mobile" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} className = "form-control"  />
                        {formik.touched.mobile ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobile}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileArea} className = "form-control"  />
                        {formik.touched.mobileAreadob ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileCountry} className = "form-control"  />
                        {formik.touched.mobileCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileCountry}</div>) : null}
                      </div>
                     </div>

                     <div className="col-md-4 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Direct dial</label>
                        <input type="text" name="directDial" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.directDial} className = "form-control"  />
                        {formik.touched.directDial ? (<div className='error' style ={{color:'red'}}>{formik.errors.directDial}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileArea" placeholder = "Area" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileArea} className = "form-control"  />
                        {formik.touched.mobileAreadob ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileArea}</div>) : null}
                      </div>
                     </div>
                     <div className="col-md-4 mt-3">
                        <div className="form-group">
                        
                        <input type="text" name="mobileCountry" placeholder = "Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobileCountry} className = "form-control"  />
                        {formik.touched.mobileCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.mobileCountry}</div>) : null}
                      </div>
                     </div>

                     <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Skype Name/Number</label>
                        <input type="text" name="skype" placeholder = "Skype Name/Number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skype} className = "form-control"  />
                        {formik.touched.skype ? (<div className='error' style ={{color:'red'}}>{formik.errors.skype}</div>) : null}
                      </div>
                      </div>

                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Website</label>
                        <input type="text" name="website" placeholder = "http://www.website.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.website} className = "form-control"  >http:// </input>
                        {formik.touched.website ? (<div className='error' style ={{color:'red'}}>{formik.errors.website}</div>) : null}
                      </div>
                      </div>

                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      <label className = "text-dark" style={{fontWeight:"bold"}}>Postal Address </label>
                        <input type="text" name="postal" placeholder = "Attention" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postal} className = "form-control"  ></input>
                        {formik.touched.postal ? (<div className='error' style ={{color:'red'}}>{formik.errors.postal}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <textarea  name="address"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} rows="4" cols="50" className = "form-control"  />
                        {formik.touched.address ? (<div className='error' style ={{color:'red'}}>{formik.errors.address}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalCity" placeholder = "City/Town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalCity} className = "form-control"  ></input>
                        {formik.touched.postalCity ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalCity}</div>) : null}
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalZip" placeholder = "Postal/Zip Code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalZip} className = "form-control"  ></input>
                        {formik.touched.postalZip ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalZip}</div>) : null}
                      </div>
                      </div>
                       <div className="col-md-12 mt-3">
                      <div className="form-group">
                      
                        <input type="text" name="postalCountry" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalCountry} className = "form-control"  ></input>
                        {formik.touched.postalCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.postalCountry}</div>) : null}
                      </div>
                      </div>

                        <div className="col-md-12 mt-3">
                        <div className="form-group">
                        <label className = "text-dark" style={{fontWeight:"bold"}}>Street Address </label>
                          <input type="text" name="street" placeholder = "Attention" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.street} className = "form-control"  ></input>
                          {formik.touched.street ? (<div className='error' style ={{color:'red'}}>{formik.errors.street}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <textarea  name="streetAddress"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} rows="4" cols="50" className = "form-control"  />
                          {formik.touched.address ? (<div className='error' style ={{color:'red'}}>{formik.errors.address}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetCity" placeholder = "City/Town" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetCity} className = "form-control"  ></input>
                          {formik.touched.streetCity ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetCity}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetZip" placeholder = "Postal/Zip Code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetZip} className = "form-control"  ></input>
                          {formik.touched.streetZip ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetZip}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-12 mt-3">
                        <div className="form-group">

                          <input type="text" name="streetCountry" placeholder = "Country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.streetCountry} className = "form-control"  ></input>
                          {formik.touched.streetCountry ? (<div className='error' style ={{color:'red'}}>{formik.errors.streetCountry}</div>) : null}
                        </div>
                        </div>
             
                      <center>
                        
                        <input class="button" type="submit" className = "w-25 mt-2" />
                    </center>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
        </section>{/* End Contact Section */}
      </div>
      )
        </div>
    )
}

export default SupplierForm
