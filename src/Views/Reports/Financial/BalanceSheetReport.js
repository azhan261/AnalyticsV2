import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

import { getPurchaseInvoices } from '../../../Apis/ApiForPurchaseInvoice';
import { getSalesInvoices } from '../../../Apis/ApiForSalesInvoice';
import { getCurrentAssetsInvoices } from '../../../Apis/ApiForPurchaseInvoice';
import { getNonCurrentAssetsInvoices } from '../../../Apis/ApiForPurchaseInvoice';
import { getFixedAssetsInvoices } from '../../../Apis/ApiForPurchaseInvoice';
import { getCurrentLiabilityInvoices } from '../../../Apis/ApiForSalesInvoice';
import { getNonCurrentLiabilityInvoices } from '../../../Apis/ApiForSalesInvoice';
import { getEquityInvoices } from '../../../Apis/ApiForSalesInvoice';

function BalanceSheetReport() {
   
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
      }, 4000);

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
         <CardHeader><h3>Balance Sheet</h3></CardHeader>
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
                          <label htmlFor>Date: End of last financial year </label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          
                          </div>
                        </div>
                 
                   <div className="col-md-2">
                     <div className="form-group">
                     <label htmlFor>Compare with</label>
                     <select className="form-control"  name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate}>
                        <option>None</option>
                        <option>1 year</option>
                        <option>2 years</option>
                        <option>3 years</option>
                        <option>4 years</option>
                        <option>Enter a different number</option>
                        <hr />
                        <option>Day</option>
                        
                       </select>
                     {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                     </div>
                   </div>
                   <div className="col-md-2 pt-4">
                     <div className="form-group">
                       
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
               <h4><b> Balance Sheet </b></h4>
               <h4>Name</h4>
               <h4>Date</h4>
               </div>
               <div>
                   
               </div>
               </div>
   </div>
)
}

export default BalanceSheetReport
