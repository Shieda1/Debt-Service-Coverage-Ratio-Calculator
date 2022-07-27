// https://calculator.swiftutors.com/debt-service-coverage-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debtServiceCoverageRatioRadio = document.getElementById('debtServiceCoverageRatioRadio');
const netOperatingIncomeRadio = document.getElementById('netOperatingIncomeRadio');
const totalDebtServiceRadio = document.getElementById('totalDebtServiceRadio');

let debtServiceCoverageRatio;
let netOperatingIncome = v1;
let totalDebtService = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debtServiceCoverageRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Operating Income';
  variable2.textContent = 'Total Debt Service';
  netOperatingIncome = v1;
  totalDebtService = v2;
});

netOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Service Coverage Ratio (DSCR)';
  variable2.textContent = 'Total Debt Service';
  debtServiceCoverageRatio = v1;
  totalDebtService = v2;
});

totalDebtServiceRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Service Coverage Ratio (DSCR)';
  variable2.textContent = 'Net Operating Income';
  debtServiceCoverageRatio = v1;
  netOperatingIncome = v2;
});

btn.addEventListener('click', function() {
  
  if(debtServiceCoverageRatioRadio.checked)
    result.textContent = `Debt Service Coverage Ratio = ${computeDebtServiceCoverageRatio().toFixed(2)}%`;

  else if(netOperatingIncomeRadio.checked)
    result.textContent = `Net Operating Income = ${computeNetOperatingIncome().toFixed(2)}`;

  else if(totalDebtServiceRadio.checked)
    result.textContent = `Total Debt Service = ${computeTotalDebtService().toFixed(2)}`;
})

// calculation

function computeDebtServiceCoverageRatio() {
  return (Number(netOperatingIncome.value) / Number(totalDebtService.value)) * 100;
}

function computeNetOperatingIncome() {
  return (Number(debtServiceCoverageRatio.value) / 100) * Number(totalDebtService.value);
}

function computeTotalDebtService() {
  return Number(netOperatingIncome.value) / (Number(debtServiceCoverageRatio.value) / 100);
}