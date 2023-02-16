const selectElement = document.querySelector('select[name="teste"]');
const detailItens = document.getElementById('detail_itens');

selectElement.addEventListener('change', function(event) {
  const selectedOption = event.target.value;

  if (selectedOption === 'search_box_excel') {
    
    detailItens.style.display = 'none';
  } else {
    
    detailItens.style.display = 'block';
  
    detailItens.querySelector('.primary_text_title').textContent = `Descrição da Empresa: ${selectedOption}`;
    detailItens.querySelector('.primary_image img').alt = `Descrição do arquivo ${selectedOption}`;
  }
});
