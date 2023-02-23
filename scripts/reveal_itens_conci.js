//CONSTANTES QUE BUSCAM DO HTML O QUE FOI SELECIONADO
const selectAltElement = document.getElementById('select_conci');
const detailItensAlt = document.getElementById('detail_itens');
const descricaoAltElement = detailItensAlt.querySelector('.primary_text_title');
const caminhoAltElement = detailItensAlt.querySelector('.primary_text_road');
const imagemAltElement = detailItensAlt.querySelector('.primary_image img');


//CRIA AS INFORMAÇÕES DE CADA EMPRESA E SEUS DETALHES NA TELA
function updateDetailItens_conciliador(selectedOption) {
  const selectedInfoAlt = infoMap_conci[selectedOption];
  if (selectedInfoAlt) {
    detailItensAlt.style.display = 'block';
    //DESCRIÇÃO DA EMPRESA
    descricaoAltElement.textContent = selectedInfoAlt.descricao_conci;

    caminhoAltElement.textContent = selectedInfoAlt.caminho_conci;
    //IMAGEM DE PAGAMENTO

    imagemAltElement.src = selectedInfoAlt.imagem_conci;
    //DESCRIÇÃO ALTERNATIVA DO ARQUIVO DE PAGAMENTOS
   
  } else {
    detailItensAlt.style.display = 'none'; //QUANDO NÃO SELECIONAR NENHUMA OPÇÃO DO MENU NÃO EXIBE NADA
  }
}

//VERIFICA A ALTERAÇÃO DE OPÇÕES NO MENU
selectAltElement.addEventListener('change', function(event) {
  const selectedOptionAlt = event.target.value;
  updateDetailItens_conciliador(selectedOptionAlt);
});
const initialOptionAlt = selectAltElement.value;
updateDetailItens_conciliador(initialOptionAlt);