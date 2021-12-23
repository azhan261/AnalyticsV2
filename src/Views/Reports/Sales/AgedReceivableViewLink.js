import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

function AgedReceivableViewLink() {

    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()



   

      const dateFunction = () => {
        const options = {
         
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        
        var d = new Date(location.state.startDate);
        var n = d.toLocaleDateString('en-EN', options);
        
        return(
            <div className="col-md-2">
                <div className="form-group">
                <label htmlFor>Date</label>
                <p className="form-control"  >
                    {n}
                </p>
                </div>
            </div>
        )
      }


      const dateDueDateFunction = () => {
        const options = {
         
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        
        var d = new Date(location.state.endDate);
        var n = d.toLocaleDateString('en-EN', options);
        
        return(
            <div className="col-md-2">
            <div className="form-group">
            <label htmlFor>Date</label>
            <p className="form-control"  >
                {n}
            </p>
            </div>
        </div>
        )
      }


      const onSubmit = async (data) => {
        console.log(data)
        
        //history.push("/placement-question-details")
      }

      const formik = useFormik({
        initialValues: {
            to: location.state.to,
            from: location.state.from,
            startDate: location.state.startDate,
            dueDate: location.state.dueDate,
            invoice: location.state.invoice,
            reference: location.state.reference,
            item: location.state.item,
            description:location.state.description,
            accountName1:location.state.accountName1,
            accountName2:location.state.accountName2,
            qty: location.state.qty,
            unitPrice: location.state.unitPrice,

            priceTotalUnitsWithoutSalesTaxVAT:location.state.priceTotalUnitsWithoutSalesTaxVAT,
          

            discPercentage: location.state.discPercentage,

            discInDigits:location.state.discInDigits,
            priceTotalUnitsWithoutSalesTaxVATAfterDiscount:location.state.priceTotalUnitsWithoutSalesTaxVATAfterDiscount,
            
            taxRate: location.state.taxRate,

            salesTaxVATinValue: location.state.salesTaxVATinValue,
            salesPriceAfterDiscountandInclusiveofSalesTaxVAT: location.state.salesPriceAfterDiscountandInclusiveofSalesTaxVAT,

            amountPkr: location.state.amountPkr,
            name: location.state.name,
            total:location.state.total,
            accountPaid: location.state.accountPaid,
            amountCredit: location.state.amountCredit,
            amountDuePaid:location.state.amountDuePaid,
            amountTotalDebit:location.state.amountTotalDebit,
            transactionType: location.state.transactionType,
            amountPaidAmountValue: location.state.amountPaidAmountValue,
            amountPaid:location.state.amountPaid,
            datePaid:location.state.datePaid,
            paidTo: location.state.paidTo,
            referencePaid: location.state.referencePaid,
            datePurchaseOrSalesTaxVat:location.state.datePurchaseOrSalesTaxVat,
            accountNamePurchaseOrSalesTaxVat:location.state.accountNamePurchaseOrSalesTaxVat,
            valuePurchaseTaxVatDebit:location.state.valuePurchaseTaxVatDebit,
            valueSalesTaxVatCredit:location.state.valueSalesTaxVatCredit,
        },

        //4 Make onSubmit propert from handle what happens from data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },
        

        //5 Make validation property
        
    


    })
    return (
        <div>
             <div className="container-fluid">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Invoice {location.state.invoice}</CardHeader>
              <CardBody>
                    <div className="mt-3">
                    <h1 className="title-dark-big title-head"></h1>
            <p></p>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-6 col-xs-6" />
              <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="login-registration-field">
                  <h2 className="cart-area-title text-center pt-3">Awaiting Payment</h2>
                  <hr/>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>To</label>
                          <p className="form-control"  >
                          {location.state.to}
                          </p>
                          </div>
                        </div>
                       
                          {dateFunction()}
                          {dateDueDateFunction()}
                    
                        <div className="col-md-2">
                          <div className="form-group">
                          <label htmlFor>Invoice #</label>
                          <p className="form-control"  >
                          {location.state.invoice}
                          </p>
                          
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div >
                          <label htmlFor>Total</label>
                          <p >
                          {location.state.total}
                          </p>
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
                    <div className="mt-3">
                        <table id="table" className="table table-striped mt-3 text-center" >
                        <thead>
                            <tr>
                              <th>Item</th>
                              <th>Description</th>
                              <th>Account</th>
                              <th>Qty</th>
                              <th>Price Per Unit Without Sales Tax/VAT </th>
                              <th>Price Total Units Without Sales Tax/VAT</th>
                              <th>Discount %</th>
                              <th>Discount in Value</th>
                              <th>Price Total Units Without Sales Tax/VAT After Discount</th>
                              <th>Sales Tax/VAT</th>
                              <th>Sales Tax/VAT in Value</th>
                              <th>Sales Price After Discount and Inclusive of Sales Tax/VAT</th>
                              {/*}
                              <th>Action</th>
                              */}
                            </tr>
                        </thead>  
                        <tbody>
                              <td>
                                  
                              </td>
                              <td>
                                {location.state.description}
                              </td>
                              <td>
                                {location.state.accountName}
                              </td>
                              <td>
                                {location.state.qty}
                              </td>
                              <td>
                                {location.state.unitPrice}
                              </td>
                              <td>
                                {location.state.priceTotalUnitsWithoutSalesTaxVAT}
                              </td>
                              <td>
                                {location.state.discPercentage}
                              </td>
                              <td>
                                {location.state.discInDigits}
                              </td>
                              <td>
                                {location.state.priceTotalUnitsWithoutSalesTaxVATAfterDiscount}
                              </td>
                              <td>
                                {location.state.taxRate}
                              </td>
                              <td>
                                {location.state.salesTaxVATinValue}
                              </td>
                              <td>
                                {location.state.salesPriceAfterDiscountandInclusiveofSalesTaxVAT}
                              </td>
                             
                        </tbody>
                        </table>
                        <div className = "text-right mt-2">
                        <p id = "subtotal">
                            Subtotal
                        </p>
                        <p id = "subtotalTax">
                            Tax
                        </p>
                        <h3>
                            Total = {location.state.total}.00
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
                        <Row>
                    <Col md="12">
                      
                        <Card className="card-plain">
                          <CardHeader>Receive A Payment</CardHeader>
                          <CardBody>
                          
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
                         {/*}
                         <select name="accountPaid" className="form-control" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountPaid}>
                         {
                             items.map(contents => (
                         <option>{contents.name}</option>
                           ))}
                         </select>
                             */}
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
                             {/*}
                         <button className = 'btn btn-dark' onClick = {(e) => handleAmountSend(e)}>Send Amount</button>
                             */}
                        </div>
                        </div>
                        <div  className="col-md-2">
                         <div className="form-group">
                             {/*}
                         <button className = 'btn btn-success' onClick = {(e) => handleAmountPaidWith(e)}>Pay Amount</button>
                            */}
                         </div>
                        </div>              
                        </div> 
                       
                        </CardBody>
                        </Card>
                        
                        </Col>
                        </Row>
                        </div>
        </div>
    )
}

export default AgedReceivableViewLink
