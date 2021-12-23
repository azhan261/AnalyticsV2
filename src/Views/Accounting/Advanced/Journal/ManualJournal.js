import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getAddAccounts } from '../../../../Apis/ApiForAddAccount';

function ManualJournal() {

    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [items, setItems] = useState([])
    const [taxRates, setTaxRates] = useState()
    const [valueForCredit1, setValueForCredit1] = useState();
    const [valueForCredit2, setValueForCredit2] = useState();
    const [valueForCredit3, setValueForCredit3] = useState();
    const [valueForCredit4, setValueForCredit4] = useState();
    const [valueForCredit5, setValueForCredit5] = useState();
    const [valueForCredit6, setValueForCredit6] = useState();
    const [valueForCredit7, setValueForCredit7] = useState();
    const [valueForCredit8, setValueForCredit8] = useState();
    const [valueForCredit9, setValueForCredit9] = useState();
    const [valueForCredit10, setValueForCredit10] = useState();
    
    const [valueForDebit1, setValueForDebit1] = useState();
    const [valueForDebit2, setValueForDebit2] = useState();
    const [valueForDebit3, setValueForDebit3] = useState();
    const [valueForDebit4, setValueForDebit4] = useState();
    const [valueForDebit5, setValueForDebit5] = useState();
    const [valueForDebit6, setValueForDebit6] = useState();
    const [valueForDebit7, setValueForDebit7] = useState();
    const [valueForDebit8, setValueForDebit8] = useState();
    const [valueForDebit9, setValueForDebit9] = useState();
    const [valueForDebit10, setValueForDebit10] = useState();

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAddAccounts()
        setItems(contents)
      }
      fetchItems()
    }, []);


    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
    const addDecimal = num => Number(num).toFixed(2)
    
    const sumOfValues = (e) => {
        e.preventDefault()
        console.log('checking')
        var arrCredit = document.getElementsByName('amountCredit');
        var arrDebit = document.getElementsByName('amountDebit');
        /*
        var arrUnitPrice = document.getElementsByName('unitPrice');
        var arrPriceTotalUnits = document.getElementsByName('priceTotalUnits');
        var arrDiscInValue = document.getElementsByName('discInValue');
        var arrPriceTotalUnitsWithDiscount = document.getElementsByName('priceTotalUnits');
        var arrPurchaseTaxVat = document.getElementsByName('salesTaxVat');
        var arrPurchaseTaxVatValue = document.getElementsByName('salesTaxVatValue');
        var arrPurchasePriceAfterDiscount = document.getElementsByName('priceTotalUnits');
        var multForUnitPrice=0;
        var perc = 0;
        var arrayForMult = [];
        var arrayForPercentageBefore = [];
        var arrayForPercentage = [];
        var arrayForTotalUnitsWithDiscount= [];
        var arrayForPurchaseTaxVatVal = [];
        var arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal = []
        */
        var totForCredit=0;
        var totForDebit=0;
        var totFoUnitPrice=0;
        var totPriceTotalUnits=0;
        var totDiscPercentage=0;
        var totDiscInValue=0;
        var totPriceTotalUnitsWithDiscount=0;
        var totPurchaseTaxVatValue=0;
        var totPurchasePriceAfterDiscount=0;
        for(var i=0;i<arrCredit.length;i++){
            if(parseInt(arrCredit[i].value))
                totForCredit += parseInt(arrCredit[i].value);
                console.log(totForCredit)
        }
        document.getElementById("creditTotal").innerHTML = addDecimal(totForCredit);
        var testing = document.getElementById("creditTotal").innerHTML
        console.log(testing)
        document.getElementById("creditTotal").innerHTML = testing.toLocaleString();

        for(var i=0;i<arrDebit.length;i++){
          if(parseInt(arrDebit[i].value))
              totForDebit += parseInt(arrDebit[i].value);
              console.log(totForDebit)
      }
      document.getElementById("debitTotal").innerHTML = addDecimal(totForDebit);
      var testing2 = document.getElementById("debitTotal").innerHTML
      console.log(testing2)
      document.getElementById("debitTotal").innerHTML = testing2.toLocaleString();

      /*
        //document.getElementById('total').value = "hi";
        for(var i=0;i<arrCredit.length;i++){
          if(parseInt(arrCredit[i].value))
              var multForUnitPriceValue1 = parseInt(arrCredit[i].value);
              var multForUnitPriceValue2 = parseInt(arrUnitPrice[i].value);
              multForUnitPrice = multForUnitPriceValue1 * multForUnitPriceValue2;
              arrayForMult.push(multForUnitPrice)
              console.log(multForUnitPrice)
              
        }
      document.getElementById("priceForTotalUnitsID1").innerHTML = arrayForMult[0];
      document.getElementById("priceForTotalUnitsID2").innerHTML = arrayForMult[1];
      document.getElementById("priceForTotalUnitsID3").innerHTML = arrayForMult[2];
      console.log(arrayForMult)
      arrayForPercentageBefore.push(arrayForMult[0])
      arrayForPercentageBefore.push(arrayForMult[1])
      arrayForPercentageBefore.push(arrayForMult[2])
      console.log(arrayForPercentageBefore)
      //document.getElementById("val").innerHTML = "Total Quantity = " + tot;
      //document.getElementById('total').value = "hi";
      
      for(var i=0;i<arrDiscPercentage.length;i++){
        if(parseInt(arrDiscPercentage[i].value))
            var percVal1 = parseInt(arrayForPercentageBefore[i]);
            var percVal2 = parseInt(arrDiscPercentage[i].value);
            console.log(percVal1)
            console.log(percVal2)
            perc = (percVal2 / 100) * percVal1;
            arrayForPercentage.push(perc)
            console.log(arrayForPercentage)
            
      }
      document.getElementById("descperc1").innerHTML = arrayForPercentage[0];
      document.getElementById("descperc2").innerHTML = arrayForPercentage[1];
      document.getElementById("descperc3").innerHTML = arrayForPercentage[2];
   
      for(var i=0;i<arrDiscPercentage.length;i++){
        if(parseInt(arrDiscPercentage[i].value))
            var percVal1 = parseInt(arrayForMult[i]);
            var percVal2 = parseInt(arrayForPercentage[i]);
            console.log(percVal1)
            console.log(percVal2)
            perc = percVal1 - percVal2;
            arrayForTotalUnitsWithDiscount.push(perc)
            console.log(arrayForPercentage)
            
      }
      document.getElementById("withDisc1").innerHTML = arrayForTotalUnitsWithDiscount[0];
      document.getElementById("withDisc2").innerHTML = arrayForTotalUnitsWithDiscount[1];
      document.getElementById("withDisc3").innerHTML = arrayForTotalUnitsWithDiscount[2];
  
      for(var i=0;i<arrPurchaseTaxVat.length;i++){
        if(parseInt(arrPurchaseTaxVat[i].value))
            var percVal1 = parseInt(arrPurchaseTaxVat[i].value);
            var percVal2 = parseInt(arrayForTotalUnitsWithDiscount[i]);
            console.log(percVal1)
            console.log(percVal2)
            perc = (percVal1 / 100) * percVal2;
            arrayForPurchaseTaxVatVal.push(perc)
            console.log(arrayForPurchaseTaxVatVal)
            
      }
      document.getElementById("salesTaxVat1").innerHTML = arrayForPurchaseTaxVatVal[0];
      document.getElementById("salesTaxVat2").innerHTML = arrayForPurchaseTaxVatVal[1];
      document.getElementById("salesTaxVat3").innerHTML = arrayForPurchaseTaxVatVal[2];
  
      for(var i=0;i<arrPurchaseTaxVat.length;i++){
        if(parseInt(arrPurchaseTaxVat[i].value))
            var percVal1 = parseInt(arrayForPurchaseTaxVatVal[i]);
            var percVal2 = parseInt(arrayForTotalUnitsWithDiscount[i]);
            console.log(percVal1)
            console.log(percVal2)
            perc = percVal1 + percVal2;
            arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal.push(perc)
            console.log(arrayForPurchaseTaxVatVal)
            
      }
      document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML = arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal[0];
      document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML = arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal[1];
      document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML = arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal[2];
      
      for(var i=0;i<arrayForMult.length;i++){
        console.log(arrayForMult[i])
        totPriceTotalUnits += parseInt(arrayForMult[i]);
      }
      document.getElementById("prcTotalUnits").innerHTML = totPriceTotalUnits;
      
      for(var i=0;i<arrayForPercentage.length;i++){
        console.log(arrayForPercentage[i])
        totDiscInValue += parseInt(arrayForPercentage[i]);
      }
      document.getElementById("dscInValue").innerHTML = totDiscInValue;    
  
      for(var i=0;i<arrayForTotalUnitsWithDiscount.length;i++){
        console.log(arrayForTotalUnitsWithDiscount[i])
        totPriceTotalUnitsWithDiscount += parseInt(arrayForTotalUnitsWithDiscount[i]);
      }
      document.getElementById("prcTotalUnitsWithDiscount").innerHTML = totPriceTotalUnitsWithDiscount;
      
      for(var i=0;i<arrayForPurchaseTaxVatVal.length;i++){
        console.log(arrayForPurchaseTaxVatVal[i])
        totPurchaseTaxVatValue += parseInt(arrayForPurchaseTaxVatVal[i]);
      }
      document.getElementById("slsTaxVat").innerHTML = totPurchaseTaxVatValue;
      document.getElementById("subtotalTax").innerHTML = "Tax = " + totPurchaseTaxVatValue;
  
      for(var i=0;i<arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal.length;i++){
        console.log(arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal[i])
        totPurchasePriceAfterDiscount += parseInt(arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal[i]);
      }
      document.getElementById("slsPriceAfterDiscount").innerHTML = totPurchasePriceAfterDiscount;
      document.getElementById("subtotal").innerHTML = "Subtotal = " + totPurchasePriceAfterDiscount;
      var TotalOverall = totPurchaseTaxVatValue + totPurchasePriceAfterDiscount
      document.getElementById("totalOverall").innerHTML = TotalOverall;
      */
      }
  
      const onSubmit = async (data) => {
        console.log(data)
        
        //history.push("/placement-question-details")
      }
      const handleChange = (e) => {
        e.preventDefault()
        var totalOverall = document.getElementById("totalOverall").innerHTML
        formik.values.total = totalOverall
        console.log(formik.values)
        //createPurchaseInvoice(formik.values)
      }
  
      const handleAmountSend = (e) => {
        e.preventDefault()
        var amountToSend = document.getElementById("amountPaidWith").value
        formik.values.amountCredit = amountToSend
        console.log(formik.values)
        //createTestingAmountSend(formik.values)
      }
  
      const handleAmountPaidWith = (e) => {
        e.preventDefault()
        var amountToSend = document.getElementById("amountPaidWith").value
        var amountToSendDate = document.getElementById("amountPaidOnDate").value
        document.getElementById("totalPaid").innerHTML = amountToSend;
        document.getElementById("totalDate").innerHTML = amountToSendDate;
        var amountTotal = document.getElementById("totalOverall").innerHTML
        var amountDue = amountTotal - amountToSend
        document.getElementById("totalDue").innerHTML = amountDue;
        formik.values.amountPaid = amountToSend
        formik.values.amountDue = amountDue
        console.log(formik.values)
        //createTestingAmountSend(formik.values)
      }
      const handleApprovePurchase = (e) => {
        e.preventDefault()
        var amountToSend = document.getElementById("amountPaidWith").value
        var totalOverall = document.getElementById("totalOverall").innerHTML
        formik.values.amountCredit = amountToSend
        formik.values.total = totalOverall
        console.log(formik.values)
        //createAgedPayableReferences(formik.values)
      }

      const handleValueOnChangeCredit1 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit1(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeCredit2 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit2(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit3 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit3(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit4 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit4(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit5 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit5(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit6 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit6(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit7 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit7(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit8 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit8(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit9 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit9(addDecimal(event.target.value));
      
      }
      const handleValueOnChangeCredit10 = (event) => {
        //var addingComma = event.target.value
       setValueForCredit10(addDecimal(event.target.value));
      
      } 
     

      const handleValueOnChangeDebit1 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit1(addDecimal(event.target.value));
      
      }
      
      const handleValueOnChangeDebit2 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit2(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit3 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit3(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit4 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit4(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit5 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit5(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit6 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit6(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit7 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit7(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit8 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit8(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit9 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit9(addDecimal(event.target.value));
      
      }

      const handleValueOnChangeDebit10 = (event) => {
        //var addingComma = event.target.value
       setValueForDebit10(addDecimal(event.target.value));
      
      }

      const handleSubmissionOfValues = (e) => {
        e.preventDefault()
        var valueCreditTotal = document.getElementById("debitTotal").innerHTML
        var valueDebitTotal = document.getElementById("creditTotal").innerHTML
        if ( valueCreditTotal != valueDebitTotal ) {
          document.getElementById("preventSave").innerHTML = "<b >Cannot Proceed</b>" +   "<br /> Debit Total and Credit Total Must be of equal Value"
        }
      }
        const formik = useFormik({
          initialValues: {
              narrative: '',
              to: '',
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
              amountDebit:'',
              amountPaid: '',
              amountDue:'',
          },
  
          //4 Make onSubmit propert to handle what happens to data on form submisison
  
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
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>New Manual Journal</CardHeader>
              <CardBody>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3">Draft</h2>
                  <hr/>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Narrative</label>
                          <input type="text" name="to" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.to} className="form-control"  />
                          {formik.errors.to && formik.touched.to  ? (<div className='error'>{formik.errors.to}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Date</label>
                          <input className="form-control" type="date" name="startDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.startDate} />
                          {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                          </div>
                        </div>
                        
                        <div className="col-md-2">
                          <div className="form-group">
                            <button className = "btn btn-info text-light" onClick = {(e) => handleApprovePurchase(e)}>Approve</button>
                          </div>
                        </div>
                     </div>  
                      <hr />
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
                    <div>
                        <hr />
                        {/*}
                        <form>
                        <div className = "row">
                        <div className="col-md-3">
                        <div className="form-group">
                          <select name="accountType" placeholder = "PKR Pakistani Rupee" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountType} className="form-control" required>
                            <option value="PKR Pakistani Rupee">PKR Pakistani Rupee</option>
                            <option value="Add Currency">Add Currency</option>
                          </select>
                          {formik.touched.accountType ? (<div className='error'>{formik.errors.accountType}</div>) : null}
                        </div>
                        </div>
                        <div className="col-md-2 mt-2" >
                        <div className="form-group">
                        <label>
                                    Amounts are: 
                        </label>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="form-group">
                        <select name="accountType" placeholder = "PKR Pakistani Rupee" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountType} className="form-control" required>
                            <option value="Tax Enclusive">Tax Enclusive</option>
                            <option value="Tax Inclusive">Tax Inclusive</option>
                            <option value="No Tax">No Tax</option>
                          </select>
                          {formik.touched.accountType ? (<div className='error'>{formik.errors.accountType}</div>) : null}
                        </div>
                        </div>
                        </div>
                        </form>
                    */}
                    </div>

                    <div className="mt-3">
                        <table id="table" className="table table-striped mt-3 text-center" >
                        <thead>
                            <tr>
                              <th>Description</th>
                              <th>Account</th>
                              <th>Tax Rate</th>
                              <th>Debit PKR</th>
                              <th>Credit PKR</th>
                            </tr>
                        </thead>  
                        <tbody>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit1} onInput={(event) => handleValueOnChangeDebit1(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit1} onInput={(event) => handleValueOnChangeCredit1(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit2} onInput={(event) => handleValueOnChangeDebit2(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit2} onInput={(event) => handleValueOnChangeCredit2(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit3} onInput={(event) => handleValueOnChangeDebit3(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit3} onInput={(event) => handleValueOnChangeCredit3(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit4} onInput={(event) => handleValueOnChangeDebit4(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit4} onInput={(event) => handleValueOnChangeCredit4(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit5} onInput={(event) => handleValueOnChangeDebit5(event)} onBlur = {(e) => sumOfValues(e)}   />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit5} onInput={(event) => handleValueOnChangeCredit5(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit6} onInput={(event) => handleValueOnChangeDebit6(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit6} onInput={(event) => handleValueOnChangeCredit6(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit7} onInput={(event) => handleValueOnChangeDebit7(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit7} onInput={(event) => handleValueOnChangeCredit7(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit8} onInput={(event) => handleValueOnChangeDebit8(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit8} onInput={(event) => handleValueOnChangeCredit8(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit9} onInput={(event) => handleValueOnChangeDebit9(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit9} onInput={(event) => handleValueOnChangeCredit9(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text"/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>

                            </select>
                            }
                            </td>
                            <td>
                            <input className="form-control" type="text" name="taxRate"/>
                            {formik.touched.taxRate ? (<div className='error'>{formik.errors.taxRate}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountDebit"  value = {valueForDebit10} onInput={(event) => handleValueOnChangeDebit10(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountDebit ? (<div className='error'>{formik.errors.amountDebit}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="amountCredit"  value = {valueForCredit10} onInput={(event) => handleValueOnChangeCredit10(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.amountCredit ? (<div className='error'>{formik.errors.amountCredit}</div>) : null}  
                            </td>
                          </tr>
                          <tr>
                            <td>
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
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Total
                            </td>
                            <td></td>
                            <td></td>
                            <td id="debitTotal" >
                            </td>
                            <td id="creditTotal" >
                            </td>
                            {/*}
                            <td></td>
                            <td id="prcTotalUnits"  >                              
                            </td>
                            <td></td>
                            <td id="dscInValue" >
                            </td>
                            <td id="prcTotalUnitsWithDiscount"   >
                            </td>
                            <td></td>
                            <td id="slsTaxVat" >
                            </td>
                            <td id="slsPriceAfterDiscount"  >
                            </td>
                          */}
                          </tr>

                          
                          
                          
                        </tbody>
                        <button>Add a new line</button>
                        <button onClick={(e) => sumOfValues(e)}>Sum of values</button>
                        <span><p>Sub Total</p></span>
                   
                        </table>
                        {/*}
                        <p id="creditTotal"></p>
                        <p id="prcTotalUnits"></p>
                        <p id="dscInValue"></p>
                        <p id="prcTotalUnitsWithDiscount"></p>
                        <p id="slsTaxVat"></p>
                        <p id="slsTaxVatValue"></p>
                        <p id="slsPriceAfterDiscount"></p>
                          */}
                        <div className = "text-right">
                        <p id = "subtotal">
                            Subtotal
                        </p>
                        <p id = "subtotalTax">
                            Tax
                        </p>
                        <h3>
                            Total = <span id = "totalOverall"></span>
                        </h3>
                        <hr />
                        {/*}
                        <h3>
                            Amount Paid = <span id = "totalPaid"></span>
                        </h3>
                        <span>Paid On = <span id = "totalDate"></span></span>
                        <hr />
                        <h3>
                            Amount Due = <span id = "totalDue"></span>
                        </h3>
                        */}
                        </div>
                        <div>
                            <button className = "btn btn-info" onClick = {(e) => handleSubmissionOfValues(e)}>
                                Save
                            </button>
                            <button type="submit" className = "btn btn-success" onClick = {(e) => handleChange(e)} >
                                Approve
                            </button>
                            <button className = "btn btn-dark" >
                                Cancel
                            </button>
                        </div>
                    </div>
                    </form>
                      <hr />
                      <p id = "preventSave"></p>       
        </>
        </div>
    )
}

export default ManualJournal
