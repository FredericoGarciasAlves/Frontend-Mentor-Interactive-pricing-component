const range = document.getElementById('rangeDinamico');
const price = document.querySelector('.price');
const data = document.querySelector('.data');
const pageviews = document.querySelector('.pageviews');
const togglewSwitch = document.getElementById('toggle-switch');

function atualizarGradiente() {
  const valor = +range.value; // converte string para número
  const min = +range.min || 0; // 0 por padrão
  const max = +range.max || 100; // 100 por padrão
  const perc = ((valor - min) / (max - min)) * 100; // calc. percentual

  // Monta o gradiente:
  // - 0% até perc% em verde (#4caf50)
  // - perc% até 100% em cinza claro (#ddd)
  const gradiente = `linear-gradient(
        to right,
        #A5F3EB 0%,
        #A5F3EB ${perc}%,
        #EAEEFB ${perc}%,
        #EAEEFB 100%
        )`;

  // Aplica inline no <input>
  range.style.background = gradiente;
}

// 1º disparo logo que a página carrega

function rangePricePageviews() {
  const val = Number(range.value);
  const isOn = togglewSwitch.checked;

  // priceOn/off define os preços conforme o toggle
  const priceOn = isOn
    ? ['$8.00', '$12.00', '$18.00', '$24.00', '$36.00']
    : ['$6.00', '$9.00', '$13.50', '$18.00', '$27.00'];
  const viewsText = [
    '10K PAGEVIEWS',
    '50K PAGEVIEWS',
    '100K PAGEVIEWS',
    '500K PAGEVIEWS',
    '1M PAGEVIEWS',
  ];

  if (val >= 0 && val <= 9) {
    pageviews.textContent = viewsText[0];
    price.textContent = priceOn[0];
  } else if (val >= 10 && val <= 19) {
    pageviews.textContent = viewsText[1];
    price.textContent = priceOn[1];
  } else if (val >= 20 && val <= 29) {
    pageviews.textContent = viewsText[2];
    price.textContent = priceOn[2];
  } else if (val >= 30 && val <= 39) {
    pageviews.textContent = viewsText[3];
    price.textContent = priceOn[3];
  } else if (val >= 40 && val <= 50) {
    pageviews.textContent = viewsText[4];
    price.textContent = priceOn[4];
  }
}
atualizarGradiente();
rangePricePageviews();

range.addEventListener('input', rangePricePageviews);
// Executa uma vez no carregamento

range.addEventListener('input', atualizarGradiente);
range.addEventListener('input', rangePricePageviews);
togglewSwitch.addEventListener('click', () => {
  if (togglewSwitch.checked) {
    data.textContent = '/ month';
    rangePricePageviews();
  } else {
    data.textContent = '/ year';
    rangePricePageviews();
  }
});
