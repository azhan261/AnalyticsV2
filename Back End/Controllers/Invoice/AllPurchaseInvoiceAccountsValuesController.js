
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema


var { AllPurchaseInvoiceAccountsValuesSchema } = require("../../Models/Invoice/AllPurchaseInvoiceAccountsValuesSchema")

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type localhost:3001/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.post('/', (req, res) => {
  console.log('hit')
     AllPurchaseInvoiceAccountsValuesSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving AllPurchaseInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Router for getting only approved addAccounts

 router.post('/approved', (req, res) => {
   console.log('hit')
    AllPurchaseInvoiceAccountsValuesSchema.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving AllPurchaseInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
    });

});

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


 


 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new AllPurchaseInvoiceAccountsValuesSchema({
      description : req.body.description,
      description2 : req.body.description2,
      description3 : req.body.description3,

      priceForTotalUnits : req.body.priceForTotalUnits,
      priceForTotalUnits2 : req.body.priceForTotalUnits2,
      priceForTotalUnits3 : req.body.priceForTotalUnits3,

      discInDigits : req.body.discInDigits,
      discInDigits2 : req.body.discInDigits2,
      discInDigits3 : req.body.discInDigits3,

      priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount : req.body.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount,
      priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2 : req.body.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount2,
      priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3 : req.body.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount3,
      
      purchaseTaxVATinValue : req.body.purchaseTaxVATinValue,
      purchaseTaxVATinValue2 : req.body.purchaseTaxVATinValue2,
      purchaseTaxVATinValue3 : req.body.purchaseTaxVATinValue3,

      purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT : req.body.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT,
      purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2 : req.body.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT2,
      purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3 : req.body.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT3,
      
      pricePerUnitWithoutPurchaseTaxVAT : req.body.pricePerUnitWithoutPurchaseTaxVAT,
      pricePerUnitWithoutPurchaseTaxVAT2 : req.body.pricePerUnitWithoutPurchaseTaxVAT2,
      pricePerUnitWithoutPurchaseTaxVAT3 : req.body.pricePerUnitWithoutPurchaseTaxVAT3,

      priceTotalUnitsWithoutPurchaseTaxVAT : req.body.priceTotalUnitsWithoutPurchaseTaxVAT,
      priceTotalUnitsWithoutPurchaseTaxVAT2 : req.body.priceTotalUnitsWithoutPurchaseTaxVAT2,
      priceTotalUnitsWithoutPurchaseTaxVAT3 : req.body.priceTotalUnitsWithoutPurchaseTaxVAT3,

      to:req.body.to,
      type: req.body.type,
      expectedDate: req.body.expectedDate,
      paidAmount: req.body.paidAmount,
      dueAmount: req.body.dueAmount,
      startDate: req.body.startDate,
      endDate:req.body.endDate,
      sentStatus:req.body.sentStatus,
      overallStatus:req.body.overallStatus,
      reference:req.body.reference,

      invoice:req.body.invoice,
      invoice2:req.body.invoice,
      invoice3:req.body.invoice,

      groupingReferenceNumber:req.body.groupingReferenceNumber,

      accountName:req.body.accountName,
      accountName1:req.body.accountName1,
      accountName2:req.body.accountName2,
      accountName3:req.body.accountName3,

      accountType:req.body.accountType,
      accountType2:req.body.accountType2,
      accountType3:req.body.accountType3,


      total:req.body.total,
      transactionType:req.body.transactionType,
      
      qty:req.body.qty,
      qty2:req.body.qty2,
      qty3:req.body.qty3,

      unitPrice:req.body.unitPrice,
      unitPrice2:req.body.unitPrice2,
      unitPrice3:req.body.unitPrice3,

      discPercentage:req.body.discPercentage,
      discPercentage2:req.body.discPercentage2,
      discPercentage3:req.body.discPercentage3,

      taxAmount:req.body.taxAmount,

      

      taxAmountSingle:req.body.taxAmountSingle,
      taxAmountSingle2:req.body.taxAmountSingle2,
      taxAmountSingle3:req.body.taxAmountSingle3,


      taxRate:req.body.taxRate,
      taxRate2:req.body.taxRate2,
      taxRate3:req.body.taxRate3,
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

    AllPurchaseInvoiceAccountsValuesSchema.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in AllPurchaseInvoiceAccountsValuesSchema Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    AllPurchaseInvoiceAccountsValuesSchema.findById(id, (err, invoice) => {
      if (!invoice) {
        res.status(404).send("invoice not found");
      } else {

        invoice.description = req.body.description;
        invoice.priceForTotalUnits = req.body.priceForTotalUnits;
        invoice.discInDigits = req.body.discInDigits;
        invoice.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount = req.body.priceTotalUnitsWithoutPurchaseTaxVATAfterDiscount;
        invoice.purchaseTaxVATinValue = req.body.purchaseTaxVATinValue;
        invoice.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT = req.body.purchasePriceAfterDiscountandInclusiveofPurchaseTaxVAT;

        invoice.pricePerUnitWithoutPurchaseTaxVAT= req.body.pricePerUnitWithoutPurchaseTaxVAT;
        invoice.priceTotalUnitsWithoutPurchaseTaxVAT= req.body.priceTotalUnitsWithoutPurchaseTaxVAT;
       

        invoice.startDate = req.body.startDate;
        invoice.endDate = req.body.endDate;
        invoice.reference = req.body.reference;
        invoice.total = req.body.total;
        invoice.from = req.body.from;
        invoice.type = req.body.type;
        invoice.expectedDate = req.body.expectedDate;
        invoice.paidAmount = req.body.paidAmount;
        invoice.dueAmount = req.body.dueAmount;
        invoice.sentStatus = req.body.sentStatus;
        invoice.overallStatus = req.body.overallStatus;
        invoice.invoice = req.body.invoice;
        invoice.groupingReferenceNumber = req.body.groupingReferenceNumber;
        invoice.accountName = req.body.accountName;
        invoice.accountType = req.body.accountType;
        invoice.qty = req.body.qty;
        invoice.unitPrice = req.body.unitPrice;
        invoice.discPercentage = req.body.discPercentage;
        invoice.taxRate = req.body.taxRate;
        invoice.taxAmount = req.body.taxAmount;

        invoice.taxAmountSingle = req.body.taxAmountSingle
        invoice.taxAmountSingle2 = req.body.taxAmountSingle2
        invoice.taxAmountSingle3 = req.body.taxAmountSingle3
        
        invoice.transactionType = req.body.transactionType,
        invoice
          .save()
          .then((invoice) => {
            res.json(invoice);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function

 router.post('/specific/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  AllPurchaseInvoiceAccountsValuesSchema.find({ "reference" : id} , (err, student) => {
    res.json(student);
  });
}); 


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  AllPurchaseInvoiceAccountsValuesSchema.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving AllPurchaseInvoiceAccountsValuesSchema :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


