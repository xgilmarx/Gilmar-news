const important=[
['🚨','Acidentes e alertas','Chuva, trânsito e ocorrências importantes em Braga e Portugal.','ATUALIZAÇÃO'],
['⚖️','Mudanças nas leis','Veja o que mudou, quando entra em vigor e quem é afetado.','LEIS'],
['📈','Mercados e Bolsa','Ações que subiram e caíram, dividendos e principais mercados.','FINANÇAS'],
['⚽','Futebol','Novidades relevantes do SC Braga e do futebol português.','DESPORTO']
];
const opportunities=[
['🚗','Carros até 2.000 €','Anúncios que parecem competitivos, com alertas sobre riscos.','OPORTUNIDADE'],
['☕','Café com grãos','Máquinas automáticas com moinho integrado em promoção.','PROMOÇÃO'],
['✈️','Viagens em família','Fins de semana e escapadinhas para 2 adultos + 2 crianças.','VIAGEM'],
['💻','PCs e componentes','SSD, RAM, gráficas, processadores e computadores em oferta.','TECNOLOGIA']
];
const categories=[
['📰','Notícias'],['🚨','Acidentes'],['⚖️','Leis'],['⚽','Futebol'],
['📈','Finanças'],['🏢','Dividendos'],['💻','Tecnologia'],['🎮','Jogos'],
['🛒','Promoções'],['☕','Cafeteiras'],['🚗','Carros'],['✈️','Viagens'],
['🎬','Cinema e Teatro'],['🎉','Eventos Braga'],['🚛','Trabalho'],['🏠','Imóveis']
];
function card([icon,title,text,tag]){return `<article class="card"><div class="icon">${icon}</div><div><h3>${title}</h3><p>${text}</p><span class="tag">${tag}</span></div></article>`}
document.querySelector('#important').innerHTML=important.map(card).join('');
document.querySelector('#opportunities').innerHTML=opportunities.map(card).join('');
document.querySelector('#categories').innerHTML=categories.map(([icon,name])=>`<button class="category" data-name="${name}"><span>${icon}</span><b>${name}</b></button>`).join('');
const toast=document.querySelector('#toast');
function showToast(t){toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('.category').forEach(b=>b.onclick=()=>showToast(`${b.dataset.name}: esta secção será ligada à pesquisa automática.`));
document.querySelectorAll('.bottom-nav button').forEach(b=>b.onclick=()=>{document.querySelector('.bottom-nav .active').classList.remove('active');b.classList.add('active');showToast(`${b.dataset.page}: em desenvolvimento`);});
document.querySelector('#themeBtn').onclick=()=>{document.body.classList.toggle('light');showToast('Tema alterado');};
