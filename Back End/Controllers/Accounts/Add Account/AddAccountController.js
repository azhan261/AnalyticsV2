//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { AddAccount } = require ("../../../Models/Accounts/Add Account/AddAccountSchema")

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type localhost:3001/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.get('/', (req, res) => {
     AddAccount.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving AddAccount :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Router for getting only approved addAccounts

 router.get('/approved', (req, res) => {
    AddAccount.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving AddAccount :' + JSON.stringify(err, undifines, 2)); }
    });

});

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


 
 router.get("/:id", (req, res) => {
    const id = req.params.id;
    AddAccount.findById(id, (err, addAccount) => {
      res.json(addAccount);
    });
  });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new AddAccount({
      accountType:req.body.accountType,
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      tax: req.body.tax, 
      taxAmount: req.body.taxAmount,
      to:req.body.to,
      from:req.body.from,
      startDate: req.body.startDate,
      dueDate: req.body.dueDate,
      invoice: req.body.invoice,
      reference: req.body.reference,
      item: req.body.item,
      qty:req.body.qty,
      unitPrice:req.body.unitPrice,
      disc:req.body.disc,
      account:req.body.account,
      taxRate:req.body.taxRate,
      amountPkr:req.body.amountPkr,
      name:req.body.name,
      total:req.body.total,
      accountPaid:req.body.accountPaid,
      amountCredit:req.body.amountCredit,
      amountDuePaid:req.body.amountDuePaid,
      amountTotalDebit:req.body.amountTotalDebit,
      transactionType:req.body.transactionType,
      amountPaidAmountValue:req.body.amountPaidAmountValue,
      amountPaid:req.body.amountPaid,
      datePaid:req.body.datePaid,
      paidTo:req.body.paidTo,
      referencePaid:req.body.referencePaid,
      datePurchaseOrSalesTaxVat:req.body.datePurchaseOrSalesTaxVat,
      accountNamePurchaseOrSalesTaxVat:req.body.accountNamePurchaseOrSalesTaxVat,
      valuePurchaseTaxVatDebit:req.body.valuePurchaseTaxVatDebit,
      valueSalesTaxVatCredit:req.body.valueSalesTaxVatCredit,
     });
     //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
     //There will be another property called _id which will be used to fetch a particular data by mongoDB


     emp.save((err, doc) => {
         //Checking for error
         //if (!err) { res.send(doc);}
         //else {console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
     });

 });


 //Building router for updating with router.put

 /*router.post('/:id', (req, res) => {
     if (!isValidObjectId(req.params.id))
        return res.status(400).send('No record with given id : ${req.param.id}');

    //Using an object to use the values of Employee and edit them, this object emp is different from Employee but uses its properties
    //emp object will be used to store the new values

    var emp = {
    
        name:req.body.name,
        addAccountstitle: req.body.addAccountstitle,
        addAccountscontent: req.body.addAccountscontent,
        status: req.body.status
       
    };
    //Calling Employee to find and upodate, mongoose property
    // (err,doc) is a call back function in mongoose that we need to show err or put, fetch anything from doc
    //{ new: true } is used to tell which data we wish to send, setting new: true, will send the updated data to the doc

    AddAccount.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in AddAccount Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    AddAccount.findById(id, (err, addAccount) => {
      if (!addAccount) {
        res.status(404).send("addAccount not found");
      } else {
        addAccount.accountType = req.body.accountType;
        addAccount.code = req.body.code;
        addAccount.name = req.body.name;
        addAccount.description = req.body.description;
        addAccount.tax = req.body.tax;
        addAccount.taxAmount = req.body.taxAmount;
        addAccount.to = req.body.to,
        addAccount.from = req.body.from,
        addAccount.startDate = req.body.startDate,
        addAccount.dueDate = req.body.dueDate,
        addAccount.invoice = req.body.invoice,
        addAccount.reference = req.body.reference,
        addAccount.item = req.body.item,
        addAccount.qty = req.body.qty,
        addAccount.unitPrice = req.body.unitPrice,
        addAccount.disc = req.body.disc,
        addAccount.account = req.body.account,
        addAccount.taxRate = req.body.taxRate,
        addAccount.amountPkr = req.body.amountPkr,
        addAccount.name = req.body.name,
        addAccount.total = req.body.total,
        addAccount.accountPaid = req.body.accountPaid,
        addAccount.amountCredit = req.body.amountCredit,
        addAccount.amountDuePaid = req.body.amountDuePaid,
        addAccount.amountTotalDebit = req.body.amountTotalDebit,
        addAccount.transactionType = req.body.transactionType,
        addAccount.amountPaidAmountValue = req.body.amountPaidAmountValue,
        addAccount.amountPaid = req.body.amountPaid,
        addAccount.datePaid = req.body.datePaid,
        addAccount.paidTo = req.body.paidTo,
        addAccount.referencePaid = req.body.referencePaid,
        addAccount.datePurchaseOrSalesTaxVat = req.body.datePurchaseOrSalesTaxVat,
        addAccount.accountNamePurchaseOrSalesTaxVat = req.body.accountNamePurchaseOrSalesTaxVat,
        addAccount.valuePurchaseTaxVatDebit = req.body.valuePurchaseTaxVatDebit,
        addAccount.valueSalesTaxVatCredit = req.body.valueSalesTaxVatCredit,
          
        addAccount
          .save()
          .then((addAccount) => {
            res.json(addAccount);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  AddAccount.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving AddAccount :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


