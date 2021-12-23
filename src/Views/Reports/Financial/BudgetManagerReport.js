import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import {getAllSalesAndPurchaseInvoiceAccountsValuesController} from "../../../Apis/ApiForAllSalesAndPurchase"

function BudgetManagerReport() {

    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [items, setItems] = useState([])
    const [valueForDecimal, setValueForDecimal] = useState('')
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAllSalesAndPurchaseInvoiceAccountsValuesController()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }
    
    const handleIncome = () => {
      
      return(
        <tr>
          <td>
            
          </td>
        </tr>
      )
    }
  
    const handleTableValues = () => {
        return(
            <div>
                  <table id="table" className="table table-striped mt-3 " >
                        <thead>
                            <tr>
                              <th>
                              
                              </th>
                              <th>
                                Variance
                              </th>
                              <th>
                                Variance %
                              </th>
                            </tr>
                        </thead>  
                        <tbody>

                          <tr>
                            <td><b>Income</b></td>
                          </tr>
                          <tr>
                            <td>

                            </td>
                          </tr>
                          <tr>
                          <td><b>Total Income</b></td>
                          </tr>
                          <tr>
                             <td>
                              
                            </td>
                          </tr>
                          <tr>
                          <td><b>Less Cost of Sales</b></td>
                          </tr>
                          <tr>
                           <td>
                              
                           </td>
                          </tr>
                          <tr>
                          <td><b>Total Cost of Sales</b></td>
                          </tr>
                          <tr>
                          <td><b>Gross Profit</b></td>
                          </tr>
                          <tr>
                          <td><b>Less Operating Expenses</b></td>
                          </tr>
                          <tr>
                           <td>
                              
                           </td>
                          </tr>
                          <tr>
                          <td><b>Total Operating Expenses</b></td>
                          </tr>
                          <tr>
                          <td><b>Total Expenses</b></td>
                          </tr>
                          <tr>
                          <td><b>Net Profit</b></td>
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
              <CardHeader><h3>Budget Manager</h3></CardHeader>
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
                          <label htmlFor>Select Budget</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Overall Budget</option>
                      
                            </select>
                          
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Start</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Dates </option>
                             

                            </select>
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Actuals</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>None </option>
                             <option>3 months </option>
                             <option>6 months </option>
                             <option>12 months </option>
                             

                            </select>
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Period</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>None </option>
                             <option>3 months </option>
                             <option>6 months </option>
                             <option>12 months </option>
                             <option>24 months </option>
                             

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
                    <h4><b> Overall Budget </b></h4>
                  
                    </div>
                    <div>
                        {handleTableValues()}
                    </div>
                    
                    </div>
        </div>
    )
}

export default BudgetManagerReport
