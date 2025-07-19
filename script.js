const exchangeRates = {
  USD: { PKR: 278, INR: 83.3, EUR: 0.91, GBP: 0.78, AED: 3.67, SAR: 3.75, CAD: 1.35, AUD: 1.49, CNY: 7.23, USD: 1 },
  PKR: { USD: 0.0036, INR: 0.3, EUR: 0.0033, GBP: 0.0028, AED: 0.013, SAR: 0.0134, CAD: 0.0049, AUD: 0.0053, CNY: 0.026, PKR: 1 },
  INR: { USD: 0.012, PKR: 3.4, EUR: 0.011, GBP: 0.0094, AED: 0.044, SAR: 0.045, CAD: 0.016, AUD: 0.017, CNY: 0.087, INR: 1 },
  EUR: { USD: 1.1, PKR: 305, INR: 91.5, GBP: 0.86, AED: 4.04, SAR: 4.13, CAD: 1.48, AUD: 1.65, CNY: 7.94, EUR: 1 },
  GBP: { USD: 1.28, PKR: 354, INR: 106, EUR: 1.16, AED: 4.7, SAR: 4.8, CAD: 1.72, AUD: 1.92, CNY: 9.2, GBP: 1 },
  AED: { USD: 0.27, PKR: 75.5, INR: 22.7, EUR: 0.25, GBP: 0.21, SAR: 1.02, CAD: 0.37, AUD: 0.41, CNY: 1.97, AED: 1 },
  SAR: { USD: 0.27, PKR: 74, INR: 22, EUR: 0.24, GBP: 0.20, AED: 0.98, CAD: 0.36, AUD: 0.40, CNY: 1.92, SAR: 1 },
  CAD: { USD: 0.74, PKR: 203, INR: 61, EUR: 0.68, GBP: 0.58, AED: 2.7, SAR: 2.78, AUD: 1.1, CNY: 5.3, CAD: 1 },
  AUD: { USD: 0.67, PKR: 188, INR: 57, EUR: 0.61, GBP: 0.52, AED: 2.45, SAR: 2.5, CAD: 0.91, CNY: 4.8, AUD: 1 },
  CNY: { USD: 0.14, PKR: 39, INR: 11.5, EUR: 0.13, GBP: 0.11, AED: 0.51, SAR: 0.52, CAD: 0.19, AUD: 0.21, CNY: 1 }
};

function updateFlags() {
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");

  const fromFlagCode = fromCurrency.selectedOptions[0].dataset.flag;
  const toFlagCode = toCurrency.selectedOptions[0].dataset.flag;

  document.getElementById("from-flag").src = `https://flagcdn.com/48x36/${fromFlagCode}.png`;
  document.getElementById("to-flag").src = `https://flagcdn.com/48x36/${toFlagCode}.png`;
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromSelect = document.getElementById("from-currency");
  const toSelect = document.getElementById("to-currency");
  const resultDiv = document.getElementById("result");

  const from = fromSelect.value;
  const to = toSelect.value;
  const fromName = fromSelect.selectedOptions[0].dataset.name;
  const toName = toSelect.selectedOptions[0].dataset.name;

  if (isNaN(amount) || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = amount * rate;

  resultDiv.textContent = `${amount} ${fromName} = ${converted.toFixed(2)} ${toName}`;
}
