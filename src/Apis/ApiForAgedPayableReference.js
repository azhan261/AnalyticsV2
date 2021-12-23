//getting API for showing all the data
export const getAgedPayableReferences = () => fetch("https://313.com.pk/agedPayableReference").then(res => res.json())

//getting API for inserting the data
export const createAgedPayableReferences = (todo) => fetch("https://313.com.pk/agedPayableReference/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateAgedPayableReference = (todo, id) => fetch(`https://313.com.pk/agedPayableReference/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAgedPayableReference = (id) => fetch(`https://313.com.pk/agedPayableReference/${id}`).then(res => res.json())