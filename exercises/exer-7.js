/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".

R/: 
function getCompanyById(idCompany) {
  const company = companies.find((res) => res.id === idCompany)
  return company ? company.name : 'No existe compañía con ese Id'
}
const companyName = getCompanyById(1)
console.log('Compañía:', companyName)

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.

function removeCompanyById(idCompany) {
  const company = companies.filter((res) => res.id !== idCompany)

  return company ? 'Compañia eliminada' : 'No existe compañía con ese Id'
}
const companyName = removeCompanyById(2)
console.log('Compañía:', companyName)

3: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo apellido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".

4: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

   const idCompany = 1
const newUser = {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  hasCar: true,
}

function addUserToCompany(idCompany, newUser) {
  const company = companies.find((company) => company.id === idCompany)

  if (company) {
    const newUserId = company.users.length + 1

    newUser.id = newUserId
    company.users.push(newUser)
    company.usersLength = company.users.length

    return true
  } else {
    return false
  }
}

const userAdded = addUserToCompany(idCompany, newUser)

if (userAdded) {
  console.log(`El usuario ${newUser.firstName} fue agregado correctamente a la empresa.`)
} else {
  console.log('No se encontró ninguna empresa con el ID proporcionado.')
}

5: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse.

const idCompany = 0
const companyById = 2
const idUser = 2

function userTransfer(idCompany, companyById, idUser) {
  const fromCompany = companies.find((company) => company.id === idCompany)
  const ByCompany = companies.find((company) => company.id === companyById)
  const user = fromCompany ? fromCompany.users.findIndex((user) => user.id === idUser) : -1

  if (fromCompany && ByCompany && user !== -1) {
    const userToTransfer = fromCompany.users[user]

    ByCompany.users.push(userToTransfer)
    ByCompany.usersLength++

    fromCompany.users.splice(user, 1)
    fromCompany.usersLength--

    console.log('Transferencia exitoa!!')
  } else if (user === -1) {
    console.log('usuario no existe.')
  } else {
    console.log('Error al hacer la transferencia :/')
  }
}

userTransfer(idCompany, companyById, idUser)


6: Crear una función tomando la variable "companies" como parámetro y devolviendo un nuevo objeto
   cuyos atributos son la concatenación del apellido, nombre y edad de cada "user". Cada atributo debe tener el valor de boolean "car".

   Ver ejemplo de la variable exampleObj. 

   const exampleObj = {
      johnDoe32: true,
      BernardoMinet45: false,
      alinaChef23: true
   };
*/
const { cleanConsole } = require('../helpers/system.helpers')
const { createAll } = require('../helpers/data.helper')

const companies = createAll()

cleanConsole(7, companies)

console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ')
console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ')
console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ')
console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ')
console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ')
console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ')
