import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link} from "react-router-dom";
import { getAllSalesInvoiceAccountsValuesController } from '../../../Apis/ApiForSalesInvoice';
import { getAllPurchaseInvoiceAccountsValuesController } from '../../../Apis/ApiForPurchaseInvoice';
import { getAllSalesAndPurchaseInvoiceAccountsValuesController } from '../../../Apis/ApiForAllSalesAndPurchase';

function TrialBalanceReport() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getAllSalesAndPurchaseInvoiceAccountsValuesController()
      setItems(contents)
      console.log(items)
    }
    fetchItems()
  }, []);


   
   const handlingAssetData = (data) => {

    if((data.accountType == "Current Asset") || (data.accountType == "Fixed Asset")
    || (data.accountType == "Inventory") || (data.accountType == "Non - Current Asset") 
    || (data.accountType == "Pre Payment")){
      return(
        <tr>
          <td>
            {data.from}
          </td>
          <td>
          {data.taxAmount}.00
          </td>
          <td>
           
          </td>
          <td>
          {data.total}.00
          </td>
          <td>
        
          </td>
        </tr>
      )
    }
   }

   const handlingEquityData = (data) => {

    if(data.accountType == "Equity"){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00
          </td>
        </tr>
      )
    }
   }

   const handlingExpensesData = (data) => {

    if((data.accountType == "Depreciation") || (data.accountType == "Direct Costs")
      || (data.accountType == "Expense") || (data.accountType == "Overhead")){
      return(
        <tr>
          <td>
            {data.from}
          </td>
          <td>
          {data.taxAmount}.00
          </td>
          <td>
           
          </td>
          <td>
          {data.total}.00
          </td>
          <td>
       
          </td>
        </tr>
      )
    }
   }

   const handlingLiabilityData = (data) => {

    if((data.accountType == "Current Liability") || (data.accountType == "Non-Current Liability")
     ){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00
          </td>
        </tr>
      )
    }
   }

   const handlingRevenueData = (data) => {

    if((data.accountType == "Other Income") || (data.accountType == "Revenue")
    || (data.accountType == "Sales")
     ){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00
          </td>
        </tr>
      )
    }
   }

   const handlingDAData = (data) => {

    if((data.accountType == "Depreciation") || (data.accountType == "Amortization")
    
     ){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00
          </td>
        </tr>
      )
    }
   }

   const handlingInterestData = (data) => {

    if(data.accountType == "Interest"){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00 
          </td>
        </tr>
      )
    }
   }

   const handlingTaxData = (data) => {

    if(data.accountType == "Tax"){
      return(
        <tr>
          <td>
            {data.to}
          </td>
          <td>

          </td>
          <td>
            {data.taxAmount}.00
          </td>
          <td>

          </td>
          <td>
        {data.total}.00
          </td>
        </tr>
      )
    }
   }
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
                              <th>Account</th>
                              <th>Debit</th>
                              <th>Credit</th>
                              <th>YTD Debit</th>
                              <th>YTD Credit</th>

                            </tr>
                        </thead>
                        <p><b>Asset</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingAssetData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }
                           
    
                           <p><b>Equity</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingEquityData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                          <p><b>Expenses</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingExpensesData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                          <p><b>Liability</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingLiabilityData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                          <p><b>Revenue</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingRevenueData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                          <p><b>D & A</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingDAData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                            
                          <p><b>Interest</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingInterestData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }

                               
                          <p><b>Tax</b></p>  
                          {items != null ? 
                            items.map(contents => (
                              <tbody key = {contents._id}>
                                {handlingTaxData(contents)}
                              </tbody>
                              ))
                            :
                            <tbody></tbody>
                            }
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
              <CardHeader><h3>Trial Balance</h3></CardHeader>
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
                          <label htmlFor>Date: </label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          
                          </div>
                        </div>
                       
                        
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Sort by:</label>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Account Name</option>
                             <option>Account Code</option>
                             
                             
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
                    <h4><b> Trial Balance </b></h4>
                    <h4>Name</h4>
                    <h4>Date</h4>
                    </div>
                    <div>
                        {handleTableValues()}
                    </div>
                    
                    </div>
        </div>
    )
}

export default TrialBalanceReport
