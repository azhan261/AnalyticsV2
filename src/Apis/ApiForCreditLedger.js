//getting API for showing all the data
export const getCreditLedgers = () => fetch("https://313.com.pk/creditLedger").then(res => res.json())

//getting API for inserting the data
export const createCreditLedgers = (todo) => fetch("https://313.com.pk/creditLedger/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCreditLedger = (todo, id) => fetch(`https://313.com.pk/creditLedger/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCreditLedger = (id) => fetch(`https://313.com.pk/creditLedger/${id}`).then(res => res.json())