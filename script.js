const form = document.querySelector('form')
const inputField = form.querySelector('input')
const successMessage = document.querySelector('.success-card')
const closeMessageButton = document.querySelector('.success-content button')
const signUpCard = document.querySelector('.card')
const errorMessageSpan = form.querySelector('span')
const messageEmailContent = successMessage.querySelector('p strong')

form.addEventListener('submit', handleSubmit)
closeMessageButton.addEventListener('click', () => closeSuccessMessage())
inputField.addEventListener('input', () => {
  errorMessageSpan.classList.add('hidden')
  inputField.classList.remove('input-error')
})

function handleSubmit(event) {
  event.preventDefault()
  const data = Object.fromEntries(new FormData(event.target))

  const isValidData = isValid(data)
  if (isValidData) {
    showSuccessMessage(data.email)
  } else {
    showError()
  }
}
function isValid(formInput) {
  const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
  return formInput.email && emailRegex.test(formInput.email)
}

function showSuccessMessage(email) {
  messageEmailContent.textContent = email
  signUpCard.classList.add('hidden')
  successMessage.classList.remove('hidden')
}

function closeSuccessMessage() {
  successMessage.classList.add('hidden')
  signUpCard.classList.remove('hidden')
  signUpCard.querySelector('form input').value = ''
  inputField.classList.remove('input-error')
}

function showError() {
  errorMessageSpan.textContent = 'Valid email required'
  errorMessageSpan.classList.add('error')
  errorMessageSpan.classList.remove('hidden')
  inputField.classList.add('input-error')
}
