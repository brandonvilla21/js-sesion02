/**
 * 1. Agregar el texto "facebook" al header h1
 * 
 * 2. Crear un boton de login y agregarlo en donde se indica en el documento HTML
 * 2.1 Agregar la clase login-button al boton creado
 * 
 * 3. Agregar un evento que al momento de realizar un Submit, se ejecute y muestre
 *    en un alert el email y password que se ingresaron
 * 3.1 Obtener el email y password navegando a traves de los nodos hijos del loginForm
 * 
 * 4. (Ejercicio de tarea) Agregar un evento que al momento de realizar un click en el boton de Registro
 *    se muestre un alert con los datos ingresados.
 * 4.1 Obtener los valores de los inputs a traves de su id
 * 
 * 5. (Ejercicio de tarea) En el Login, al hacer el submit, verificar que si el password esta vacio,
 * entonces muestra un alert indicando al usuario que la contraseña no es valida
 */


// Obtener el elemento H1
// Agregar el texto al elemento
var titleHeader = document.getElementById('facebook-title-h1')
titleHeader.innerHTML = "Facebook"

// Crear boton de login
var button = document.createElement('button')
button.setAttribute('class', 'login-button')

// createTextNode()
var buttonText = document.createTextNode('Iniciar Sesión')
button.appendChild(buttonText)

// .appendChild()
var loginForm = document.getElementById('login-form-id')
loginForm.appendChild(button)

// Agregar un event listener al botton de login
function submitForm(event) {
  event.preventDefault()
  var arrayChildren = loginForm.children
  var email = arrayChildren[0].children[1].value
  var password = arrayChildren[1].children[1].value
  var message = email + ' - ' + password
  alert(message)
}

loginForm.addEventListener('submit', submitForm)