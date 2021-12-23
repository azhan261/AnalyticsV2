import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getPurchaseInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getSalesInvoices } from '../../Apis/ApiForSalesInvoice';
import { getDirectCostsInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getInterests } from '../../Apis/ApiForInterest';
//import { getAgedPayableReferences } from '../Apis/ApiForAgedPayableReference';

function ProfitAndLoss() {
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [items, setItems] = useState([])
    const [sales, setSales] = useState()
    const [expenses, setExpenses] = useState([])
    const [purchaseValues, setPurchaseValues] = useState([])
    const [salesValues, setSalesValues] = useState([])
    const [directCosts, setDirectCosts] = useState([])
    const [interestValues, setInterestValues] = useState([])
    const [amortizationValues, setAmortizationValues] = useState([])
    const [depreciationValues, setDepreciationValues] = useState([])
    const [totalPurchase, setTotalPurchase] = useState()
    const [totalSales, setTotalSales] = useState()
    const [totalDirectCosts, setTotalDirectCosts] = useState()
    const [totalInterest, setTotalInterest] = useState()
    const [totalAmortization, setTotalAmortization] = useState()
    const [totalDepreciation, setTotalDepreciation] = useState()
    const [totalDA, setTotalDA] = useState()
    const [grossProfit, setGrossProfit] = useState()
    const [ebitda, setEbitda] = useState()
    const [taxRates, setTaxRates] = useState()
   
    

   
    useEffect(() => {
      const fetchPurchase = async () => {
        const contents = await getPurchaseInvoices()
        setPurchaseValues(contents);
      }
      const fetchSales = async () => {
        const contents = await getSalesInvoices()
        setSalesValues(contents);
      }
      const fetchDirectCosts = async () => {
        const contents = await getDirectCostsInvoices()
        setDirectCosts(contents);
      }
      const fetchInterest = async () => {
        const contents = await getInterests()
        setInterestValues(contents);
      }
      fetchPurchase()
      fetchSales()
      fetchDirectCosts()
      fetchInterest()
    }, []);

    var count = 0
    const timerId = setTimeout(() => {
      sumOfValues()
      }, 4000);
      const gettingDate = () => {
        console.log("test")
          const options = {
           
            year: 'numeric',
            month: 'long',
            
          };
          const options2 = {
           
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          var d = new Date();
          var n = d.toLocaleDateString('en-EN', options);
          //setCurrentDate(n)
          var newD = new Date();
          newD.toLocaleDateString('en-EN', options);
          var pastYear = newD.getFullYear() -1;
          newD.setFullYear(pastYear);
          console.log(pastYear);
          var newMonth = new Date();
          var prevMonth1 = newMonth.getMonth() -1
          var prevYear = newMonth.getFullYear()
          var prevDay = newMonth.getDay()
          var prevMonth2 = newMonth.getMonth() -2
          var prevYear2 = newMonth.getFullYear()
          var prevDay2 = newMonth.getDay()
          var prevMonth3 = newMonth.getMonth() -3
          var prevYear3 = newMonth.getFullYear()
          var prevDay3 = newMonth.getDay()
          var finalDatePrevMonth = new Date(prevYear, prevMonth1, prevDay)
          var finalDatePrevMonth2 = new Date(prevYear2, prevMonth2, prevDay2)
          var finalDatePrevMonth3 = new Date(prevYear3, prevMonth3, prevDay3)
          var finalDatePrevMonthString = finalDatePrevMonth.toLocaleDateString('en-EN', options2);
          var finalDatePrevMonthString2 = finalDatePrevMonth2.toLocaleDateString('en-EN', options2);
          var finalDatePrevMonthString3 = finalDatePrevMonth3.toLocaleDateString('en-EN', options2);
          console.log(prevYear,prevMonth1,prevDay)
          {/*}
          var prevMonth2 =
          var prevMonth3 =
        */}
          //x.setMonth(x.getMonth()-1)
          return(
            <div>
              <div>
                 <p style={{textAlign: 'right'}}>{n}</p>
                 &nbsp;
                 {finalDatePrevMonthString}
                 &nbsp;
                 {finalDatePrevMonthString2}
                 &nbsp;
                 {finalDatePrevMonthString3}
                 &nbsp;
              </div>
            </div>
          )
       
      }
    const sumOfValues = () => {
        var arrForTotalSales = [];
        var arrForTotalPurchase = [];
        var arrForTotalDirectCosts = []
        var arrForTotalInterest = []
        var arrForTotalDepreciation = []
        var arrForTotalAmortization = []
        var totForPurchase = 0;
        var totForSales = 0;
        var totForDirectCosts = 0;
        var totForInterest = 0;
        var totForAmortization = 0;
        var totForDepreciation = 0;
        var arrForExpense = []
        console.log(salesValues)
        for(var i=0;i<purchaseValues.length;i++){
            arrForTotalPurchase.push(purchaseValues[i].total)
        }
        for(var i=0;i<salesValues.length;i++){
          arrForTotalSales.push(salesValues[i].total)
        }
        for(var i=0;i<directCosts.length;i++){
          arrForTotalDirectCosts.push(directCosts[i].total)
        }
        for(var i=0;i<interestValues.length;i++){
          arrForTotalInterest.push(interestValues[i].total)
        }
        for(var i=0;i<purchaseValues.length;i++){
            totForPurchase +=  parseInt(arrForTotalPurchase[i]);
        }
        for(var i=0;i<salesValues.length;i++){
          totForSales +=  parseInt(arrForTotalSales[i]);
        }
        for(var i=0;i<directCosts.length;i++){
          totForDirectCosts +=  parseInt(arrForTotalDirectCosts[i]);
        }
        for(var i=0;i<interestValues.length;i++){
          totForInterest +=  parseInt(arrForTotalInterest[i]);
        }
        for(var i=0;i<amortizationValues.length;i++){
          totForAmortization +=  parseInt(arrForTotalAmortization[i]);
        }
        for(var i=0;i<depreciationValues.length;i++){
          totForDepreciation +=  parseInt(arrForTotalDepreciation[i]);
        }
        //document.getElementById("totalSales").innerHTML = totForPurchase;
        setTotalPurchase(totForPurchase)
        setTotalSales(totForSales)
        setTotalDirectCosts(totForDirectCosts)
        setTotalInterest(totForInterest)
        setTotalAmortization(totForAmortization)
        setTotalDepreciation(totForDepreciation)
        setTotalDA(totForAmortization + totForDepreciation )
        setGrossProfit(totForSales - totForDirectCosts)
        var totForGrossProfit = grossProfit
        console.log(grossProfit)
        setEbitda(totForGrossProfit - totForPurchase)

    }
    const onSubmit = async (data) => {
        console.log(data)
        
        //history.push("/placement-question-details")
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
        <>
        {/*<button onClick={(e) =>  sumOfValues(e)}>Trial</button>*/}
        
        <div className="content mt-4">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Reports</CardHeader>
                <CardBody>
                    
             <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title pt-3">Profit and Loss</h2>
                  <hr/>
                    <div className="modal-body">
                    <form>
                      <div className="row">
                      
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Date Range</label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                        <div className="form-group">
                          <label htmlFor>This month</label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          </div>
                        </div>
                    
                     </div>  
                      <hr />
                      </form>
   
                      <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                        {gettingDate()}
                          <hr />
                          <h2 style = {{textAlign: "left"}}><b>Trading Income</b></h2>
                          <hr />
                      </div>
                      <div>
                      <table>
                        <tbody>
                            {
                            salesValues.map(salesValues => (
                                <tr key={salesValues._id}>
                                <td align ="left">
                                    {salesValues.accountName}
                                </td>
                                <td align ="left">
                                    {salesValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                          <hr />  
                        <p style = {{textAlign: "left"}}>Total Sales {totalSales}</p>    
                      </div>
                      </div>
                      </div>
                    </div>

                    <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                          <h2 style = {{textAlign: "left"}}><b>Cost of Sales</b></h2>
                          <hr />
                        <table>
                        <tbody>
                            {
                            directCosts.map(directCosts => (
                                <tr key={directCosts._id}>
                                <td align ="left">
                                    {directCosts.accountName}
                                </td>
                                <td align ="left">
                                    {directCosts.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table> 
                        <hr />   
                          <p style = {{textAlign: "left"}}><b>Total Cost of Sales</b> {totalDirectCosts}</p>
                          <hr />                         
                          <p style = {{textAlign: "left"}}><b>Gross Profit</b> {grossProfit}</p>                         
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                          <hr />
                          <h2 style = {{textAlign: "left"}}><b>Operating Expenses</b></h2>
                          <hr />
                      </div>
                      <div>
                      <table>
                        <tbody>
                            {
                            purchaseValues.map(purchaseValues => (
                                <tr key={purchaseValues._id}>
                                <td align ="left">
                                    {purchaseValues.accountName}
                                </td>
                                <td align ="left">
                                    {purchaseValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <hr />
                        <p style = {{textAlign: "left"}}><b>Total Operating Expenses</b> {totalPurchase}</p>   
                      </div>
                      </div>
                      </div>
                    </div>

                    

                    <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                          <hr />
                          <h2 style = {{textAlign: "left"}}><b>EBITDA</b></h2>
                          <hr />
                      </div>
                      <div>
                      <table>
                        <tbody>
                           
                        </tbody>
                        </table>
                        <hr />
                        <div>
                          <p style = {{textAlign: "left"}}><b>EBITDA</b> {ebitda}</p>
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                      

                    <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                          <hr />
                          <h2 style = {{textAlign: "left"}}><b>Interest</b></h2>
                          <hr />
                      </div>
                      <div>
                      <table>
                        <tbody>
                            {
                            interestValues.map(interestValues => (
                                <tr key={interestValues._id}>
                                <td align ="left">
                                    {interestValues.accountName}
                                </td>
                                <td align ="left">
                                    {interestValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <hr />
                        <p style = {{textAlign: "left"}}><b>Total Interest</b> {totalInterest}</p>   
                      </div>
                      </div>
                      </div>
                    </div>
           

                    <div className="row2-container">
                      <div className="box green">
                      <div>
                      <div>
                          <hr />
                          <h2 style = {{textAlign: "left"}}><b>D & A</b></h2>
                          <hr />
                      </div>
                      <p style = {{textAlign: "left"}}><b>Depreciation</b></p>   
                      <div>
                      <table>
                        <tbody>
                            {
                            depreciationValues.map(depreciationValues => (
                                <tr key={depreciationValues._id}>
                                <td align ="left">
                                    {depreciationValues.accountName}
                                </td>
                                <td align ="left">
                                    {depreciationValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                      
                      </div>
                      <p style = {{textAlign: "left"}}><b>Amortization</b></p>   
                      <div>
                      <table>
                        <tbody>
                            {
                            amortizationValues.map(amortizationValues => (
                                <tr key={amortizationValues._id}>
                                <td align ="left">
                                    {amortizationValues.accountName}
                                </td>
                                <td align ="left">
                                    {amortizationValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        
                        <hr />
                        <p style = {{textAlign: "left"}}><b>Total Depreciation</b> {totalDepreciation}</p>   
                        <p style = {{textAlign: "left"}}><b>Total Amortization</b> {totalAmortization}</p>   
                      </div>
                      </div>
                      </div>
                    </div>

                  
                      <div>
                          <p style = {{textAlign: "left"}}><b>EBITDA 1</b></p>
                      </div>
                      <div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>     
       
    )
}

export default ProfitAndLoss
