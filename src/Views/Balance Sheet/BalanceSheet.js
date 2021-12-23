import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getPurchaseInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getSalesInvoices } from '../../Apis/ApiForSalesInvoice';
import { getCurrentAssetsInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getNonCurrentAssetsInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getFixedAssetsInvoices } from '../../Apis/ApiForPurchaseInvoice';
import { getCurrentLiabilityInvoices } from '../../Apis/ApiForSalesInvoice';
import { getNonCurrentLiabilityInvoices } from '../../Apis/ApiForSalesInvoice';
import { getEquityInvoices } from '../../Apis/ApiForSalesInvoice';
//import { getAgedPayableReferences } from '../Apis/ApiForAgedPayableReference';

function BalanceSheet() {

    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [items, setItems] = useState([])
    const [sales, setSales] = useState()
    const [purchaseValues, setPurchaseValues] = useState([])
    const [salesValues, setSalesValues] = useState([])
    const [currentAssetValues, setcurrentAssetValues] = useState([])
    const [nonCurrentAssetValues, setNonCurrentAssetValues] = useState([])
    const [fixedAssetValues, setFixedAssetValues] = useState([])
    const [currentLiabilityValues, setCurrentLiabilityValues] = useState([])
    const [nonCurrentLiabilityValues, setNonCurrentLiabilityValues] = useState([])
    const [equityValues, setEquityValues] = useState([])
    const [totalPurchase, setTotalPurchase] = useState()
    const [totalSales, setTotalSales] = useState()
    const [totalCurrentAssetValues, setTotalCurrentAssetValues] = useState()
    const [totalNonCurrentAssetValues, setTotalNonCurrentAssetValues] = useState()
    const [totalFixedAssetValues, setTotalFixedAssetValues] = useState()
    const [totalOfAllAssetsValues, setTotalOfAllAssetsValues] = useState()
    const [totalCurrentLiabilityValues, setTotalCurrentLiabilityValues] = useState()
    const [totalNonCurrentLiabilityValues, setTotalNonCurrentLiabilityValues] = useState()
    const [totalOfAllLiabilityValues, setTotalOfAllLiabilityValues] = useState()
    const [totalEquityValues, setTotalEquityValues] = useState()
    const [grossProfit, setGrossProfit] = useState()
    const [taxRates, setTaxRates] = useState()
    const [currentDatre, setCurrentDate] = useState('')

   
    useEffect(() => {
      const fetchPurchase = async () => {
        const contents = await getPurchaseInvoices()
        setPurchaseValues(contents);
      }
      const fetchSales = async () => {
        const contents = await getSalesInvoices()
        setSalesValues(contents);
      }
      const fetchCurrentAssets = async () => {
        const contents = await getCurrentAssetsInvoices()
        setcurrentAssetValues(contents);
      }
      const fetchNonCurrentAssets = async () => {
        const contents = await getNonCurrentAssetsInvoices()
        setNonCurrentAssetValues(contents);
      }
      const fetchFixedAssets = async () => {
        const contents = await getFixedAssetsInvoices()
        setFixedAssetValues(contents);
      }
      const fetchCurrentLiability = async () => {
        const contents = await getCurrentLiabilityInvoices()
        setCurrentLiabilityValues(contents);
      }
      const fetchNonCurrentLiability = async () => {
        const contents = await getNonCurrentLiabilityInvoices()
        setNonCurrentLiabilityValues(contents);
      }
      const fetchEquityValues = async () => {
        const contents = await getEquityInvoices()
        setEquityValues(contents);
      }

      fetchPurchase()
      fetchSales()
      fetchCurrentAssets()
      fetchNonCurrentAssets()
      fetchFixedAssets()
      fetchCurrentLiability()
      fetchNonCurrentLiability()
      fetchEquityValues()

    }, []);

    var count = 0
    const timerId = setTimeout(() => {
        sumOfValues()
      }, 2000);

    const sumOfValues = () => {
        var arrForTotalSales = [];
        var arrForTotalPurchase = [];
        var arrForTotalFixedAssets = [];
        var arrForTotalCurrentAssets = [];
        var arrForTotalNonCurrentAssets = [];
        var arrForTotalCurrentLiability = [];
        var arrForTotalNonCurrentLiability = [];
        var arrForTotalEquity = [];
        var totForFixedAssets = 0;
        var totForCurrentAssets = 0;
        var totForNonCurrentAssets = 0;
        var totForPurchase = 0;
        var totForSales = 0;
        var totForCurrentLiability = 0;
        var totForNonCurrentLiability = 0;
        var totForEquity = 0;
        
        for(var i=0;i<purchaseValues.length;i++){
            arrForTotalPurchase.push(purchaseValues[i].total)
        }
        for(var i=0;i<salesValues.length;i++){
          arrForTotalSales.push(salesValues[i].total)
        }
        for(var i=0;i<currentAssetValues.length;i++){
          arrForTotalCurrentAssets.push(currentAssetValues[i].total)
        }
        for(var i=0;i<nonCurrentAssetValues.length;i++){
          arrForTotalNonCurrentAssets.push(nonCurrentAssetValues[i].total)
        }
        for(var i=0;i<fixedAssetValues.length;i++){
          arrForTotalFixedAssets.push(fixedAssetValues[i].total)
        }
        for(var i=0;i<currentLiabilityValues.length;i++){
          arrForTotalCurrentLiability.push(currentLiabilityValues[i].total)
        }
        for(var i=0;i<nonCurrentLiabilityValues.length;i++){
          arrForTotalNonCurrentLiability.push(nonCurrentLiabilityValues[i].total)
        }
        for(var i=0;i<equityValues.length;i++){
          arrForTotalEquity.push(equityValues[i].total)
        }
        for(var i=0;i<purchaseValues.length;i++){
          totForPurchase +=  parseInt(arrForTotalPurchase[i]);
        }
        for(var i=0;i<salesValues.length;i++){
          totForSales +=  parseInt(arrForTotalSales[i]);
        }
        for(var i=0;i<currentAssetValues.length;i++){
          totForCurrentAssets +=  parseInt(arrForTotalCurrentAssets[i]);
        }
        for(var i=0;i<nonCurrentAssetValues.length;i++){
          totForNonCurrentAssets +=  parseInt(arrForTotalNonCurrentAssets[i]);
        }
        for(var i=0;i<fixedAssetValues.length;i++){
          totForFixedAssets +=  parseInt(arrForTotalFixedAssets[i]);
        }
        for(var i=0;i<currentLiabilityValues.length;i++){
          totForCurrentLiability +=  parseInt(arrForTotalCurrentLiability[i]);
        }
        for(var i=0;i<nonCurrentLiabilityValues.length;i++){
          totForNonCurrentLiability +=  parseInt(arrForTotalNonCurrentLiability[i]);
        }
        for(var i=0;i<equityValues.length;i++){
          totForEquity +=  parseInt(arrForTotalEquity[i]);
        }
        //document.getElementById("totalSales").innerHTML = totForPurchase;
        setTotalPurchase(totForPurchase)
        setTotalSales(totForSales)
        setTotalCurrentAssetValues(totForCurrentAssets)
        setTotalNonCurrentAssetValues(totForNonCurrentAssets)
        setTotalFixedAssetValues(totForFixedAssets)
        setTotalCurrentLiabilityValues(totForCurrentLiability)
        setTotalNonCurrentLiabilityValues(totForNonCurrentLiability)
        setTotalEquityValues(totForEquity)
        setTotalOfAllAssetsValues(totForFixedAssets + totForCurrentAssets + totForNonCurrentAssets)
        setTotalOfAllLiabilityValues(totForCurrentLiability + totForNonCurrentLiability)
        setGrossProfit(totForSales - totForPurchase)
    }
    const onSubmit = async (data) => {
        console.log(data)
        
        //history.push("/placement-question-details")
      }
    const gettingDate = () => {
      console.log("test")
        const options = {
         
          year: 'numeric',
          month: 'long',
          
        };
        
        var d = new Date();
        var n = d.toLocaleDateString('en-EN', options);
        //setCurrentDate(n)
        var newD = new Date();
        newD.toLocaleDateString('en-EN', options);
        var pastYear = newD.getFullYear() -1;
        newD.setFullYear(pastYear);
        console.log(pastYear);
        
        return(
          <div>
            <div>
               <p style={{textAlign: 'right'}}>{n}</p>
            </div>
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
        <>
        {/*<button onClick={(e) =>  sumOfValues(e)}>Trial</button>*/}
        
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Balance Sheet</CardHeader>
                <CardBody>
                    
             <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3"></h2>
                  <hr/>
                    <div className="modal-body">
                    <form>
                      <div className="row">
                     </div>  
                      <hr />
                      </form>
                      <div>
                       {gettingDate()}
                      </div>
                      <div>
                          <hr />
                          <p style = {{textAlign: "left", fontSize:"18px"}}><b>Assets</b></p>
                          <hr />
                          <p style = {{textAlign: "left"}}>Current Assets</p>
                        <table>
                        <tbody>
                            {
                            currentAssetValues.map(currentAssetValues => (
                                <tr key={currentAssetValues._id}>
                                <td>
                                    {currentAssetValues.accountName}
                                </td>
                                <td>
                                    {currentAssetValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <hr />
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Current Assets</b> {totalCurrentAssetValues}</p>
                        <hr />
                        <p style = {{textAlign: "left"}}>Non Current Assets</p>
                        <table>
                        <tbody>
                            {
                            nonCurrentAssetValues.map(nonCurrentAssetValues => (
                                <tr key={nonCurrentAssetValues._id}>
                                <td>
                                    {nonCurrentAssetValues.accountName}
                                </td>
                                <td>
                                    {nonCurrentAssetValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <hr />
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Non Current Assets</b> {totalNonCurrentAssetValues}</p>
                        <hr />
                        <p style = {{textAlign: "left"}}>Fixed Assets</p>
                        <table>
                        <tbody>
                            {
                            fixedAssetValues.map(fixedAssetValues => (
                                <tr key={fixedAssetValues._id}>
                                <td>
                                    {fixedAssetValues.accountName}
                                </td>
                                <td>
                                    {fixedAssetValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Fixed Assets</b> {totalFixedAssetValues}</p>
                        <hr />
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Assets</b> {totalOfAllAssetsValues}</p>
                        <hr />
                      </div>
                      <div>
                          <p style = {{textAlign: "left", fontSize:"18px"}}><b>Liabilities</b></p>
                          <hr />
                        <p style = {{textAlign: "left"}}>Current Liabilities</p>
                        <table>
                        <tbody>
                            {
                            currentLiabilityValues.map(currentLiabilityValues => (
                                <tr key={currentLiabilityValues._id}>
                                <td>
                                    {currentLiabilityValues.accountName}
                                </td>
                                <td>
                                    {currentLiabilityValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Current Liabilities</b> {totalCurrentLiabilityValues}</p>                         
                      </div>
                      <div>
                      <hr />
                        <p style = {{textAlign: "left"}}>Non Current Liabilities</p>
                        <table>
                        <tbody>
                            {
                            nonCurrentLiabilityValues.map(nonCurrentLiabilityValues => (
                                <tr key={nonCurrentLiabilityValues._id}>
                                <td>
                                    {nonCurrentLiabilityValues.accountName}
                                </td>
                                <td>
                                    {nonCurrentLiabilityValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Non Current Liabilities</b> {totalNonCurrentLiabilityValues}</p>                         
                          <hr />
                          <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Liabilities</b> {totalOfAllLiabilityValues}</p>
                          <hr />
                          <p style = {{textAlign: "left", fontSize:"18px"}}><b>Equity</b></p>
                          <hr />
                        <table>
                        <tbody>
                            {
                            equityValues.map(equityValues => (
                                <tr key={equityValues._id}>
                                <td>
                                    {equityValues.accountName}
                                </td>
                                <td>
                                    {equityValues.total}
                                </td>
                                </tr>
                            ))
                            }
                        </tbody>
                        </table>
                        <hr />
                        <p style = {{textAlign: "left",  fontSize:"18px"}}><b>Total Equity</b> {totalEquityValues}</p>
                      </div>
                      <div>
                                       
                      </div>
                      <div>
                          <p style = {{textAlign: "left"}}>Net Profit</p>
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

export default BalanceSheet
