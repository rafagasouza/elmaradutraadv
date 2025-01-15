const servicos = [
  { titulo: "Aposentadoria por Idade", descricao: "Assessoria completa para garantir o direito à aposentadoria por idade, analisando documentos e requisitos exigidos pelo INSS." },
  { titulo: "Aposentadoria por Tempo de Contribuição", descricao: "Cálculo e orientação para obtenção da aposentadoria por tempo de contribuição, considerando as regras de transição e reformas recentes." },
  { titulo: "Benefício de Prestação Continuada (BPC/LOAS)", descricao: "Acompanhamento para solicitar o BPC destinado a idosos e pessoas com deficiência em situação de vulnerabilidade." },
  { titulo: "Revisão de Benefícios", descricao: "Análise detalhada de benefícios concedidos para identificar possíveis erros e solicitar revisões junto ao INSS." },
  { titulo: "Pensão por Morte", descricao: "Orientação e suporte para dependentes solicitarem o benefício de pensão por morte, garantindo agilidade no processo." },
  { titulo: "Auxílio-Doença e Aposentadoria por Invalidez", descricao: "Apoio jurídico em casos de afastamento por incapacidade, incluindo auxílio-doença e aposentadoria por invalidez." }
];


const cardSection = document.getElementById('servicesCard')

servicos.forEach((servico)=>{
  const div = document.createElement('div')
  div.classList = 'card'
  div.innerHTML = `
          <h3>${servico.titulo}</h3>
          <p>${servico.descricao}</p>
  `
  cardSection.appendChild(div)
})

/* const contactBtn = document.getElementById('contactBtn') */
const contactBtn = document.querySelectorAll('#contactBtn')

contactBtn.forEach((botao) =>{
  botao.addEventListener('click', ()=>{
    const phone = "11986479368"

    //window.open(`https:/wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`, "_blank")
    const url = (`https://wa.me/${phone}`)
    window.open(url, '_blank')
  })
})


/* 
contactBtn.addEventListener('click',()=>{
  const phone = "11986479368"

    //window.open(`https:/wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`, "_blank")
    const url = (`https://wa.me/${phone}`)
    window.open(url, '_blank')
}) */
