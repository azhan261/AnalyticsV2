import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";


function TrackingSummary() {
    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }

    const handleTableValues = () => {
        return(
            <div>
                  <table id="table" className="table table-striped mt-3 text-center" >
                        <thead>
                        
                            <tr>
                              <th></th>
                              
                              
                         
                              
                             
                            </tr>
                        </thead>  
                        
                        <tbody>
                        <tr>
                            <td><b>Operating Activities</b></td>
                        </tr>
                        <tr>
                            <td><b>Financing Activities</b></td>
                        </tr>
                        <tr>
                            <td><b>Cash and Cash Equivalents</b></td>
                        </tr>
                        
                      
                        </tbody>
                        </table>
            </div>
        )
    }
    const formik = useFormik({
        initialValues: {
            to: '',
            from: '',
            startDate: '',
            dueDate: '',
            invoice: '',
            reference: '',
            item: '',
            description:'',
            qty: '',
            unitPrice: '',
            disc: '',
            account:'',
            taxRate: '',
            amountPkr: '',
            name: '',
            total:'',
            accountPaid: '',
            amountCredit: '',
            amountDuePaid:'',
            amountTotalDebit:'',
            transactionType: '',
            amountPaidAmountValue: '',
            amountPaid:'',
            datePaid:'',
            paidTo: '',
            referencePaid: '',
            datePurchaseOrSalesTaxVat:'',
            accountNamePurchaseOrSalesTaxVat:'',
            valuePurchaseTaxVatDebit:'',
            valueSalesTaxVatCredit:'',
        },

        //4 Make onSubmit propert from handle what happens from data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },
        

        //5 Make validation property
        
        validate: values => {
            
   
            let errors = {}
  
            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.headOffice = "Please fill in School Head Office Name"
            }else if (!letters.test(values.headOfficeName)) {
                errors.headOffice = "Please enter a valid School Head Office Name"
            }
            if(!values.startDate){
              errors.startDate = "Please fill in Starting Date"
            }
            if(!values.dueDate){
              errors.dueDate = "Please fill in Due Date"
            }
            if(!values.productionDeadline){
                errors.productionDeadline = "Please fill in Production Deadline"
            }
            if(!values.deliveryDate){
                errors.size = "Please fill in Delivery Date"
            return errors
            }


        }


    })
    return (
        <div>
             <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader><h3>Statement of Cash Flows</h3></CardHeader>
              <CardBody>
              <form onSubmit={formik.handleSubmit}>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                
                  <hr/>
                    <div className="modal-body">
                      <div className="row">
                     
                      
                     
                       
                      <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>From: </label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>To: </label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Account Groups: </label>
                          <select name="accountType" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountType} className="form-control" required>
                            <option value="selectAccountType">Select Account Type</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >ASSETS</option>
                            <option value="Current Asset">Current Asset</option>
                            <option value="Fixed Asset">Fixed Asset</option>
                            <option value="Inventory">Inventory</option>
                            <option value="Non - Current Asset">Non - Current Asset</option>
                            <option value="Pre Payment">Pre Payment</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >EQUITY</option>
                            <option value="Equity">Equity</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >EXPENSES</option>
                            <option value="Depreciation">Depreciation</option>
                            <option value="Direct Costs">Direct Costs</option>
                            <option value="Expense">Expense</option>
                            <option value="Overhead">Overhead</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >LIABILITY</option>
                            <option value="Current Liability">Current Liability</option>
                            <option value="Non-Current Liability">Non-Current Liability</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >REVENUE</option>
                            <option value="Other Income">Other Income</option>
                            <option value="Revenue">Revenue</option>
                            <option value="Sales">Sales</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >D & A</option>
                            <option >Depreciation</option>
                            <option >Amortization</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >Interest</option>
                            <option >Interest</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >Tax</option>
                            <option >Tax</option>
                          </select>
                          
                          </div>
                        </div>
                       
                      
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Tracking Category:</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             
                            </select>
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                        
                     
                        
                        
                        <div className="col-md-2 pt-4">
                          <div className="form-group">
                            <button className = "btn" onClick = {(e) => handleUpdate(e)}>Update</button>
                          </div>
                        </div>
                     </div>  
                      <hr />
                    </div>
                </div>
              </div>
            </div>
                    </div>
                    </form>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    <div className = "text-center">
                    <h4><b> Statement of Cash Flows </b></h4>
                    
                    <h4>Name </h4>
                    <h4>Date </h4>
                  
                    </div>
                    
                    </div>
        </div>
    )
}

export default TrackingSummary
