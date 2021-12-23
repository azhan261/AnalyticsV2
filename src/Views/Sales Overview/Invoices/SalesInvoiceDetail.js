import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getAllSalesInvoiceAccountsValuesController } from '../../../Apis/ApiForSalesInvoice';
function SalesInvoiceDetail() {
   
    const [items, setItems] = useState()

    useEffect(() => {
        const fetchPurchase = async () => {
            const contents = await getAllSalesInvoiceAccountsValuesController()
            setItems(contents)
        }
        fetchPurchase()
    }, []);

    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }

    const handleTableValues = () => {
        const dateStartDateFunction = (data) => {
            const options = {
             
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            };
            
            var d = new Date(data);
            var n = d.toLocaleDateString('en-EN', options);
            
            return(
              <td>
                {n}
              </td>
            )
          }
          const dateEndDateFunction = (data) => {
            const options = {
             
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            };
            
            var d = new Date(data);
            var n = d.toLocaleDateString('en-EN', options);
            
            return(
              <td>
                {n}
              </td>
            )
          }
        return(
            <div>
                 <table id="table" className="table table-striped mt-3" >
                        <thead>
                            <tr>
                             <th>Number</th>
                             <th>Ref</th>
                             <th>To</th>
                             <th>Date</th>
                             <th>Due Date</th>
                             <th>Overdue by</th>
                             <th>Expected Date</th>
                             <th>Paid</th>
                             <th>Due</th>
                             <th>Sent</th>
                            </tr>
                            
                        </thead>  
                        <tbody>
                            {items != null ? 
                            items.map(contents => (
                                <tr key = {contents._id}>
                                    <td>
                                    <Link to={{
                                        pathname: '/aged-recievable-link',
                                        state: contents,
                                      }} className = "text-dark">{contents.invoice}</Link>
                                        
                                    </td>
                                    <td>
                                        {contents.reference}
                                    </td>
                                    <td>
                                        {contents.to}
                                    </td>
                                    {dateStartDateFunction(contents.startDate)}
                                    {dateEndDateFunction(contents.endDate)}
                                    <td>

                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                    <td>
                                        {contents.total}.00
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            ))
                        :
                        <tr></tr>
                        }
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
              <CardHeader><h4>Sales overview</h4></CardHeader>
              <CardBody>
                  <h3>Invoice</h3>
              <form onSubmit={formik.handleSubmit}>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
               
                <div className="login-registration-field">
                    
                    <div className="modal-body">
                      <div className="row">
                      <div className="col-md-2">
                        <button className = "btn btn-primary">
                            New Bill
                        </button>
                        </div>
                        <div className="col-md-2">
                        <button className = "btn btn-primary">
                            New Credit Note
                        </button>
                        </div>
                        <div className="col-md-2 ">
                        <button className = "btn btn-primary">
                            Import
                        </button>
                        </div>
                        <div className="col-md-2">
                        <button className = "btn btn-primary">
                            Export
                        </button>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <button className = "btn btn-primary" onClick = {(e) => handleUpdate(e)}>Update</button>
                          </div>
                        </div>
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
                    <div className = "pt-2">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">All</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Draft</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark"  href="#">Awaiting Approval</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="#">Awaiting Payment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark"  href="#">Paid</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-dark"  href="#">Repeating</a>
                    </li>
                    </ul>
                    </div>
                    <div>
                        {handleTableValues()}
                    </div>
                    </div>
        </div>
    )
}

export default SalesInvoiceDetail
