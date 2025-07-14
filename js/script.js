const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const description = document.querySelector("#description");
const result = document.querySelector("#result")

const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

amount.oninput = () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, '');
}

form.onsubmit = (event) =>{
  event.preventDefault();
  
  switch (currency.value) {
    case 'USD':
      convertCurrency( amount.value, USD, "US$");
      break;
    case 'EUR':
      convertCurrency( amount.value, EUR, "€");
      break;
    case 'GBP':
      convertCurrency( amount.value, GBP, "£");
      break;
  }
}

function convertCurrency(amount, price, symbol){
  try{
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    let total = String(amount * price);
    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`

    footer.classList.add("show-result");
  }
  catch (error) {
    if(isNaN(total)){
      return alert(error)
    }
    footer.classList.remove("show-result")
    alert("Erro ao converter: " + error.message);
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })
}