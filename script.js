const form = document.querySelector('form')
const inputField = form.querySelector('input')
const successMessage = document.querySelector('.success-card')
const closeMessageButton = document.querySelector('.success-content button')
const signUpCard = document.querySelector('.card')
const errorMessageSpan = form.querySelector('span')

form.addEventListener('submit', handleSubmit)
closeMessageButton.addEventListener('click', () => closeSuccessMessage())
inputField.addEventListener('input', () => {
  errorMessageSpan.classList.add('hidden')
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
  const messageEmailContent = successMessage.querySelector('p strong')
  messageEmailContent.textContent = email
  signUpCard.classList.add('hidden')
  successMessage.classList.remove('hidden')
}

function closeSuccessMessage() {
  successMessage.classList.add('hidden')
  signUpCard.classList.remove('hidden')
  signUpCard.querySelector('form input').value = ''
}

function showError() {
  const emailInput = signUpCard.querySelector('form input')
  const emailSpan = signUpCard.querySelector('form span')
  emailSpan.textContent = 'Valid email required'
  emailSpan.classList.add('error')
  emailSpan.classList.remove('hidden')
  emailInput.classList.add('input-error')
}
