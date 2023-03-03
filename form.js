const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(form);
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const outp = document.getElementById("outp");
    const frst = document.getElementById("yourQuestion");
    const scnd = document.getElementById("yourAnswer");
    const thrd = document.getElementById("tag");

    if (data) {
        outp.textContent = "Your question: " + frst.value;
        outp2.textContent = "Your answer: " + scnd.value;
        outp3.textContent = "Tag: " + thrd.value;
    } else {
        outp.textContent = "";
        outp2.textContent = "";
        outp3.textContent = "";
    }
});

/*
const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

frst.addEventListener("input", () => {
    updateAmountLeft(maxLength - frst.value.length);
});

/*
const maxLength = questionElement.getAttribute("maxlength");
const questionElement = document.querySelector('[data-js="personalMessage"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

*/
