//getting API for showing all the data
export const getDebitLedgers = () => fetch("https://313.com.pk/debitLedger").then(res => res.json())

//getting API for inserting the data
export const createDebitLedgers = (todo) => fetch("https://313.com.pk/debitLedger/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateDebitLedger = (todo, id) => fetch(`https://313.com.pk/debitLedger/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getDebitLedger = (id) => fetch(`https://313.com.pk/debitLedger/${id}`).then(res => res.json())