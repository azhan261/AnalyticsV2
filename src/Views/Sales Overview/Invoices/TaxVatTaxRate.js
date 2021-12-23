import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getAddAccounts } from '../../../Apis/ApiForAddAccount'
import { updateAddAccount } from '../../../Apis/ApiForAddAccount';
import { createTaxRates } from '../../../Apis/ApiForTaxRate';

function TaxVatTaxRate() {
    const [tax, setTax] = useState()
    const [items, setItems] = useState([])
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAddAccounts()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const onSubmit = async (data) => {
        data.taxRateName = formik.values.taxRateName + " (" + formik.values.taxRateAmount + "%)"
        console.log(data)
        await createTaxRates(data)
        //redirecting 
        //history.push("/")
        //createTaxRates(data)
 
      };
        //1 Start of by making initial values 
        const formik = useFormik({
            initialValues: {
                taxRateName: '',
                taxRateAccount: '',
                taxRateAmount: '',
            },
            
            //4 Make onSubmit propert to handle what happens to data on form submisison
    
            onSubmit: values => {
    
              
              //createTodo(formik.values)
              //redirecting 
              //history.push("/")
    
              onSubmit(formik.values)
              //onSubmitHandler(formik.values)
            },
    
            //5 Make validation property
    
            validate: values => {
                /*
                let errors = {}
    
                const letters = /^[A-Za-z ]+$/;
    
                const cnic = /^[0-9--]+$/;
    
                const phone = /^[0-9]+$/;
    
                const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                
                if(!values.name){
                    errors.name = "Please fill in Name"
                }else if (!letters.test(values.name)) {
                    errors.name = "Please enter a valid Name"
                }
    
              if(!values.phone){
                  errors.phone = "Please enter your contact number"
              }else if (!phone.test(values.phone)) {
                  errors.phone = "Please enter a valid contact number"
              }
    
                if(values.conf_pass != values.password){
                    errors.conf_pass = "Your password does not match"
                }
                
                if(!values.email){
                    errors.email = "Please fill in Email"
                }
    
                if(!values.gender){
                    errors.gender = "Please fill select your Gender, select 'Unspecify' if you do not wish to specify"
                }else if (values.gender == "chooseGender"){
                    errors.gender = "Please fill select your Gender, select 'Unspecify' if you do not wish to specify"
    
                }
    
                if(!values.country){
                    errors.country = "Please select your Country"
                }else if (values.country == "chooseCountry"){
                    errors.country = "Please select your Country"
    
                }
    
                
                if(!values.country_code){
                  errors.country_code = "Please select your Country Code or Area Code"
               }else if (values.country_code == "chooseCountryCode"){
                  errors.country_code = "Please select your Country Code or Area Code"
    
              }
    
              if(!values.courses){
                errors.courses = "Please select a course in which you wish to register"
             }else if (values.courses == "selectCourse"){
                errors.courses = "Please select a course in which you wish to register"
    
            }
             */
                //return errors
    
    
            }
    
    
        })
    
    return (
        <div>
            <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              
              <CardBody>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3">Add New Tax Rate</h2>
                  <hr/>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="modal-body">
                      <div className="row pt-2">
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Tax Rate Display Name</label>
                          <hr />
                          The name as you would like it to appear (limited to 50 characters)
                          <input type="text" name="taxRateName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taxRateName} className="form-control"/>
                          </div>
                        </div>
                        </div>
                        <hr />
                        <div className="row pt-2">
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Tax head account</label>
                          <hr />
                          <select name="taxRateAccount" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.taxRateAccount} className="form-control" >
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor></label>
                          <hr />
                         <input type="text" name="taxRateAmount" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.taxRateAmount} className="form-control"></input>%
                          </div>
                        </div>
                        </div>
                        <div className="row pt-2">
                        <div className = "col-md-2">
                        <div className="form-group">
                        <button type = "submit" className = "btn btn-success">Save</button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                        </div>
                        </div>
                        </div>
                        </div>
                        </CardBody>
                        </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default TaxVatTaxRate
