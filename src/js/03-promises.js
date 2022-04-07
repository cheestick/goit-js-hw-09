import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delay.value)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
  e.target.reset();
}
