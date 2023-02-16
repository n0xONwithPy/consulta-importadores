const selectElement = document.querySelector('select[name="teste"]');
const detailItens = document.getElementById('detail_itens');

selectElement.addEventListener('change', function(event) {
  const selectedOption = event.target.value;

  if (selectedOption === 'search_box_excel') {
    // esconde a seção
    detailItens.style.display = 'none';
  } else {
    // exibe a seção
    detailItens.style.display = 'block';
    // altera o conteúdo da seção de acordo com a opção selecionada
    detailItens.querySelector('.primary_text_title').textContent = `Descrição da Empresa: ${selectedOption}`;
    detailItens.querySelector('.primary_image img').alt = `Descrição do arquivo ${selectedOption}`;
  }
});
