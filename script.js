// --------------------------------------------------------getting input from user------------------------------------------------
const amountInput = document.getElementById('amount'); 
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-currency');
const resultData = document.getElementById('result');

// -------------------------------------------------------------fetch data from API-----------------------------------------------
async function fetchData() {
    const response = await fetch ('https://api.currencyapi.com/v3/latest?apikey=cur_live_PW5S9A7DKOOc3A6YhY5ZphiPbwFwPQ4gQT18KWBh');

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error ('Error on fetching currency data');
    }
}