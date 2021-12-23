require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const http = require("http")
const server = http.createServer(app)


//------------ Cors

const cors = require('cors');

//-----

//----------- Mongoose


const { mongoose } = require('./Back End/Database Connection/db');

//----

//----- Body Parser -----------


const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/public', express.static('public'));

if(process.env.NODE_ENV==='production'){
	app.use(express.static(__dirname+"/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname+"/build/index.html"))
	})
}
else{
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

//------------- Request statement for the controller ---------

var AddAccountController = require('./Back End/Controllers/Accounts/Add Account/AddAccountController');
var SalesInvoiceController = require('./Back End/Controllers/Invoice/SalesInvoiceController')
var PurchaseInvoiceController = require('./Back End/Controllers/Invoice/PurchaseInvoiceController')
var DirectCostsController = require('./Back End/Controllers/Invoice/DirectCostsController')
var FixedAssetController = require('./Back End/Controllers/Invoice/FixedAssetController')
var CurrentAssetController = require('./Back End/Controllers/Invoice/CurrentAssetController')
var NonCurrentAssetController = require('./Back End/Controllers/Invoice/NonCurrentAssetController')
var CurrentLiabilityController = require('./Back End/Controllers/Invoice/CurrentLiabilityController')
var NonCurrentLiabilityController = require('./Back End/Controllers/Invoice/NonCurrentLiabilityController')
var EquityController = require('./Back End/Controllers/Invoice/EquityController')
var AmountSendTestingController = require('./Back End/Controllers/Testing/AmountSendTestingController')
var TaxRateController = require("./Back End/Controllers/Tax/Tax Rate/TaxRateController")
var AgedPayableReferenceController = require("./Back End/Controllers/Invoice/AgedPayableReferenceController")
var AgedReceivableReferenceController = require("./Back End/Controllers/Invoice/AgedReceivableReferenceController")
var CreditController = require("./Back End/Controllers/Ledger/CreditController")
var DebitController = require("./Back End/Controllers/Ledger/DebitController")
var LedgerController = require("./Back End/Controllers/Ledger/LedgerController")
var AmountPaidOrReceivedController = require("./Back End/Controllers/Invoice/AmountPaidOrReceivedController")
var PurchaseOrSalesTaxVatValueAfterDiscountController = require("./Back End/Controllers/Invoice/PurchaseOrSalesTaxVatValueAfterDiscountController")
var InterestController = require("./Back End/Controllers/Invoice/InterestController")
var AllPurchaseInvoiceAccountsValuesController = require("./Back End/Controllers/Invoice/AllPurchaseInvoiceAccountsValuesController")
var AllSalesInvoiceAccountsValuesController = require("./Back End/Controllers/Invoice/AllSalesInvoiceAccountsValuesController")
var AllSalesAndPurchaseAccountsValuesController = require( "./Back End/Controllers/Invoice/AllSalesAndPurchaseAccountsValuesController")

//---- Cors ----------

app.use(cors({ origin: 'http://localhost:3000'}));



//--------------- Setting up express server through app.listen
app.set('port', (process.env.PORT || 9000))


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

server.listen(app.get('port'), () => {
	console.log("listening on", app.get('port'))
})