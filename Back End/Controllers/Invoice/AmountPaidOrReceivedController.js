//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { AmountPaidOrReceivedSchema } = require ("../../Models/Invoice/AmountPaidOrReceivedSchema")

 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type localhost:3001/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 router.get('/', (req, res) => {
     AmountPaidOrReceivedSchema.find((err, doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Retrieving AmountPaidOrReceivedSchema :' + JSON.stringify(err, undifines, 2)); }
     });

 });

 //Router for getting only approved addAccounts

 router.get('/approved', (req, res) => {
    AmountPaidOrReceivedSchema.find({ "status" : "1" },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving AmountPaidOrReceivedSchema :' + JSON.stringify(err, undifines, 2)); }
    });

});

 //Making a route to get the values related to a specific id, keep in mind, this id is not the id a user gives
 //but an ID mongoDB sets its self for specific entries in the database.


 
 router.get("/:id", (req, res) => {
    const id = req.params.id;
    AmountPaidOrReceivedSchema.findById(id, (err, amountPaidOrReceived) => {
      res.json(amountPaidOrReceived);
    });
  });

 //Making a route to post the data with post rquest.

 //It should be noted that for now, we will be implementing

 router.post('/create', (req, res) => {
     var emp = new AmountPaidOrReceivedSchema({

      amountPaidAmountValue:req.body.amountPaidAmountValue,
      datePaid: req.body.datePaid,
      paidTo: req.body.paidTo,
      referencePaid: req.body.referencePaid,
      amountDuePaid: req.body.amountDuePaid,

      amountReceived: req.body.amountReceived,
      dateReceived: req.body.dateReceived,
      receivedTo: req.body.receivedTo,
      referenceReceived: req.body.referenceReceived,
      
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

    AmountPaidOrReceivedSchema.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true }, (err, doc) =>{
        //Checking for errors
        //If error not found, sending response to the doc
        if(!err) {res.send(doc); }
        else { console.log('Error in AmountPaidOrReceivedSchema Update :' + JSON.stringify(err, undefined, 2)); }
    });



 });
*/
 router.post("/:id", (req, res) => {
    const id = req.params.id;
    AmountPaidOrReceivedSchema.findById(id, (err, amountPaidOrReceived) => {
      if (!amountPaidOrReceived) {
        res.status(404).send("amountPaidOrReceived not found");
      } else {

        amountPaidOrReceived.amountPaidAmountValue = req.body.amountPaidAmountValue;
        amountPaidOrReceived.datePaid = req.body.datePaid;
        amountPaidOrReceived.paidTo = req.body.paidTo;
        amountPaidOrReceived.referencePaid = req.body.referencePaid;
        amountPaidOrReceived.amountDuePaid = req.body.amountDuePaid,


        amountPaidOrReceived.amountReceived = req.body.amountReceived;
        amountPaidOrReceived.dateReceived = req.body.dateReceived;
        amountPaidOrReceived.receivedTo = req.body.receivedTo;
        amountPaidOrReceived.referenceReceived = req.body.referenceReceived;
        amountPaidOrReceived
          .save()
          .then((amountPaidOrReceived) => {
            res.json(amountPaidOrReceived);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

 //Building a delete router for delete request. The delete request is called through req,res function


 router.delete("/delete/:id", (req, res) => {
  var id = ObjectId(req.params.id)
  AmountPaidOrReceivedSchema.findByIdAndRemove(id,(err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Retrieving AmountPaidOrReceivedSchema :' + JSON.stringify(err, undifines, 2)); }
  });

});


module.exports = router;


 //We have to configure these routes in the root file which is index.js


