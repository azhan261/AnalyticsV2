import React, { useState, useEffect, useRef } from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";

function ReportMainPage() {
    return (
        <div>
        <section className="ftco-section ftco-no-pt bg-light">
          <div className="container">
            <div className="row d-flex no-gutters">
            <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section pt-md-5">
                
                  <h3 className="mb-4">Sales</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
      
        <ul className="list-group list-group-flush">
          <Link to = "/aged-recievable-reports-sales"><li className="list-group-item">Age Sales</li></Link>
          <Link to = "/aged-recievable-reports-details"><li className="list-group-item">Age Receivables Detail</li></Link>
          <Link to = "/aged-recievable-reports-summary"><li className="list-group-item">Aged Receivables Summary</li></Link>
          <Link to = "/aged-recievable-reports-customerInvoice"><li className="list-group-item">Customer Invoice Report</li></Link>
          <Link to = "/aged-recievable-reports-receivableInvoiceDetail"><li className="list-group-item">Receivable Invoice Detail</li></Link>
          <Link to = "/aged-recievable-reports-receivableInvoiceSummary"><li className="list-group-item">Receivable Invoice Summary</li></Link>
        </ul>
      </div>
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section pl-md-4 pt-md-5">
      
                  <h3 className="mb-4">Purchases</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
        <Link to = "/aged-payable-reports-details"><li className="list-group-item">Aged Payables Detail</li></Link>
        <Link to = "/aged-payable-reports-summary"><li className="list-group-item">Aged Payables Summary</li></Link>
        <Link to = "/aged-payable-reports-payableDetail"><li className="list-group-item">Payable Invoice Detail</li></Link>
        <Link to = "/aged-payable-reports-invoiceSummary"><li className="list-group-item">Payable Invoice Summary</li></Link>
        <Link to = "/aged-payable-reports-supplierInvoice"><li className="list-group-item">Supplier Invoice Report</li></Link>
        </ul>
      </div>


      </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section pl-md-4 pt-md-5">
      
                  <h3 className="mb-4">Sales Tax</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
        <Link to = "/sales-tax-reports"><li className="list-group-item">Sales Tax Report</li></Link>
        </ul>
      </div>
      
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section md-5">
                
                  <h3 className="mb-4">Inventory Reports</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
          <Link to = "/inventory-details-reports"><li className="list-group-item">Inventory Item Details</li></Link>
          <Link to = "/inventory-list-reports"><li className="list-group-item">Inventory Item  List</li></Link>
          <Link to = "/inventory-summary-reports"><li className="list-group-item">Inventory Item Summary</li></Link>
          <Link to = "/inventory-summary-untracked-reports"><li className="list-group-item">Inventory Item Summary Untracked</li></Link>
          <Link to = "/inventory-sales-reports"><li className="list-group-item">Sales By Items Report</li></Link>
        </ul>
      </div>
      
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section md-5">
                
                  <h3 className="mb-4">Fixed Assets</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
          <Link to = "/fixed-assets-depreciation-schedule"><li className="list-group-item">Depreciation Schedule</li></Link>
          <Link to = "/fixed-assets-depreciation-schedule-2"><li className="list-group-item">Depreciation Schedule</li></Link>
          <Link to = "/fixed-assets-disporal-schedule"><li className="list-group-item">Disposal Schedule</li></Link>
          <Link to = "/fixed-assets-reconciliation"><li className="list-group-item">Fixed Asset Reconciliation</li></Link>
          <Link to = "/fixed-assets-reconciliation-2"><li className="list-group-item">Fixed Asset Reconciliation</li></Link>
        </ul>
      </div>

      
      
              </div>
              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section md-5">
                
                  <h3 className="mb-4">Financial</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
        
        <Link to = "/balance-sheet"><li className="list-group-item">Balance Sheet</li></Link>
        <Link to = "/financial-balance-sheet-report"><li className="list-group-item">Balance Sheet</li></Link>
        <Link to = "/financial-budget-manager-report"><li className="list-group-item">Budget Manager</li></Link>
        <Link to = "/financial-budget-summary-report"><li className="list-group-item">Budget Summary</li></Link>
        <Link to = "/financial-budget-variance-report"><li className="list-group-item">Budget Variance</li></Link>
        <Link to = "/financial-business-perfomance-report"><li className="list-group-item">Business Perfomance</li></Link>
        <Link to = "/financial-cash-summary-report"><li className="list-group-item">Cash Summary</li></Link>
        <Link to = "/financial-executive-summary-report"><li className="list-group-item">Executive Summary</li></Link>
        <Link to = "/financial-movements-in-equity-report"><li className="list-group-item">Movements in Equity</li></Link>
        <Link to = "/financial-movements-in-equity-report-2"><li className="list-group-item">Movements in Equity</li></Link>
        <Link to = "/profit-loss"><li className="list-group-item">Profit and Loss</li></Link>
        <Link to = "/financial-profit-loss-report"><li className="list-group-item">Profit and Loss</li></Link>
        <Link to = "/financial-statement-cash-flows-report"><li className="list-group-item">Statement of Cash Flows - Direct Method</li></Link>
        <Link to = "/financial-tracking-summary-report"><li className="list-group-item">Tracking Summary</li></Link>

        
        </ul>
      </div>

      
      
              </div>

              <div className="col-md-6 pl-md-5 py-md-5">
                <div className="heading-section md-5">
                
                  <h3 className="mb-4">Accounting</h3>
                </div>
                
      <div className="card" style={{width: '18rem'}}>
        
        <ul className="list-group list-group-flush">
        
        <Link to = "/accounting-account-summary-report"><li className="list-group-item">Account Summary</li></Link>
        <Link to = "/accounting-account-transactions-report"><li className="list-group-item">Account Transactions</li></Link>
        <Link to = "/accounting-account-transactions-report-2"><li className="list-group-item">Account Transactions</li></Link>
        <Link to = "/accounting-account-bank-reconciliation-report"><li className="list-group-item">Bank Reconciliation Summary</li></Link>
        <Link to = "/accounting-account-bank-summary-report"><li className="list-group-item">Bank Sumamry</li></Link>
        <Link to = "/accounting-account-cash-validation-report"><li className="list-group-item">Cash Validation Customer Report</li></Link>
        <Link to = "/accounting-account-contact-transaction-report"><li className="list-group-item">Contact Transactions - Summary</li></Link>
        <Link to = "/accounting-account-detailed-account-transaction-report"><li className="list-group-item">Detailed Account Transactions</li></Link>
        <Link to = "/accounting-account-duplicate-statement-report"><li className="list-group-item">Duplicate Statement Lines</li></Link>
        <Link to = "/accounting-account-foreign-currency-gains-report"><li className="list-group-item">Foreign Currency Gains And Losses</li></Link>
        <Link to = "/accounting-account-general-ledger-report"><li className="list-group-item">General Ledger</li></Link>
        <Link to = "/accounting-account-income-expenses-report"><li className="list-group-item">Income And Expenses By Contact</li></Link>
        <Link to = "/accounting-account-journal-report"><li className="list-group-item">Journal Report</li></Link>
        <Link to = "/accounting-account-trial-balance-report"><li className="list-group-item">Trial Balance</li></Link>
        <Link to = "/accounting-account-trial-balance-report-2"><li className="list-group-item">Trial Balance</li></Link>
        
        </ul>
      </div>

      
      
              </div>

            </div>
          </div>
        </section>
        </div>
    )
}

export default ReportMainPage
