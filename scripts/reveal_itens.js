const realAssessoriaInfo = {
  descricao: 'A empresa Real Assessoria Empresarial é uma empresa especializada em consultoria tributária e contábil. Possui mais de 10 anos de experiência no mercado e é reconhecida pela sua qualidade e eficiência.',
  imagem: './assets/primary_logo.png'
};

const tiagoAgattiInfo = {
  descricao: 'A empresa Tiago Agatti é uma empresa de desenvolvimento de software, com foco em soluções para a área de saúde. Tem como missão fornecer tecnologia de ponta para melhorar a qualidade de vida das pessoas.',
  imagem: './assets/tiago_agatti.png'
};

const infoMap = {
  'search_box_excel': null,
  'Real Assessoria Empresarial': realAssessoriaInfo,
  'Tiago Agatti': tiagoAgattiInfo
};

const selectElement = document.querySelector('select[name="teste"]');
const detailItens = document.getElementById('detail_itens');
const descricaoElement = detailItens.querySelector('.primary_text_title');
const imagemElement = detailItens.querySelector('.primary_image img');

function updateDetailItens(selectedOption) {
  const selectedInfo = infoMap[selectedOption];
  if (selectedInfo) {
    detailItens.style.display = 'block';
    descricaoElement.textContent = selectedInfo.descricao;
    imagemElement.src = selectedInfo.imagem;
    imagemElement.alt = `Descrição do arquivo ${selectedOption}`;
  } else {
    detailItens.style.display = 'none';
  }
}

selectElement.addEventListener('change', function(event) {
  const selectedOption = event.target.value;
  updateDetailItens(selectedOption);
});

const initialOption = selectElement.value;
updateDetailItens(initialOption);
