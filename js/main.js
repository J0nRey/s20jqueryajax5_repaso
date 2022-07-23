// Con JQuery
const getText = event => {
    let someButton = event.target.id
    console.log("someButton ", someButton)
  }
  
  $("button").on("click", () => {
    getText( event )
  })
  
  // Con Vanilla
  const getText2 = e => {
    let someButton2 = e.target.id
    console.log("someButton2", someButton2)
  }
  
  document.getElementById("primero").addEventListener("click",() => {
   getText2(event) 
  })
  
  // Propagacion (...Objeto)
  
  
  let someObject = {
    name: "El morador de las tinieblas",
    author: "H. P. Lovecraft"
  }
  
  console.log(Object.entries(someObject))
  
  console.log(" ")
  /*
  Array bidimencional, [llave: valor]
  
  [ [ 'name', 'El morador de las tinieblas' ],
    [ 'author', 'H. P. Lovecraft' ] ]
      
  */
  
  let newBook = [...Object.entries(someObject), ["country","USA"]]
  
  console.log(newBook)
  
  console.log(" ")
  
  // Si quiero un objeto nuevo con la variable ya agregada
  
  console.log( Object.fromEntries(newBook))
  
  console.log(" ")
  
  // Reduciendo
  
  let someBook = {
    name: "El morador de las tinieblas",
    author: "H. P. Lovecraft"
  }
  
  let newBook2 = {...someBook, country:"USA"} 
  console.log(newBook2)
  
  console.log(" ")
  
  // si quiero PROPAGAR un ARRAY debo usar CORCHETES
  // si quiero PROPAGAR un OBJETO debo usar LLAVES
  
  // Como mezclarlos
  
  let user = {
    name: "jonathan",
    age: "35"
  }
  
  let hobbies = [
    "chess",
    "starcraft",
    "music"
  ]
  
  // se crea una propiedad que se llama hobbies pero se le asigna manuelmente un valor, ese valor es un array que propaga tolo lo que ya existe en la variable hobbies pero que ademas le agrege el item "eat".
  
  
  let completeUser = {...user, hobbies : [...hobbies, 'eat']}
  
  console.log(completeUser)