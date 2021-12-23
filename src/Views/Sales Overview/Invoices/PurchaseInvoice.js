import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { getAddAccounts, updateAddAccount } from '../../../Apis/ApiForAddAccount';
import { createPurchaseInvoice, createAllPurchaseInvoiceAccountsValues } from '../../../Apis/ApiForPurchaseInvoice';
import { createTestingAmountSend } from '../../../Apis/ApiForTestingAmountSend';
import { createAgedPayableReferences } from '../../../Apis/ApiForAgedPayableReference';
import { getTaxRates } from '../../../Apis/ApiForTaxRate';
import { createLedgers } from '../../../Apis/ApiForLedgerControl';
import ModalTest from '../../Accounting/Advanced/Chart Of Accounts/Modals/ModalTest';
import { createAmountControls } from '../../../Apis/ApiForAmountControl';
import { getAmountControls } from '../../../Apis/ApiForAmountControl';
import { createPurchaseOrSalesTaxVatValueAfterDiscounts } from '../../../Apis/ApiForPurchaseSalesControl';
import { createDirectCostsInvoice } from '../../../Apis/ApiForPurchaseInvoice';
import { createCurrentAssetsInvoice } from '../../../Apis/ApiForPurchaseInvoice';
import { createNonCurrentAssetsInvoice } from '../../../Apis/ApiForPurchaseInvoice';
import { createFixedAssetsInvoice } from '../../../Apis/ApiForPurchaseInvoice';
import { createInterests } from '../../../Apis/ApiForInterest';
import { createAllSalesAndPurchaseInvoiceAccountsValues } from '../../../Apis/ApiForAllSalesAndPurchase';
function PurchaseInvoice() {
    
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [taxTotalArray, setTaxTotalArray] = useState([])
    const [taxSingleValue, settingTaxSingleValue] = useState()
    const [items, setItems] = useState([])
    const [accountValues, setAccountValues] = useState([])
    const [taxRates, setTaxRates] = useState()
    const [valueForQTY1, setValueForQTY1] = useState("");
    const [valueForQTY2, setValueForQTY2] = useState("");
    const [valueForQTY3, setValueForQTY3] = useState("");


    const [valueForDescription1, setValueForDescription1] = useState("");
    const [valueForDescription2, setValueForDescription2] = useState("");
    const [valueForDescription3, setValueForDescription3] = useState("");

    const [valueForAccount1, setValueForAccount1] = useState("");
    const [valueForAccount2, setValueForAccount2] = useState("");
    const [valueForAccount3, setValueForAccount3] = useState("");


    const [valueForPricePerUnitWithoutPurchaseTaxVAT1, setValueForPricePerUnitWithoutPurchaseTaxVAT1] = useState("");
    const [valueForPricePerUnitWithoutPurchaseTaxVAT2, setValueForPricePerUnitWithoutPurchaseTaxVAT2] = useState("");
    const [valueForPricePerUnitWithoutPurchaseTaxVAT3, setValueForPricePerUnitWithoutPurchaseTaxVAT3] = useState("");

    const [valueForPriceTotalUnitsWithoutPurchaseTaxVAT1, setValueForPriceTotalUnitsWithoutPurchaseTaxVAT1] = useState("");
    const [valueForPriceTotalUnitsWithoutPurchaseTaxVAT2, setValueForPriceTotalUnitsWithoutPurchaseTaxVAT2] = useState("");
    const [valueForPriceTotalUnitsWithoutPurchaseTaxVAT3, setValueForPriceTotalUnitsWithoutPurchaseTaxVAT3] = useState("");

    const [valueForDiscount1, setValueForDiscount1] = useState("");
    const [valueForDiscount2, setValueForDiscount2] = useState("");
    const [valueForDiscount3, setValueForDiscount3] = useState("");

    const [valueForDiscountInValue1, setValueForDiscountInValue1] = useState("");
    const [valueForDiscountInValue2, setValueForDiscountInValue2] = useState("");
    const [valueForDiscountInValue3, setValueForDiscountInValue3] = useState("");
    
    const [valueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount1, setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount1] = useState("");
    const [valueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2, setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2] = useState("");
    const [valueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3, setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3] = useState("");

    const [valueForPurchaseTaxVAT1, setValueForPurchaseTaxVAT1] = useState("");
    const [valueForPurchaseTaxVAT2, setValueForPurchaseTaxVAT2] = useState("");
    const [valueForPurchaseTaxVAT3, setValueForPurchaseTaxVAT3] = useState("");
    
    const [valueForPurchaseTaxVATinValue1, setValueForPurchaseTaxVATinValue1] = useState("");
    const [valueForPurchaseTaxVATinValue2, setValueForPurchaseTaxVATinValue2] = useState("");
    const [valueForPurchaseTaxVATinValue3, setValueForPurchaseTaxVATinValue3] = useState("");


    const [valueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT1, setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT1] = useState("");
    const [valueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2, setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2] = useState("");
    const [valueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3, setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3] = useState("");


    const [valueForunitPrice1, setValueForunitPrice1] = useState();
    const [valueForunitPrice2, setValueForunitPrice2] = useState();
    const [valueForunitPrice3, setValueForunitPrice3] = useState();



    //const [valueForTotal,]


    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
    const addDecimal = num => Number(num).toFixed(2)

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getAddAccounts()
        setItems(contents)
      }
      const fetchTax = async function() {
        const tax = await getTaxRates()
        setTaxRates(tax)
      }
      const fetchAccountValues = async function() {
        const amountValue = await getAmountControls()
        setAccountValues(amountValue)
      }
      fetchItems()
      fetchTax()
      fetchAccountValues()
    }, []);

    const findTotal = () => {
      /*

      (/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")


      e.preventDefault()
      var table = document.getElementById("table"), sumVal = 0;
      console.log (table.rows[3].cells[2].innerHTML)
      console.log(table + "works")
      
      if (table.rows.length == null){
        document.getElementById("val").innerHTML = "No values"
      }else{
        for(var i = 1; i < table.rows.length; i++)
      {
          sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
      }
      
      document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
      console.log(sumVal);
      }
     */ 
    }
        
    const sumOfValues = (e) => {
      e.preventDefault()
      console.log('checking')
      var arrQty = document.getElementsByName('qty');
      var taxValue = ""
      var arrUnitPrice = document.getElementsByName('unitPrice');
      var arrPriceTotalUnits = document.getElementsByName('priceTotalUnits');
      var arrDiscPercentage = document.getElementsByName('discPercentage');
      var arrDiscInValue = document.getElementsByName('discInValue');
      var arrPriceTotalUnitsWithDiscount = document.getElementsByName('priceTotalUnits');
      var arrPurchaseTaxVat = ""
      var arrPurchaseTaxVatValue = document.getElementsByName('purchaseTaxVatValue');
      var arrPurchasePriceAfterDiscount = document.getElementsByName('priceTotalUnits');
      var multForUnitPrice=0;
      var perc = 0;
      var arrayForMult = [];
      var arrayForNumb = []
      var arrayForPercentageBefore = [];
      var arrayForPercentage = [];
      var arrayForTotalUnitsWithDiscount= [];
      var arrayForPurchaseTaxVatVal = [];
      var arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal = []
      var totForQty=0;
      var totFoUnitPrice=0;
      var totPriceTotalUnits=0;
      var totDiscPercentage=0;
      var totDiscInValue=0;
      var totPriceTotalUnitsWithDiscount=0;
      var totPurchaseTaxVatValue=0;
      var totPurchasePriceAfterDiscount=0;

      if (taxSingleValue != null){
        arrPurchaseTaxVat = taxSingleValue  
      }
      
      for(var i=0;i<arrQty.length;i++){
        arrayForNumb.push(arrQty[i].value)
        arrayForNumb[i] = arrayForNumb[i].replace(/,/g, '');
        if(parseInt(arrayForNumb[i]))
              totForQty += parseInt(arrayForNumb[i]);
      }
      document.getElementById("quantityTotal").innerHTML = addDecimal(totForQty);
      var testing = document.getElementById("quantityTotal").innerHTML
      document.getElementById("quantityTotal").innerHTML = testing.toLocaleString();
      //document.getElementById('total').value = "hi";
      for(var i=0;i<arrQty.length;i++){
          if(arrUnitPrice[i].value == ""){
          var multForUnitPriceValue1 = 0
          var multForUnitPriceValue2 = 0
          multForUnitPrice = multForUnitPriceValue1 * multForUnitPriceValue2;
          arrayForMult.push(multForUnitPrice)
          }
          else{
            var multForUnitPriceValue1 = parseInt(arrQty[i].value);
            var multForUnitPriceValue2 = parseInt(arrUnitPrice[i].value);
            multForUnitPrice = multForUnitPriceValue1 * multForUnitPriceValue2;
            arrayForMult.push(multForUnitPrice)
          }
      }
    document.getElementById("priceForTotalUnitsID1").innerHTML = arrayForMult[0];
    document.getElementById("priceForTotalUnitsID2").innerHTML = arrayForMult[1];
    document.getElementById("priceForTotalUnitsID3").innerHTML = arrayForMult[2];
    arrayForPercentageBefore.push(arrayForMult[0])
    arrayForPercentageBefore.push(arrayForMult[1])
    arrayForPercentageBefore.push(arrayForMult[2])
    //document.getElementById("val").innerHTML = "Total Quantity = " + tot;
    //document.getElementById('total').value = "hi";
    for(var i=0;i<arrDiscPercentage.length;i++){
      if((arrayForPercentageBefore[i] == "") || (arrayForPercentageBefore[i] == null)){
        var percVal1 = 0
        var percVal2 =  0
        perc = (percVal2 / 100) * percVal1;
        arrayForPercentage.push(perc)
        }
      else if((arrDiscPercentage[i].value == "") || (arrDiscPercentage[i].value == null)){
        var percVal1 = 0
        var percVal2 =  0
        perc = (percVal2 / 100) * percVal1;
        arrayForPercentage.push(perc)
        console.log(arrayForPercentage)
      }
      else{
          var percVal1 = parseInt(arrayForPercentageBefore[i]);
          var percVal2 = parseInt(arrDiscPercentage[i].value);
          perc = (percVal2 / 100) * percVal1;
          arrayForPercentage.push(perc)
      }
    }
    document.getElementById("descperc1").innerHTML = arrayForPercentage[0];
    document.getElementById("descperc2").innerHTML = arrayForPercentage[1];
    document.getElementById("descperc3").innerHTML = arrayForPercentage[2];
 
    for(var i=0;i<arrDiscPercentage.length;i++){
      if(parseInt(arrDiscPercentage[i].value)){
        if((arrayForMult[i] == 0) || (arrayForMult[i] == null)) {
          var percVal1 = 0
          var percVal2 = 0
          perc = percVal1 - percVal2;
          arrayForTotalUnitsWithDiscount.push(perc)
          console.log(arrayForTotalUnitsWithDiscount, "testing, start work from here")   
        }
        else if((arrayForPercentage[i] == 0) || (arrayForPercentage[i] == null)) {
          var percVal1 = 0
          var percVal2 = 0
          perc = percVal1 - percVal2;
          arrayForTotalUnitsWithDiscount.push(perc)
          console.log(arrayForTotalUnitsWithDiscount, "testing, start work from here")   
        }
        else{
          var percVal1 = parseInt(arrayForMult[i]);
          var percVal2 = parseInt(arrayForPercentage[i]);
          perc = percVal1 - percVal2;
          arrayForTotalUnitsWithDiscount.push(perc)
          console.log(arrayForTotalUnitsWithDiscount, "testing, start work from here")   
        }
      }
      /*
      if(parseInt(arrDiscPercentage[i].value))
          var percVal1 = parseInt(arrayForMult[i]);
          var percVal2 = parseInt(arrayForPercentage[i]);
          perc = percVal1 - percVal2;
          arrayForTotalUnitsWithDiscount.push(perc)
          console.log(arrayForTotalUnitsWithDiscount, "testing, start work from here")   
          */
    }
    
    document.getElementById("withDisc1").innerHTML = arrayForTotalUnitsWithDiscount[0];
    document.getElementById("withDisc2").innerHTML = arrayForTotalUnitsWithDiscount[1];
    document.getElementById("withDisc3").innerHTML = arrayForTotalUnitsWithDiscount[2];

    for(var i=0;i<arrQty.length;i++){
      if((arrPurchaseTaxVat == "") || (arrPurchaseTaxVat == null)){
        var percVal1 = 0
        var percVal2 =  0
        perc = (percVal2 / 100) * percVal1;
        arrayForPercentage.push(perc)
        }
      else if((arrayForTotalUnitsWithDiscount[i] == "") || (arrayForTotalUnitsWithDiscount[i] == null)){
        var percVal1 = 0
        var percVal2 =  0
        perc = (percVal2 / 100) * percVal1;
        arrayForPercentage.push(perc)
      }
      else{
        var percVal1 = parseInt(arrPurchaseTaxVat);
        var percVal2 = parseInt(arrayForTotalUnitsWithDiscount[i]);
        perc = (percVal1 / 100) * percVal2;
        arrayForPurchaseTaxVatVal.push(perc)
        console.log(arrayForPurchaseTaxVatVal)
      }
          
    }
    
    document.getElementById("purchaseTaxVat1").innerHTML = arrayForPurchaseTaxVatVal[0];
    document.getElementById("purchaseTaxVat2").innerHTML = arrayForPurchaseTaxVatVal[1];
    document.getElementById("purchaseTaxVat3").innerHTML = arrayForPurchaseTaxVatVal[2];

    for(var i=0;i<arrQty.length;i++){
      if((arrayForPurchaseTaxVatVal[i] == "") || (arrayForPurchaseTaxVatVal[i] == null)){
        var percVal1 = 0
        console.log(arrayForPurchaseTaxVatVal, "hit First val")
        var percVal2 = 0
        console.log(arrayForTotalUnitsWithDiscount, "hit second")
        console.log(percVal1)
        console.log(percVal2)
        perc = percVal1 + percVal2;
        arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal.push(perc)
        console.log(arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal, "pushed")
        console.log(arrayForPurchaseTaxVatVal,  "pushed")
        }
      else if((arrayForTotalUnitsWithDiscount[i] == "") || (arrayForTotalUnitsWithDiscount[i] == null)){
        var percVal1 = 0
        console.log(arrayForPurchaseTaxVatVal, "hit First val")
        var percVal2 = 0
        console.log(arrayForTotalUnitsWithDiscount, "hit second")
        console.log(percVal1)
        console.log(percVal2)
        perc = percVal1 + percVal2;
        arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal.push(perc)
        console.log(arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal, "pushed")
        console.log(arrayForPurchaseTaxVatVal,  "pushed")
      }
      else{
        var percVal1 = parseInt(arrayForPurchaseTaxVatVal[i]);
        console.log(arrayForPurchaseTaxVatVal, "hit First val")
        var percVal2 = parseInt(arrayForTotalUnitsWithDiscount[i]);
        console.log(arrayForTotalUnitsWithDiscount, "hit second")
        console.log(percVal1)
        console.log(percVal2)
        perc = percVal1 + percVal2;
        arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal.push(perc)
        console.log(arrayForTotalUnitsWithDiscountMergePurchaseTaxVatVal, "pushed")
        console.log(arrayForPurchaseTaxVatVal,  "pushed")
        
      }
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
      console.log(arrayForPurchaseTaxVatVal[i], "taxTotalArray Hit", arrayForPurchaseTaxVatVal)
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
    }

    const onSubmit = async (data) => {
      console.log(data)
      
      //history.push("/placement-question-details")
    }
    const handleChange = (e) => {
      e.preventDefault()
      var totalOverall = document.getElementById("totalOverall").innerHTML
      formik.values.total = totalOverall
      console.log(formik.values, "hello")
      //createPurchaseInvoice(formik.values)
    }


    const handleValueOnChange1 = (event) => {
      //var addingComma = event.target.value
     setValueForQTY1(addDecimal(event.target.value));
    }
    const Description1 = (event) => {
      //var addingComma = event.target.value
      setValueForDescription1(addDecimal(event.target.value));
    }
    const Account1 = (event) => {
      //var addingComma = event.target.value
      setValueForAccount1(addDecimal(event.target.value));
    }
    const PricePerUnitWithoutPurchaseTaxVAT1 = (event) => {
      //var addingComma = event.target.value
      setValueForPricePerUnitWithoutPurchaseTaxVAT1(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVAT1 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVAT1(addDecimal(event.target.value));
    }
    const Discount1 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscount1(addDecimal(event.target.value));
    }
    const DiscountInValue1 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscountInValue1(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount1 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount1(addDecimal(event.target.value));
    }
    const PurchaseTaxVAT1 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchaseTaxVAT1(addDecimal(event.target.value));
    }
    const PurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT1 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT1(addDecimal(event.target.value));
    }




    
    const handleValueOnChange2 = (event) => {
      //var addingComma = event.target.value
     setValueForQTY2(addDecimal(event.target.value));
    
    }
    const Description2 = (event) => {
      //var addingComma = event.target.value
      setValueForDescription2(addDecimal(event.target.value));
    }
    const Account2 = (event) => {
      //var addingComma = event.target.value
      setValueForAccount2(addDecimal(event.target.value));
    }
    const PricePerUnitWithoutPurchaseTaxVAT2 = (event) => {
      //var addingComma = event.target.value
      setValueForPricePerUnitWithoutPurchaseTaxVAT2(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVAT2 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVAT2(addDecimal(event.target.value));
    }
    const Discount2 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscount2(addDecimal(event.target.value));
    }
    const DiscountInValue2 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscountInValue2(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2(addDecimal(event.target.value));
    }
    const PurchaseTaxVAT2 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchaseTaxVAT2(addDecimal(event.target.value));
    }
    const PurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2(addDecimal(event.target.value));
    }





    const handleValueOnChange3 = (event) => {
      //var addingComma = event.target.value
     setValueForQTY3(addDecimal(event.target.value));
    
    }

    const Description3 = (event) => {
      //var addingComma = event.target.value
      setValueForDescription3(addDecimal(event.target.value));
    }
    const Account3 = (event) => {
      //var addingComma = event.target.value
      setValueForAccount3(addDecimal(event.target.value));
    }
    const PricePerUnitWithoutPurchaseTaxVAT3 = (event) => {
      //var addingComma = event.target.value
      setValueForPricePerUnitWithoutPurchaseTaxVAT3(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVAT3 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVAT3(addDecimal(event.target.value));
    }
    const Discount3 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscount3(addDecimal(event.target.value));
    }
    const DiscountInValue3 = (event) => {
      //var addingComma = event.target.value
      setValueForDiscountInValue3(addDecimal(event.target.value));
    }
    const PriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = (event) => {
      //var addingComma = event.target.value
      setValueForPriceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3(addDecimal(event.target.value));
    }
    const PurchaseTaxVAT3 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchaseTaxVAT3(addDecimal(event.target.value));
    }
    const PurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = (event) => {
      //var addingComma = event.target.value
      setValueForPurchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3(addDecimal(event.target.value));
    }



      const handleValueOnBlur1 = (event) => {
        setValueForQTY1(addCommas(event.target.value));
     }
     
     const handleValueOnBlur2 = (event) => {
       setValueForQTY2(addCommas(event.target.value));
    }
    
    const handleValueOnBlur3 = (event) => {
     setValueForQTY3(addCommas(event.target.value));
  }
     
    const handleAmountSend = (e) => {
      e.preventDefault()
      var amountToSend = document.getElementById("amountPaidWith").value
      formik.values.amountDebit = amountToSend
      console.log(formik.values)
      //createTestingAmountSend(formik.values)
  }


     const handleSendingAccountValues = () => {
/*
       if (document.getElementById("account1").innerHTML == null){
         console.log("sasas")
       }

       if (document.getElementById("account1").innerHTML != null) {
          var testingSending = document.getElementById("account1").value
          console.log(testingSending)
          //console.log(document.getElementById("withDisc1").value)
       }
   */
     }
  
    const handleAmountPaidWith = (e) => {
      e.preventDefault()

      if (accountValues === undefined || accountValues.length == 0) {
        var amountToSend = document.getElementById("amountPaidWith").value
        //var amountToSendDate = document.getElementById("amountPaidOnDate").value
        //formik.values.amountPaid = document.getElementById("amountPaidWith").value
        //formik.values.datePaid = document.getElementById("amountPaidOnDate").value
        //document.getElementById("totalPaid").innerHTML = amountToSend;
        //document.getElementById("totalDate").innerHTML = amountToSendDate;
        var amountTotal = document.getElementById("totalOverall").innerHTML
        var amountDue = amountTotal - amountToSend
        //document.getElementById("totalDue").innerHTML = amountDue;
       
        //formik.values.amountPaid = amountToSend
        formik.values.paidTo = formik.values.accountPaid
        formik.values.amountDuePaid = amountDue
        formik.values.datePaid = document.getElementById("amountPaidOnDate").value
        formik.values.amountPaidAmountValue = amountToSend
        formik.values.referencePaid = document.getElementById("referenceFor").value
        console.log(formik.values)
        //createTestingAmountSend(formik.values)
        createAmountControls(formik.values)
      }
      else{
        var amountToSend = document.getElementById("amountPaidWith").value
        var amountTotal = Number(accountValues[accountValues.length - 1].amountDuePaid)
        console.log(amountTotal)
        amountDue = amountTotal - amountToSend
        formik.values.amountDuePaid = amountDue
        formik.values.paidTo = formik.values.accountPaid
        formik.values.datePaid = document.getElementById("amountPaidOnDate").value
        formik.values.amountPaidAmountValue = amountToSend
        formik.values.referencePaid = document.getElementById("referenceFor").value
        console.log(formik.values)
        //createTestingAmountSend(formik.values)
        createAmountControls(formik.values)
        
      }
      
    }
    const handleApprovePurchase = (e) => {
      e.preventDefault()
      var amountToSend = document.getElementById("amountPaidWith").value
      var totalOverall = document.getElementById("totalOverall").innerHTML
      formik.values.amountDebit = amountToSend
      formik.values.total = totalOverall
      console.log(formik.values)
      createAgedPayableReferences(formik.values)
    }

    const handleChangeTaxRate = (e) => {
   
      console.log(e.target.value)
      var valueCompare = e.target.value
      var valueToSend = ""
      console.log(taxRates)
      for (var i=0;i<taxRates.length;i++){
        if ( taxRates[i].taxRateName == valueCompare ) {
          valueToSend = taxRates[i].taxRateAmount
          settingTaxSingleValue(valueToSend)
        }
      }
      console.log (valueToSend)
      /*
      if (valueCompare in taxRates){
        
      }
      */
     
    }

    const handleSendingLedger = (e) => {
      e.preventDefault()
      console.log(document.getElementById("slsTaxVat").innerHTML)
      formik.values.amountTotalDebit = document.getElementById("slsTaxVat").innerHTML
      formik.values.transactionType = formik.values.from
      createLedgers(formik.values)
    }

    const handleOnClickPurchaseSalesTaxVatValue = (e) => {
     e.preventDefault()
     if (document.getElementById("account1").innerHTML != null) {
        formik.values.accountNamePurchaseOrSalesTaxVat = document.getElementById("account1").value
        formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
        formik.values.transactionType = formik.values.from
        console.log(formik.values)
        createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)


     }
     else if (document.getElementById("account2").innerHTML != null) {
      formik.values.accountNamePurchaseOrSalesTaxVat = document.getElementById("account2").value
      formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc2").innerHTML
      formik.values.transactionType = formik.values.from
      console.log(formik.values)
      createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)

   }
    else if (document.getElementById("account3").innerHTML != null) {
      formik.values.accountNamePurchaseOrSalesTaxVat = document.getElementById("account3").value
      formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc3").innerHTML
      formik.values.transactionType = formik.values.from
      console.log(formik.values)
      createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)

  }
    }

  
    const handleSave = (e) => {
      e.preventDefault()
        var gettingID = document.getElementById("account1").value
        var gettingName = ''
        for (var i=0;i<items.length;i++){
          if ( items[i]._id == gettingID ) {
            formik.values.accountType = items[i].accountType
            formik.values.accountName1 = items[i].name
            formik.values.code = items[i].code
            formik.values.descriptionFromAccount = items[i].descriptionFromAccount
            formik.values.tax = items[i].tax
            formik.values.reference = gettingID
            
          }
        }

         console.log(formik.values.accountType)
         if(formik.values.accountType == "Expense"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            
            formik.values.total = document.getElementById("totalOverall").innerHTML

            formik.values.taxAmount = document.getElementById("slsTaxVat").innerHTML
            formik.values.name = formik.values.accountName1
            formik.values.dueDate = formik.values.endDate
            console.log(formik.values)
            updateAddAccount(formik.values, gettingID)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
            createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            //createPurchaseInvoice(formik.values)
            //createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            //createPurchaseInvoice(formik.values)
            //createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         
         }
         else if(formik.values.accountType == "Direct Costs"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            formik.values.taxAmount = document.getElementById("slsTaxVat").innerHTML
            formik.values.name = formik.values.accountName1
            formik.values.dueDate = formik.values.endDate
            updateAddAccount(formik.values, gettingID)
            createDirectCostsInvoice(formik.values)
            //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
            //createPurchaseInvoice(formik.values)
            //createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         }
         else if(formik.values.accountType == "Current Asset"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            formik.values.taxAmount = document.getElementById("slsTaxVat").innerHTML
            formik.values.name = formik.values.accountName1
            formik.values.dueDate = formik.values.endDate
            console.log("hi")
            //updateAddAccount(formik.values, gettingID)
            //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
            //createPurchaseInvoice(formik.values)
            //createCurrentAssetsInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         }
         else if(formik.values.accountType == "Non - Current Asset"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            formik.values.taxAmount = document.getElementById("slsTaxVat").innerHTML
            formik.values.name = formik.values.accountName1
            formik.values.dueDate = formik.values.endDate
            console.log(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
            //updateAddAccount(formik.values, gettingID)
            //createNonCurrentAssetsInvoice(formik.values)
            
            
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         }
         else if(formik.values.accountType == "Fixed Asset"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
            createFixedAssetsInvoice(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         }
         else if(formik.values.accountType == "Interest"){
          if ((valueForQTY1 != "")  && (valueForQTY2 == "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            
            formik.values.qty = valueForQTY1
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
            createInterests(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 == "")){
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            
            
            formik.values.accountName2 = document.getElementById("account2").value
            
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            
           

            

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            //createSendingData1(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
          else if((valueForQTY1 != "")  && (valueForQTY2 != "") && (valueForQTY3 != "")){
            console.log("hit third")
            formik.values.description = valueForDescription1
            formik.values.description2 = valueForDescription2
            formik.values.description3 = valueForDescription3
            
            formik.values.accountName2 = document.getElementById("account2").value
            formik.values.accountName3 = document.getElementById("account3").value
            formik.values.qty = valueForQTY1
            formik.values.qty2 = valueForQTY2
            formik.values.qty3 = valueForQTY3
            formik.values.unitPrice = valueForPricePerUnitWithoutPurchaseTaxVAT1
            formik.values.unitPrice2 = valueForPricePerUnitWithoutPurchaseTaxVAT2
            formik.values.unitPrice3 = valueForPricePerUnitWithoutPurchaseTaxVAT3
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT = document.getElementById("priceForTotalUnitsID1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT2 = document.getElementById("priceForTotalUnitsID2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVAT3 = document.getElementById("priceForTotalUnitsID3").innerHTML
            formik.values.discPercentage = valueForDiscount1
            formik.values.discPercentage2 = valueForDiscount2
            formik.values.discPercentage3 = valueForDiscount3
            formik.values.discInDigits = document.getElementById("descperc1").innerHTML
            formik.values.discInDigits2 = document.getElementById("descperc2").innerHTML
            formik.values.discInDigits3 = document.getElementById("descperc3").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = document.getElementById("withDisc1").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 = document.getElementById("withDisc2").innerHTML
            formik.values.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 = document.getElementById("withDisc3").innerHTML
            formik.values.taxRate = document.getElementById("taxRate1").value
            formik.values.taxRate2 = document.getElementById("taxRate2").value
            formik.values.taxRate3 = document.getElementById("taxRate3").value
            formik.values.purchaseTaxVATinValue = document.getElementById("purchaseTaxVat1").innerHTML
            formik.values.purchaseTaxVATinValue2 = document.getElementById("purchaseTaxVat2").innerHTML
            formik.values.purchaseTaxVATinValue3 = document.getElementById("purchaseTaxVat3").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal1").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal2").innerHTML
            formik.values.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 = document.getElementById("TotalUnitsWithDiscountMergePurchaseTaxVatVal3").innerHTML
           

            //formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc1").innerHTML
            formik.values.transactionType = formik.values.from
            console.log(document.getElementById("totalOverall").innerHTML)
            formik.values.total = document.getElementById("totalOverall").innerHTML
            console.log(formik.values)
            createPurchaseInvoice(formik.values)
            createAllPurchaseInvoiceAccountsValues(formik.values)
            createAllSalesAndPurchaseInvoiceAccountsValues(formik.values)
          }
         }
      
      else if (document.getElementById("account2").innerHTML != null) {
       formik.values.accountName = document.getElementById("account2").value
       for(var i=0;i<items.length;i++){
        if(items[i].name == formik.values.accountName){
          formik.values.accountType = items[i].accountType
        }
      }
       formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc2").innerHTML
       formik.values.transactionType = formik.values.from
       console.log(document.getElementById("totalOverall").innerHTML)
       formik.values.total = formik.values.valuePurchaseTaxVatDebit
       console.log(formik.values)
       //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
       createPurchaseInvoice(formik.values)
 
    }
     else if (document.getElementById("account3").innerHTML != null) {
       formik.values.accountName = document.getElementById("account3").value
       for(var i=0;i<items.length;i++){
        if(items[i].name == formik.values.accountName){
          formik.values.accountType = items[i].accountType
        }
      }
       formik.values.valuePurchaseTaxVatDebit = document.getElementById("withDisc3").innerHTML
       formik.values.transactionType = formik.values.from
       console.log(document.getElementById("totalOverall").innerHTML)
       formik.values.total = formik.values.valuePurchaseTaxVatDebit
       console.log(formik.values)
       //createPurchaseOrSalesTaxVatValueAfterDiscounts(formik.values)
       createPurchaseInvoice(formik.values)
 
   }
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
            accountName1:'',
            accountName2:'',
            qty: '',
            qty2: '',
            qty3: '',
            unitPrice: '',

            priceTotalUnitsWithoutPurchaseTaxVAT:'',
          

            discPercentage: '',

            discInDigits:'',
            priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount:'',
            
            taxRate: '',

            purchaseTaxVATinValue: '',
            purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT: '',

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
    const handleAccountName1 = (data) => {
      console.log(data.target.value)
    }
    return (
        <div>
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>New Invoice</CardHeader>
              <CardBody>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3">Purchase Invoice</h2>
                  <hr/>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>From</label>
                          <input type="text" name="from" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.from} className="form-control"  />
                          {formik.errors.from && formik.touched.from  ? (<div className='error'>{formik.errors.from}</div>) : null}
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
                          <label htmlFor>Due Date</label>
                          <input className="form-control" type="date" name="endDate" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.endDate} />
                          {formik.touched.endDate ? (<div className='error'>{formik.errors.endDate}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Invoice</label>
                          <input type="text" name="invoice" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.invoice} className="form-control"  />
                          {formik.errors.invoice && formik.touched.invoice  ? (<div className='error'>{formik.errors.reference}</div>) : null}
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Reference</label>
                          <input type="text" name="reference" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.reference} className="form-control"  />
                          {formik.errors.reference && formik.touched.reference  ? (<div className='error'>{formik.errors.reference}</div>) : null}
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
                        </div>
                        </form>
                    </div>

                    <div className="mt-3">
                        <table id="table" className="table table-striped mt-3 text-center" >
                        <thead>
                            <tr>
                              <th>Item</th>
                              <th>Description</th>
                              <th>Account</th>
                              <th>Qty</th>
                              <th>Price Per Unit Without Purchase Tax/VAT </th>
                              <th>Price Total Units Without Purchase Tax/VAT</th>
                              <th>Discount %</th>
                              <th>Discount in Value</th>
                              <th>Price Total Units Without Purchase Tax/VAT After Discount</th>
                              <th>Purchase Tax/VAT</th>
                              <th>Purchase Tax/VAT in Value</th>
                              <th>Purchase Price After Discount and Inclusive of Purchase Tax/VAT</th>
                              <th>Action</th>
                            </tr>
                        </thead>  
                        <tbody>
                          <tr>
                            <td>
                            <input className="form-control" type="text" />
                            {formik.touched.item ? (<div className='error'>{formik.errors.item}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" value = {valueForDescription1} onInput={(event) => Description1(event)}/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                             
                            { items != null ?
                            <select name="name" id = "account1" className="form-control" onBlur = {(e) => handleAccountName1(e)}>
                              {
                                  items.map(contents => (
                              <option value = {contents._id}>{contents.name}</option>
                                ))}
                            </select>
                            :
                            <select style={{display:"none"}}>
                            </select>
                            }
                      
                            </td>
                            <td>
                            <input  type="text" className = "form-control" name="qty" value = {valueForQTY1} onInput={(event) => handleValueOnChange1(event)} onBlur = {(e) => sumOfValues(e)}  />
                            {formik.touched.qty ? (<div className='error'>{formik.errors.qty}</div>) : null}  
                            </td>
                            <td>
                            
                            <input className="form-control" type="text" name="unitPrice" value = {valueForPricePerUnitWithoutPurchaseTaxVAT1} onInput={(event) => PricePerUnitWithoutPurchaseTaxVAT1(event)} />
                            {formik.touched.unitPrice ? (<div className='error'>{formik.errors.unitPrice}</div>) : null}  
                            </td>
                            <td>
                            <p id="priceForTotalUnitsID1"></p>
                            </td>
                            {/*}
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            <td>
                              {tax == null ?
                              <tr>

                              </tr> :
                              <tr>
                                {tax}
                              </tr>
                              }
                            </td>
                            </td>
                            */}
                            <td>
                            <input className="form-control" type="text" name="discPercentage" value = {valueForDiscount1} onInput={(event) => Discount1(event)} />
                            {formik.touched.discPercentage ? (<div className='error'>{formik.errors.discPercentage}</div>) : null}  
                            </td>
                            <td>
                            <p id="descperc1"></p>
                            </td>
                            <td>
                            <p id="withDisc1"></p>
                            </td>
                            <td>
                            {
                            taxRates != null ?   
                            <select name="taxRate" id = "taxRate1" className="form-control" onBlur={e => handleChangeTaxRate(e)}>
                              {
                                  taxRates.map(contents => (
                              <option>{contents.taxRateName}</option>
                                ))}
                                  
                            </select>
                            :
                            <select style={{display:"none"}}>
                            </select>
                            }
                            </td>
                            
                            <td>
                            <p id="purchaseTaxVat1"></p>
                            </td>
                            <td>
                            <p id="TotalUnitsWithDiscountMergePurchaseTaxVatVal1"></p>
                            </td>
                            {/*}
                            <td>
                             <button className = "btn btn-warning" onClick = {(e) => handleOnClickPurchaseSalesTaxVatValue(e)}>Save</button>
                            </td>
                            */}
                            </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text" />
                            {formik.touched.item ? (<div className='error'>{formik.errors.item}</div>) : null}  
                            </td>
                            <td>
      
                            <input className="form-control" type="text" value = {valueForDescription2} onInput={(event) => Description2(event)}/>
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" id = "account2" className="form-control" >
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
                            <input  type="text" className = "form-control" name="qty" value = {valueForQTY2} onInput={handleValueOnChange2} onInput={(event) => handleValueOnChange2(event)} onBlur = {(e) => sumOfValues(e)}    />
                            {formik.touched.qty ? (<div className='error'>{formik.errors.qty}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="unitPrice" value = {valueForPricePerUnitWithoutPurchaseTaxVAT2} onInput={(event) => PricePerUnitWithoutPurchaseTaxVAT2(event)} />
                            {formik.touched.unitPrice ? (<div className='error'>{formik.errors.unitPrice}</div>) : null}  
                            </td>
                            <td>
                            <p  id="priceForTotalUnitsID2"></p>
                            </td>
                            {/*}
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            <td>
                              {tax == null ?
                              <tr>

                              </tr> :
                              <tr>
                                {tax}
                              </tr>
                              }
                            </td>
                            </td>
                            */}
                            <td>
                            <input className="form-control" type="text" name="discPercentage" value = {valueForDiscount2} onInput={(event) => Discount2(event)}/>
                            {formik.touched.discPercentage ? (<div className='error'>{formik.errors.discPercentage}</div>) : null}  
                            </td>
                            <td>
                            <p id="descperc2"></p>
                            </td>
                            <td>
                            <p id="withDisc2"></p>
                            </td>
                            <td>
                            
                            {
                            taxRates != null ?   
                            <select name="taxRate" id = "taxRate2" className="form-control" onChange={e => handleChangeTaxRate(e)}>
                              {
                                  taxRates.map(contents => (
                              <option>{contents.taxRateName}</option>
                                ))}
                                  
                            </select>
                            :
                            <select style={{display:"none"}}>
                            </select>
                            }
                    
                            </td>
                            
                            <td>
                            <p id="purchaseTaxVat2"></p>
                            </td>
                            <td>
                            <p id="TotalUnitsWithDiscountMergePurchaseTaxVatVal2"></p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                            <input className="form-control" type="text" />
                            {formik.touched.item ? (<div className='error'>{formik.errors.item}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text"  value = {valueForDescription3} onInput={(event) => Description3(event)}/>
                            {formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}  
                            </td>
                            <td>
                            { items != null ?
                            <select name="name" id = "account3" className="form-control" >
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
                            <input  type="text" className = "form-control" name="qty" value = {valueForQTY3} onInput={handleValueOnChange3} onInput={(event) => handleValueOnChange3(event)} onBlur = {(e) => sumOfValues(e)}    />
                            {formik.touched.qty ? (<div className='error'>{formik.errors.qty}</div>) : null}  
                            </td>
                            <td>
                            <input className="form-control" type="text" name="unitPrice" value = {valueForPricePerUnitWithoutPurchaseTaxVAT3} onInput={(event) => PricePerUnitWithoutPurchaseTaxVAT3(event)} />
                            {formik.touched.unitPrice ? (<div className='error'>{formik.errors.unitPrice}</div>) : null}  
                            </td>
                            <td>
                            <p  id="priceForTotalUnitsID3"></p>
                            </td>
                            {/*}
                            <td>
                            <select name="name" className="form-control" onChange={e => handleChange(e)}>
                              {
                                  items.map(contents => (
                              <option>{contents.name}</option>
                                ))}
                            </select>
                            <td>
                              {tax == null ?
                              <tr>

                              </tr> :
                              <tr>
                                {tax}
                              </tr>
                              }
                            </td>
                            </td>
                            */}
                            <td>
                            <input className="form-control" type="text" name="discPercentage" value = {valueForDiscount3} onInput={(event) => Discount3(event)} />
                            {formik.touched.discPercentage ? (<div className='error'>{formik.errors.discPercentage}</div>) : null}  
                            </td>
                            <td>
                            <p id="descperc3"></p>
                            </td>
                            <td>
                            <p id="withDisc3"></p>
                            </td>
                            <td>
                            {
                            taxRates != null ?   
                            <select name="taxRate" id = "taxRate3" className="form-control" onChange={e => handleChangeTaxRate(e)}>
                              {
                                  taxRates.map(contents => (
                              <option>{contents.taxRateName}</option>
                                ))}
                                  
                            </select>
                            :
                            <select style={{display:"none"}}>
                            </select>
                            }
                            </td>
                            
                            <td>
                            <p id="purchaseTaxVat3"></p>
                            </td>
                            <td>
                            <p id="TotalUnitsWithDiscountMergePurchaseTaxVatVal3"></p>
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
                            <td id="quantityTotal" >
                            </td>
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
                            <td></td>
                          </tr>

                          
                          
                          
                        </tbody>
                        <button>Add a new line</button>
                        <button onClick={(e) => sumOfValues(e)}>Sum of values</button>
                        <span><p>Sub Total</p></span>
                        <button className="btn btn-dark" onClick={handleSendingAccountValues()}>Save</button>
                        </table>
                        <button className = "btn btn-danger text-white" onClick={(e) => handleSendingLedger(e)}>Send Tax Total To Ledger</button>
                        {/*}
                        <p id="quantityTotal"></p>
                        <p id="prcTotalUnits"></p>
                        <p id="dscInValue"></p>
                        <p id="prcTotalUnitsWithDiscount"></p>
                        <p id="slsTaxVat"></p>
                        <p id="slsTaxVatValue"></p>
                        <p id="slsPriceAfterDiscount"></p>
                          */}
                        <div className = "text-right mt-2">
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
                        <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader></CardHeader>
              <CardBody>
                    <div className="mt-3">
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                              <th>Date Paid</th>
                              <th>Account Paid</th>
                              <th>Reference ID</th>
                              <th>Paid Amount</th>
                              <th>Amount Due</th>
                              
                            </tr>
                        </thead>
                        
                        { accountValues != null ?  
                        <tbody>
                            
                            {
                            accountValues.map(accounts => (
                                <tr key={accounts._id}>
                                <td>
                                    {accounts.datePaid}
                                </td>
                                <td>
                                    {accounts.paidTo}
                                </td>
                                <td>
                                    {accounts.referencePaid}
                                </td>
                                <td>
                                    {accounts.amountPaidAmountValue}
                                </td>
                                <td>
                                    {accounts.amountDuePaid}
                                </td>
                                </tr>
                            ))
                            }
                            </tbody>
                            :
                            <tbody>
                            <tr>
                              <td></td>
                            </tr>
                            </tbody>
                            }
                          
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
                          */} 
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
                            <button className = "btn btn-primary" onClick = {(e) => handleSave(e)}>
                                Save
                            </button>
                            {/*}
                            <button type="submit" className = "btn btn-success" onClick = {(e) => handleChange(e)} >
                                Approve
                            </button>
                            */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            
                            <button className = "btn btn-primary" >
                                Cancel
                            </button>
                        </div>
                    </div>
                    </form>
                    {/*}
                    <div>
                    
                    <Row>
                    <Col md="12">
                      
                        <Card className="card-plain">
                          <CardHeader>Receive A Payment</CardHeader>
                          <CardBody>
                          {Number(accountValues[accountValues.length - 1].amountDuePaid != 0) ? 
                          <div className="row">
                          <div className="col-md-2">
                
                           <div className="form-group">
                           <label htmlFor>Amount Paid</label>
                           <input type="text" name="paidTo"  className="form-control" id="amountPaidWith" />
                           {formik.errors.from && formik.touched.from  ? (<div className='error'>{formik.errors.from}</div>) : null}
                           </div>
                         </div>
                         <div className="col-md-2">
                           <div className="form-group">
                           <label htmlFor>Date Paid</label>
                           <input className="form-control" type="date" name="startDate" id = "amountPaidOnDate"  />
                           {formik.touched.startDate ? (<div className='error'>{formik.errors.startDate}</div>) : null}
                           </div>
                         </div>
                         <div className="col-md-2">
                         <div className="form-group">
                         <label htmlFor>Paid To</label>
                         <select name="accountPaid" className="form-control" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountPaid}>
                         {
                             items.map(contents => (
                         <option>{contents.name}</option>
                           ))}
                         </select>
                         {formik.touched.accountPaid ? (<div className='error'>{formik.errors.accountPaid}</div>) : null}
                         </div>
                         </div>
                         <div className="col-md-2">
                           <div className="form-group">
                           <label htmlFor>Reference</label>
                           <input type="text" name="reference" id = "referenceFor" className="form-control"  />
                           {formik.errors.reference && formik.touched.reference  ? (<div className='error'>{formik.errors.reference}</div>) : null}
                           </div>
                         </div>
                         <div  className="col-md-2">
                         <div className="form-group">
                         <button className = 'btn btn-dark' onClick = {(e) => handleAmountSend(e)}>Send Amount</button>
                        </div>
                        </div>
                        <div  className="col-md-2">
                         <div className="form-group">
                         <button className = 'btn btn-success' onClick = {(e) => handleAmountPaidWith(e)}>Pay Amount</button>
                        </div>
                        </div>              
                        </div> 
                         :
                       <div className="row">
                         <centre>All Dues Cleared</centre>           
                       </div> 
                          } 
                        </CardBody>
                        </Card>
                        
                        </Col>
                        </Row>
                      </div>
                        */}
                      <hr />       
        </>
        </div>
    )
}

export default PurchaseInvoice
