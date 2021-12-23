import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getAllPurchaseInvoiceAccountsValuesController } from '../../../Apis/ApiForPurchaseInvoice';

function AgedPayablesDetailsPurchaseReport() {
  const location = useLocation();
  const editorRef = useRef(null);
  const history = useHistory()
  const [items, setItems] = useState([])
  const [valueForDecimal, setValueForDecimal] = useState('')
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getAllPurchaseInvoiceAccountsValuesController()
      setItems(contents)
    }
    fetchItems()
  }, []);
  
  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
  const addDecimal = num => Number(num).toFixed(2)

  const timerId = setTimeout(() => {
    sumOfValues()
    }, 2000);

    const sumOfValues = () => {
      var arrForTotalSales = [];
      var arrForTotal = [];
      var arrForTotalPurchase = [];
      var arrForTotalDirectCosts = []
      var arrForTotalInterest = []
      var arrForTotalDepreciation = []
      var arrForTotalAmortization = []
      var totForPurchase = 0;
      var totForSales = 0;
      var totForTotal = 0;
      var totForDirectCosts = 0;
      var totForInterest = 0;
      var totForAmortization = 0;
      var totForDepreciation = 0;
      var arrForExpense = []

      for(var i=0;i<items.length;i++){
        arrForTotal.push(items[i].total)
      }
      for(var i=0;i<items.length;i++){
        totForTotal +=  parseInt(arrForTotal[i]);
      }
      //document.getElementById("Total").innerHTML = totForTotal;
      //document.getElementById("reportTotal").innerHTML = totForTotal
  }
    const onSubmit = async (data) => {
       
        //history.push("/placement-question-details")
      }
    const handleUpdate = async (data) => {

    }

    const handleTableValues = () => {
      const dateFunction = (data) => {
        const options = {
         
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        
        var invoiceStart = new Date(data.startDate);
        var invoiceStartDate = invoiceStart.toLocaleDateString('en-EN', options);
        var due = new Date(data.endDate);
        var invoiceDueDate = due.toLocaleDateString('en-EN', options);
        var months;
        months = (due.getFullYear() - invoiceStart.getFullYear()) * 12;
        months -= invoiceStart.getMonth();
        months += due.getMonth();
        var n = months <= 0 ? 0 : months
        var decimal = data.total
        var commas = decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //data.total = commas 
       
        var final = commas + '.00'
        //var commas = decimal.toLocaleString("en-US")
        //console.log(commas)
        //data.total = addCommas(data.total)
        if (n == 0) {
        return(
          <tr>
            <td>
            {invoiceStartDate}
            </td>
            <td>
            {invoiceDueDate}
            </td>
            <td>
            {data.reference}
            </td>
            <td>
            {final}
            </td>
            <td>
            
            </td>
            <td>
            
            </td>
            <td>
            
            </td>
            <td>
            
            </td>
            <td>
            {final}
            </td>

          </tr>
        )
      }
    }
      const dateDueDateFunction = (data) => {
        const options = {
         
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        
        var d = new Date(data.endDate);
        var n = d.toLocaleDateString('en-EN', options);
        
        return(
          <td>
            {n}
          </td>
        )
      }
      const dateDifference = (data) => {
        var start = new Date(data.startDate);
        var end = new Date(data.endDate);
        var months;
        months = (end.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end.getMonth();
        var n = months <= 0 ? 0 : months
        var decimal = data.total
        var commas = decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //data.total = commas 
        data.total = commas
        var final = commas + '.00'
        //var commas = decimal.toLocaleString("en-US")
        //console.log(commas)
        //data.total = addCommas(data.total)
        if (n == 0) {
          console.log('hit')
          return (
            <td>
              {final}
            </td>
          )
        }
       
    }
    const totalForValues = (data) => {
      var n = "Total " + data.to
      return(
        <div>
          <td>
           <b>{n}</b>
          </td>
          <td>
           a
          </td>
          <td>
           b
          </td>
        </div>
       
      )
    } 
    const redirecting = (data) => {

      history.push({
        pathname: '/aged-recievable-link',
        state: data,
      })
    }
        return(
            <div>
                 <table id="table" className="table table-striped mt-3 " >
                        <thead>
                            <tr>
                             <td>Invoice Date</td>
                             <td>Due Date</td>
                            
                             <td>Invoice Reference</td>
                             <td>Current</td>
            
                            <td> &lt; 1 Month</td>
                            <td>2 Months</td>
                            <td>3 Months</td>
                            <td>
                             Older
                            </td>
                            <td>
                             Total
                           </td>
                           </tr>
                        </thead>  
                        {
                              items.map(contents => (
                                <tbody key={contents._id}>
                                  <tr>
                                  <td>
                                      <h5><b><Link to={{
                                        pathname: '/aged-recievable-link',
                                        state: contents,
                                      }} className = "text-dark">{contents.from}</Link></b></h5>
                                  </td>
                                  </tr>
                                    {dateFunction(contents)}
                                  <tr>
                                    <td>
                                      <b>Total {contents.from}</b>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    
                                    </td>
                                    {dateDifference(contents)}
                                  </tr>
                                  </tbody>
                              ))
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
              <CardHeader><h3>Aged Payables Detail</h3></CardHeader>
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
                          <div style = {{display:'inline-flex'}}>
                          <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>Test</option>
                            </select>
                          
                            <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                             <option>This month</option>
                             <option>This quarter</option>
                             <option>This financial year</option>
                             <hr />
                             <option>Last month</option>
                             <option>Last quarter</option>
                             <option>Last financial year</option>
                             <hr />
                             <option>Month to date</option>
                             <option>Quarter to date</option>
                             <option>Year to date</option>
                             <hr />
                            </select>
                           </div>
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
                    <h4><b> Aged Payables Detail  </b></h4>
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

export default AgedPayablesDetailsPurchaseReport
