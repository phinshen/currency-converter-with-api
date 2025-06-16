const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-btn');
const resultElement = document.querySelector('.result');

const convertCurrency = async () => {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    );
    const data = await response.json();
    console.log(data);

    const conversionRate = data[fromCurrency][toCurrency];
    console.log(conversionRate);

    const convertedAmount = amount * conversionRate;
    resultElement.textContent = `${amount} ${fromCurrency.toUpperCase()} is equal to ${convertedAmount.toFixed(
      2
    )} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    resultElement.textContent = 'An error occurred during conversion';
  }
};

convertButton.addEventListener('click', convertCurrency);
