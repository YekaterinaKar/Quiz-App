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

const first = document.querySelector("#yourQuestion");
const second = document.querySelector("#yourAnswer");
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const amountLeft2 = document.querySelector('[data-js="amountLeft2"]');
const maxLength = first.getAttribute("maxlength");
const maxLength2 = second.getAttribute("maxlength");

const updateAmountLeft = (value) => {
    amountLeft.innerText = value;
};

updateAmountLeft(maxLength);
first.addEventListener("input", () => {
    updateAmountLeft(maxLength - first.value.length);
});

const updateAmountLeft2 = (value) => {
    amountLeft2.innerText = value;
};

updateAmountLeft2(maxLength);
second.addEventListener("input", () => {
    updateAmountLeft2(maxLength2 - second.value.length);
});
