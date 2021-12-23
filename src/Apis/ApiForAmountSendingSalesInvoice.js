//getting API for showing all the data
export const getAmountSendingSalesInvoice = () => fetch("https://313.com.pk/testingAmountSend").then(res => res.json())

//getting API for inserting the data
export const createAmountSendingSalesInvoice = (todo) => fetch("https://313.com.pk/testingAmountSend/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAmountSendingSalesInvoice = (todo, id) => fetch(`https://313.com.pk/testingAmountSend/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
