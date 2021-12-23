import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useHistory } from "react-router-dom";
import { createAddAccounts } from '../../../../Apis/ApiForAddAccount';

function AddAccount() {
       /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()
  
  const onSubmit = async (data) => {
    console.log(data)
    await createAddAccounts(data)
    //redirecting 
    //history.push("/")
  };

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
          accountType: '',
          code: '',
          tax:'',   
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
            
            if(!values.accountType){
                errors.accountType = "Please select Account Type"
            }else if(values.tax == "selectAccountType"){
              errors.tax = "Please choose an Account type"
            }

          if(!values.code){
              errors.code = "Please create a code"
          }

            if(!values.name){
                errors.name = "Please enter a name"
            }

            if(!values.description){
                errors.description = "Please fill in description"
            }
            if(!values.tax){
              errors.tax = "Please fill in your tax"
          }else if(values.tax == "selectTaxType"){
            errors.tax = "Please choose a Tax type"
          }
            
            
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <div>
             <form onSubmit={formik.handleSubmit} className="contact-form">
              <fieldset>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Account type</label>
                          <select name="accountType" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.accountType} className="form-control" required>
                            <option value="selectAccountType">Select Account Type</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >ASSETS</option>
                            <option value="Current Asset">Current Asset</option>
                            <option value="Fixed Asset">Fixed Asset</option>
                            <option value="Inventory">Inventory</option>
                            <option value="Non - Current Asset">Non - Current Asset</option>
                            <option value="Pre Payment">Pre Payment</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >EQUITY</option>
                            <option value="Equity">Equity</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >EXPENSES</option>
                            <option value="Depreciation">Depreciation</option>
                            <option value="Direct Costs">Direct Costs</option>
                            <option value="Expense">Expense</option>
                            <option value="Overhead">Overhead</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >LIABILITY</option>
                            <option value="Current Liability">Current Liability</option>
                            <option value="Non-Current Liability">Non-Current Liability</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >REVENUE</option>
                            <option value="Other Income">Other Income</option>
                            <option value="Revenue">Revenue</option>
                            <option value="Sales">Sales</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >D & A</option>
                            <option >Depreciation</option>
                            <option >Amortization</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >Interest</option>
                            <option >Interest</option>
                            <option style={{background:"grey", color:"white", fontWeight:"bold"}} disabled >Tax</option>
                            <option >Tax</option>
                          </select>
                          {formik.touched.accountType ? (<div className='error'>{formik.errors.accountType}</div>) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Code</label>
                          <p>A unique code/number for this account (limited to 10 characters)</p>
                          <input type="text" name="code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.code} className="form-control"  />
                          {formik.errors.code && formik.touched.code ? (<div className='error'>{formik.errors.code}</div>) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Name</label>
                          <p>A short title for this account (limited to 150 characters)</p>
                          <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control"  />
                          {formik.errors.name && formik.touched.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Description  (Optional)</label>
                          <p>A description of how this account should be used</p>
                          <input type="text" name="description" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} className="form-control"  />
                          {formik.errors.description && formik.touched.description ? (<div className='error'>{formik.errors.description}</div>) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="rating_from">Tax</label>
                          <p>The default tax setting for this account</p>
                          <select name="tax" onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.tax} className="form-control" required>
                            <option value="selectTaxType">Select Tax Type</option>
                            <option value="Sales Tax On Imports">Sales Tax On Imports</option>
                            <option value="Tax Exemptt">Tax Exempt</option>
                            <option value="Tax On Purchases">Tax On Purchases</option>
                            <option value="Tax On Saless">Tax On Sales</option>
                          </select>
                          {formik.touched.tax ? (<div className='error'>{formik.errors.tax}</div>) : null}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                          <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                          <label htmlFor="vehicle1">Show on Dashboard Watchlist</label><br />
                          <input type="checkbox" id="vehicle2" name="vehicle2" defaultValue="Car" />
                          <label htmlFor="vehicle2">Show in Expense Claims</label><br />
                          <input type="checkbox" id="vehicle3" name="vehicle3" defaultValue="Boat" />
                          <label htmlFor="vehicle3">Enable payments to this account</label><br /><br />
                          {formik.touched.tax ? (<div className='error'>{formik.errors.tax}</div>) : null}
                        </div>
                    </div>
                </div>
              </fieldset>
              <hr />
                    <center>
                      <button type="submit" id="save_staff" className="btn btn-dark">
                        Submit
                      </button>
                    </center>
             </form>
        </div>
    )
}

export default AddAccount
