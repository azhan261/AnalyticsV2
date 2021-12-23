//need to connect mongoose

const mongoose = require('mongoose');


//Using mongoose model property to create model for Teacher
//Then, specify the schema of the model i.e, define column names
//We have to pass model name 'Teacher' into the model
//For Crud, we will need to use this structure and their names i.e name,position,office etc

var AddAccount = mongoose.model('AddAccount', {
    accountType:{ type: String},
    code: { type: String },
    name: {type: String},
    description: {type: String},
    tax: {type: String},
    taxAmount: {type: String},
    to: {type: String},
    from: {type: String},
    startDate: {type: String},
    dueDate: {type: String},
    invoice: {type: String},
    reference: {type: String},
    item: {type: String},
    qty: {type: String},
    unitPrice: {type: String},
    disc: {type: String},
    account: {type: String},
    taxRate: {type: String},
    amountPkr: {type: String},
    name: {type: String},
    total: {type: String},
    accountPaid: {type: String},
    amountCredit: {type: String},
    amountDuePaid: {type: String},
    amountTotalDebit: {type: String},
    transactionType: {type: String},
    amountPaidAmountValue: {type: String},
    amountPaid: {type: String},
    datePaid: {type: String},
    paidTo: {type: String},
    referencePaid: {type: String},
    datePurchaseOrSalesTaxVat: {type: String},
    accountNamePurchaseOrSalesTaxVat: {type: String},
    valuePurchaseTaxVatDebit: {type: String},
    valueSalesTaxVatCredit: {type: String},      
});



//Now we dont to insert a new record called Employee, we need to just insert data
//We export it as an object 

module.exports = { AddAccount };
