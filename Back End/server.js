require("dotenv").config();
const express = require('express');
const app = express();
const http = require("http")
const server = http.createServer(app)

//------------ Cors

const cors = require('cors');

//-----

//----------- Mongoose


const { mongoose } = require('./Database Connection/db.js');

//----

//----- Body Parser -----------


const bodyParser = require('body-parser');

app.use(bodyParser.json());

//------------- Request statement for the controller ---------

var AddAccountController = require('./Controllers/Accounts/Add Account/AddAccountController');
var SalesInvoiceController = require('./Controllers/Invoice/SalesInvoiceController')
var PurchaseInvoiceController = require('./Controllers/Invoice/PurchaseInvoiceController')
var DirectCostsController = require('./Controllers/Invoice/DirectCostsController')
var FixedAssetController = require('./Controllers/Invoice/FixedAssetController')
var CurrentAssetController = require('./Controllers/Invoice/CurrentAssetController')
var NonCurrentAssetController = require('./Controllers/Invoice/NonCurrentAssetController')
var CurrentLiabilityController = require('./Controllers/Invoice/CurrentLiabilityController')
var NonCurrentLiabilityController = require('./Controllers/Invoice/NonCurrentLiabilityController')
var EquityController = require('./Controllers/Invoice/EquityController')
var AmountSendTestingController = require('./Controllers/Testing/AmountSendTestingController')
var TaxRateController = require("./Controllers/Tax/Tax Rate/TaxRateController")
var AgedPayableReferenceController = require("./Controllers/Invoice/AgedPayableReferenceController")
var AgedReceivableReferenceController = require("./Controllers/Invoice/AgedReceivableReferenceController")
var CreditController = require("./Controllers/Ledger/CreditController")
var DebitController = require("./Controllers/Ledger/DebitController")
var LedgerController = require("./Controllers/Ledger/LedgerController")
var AmountPaidOrReceivedController = require("./Controllers/Invoice/AmountPaidOrReceivedController")
var PurchaseOrSalesTaxVatValueAfterDiscountController = require("./Controllers/Invoice/PurchaseOrSalesTaxVatValueAfterDiscountController")
var InterestController = require("./Controllers/Invoice/InterestController")
var AllPurchaseInvoiceAccountsValuesController = require("./Controllers/Invoice/AllPurchaseInvoiceAccountsValuesController")
var AllSalesInvoiceAccountsValuesController = require("./Controllers/Invoice/AllSalesInvoiceAccountsValuesController")
var AllSalesAndPurchaseAccountsValuesController = require( "./Controllers/Invoice/AllSalesAndPurchaseAccountsValuesController")

//---- Cors ----------

app.use(cors({ origin: 'http://localhost:3000'}));



//--------------- Setting up express server through app.listen

app.listen(3001, () => console.log('Server started at port : 3001'));

//-------------- Adding routers from the controller

app.use('/addAccount', AddAccountController);
app.use('/salesInvoice', SalesInvoiceController);
app.use('/purchaseInvoice', PurchaseInvoiceController);
app.use('/directCosts', DirectCostsController);
app.use('/nonCurrentAssets', NonCurrentAssetController);
app.use('/currentAssets', CurrentAssetController);
app.use('/fixedAssets', FixedAssetController);
app.use('/currentLiability', CurrentLiabilityController);
app.use('/nonCurrentLiability', NonCurrentLiabilityController);
app.use('/equity', EquityController);
app.use('/testingAmountSend', AmountSendTestingController);
app.use('/taxRate', TaxRateController);
app.use('/agedPayableReference', AgedPayableReferenceController);
app.use('/agedReceivableReference', AgedReceivableReferenceController);
app.use('/creditLedger', CreditController);
app.use('/debitLedger', DebitController);
app.use('/ledger-control', LedgerController);
app.use('/amount-control', AmountPaidOrReceivedController);
app.use('/purchase-sales-tax/vat-value-control', PurchaseOrSalesTaxVatValueAfterDiscountController);
app.use('/purchase-sales-interest', InterestController);
app.use('/all-purchase-accounts', AllPurchaseInvoiceAccountsValuesController);
app.use('/all-sales-accounts', AllSalesInvoiceAccountsValuesController);
app.use('/all-sales-purchase-accounts', AllSalesAndPurchaseAccountsValuesController);