import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const promiseParams = { position, delay };

    if (shouldResolve) {
      // Fulfill
      setTimeout(() => resolve(promiseParams), delay);
    } else {
      // Reject
      setTimeout(() => reject(promiseParams), delay);
    }
  });
}

function onFormSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;

  for (let i = 1; i <= Number(amount.value); i += 1) {
    createPromise(i, Number(delay.value))
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay.value = Number(delay.value) + Number(step.value);
  }
  e.target.reset();
}
