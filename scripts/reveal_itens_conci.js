//CONSTANTES QUE BUSCAM DO HTML O QUE FOI SELECIONADO
const select_conciElement = document.getElementById('select_conci');
const detailItens_conci = document.getElementById('detail_itens');
const descricao_conciElement = detailItens_conci.querySelector('.primary_text_title');
const caminho_conciElement = detailItens_conci.querySelector('.primary_text_road');
const imagem_conciElement = detailItens_conci.querySelector('.primary_image img');


//CRIA AS INFORMAÇÕES DE CADA EMPRESA E SEUS DETALHES NA TELA
function updateDetailItens_conci(selectedOption_conci) {
  const selectedInfo_conci = infoMap_conci[selectedOption_conci];
  if (selectedInfo_conci) {
    detailItens_conci.style.display = 'block';
    //DESCRIÇÃO DA EMPRESA
    descricao_conciElement.textContent = selectedInfo_conci.descricao_conci;

    caminho_conciElement.textContent = selectedInfo_conci.caminho_conci;
    //IMAGEM DE PAGAMENTO
    imagem_conciElement.src = selectedInfo_conci.imagem_conci;
    //DESCRIÇÃO ALTERNATIVA DO ARQUIVO DE PAGAMENTOS
   
  } else {
    detailItens_conci.style.display = 'none'; //QUANDO NÃO SELECIONAR NENHUMA OPÇÃO DO MENU NÃO EXIBE NADA
  }
}

//VERIFICA A ALTERAÇÃO DE OPÇÕES NO MENU
select_conciElement.addEventListener('change', function(event_conci) {
  const selectedOption_conci = event_conci.target.value;
  updateDetailItens_conci(selectedOption_conci);
});
const initialOption_conci = select_conciElement.value;
updateDetailItens_conci(initialOption_conci);