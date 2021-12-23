import logo from './logo.svg';
import './App.css';
import Header from './Views/Header';
import Home from './Views/Home';
import Footer from './Views/Footer';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom' 
import AgedPayableTable from './Views/AgedPayableTable';
import AgedReceivablesTable from './Views/AgedReceivablesTable';
import SalesInvoice from './Views/SalesInvoice';
import Ledger from './Views/Accounting/Advanced/Chart Of Accounts/Ledger';
import TaxVatTaxRate from './Views/Sales Overview/Invoices/TaxVatTaxRate';
import ManualJournal from './Views/Accounting/Advanced/Journal/ManualJournal';


//--- Accounting > Advanced > Chart 0f accounts

import AllAccounts from './Views/Accounting/Advanced/Chart Of Accounts/AllAccounts';
import AddAccount from './Views/Accounting/Advanced/Chart Of Accounts/AddAccount';


import PurchaseOverview from './Views/Sales Overview/Invoices/PurchaseOverview';
import NewInvoice from './Views/Sales Overview/Invoices/NewInvoice';
import SalesOverwiew from './Views/Sales Overview/Invoices/SalesOverview';
import SalesInvoiceDetail from './Views/Sales Overview/Invoices/SalesInvoiceDetail';

import PurchaseInvoice from './Views/Sales Overview/Invoices/PurchaseInvoice';
import PurchaseInvoiceDetail from './Views/Sales Overview/Invoices/PurchaseInvoiceDetail';

//------ Profit and Loss -----------//

import ProfitAndLoss from './Views/Profit And Loss/ProfitAndLoss';
import BalanceSheet from './Views/Balance Sheet/BalanceSheet';

//--- Reports ---//

import ReportMainPage from './Views/Reports/ReportMainPage';
import AgedReceivableViewLink from './Views/Reports/Sales/AgedReceivableViewLink';

//----Reports Sales Tax Report----///

import SalesTaxReport from './Views/Reports/Sales Tax Report/SalesTaxReport';

//----Reports Sales-----////

import AgedReceivableDetailsSalesReport from './Views/Reports/Sales/AgedReceivableDetailsSalesReport';
import AgedReceivableSalesReport from './Views/Reports/Sales/AgedReceivableSalesReport';
import AgedReceivableSummarySalesReport from './Views/Reports/Sales/AgedReceivableSummarySalesReport';
import CustomerInvoiceSalesReport from './Views/Reports/Sales/CustomerInvoiceSalesReport';
import ReceivableInvoiceDetailSalesReport from './Views/Reports/Sales/ReceivableInvoiceDetailSalesReport';
import ReceivableInvoiceSummarySalesReport from './Views/Reports/Sales/ReceivableInvoiceSummarySalesReport';

//----Reports Purchase-----////

import AgedPayablesDetailsPurchaseReport from './Views/Reports/Purchases/AgedPayablesDetailsPurchaseReport';
import AgedPayablesSummaryPurchaseReport from './Views/Reports/Purchases/AgedPayablesSummaryPurchaseReport';
import PayableInvoiceDetailPurchaseReport from './Views/Reports/Purchases/PayableInvoiceDetailPurchaseReport';
import PayableInvoiceSummaryPurchaseReport from './Views/Reports/Purchases/PayableInvoiceSummaryPurchaseReport';
import SupplierInvoiceReportPurchaseReport from './Views/Reports/Purchases/SupplierInvoiceReportPurchaseReport';

//-----Reports Inventory ----////

import InventoryItemDetailsReports from './Views/Reports/Inventory/InventoryItemDetailsReports';
import InventoryItemListReports from './Views/Reports/Inventory/InventoryItemListReports';
import InventoryItemSummaryReports from './Views/Reports/Inventory/InventoryItemSummaryReports';
import InventoryItemSummaryUntrackedItems from './Views/Reports/Inventory/InventoryItemSummaryUntrackedItems';
import SalesByItemsReport from './Views/Reports/Inventory/SalesByItemsReport';

//-----Reports Fixed Asset ----////

import DepreciationSchedule2Report from './Views/Reports/Fixed Assets/DepreciationSchedule2Report';
import DepreciationScheduleReport from './Views/Reports/Fixed Assets/DepreciationScheduleReport';
import DisposalScheduleReport from './Views/Reports/Fixed Assets/DisposalScheduleReport';
import FixedAssetReconciliationReport from './Views/Reports/Fixed Assets/FixedAssetReconciliationReport';
import FixedAssetReconciliationReport2 from './Views/Reports/Fixed Assets/FixedAssetReconciliationReport2';

//-----Reports Accounting ----////

import AccountSummaryReport from './Views/Reports/Accounting/AccountSummaryReport';
import AccountTransactionsReport from './Views/Reports/Accounting/AccountTransactionsReport';
import AccountTransactionsReport2 from './Views/Reports/Accounting/AccountTransactionsReport2';
import BankReconciliationSummaryReport from './Views/Reports/Accounting/BankReconciliationSummaryReport';
import BankReconciliationSummaryStatementExceptionsReport from './Views/Reports/Accounting/BankReconciliationSummaryStatementExceptionsReport';
import BankReconciliationSummaryStatementReport from './Views/Reports/Accounting/BankReconciliationSummaryStatementReport';
import BankSummaryReport from './Views/Reports/Accounting/BankSummaryReport';
import CashValidationCustomerReport from './Views/Reports/Accounting/CashValidationCustomerReport';
import ContactTransactionsSummaryReport from './Views/Reports/Accounting/ContactTransactionsSummaryReport';
import DetailedAccountTransactionReport from './Views/Reports/Accounting/DetailedAccountTransactionReport';
import ForeignCurrencyGainsAndLosses from './Views/Reports/Accounting/ForeignCurrencyGainsAndLosses';
import GeneralLedger from './Views/Reports/Accounting/GeneralLedger';
import IncomeAndExpensesByContact from './Views/Reports/Accounting/IncomeAndExpensesByContact';
import JournalReport from './Views/Reports/Accounting/JournalReport';
import TrialBalanceReport from './Views/Reports/Accounting/TrialBalanceReport';
import TrialBalanceReport2 from './Views/Reports/Accounting/TrialBalanceReport2';
import DuplicateStatementLinesReport from './Views/Reports/Accounting/DuplicateStatementLinesReport';

//----- Reports Financial ----////

import BalanceSheetReport from './Views/Reports/Financial/BalanceSheetReport';
import BudgetManagerReport from './Views/Reports/Financial/BudgetManagerReport';
import BudgetSummaryReport from './Views/Reports/Financial/BudgetSummaryReport';
import BudgetVarianceReport from './Views/Reports/Financial/BudgetVarianceReport';
import BusinessPerfomanceReport from './Views/Reports/Financial/BusinessPerfomanceReport';
import CashSummaryReport from './Views/Reports/Financial/CashSummaryReport';
import ExecutiveSummaryReport from './Views/Reports/Financial/ExecutiveSummaryReport';
import MovementsInEquityReport from './Views/Reports/Financial/MovementsInEquityReport';
import MovementsInEquityReport2 from './Views/Reports/Financial/MovementsInEquityReport2';
import StatementOfCashFlowsReport from './Views/Reports/Financial/StatementOfCashFlowsReport';
import TrackingSummary from './Views/Reports/Financial/TrackingSummary';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aged-payable-table" component={AgedPayableTable} />
          <Route path="/aged-receivables-table" component={AgedReceivablesTable} />
          <Route path="/sales-new-invoice" component={SalesInvoice} />

          {/*--- Accounting > Advanced > Chart 0f accounts --- */}
          
          <Route path = "/purchase-overview" component = {PurchaseOverview} />
          <Route path = "/sales-overview" component = {SalesOverwiew} />
          <Route path = "/purchase-overview-detail" component = {PurchaseInvoiceDetail} />
          <Route path = "/sales-overview-detail" component = {SalesInvoiceDetail} />
          <Route path="/chart-of-accounts" component={AllAccounts} />
          <Route path="/testing-aadd-account" component={AddAccount} />
          <Route path="/ledger" component={Ledger} />

          <Route path="/new-invoice" component={NewInvoice} />
          <Route path="/new-purchase-invoice" component={PurchaseInvoice} />
          <Route path="/new-manual-journal" component={ManualJournal} />

          {/*--- Testing ----- */}

          <Route path = "/testing-tax-model" component={TaxVatTaxRate} />
          <Route path = "/profit-loss" component={ProfitAndLoss} />
          <Route path = "/balance-sheet" component={BalanceSheet} />


          {/*--- Reports ---*/}

          <Route path = "/reports" component={ReportMainPage} />
          <Route path = "/aged-recievable-reports-sales" component={AgedReceivableSalesReport} />
          <Route path = "/aged-recievable-link" component={AgedReceivableViewLink} />
          <Route path = "/aged-recievable-reports-details" component={AgedReceivableDetailsSalesReport} />
          <Route path = "/aged-recievable-reports-summary" component={AgedReceivableSummarySalesReport} />
          <Route path = "/aged-recievable-reports-customerInvoice" component={CustomerInvoiceSalesReport} />
          <Route path = "/aged-recievable-reports-receivableInvoiceDetail" component={ReceivableInvoiceDetailSalesReport} />
          <Route path = "/aged-recievable-reports-receivableInvoiceSummary" component={ReceivableInvoiceSummarySalesReport} />
        

          <Route path = "/sales-tax-reports" component={SalesTaxReport} />


          <Route path = "/aged-payable-reports-details" component={AgedPayablesDetailsPurchaseReport} />
          <Route path = "/aged-payable-reports-summary" component={AgedPayablesSummaryPurchaseReport} />
          <Route path = "/aged-payable-reports-payableDetail" component={PayableInvoiceDetailPurchaseReport} />
          <Route path = "/aged-payable-reports-invoiceSummary" component={PayableInvoiceSummaryPurchaseReport} />
          <Route path = "/aged-payable-reports-supplierInvoice" component={SupplierInvoiceReportPurchaseReport} />
     



          <Route path = "/inventory-details-reports" component={InventoryItemDetailsReports} />
          <Route path = "/inventory-list-reports" component={InventoryItemListReports} />
          <Route path = "/inventory-summary-reports" component={InventoryItemSummaryReports} />
          <Route path = "/inventory-summary-untracked-reports" component={InventoryItemSummaryUntrackedItems} />
          <Route path = "/inventory-sales-reports" component={SalesByItemsReport} />
        

          <Route path = "/fixed-assets-depreciation-schedule-2" component={DepreciationSchedule2Report} />
          <Route path = "/fixed-assets-depreciation-schedule" component={DepreciationScheduleReport} />
          <Route path = "/fixed-assets-disporal-schedule" component={DisposalScheduleReport} />
          <Route path = "/fixed-assets-reconciliation" component={FixedAssetReconciliationReport} />
          <Route path = "/fixed-assets-reconciliation-2" component={FixedAssetReconciliationReport2} />


          <Route path = "/accounting-account-summary-report" component={AccountSummaryReport} />
          <Route path = "/accounting-account-transactions-report" component={AccountTransactionsReport} />
          <Route path = "/accounting-account-transactions-report-2" component={AccountTransactionsReport2} />
          <Route path = "/accounting-account-bank-reconciliation-report" component={BankReconciliationSummaryReport} />
          <Route path = "/fixed-assets-reconciliation-2" component={BankReconciliationSummaryStatementExceptionsReport} />
          <Route path = "/fixed-assets-depreciation-schedule-2" component={BankReconciliationSummaryStatementReport} />
          <Route path = "/accounting-account-bank-summary-report" component={BankSummaryReport} />
          <Route path = "/accounting-account-cash-validation-report" component={CashValidationCustomerReport} />
          <Route path = "/accounting-account-contact-transaction-report" component={ContactTransactionsSummaryReport} />
          <Route path = "/accounting-account-detailed-account-transaction-report" component={DetailedAccountTransactionReport}/>
          <Route path = "/accounting-account-duplicate-statement-report" component={DuplicateStatementLinesReport}/>
          <Route path = "/accounting-account-foreign-currency-gains-report" component={ForeignCurrencyGainsAndLosses} />
          <Route path = "/accounting-account-general-ledger-report" component={GeneralLedger} />
          <Route path = "/accounting-account-income-expenses-report" component={IncomeAndExpensesByContact} />
          <Route path = "/accounting-account-journal-report" component={JournalReport} />
          <Route path = "/accounting-account-trial-balance-report" component={TrialBalanceReport} />
          <Route path = "/accounting-account-trial-balance-report-2" component={TrialBalanceReport2} />
        


         
          
          <Route path = "/financial-balance-sheet-report" component={BalanceSheetReport} />
          <Route path = "/financial-budget-manager-report" component={BudgetManagerReport} />
          <Route path = "/financial-budget-summary-report" component={BudgetSummaryReport} />
          <Route path = "/financial-budget-variance-report" component={BudgetVarianceReport} />
          <Route path = "/financial-business-perfomance-report" component={BusinessPerfomanceReport} />
          <Route path = "/financial-cash-summary-report" component={CashSummaryReport} />
          <Route path = "/financial-executive-summary-report" component={ExecutiveSummaryReport} />
          <Route path = "/financial-movements-in-equity-report" component={MovementsInEquityReport} />
          <Route path = "/financial-movements-in-equity-report-2" component={MovementsInEquityReport2}/>
          <Route path = "/financial-statement-cash-flows-report" component={StatementOfCashFlowsReport}/>
          <Route path = "/financial-tracking-summary-report" component={TrackingSummary} />
         
   
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
