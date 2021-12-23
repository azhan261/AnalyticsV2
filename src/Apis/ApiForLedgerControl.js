//getting API for showing all the data
export const getLedgers = () => fetch("https://313.com.pk/ledger-control").then(res => res.json())

//getting API for inserting the data
export const createLedgers = (todo) => fetch("https://313.com.pk/ledger-control/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateLedger = (todo, id) => fetch(`https://313.com.pk/ledger-control/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getLedger = (id) => fetch(`https://313.com.pk/ledger-control/${id}`).then(res => res.json())