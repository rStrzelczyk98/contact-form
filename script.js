'use strict';
const modal = document.querySelector('.modal');
const form = document.getElementsByTagName('form')[0];

form.addEventListener('input', validation.bind(form));

form.addEventListener('submit', function (e) {
  if (!submitChceck()) {
    e.preventDefault();
  } else {
    modal.classList.remove('hidden');
  }
});

function checkName(input) {
  const patern = /^\D+\s+\D*$/;
  return patern.test(input.value);
}

function nameValidation(input) {
  if (!checkName(input)) {
    err(input);
    input.placeholder = 'Cannot be empty!';
  } else {
    valid(input);
  }
}

function checkEmail(input) {
  const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return pattern.test(input.value.toLowerCase());
}

function emailValidation(input) {
  if (!checkEmail(input)) {
    err(input);
    input.placeholder = 'Cannot be empty!';
  } else {
    valid(input);
  }
}

function msgValidation(input) {
  if (input.value === '') {
    err(input);
    input.placeholder = 'Cannot be empty!';
  } else {
    valid(input);
  }
}

function err(el) {
  el.classList.remove('valid');
  el.classList.add('error');
}

function valid(el) {
  el.classList.remove('error');
  el.classList.add('valid');
}

function validation(e) {
  if (!e.target.parentElement.classList.contains('input-field')) return;
  switch (e.target.name) {
    case 'fullName':
      nameValidation(e.target);
      break;
    case 'email':
      emailValidation(e.target);
      break;
    case 'msg':
      msgValidation(e.target);
      break;
    default:
      break;
  }
}

function submitChceck() {
  const fullName = document.getElementsByName('fullName')[0];
  const eMail = document.getElementsByName('email')[0];
  const message = document.getElementsByName('msg')[0];
  const required = [fullName, eMail, message];
  nameValidation(fullName);
  emailValidation(eMail);
  msgValidation(message);
  return required.every(el => el.classList.contains('valid')) ? true : false;
}

function ok() {
  modal.classList.toggle('hidden');
  location.reload();
}
