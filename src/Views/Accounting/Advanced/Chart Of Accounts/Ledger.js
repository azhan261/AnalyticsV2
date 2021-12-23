import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import { getCreditLedger } from '../../../../Apis/ApiForCreditLedger';
import { getLedgers } from '../../../../Apis/ApiForLedgerControl';
import { getPurchaseOrSalesTaxVatValueAfterDiscounts } from '../../../../Apis/ApiForPurchaseSalesControl';
import { getAllPurchaseInvoiceAccountsSpecificValuesController } from '../../../../Apis/ApiForPurchaseInvoice';
import { getAllSalesInvoiceAccountsValuesController } from '../../../../Apis/ApiForSalesInvoice';

function ShowClickedAccount() {
    const [items, setItems] = useState([])
    const [valuesSalesInvoice, setValuesSalesInvoice] = useState([])
    const [valuePurchaseInvoice, setValuesPurchaseInvoice] = useState([])
    const location = useLocation();
    
    const history = useHistory()
    const arrayOfNumbers = []
    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getPurchaseOrSalesTaxVatValueAfterDiscounts()
        setItems(contents)
      }
      const fetchItemsSalesInvoice = async function() {
        const contents = await getAllSalesInvoiceAccountsValuesController()
        setValuesSalesInvoice(contents)
      }
      const fetchItemsPurchaseInvoice = async function() {
        const contents = await getAllPurchaseInvoiceAccountsSpecificValuesController(location.state._id)
        setValuesPurchaseInvoice(contents)
      }
      fetchItems()
      fetchItemsSalesInvoice()
      fetchItemsPurchaseInvoice()
     
      
    }, []);

    const timerId = setTimeout(() => {
      sumOfValuesNullCheck()
    }, 1500);

    const sumOfValuesNullCheck = () => {
  
      var totForCredit=0;
      var totForDebit=0;
      var arrayForCredit = []
      var arrayForDebit = []

      for(var i=0;i<valuesSalesInvoice.length;i++){
        arrayForCredit.push(valuesSalesInvoice[i].taxAmount)
      }
      for(var i=0;i<arrayForCredit.length;i++){
        totForCredit += parseInt(arrayForCredit[i])
      }
      for(var i=0;i<valuePurchaseInvoice.length;i++){
        arrayForDebit.push(valuePurchaseInvoice[i].taxAmount)
      }
      for(var i=0;i<arrayForDebit.length;i++){
        totForDebit += parseInt(arrayForDebit[i])
      }
     
     


    
    document.getElementById("creditTotal").innerHTML = totForCredit.toLocaleString();
    document.getElementById("debitTotal").innerHTML = totForDebit.toLocaleString();
      console.log(arrayForCredit)
      //arrayOfNumbers.push(items)
      //console.log(arrayOfNumbers[0].valueSalesTaxVatCredit)
      //console.log(arrayOfNumbers.findIndex(obj => obj.valuePurchaseTaxVatDebit === valuePurchaseTaxVatDebit))
      console.log('checking')
      var debit = document.getElementsByClassName('debit').innerHTML;
      var credit = document.getElementsByClassName('credit').innerHTML;
      if (debit != null) {
        console.log(debit,credit)
      }

    }
    
    const notNullCheck = () => {
      console.log("Not null hit")
    }
    const handlingCreditDebit = () => {
      if(location.state.transactionType == "Purchase Invoice"){
        var TaxAmount = location.state.taxAmount
        var findingSpace = TaxAmount.indexOf("=")
        var newValue = TaxAmount.slice(findingSpace+2, TaxAmount.length)
        console.log(newValue)
        return(
          <td>
            {newValue}
          </td>
        )
      }
    }
    
    const handleShowingValues = () => {
      console.log(valuePurchaseInvoice, "test")
      if((location.state.accountType == "Expense") || (location.state.accountType == "Direct Costs") 
      || (location.state.accountType == "Current Asset")
      || (location.state.accountType == "Non - Current Asset") || (location.state.accountType == "Fixed Asset") 
      || (location.state.accountType == "Interest"))
      {
        console.log("hit")
        
        return(
          <tbody>
          {
        valuePurchaseInvoice != null ? valuePurchaseInvoice.map(contents => (
              <tr key={contents._id}>
              
                {dateFunction(contents)}
              
              <td>
                  {contents.transactionType}
              </td>
              <td>
                  <Link to={{
                                        pathname: '/aged-recievable-link',
                                        state: contents,
                  }} className = "text-dark">{contents.taxAmount}</Link>
              </td>
              </tr>
          )) : 
          <tr>
              <td></td>
          </tr>
        }
      </tbody>
        )
    }
  }
  const dateFunction = (data) => {
    const options = {
     
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    var d = new Date(data.startDate);
    var n = d.toLocaleDateString('en-EN', options);
    
    return(
      <td>
        {n}
      </td>
    )
  }
    return (
        <div>
            <div>
            <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>{location.state.name}</CardHeader>
              <CardBody>
                <h2>Ledger</h2>
                    <div className="mt-3">
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                             
                              <th>Date</th>
                              <th>Transaction</th>
                              <th>Debit</th>
                              <th>Credit</th>
                         
                            </tr>
                        </thead>  
                        {handleShowingValues()}
                        </table>
                        <table className="table table-striped mt-3 text-center">
                        <thead>
                            <tr>
                             
                            </tr>
                        </thead>  
                        <tbody>
                       <tr>
                         <td>Total</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td id ="debitTotal"></td>
                         <td id ="creditTotal"></td>
                         <td></td>
                         <td></td>
                         <td></td>
                       </tr>
                        </tbody>
                        </table>
                    </div>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    </div>
            </div>
        </div>
    )
    return (
        <div>
            
        </div>
    )
}

export default ShowClickedAccount
