// Prévia de Natal 2026 — dados transcritos dos materiais fornecidos pela cliente.
// A confirmação de uma encomenda depende de contato direto com a doceria.
const produtos = [
  {
    id: 'brigadeiro-cereja', nome: 'Brigadeiro com cereja', categoria: 'sobremesas',
    descricao: 'Massa molhadinha de chocolate, brigadeiro de panela, cereja marasquina e lascas de chocolate meio-amargo.',
    foto: 'fotos/brigadeiro-cereja.jpg', tamanhos: [{ peso: '1,5 kg', preco: 208 }, { peso: '2,2 kg', preco: 297 }]
  },
  {
    id: 'banoffee', nome: 'Banoffee', categoria: 'sobremesas',
    descricao: 'Massa molhadinha de baunilha, doce de leite, banana-prata madura, biscoito de canela e chantilly de leite.',
    foto: 'fotos/banoffee.jpg', tamanhos: [{ peso: '1,5 kg', preco: 208 }, { peso: '2,2 kg', preco: 297 }]
  },
  {
    id: 'merengue', nome: 'Merengue', categoria: 'sobremesas',
    descricao: 'Brigadeiro branco de panela, mousse de Ninho, morangos frescos, calda de frutas vermelhas e suspiros.',
    foto: 'fotos/merengue.jpg', tamanhos: [{ peso: '1,4 kg', preco: 195 }, { peso: '2,2 kg', preco: 297 }]
  },
  {
    id: 'brownie-mousse', nome: 'Brownie com mousse de Ninho', categoria: 'brownies',
    descricao: 'Brigadeiro de panela, brownie e mousse de Ninho.',
    foto: 'fotos/brownie-mousse.jpg', tamanhos: [{ peso: '1,5 kg', preco: 223 }, { peso: '2,2 kg', preco: 319 }]
  },
  {
    id: 'tiramisu', nome: 'Tiramisù com caramelo salgado', categoria: 'sobremesas',
    descricao: 'Massa de baunilha, creme de cream cheese, caramelo salgado e cacau polvilhado.',
    foto: 'fotos/tiramisu.jpg', tamanhos: [{ peso: '1,4 kg', preco: 195 }, { peso: '2,2 kg', preco: 297 }]
  },
  {
    id: 'bolo-coco', nome: 'Bolo de coco gelado', categoria: 'sobremesas',
    descricao: 'Massa molhadinha, brigadeiro branco e coco fresco.',
    foto: 'fotos/bolo-coco.jpg', tamanhos: [{ peso: '1,5 kg', preco: 181 }, { peso: '2,2 kg', preco: 258 }]
  },
  {
    id: 'brownie-arvore', nome: 'Brownie árvore de Natal', categoria: 'brownies', especial: true,
    descricao: 'Brownie e brigadeiro de panela.',
    foto: 'fotos/brownie-arvore.jpg', tamanhos: [{ peso: '800 g', preco: 128 }]
  },
  {
    id: 'bolo-uva', nome: 'Bolo de camadas com uva', categoria: 'sobremesas',
    descricao: 'Bolo de brigadeiro de panela, decorado com uvas e calda de chocolate.',
    foto: 'fotos/bolo-uva.jpg', tamanhos: [{ peso: '2,7 kg', preco: 330 }]
  },
  {
    id: 'torta-nutella', nome: 'Torta crocante de Nutella', categoria: 'tortas',
    descricao: 'Massa de cookies, brigadeiro de panela e Nutella crocante.',
    foto: 'fotos/torta-nutella.jpg', tamanhos: [{ peso: '1 kg', preco: 140 }]
  },
  {
    id: 'brownie-morangos', nome: 'Brownie, brigadeiro e morangos', categoria: 'brownies',
    descricao: 'Brownie, brigadeiro e morangos.',
    foto: 'fotos/brownie-morangos.jpg', tamanhos: [{ peso: '1,2 kg', preco: 168 }, { peso: '1,5 kg', preco: 210 }, { peso: '2,2 kg', preco: 308 }]
  },
  {
    id: 'panetone-tradicional', nome: 'Panetone brigadeiro tradicional', categoria: 'panetones',
    descricao: 'Brigadeiro tradicional.',
    foto: 'fotos/panetone-tradicional.jpg', tamanhos: [{ peso: '850 g', preco: 145 }, { peso: '190 g', preco: 45 }]
  },
  {
    id: 'panetone-nutella', nome: 'Panetone brigadeiro com crocante de Nutella', categoria: 'panetones',
    descricao: 'Brigadeiro com crocante de Nutella.',
    foto: 'fotos/panetone-nutella.jpg', tamanhos: [{ peso: '850 g', preco: 165 }, { peso: '190 g', preco: 52 }]
  },
  {
    id: 'panetone-cereja', nome: 'Panetone brigadeiro com cereja marasquina', categoria: 'panetones',
    descricao: 'Brigadeiro com cereja marasquina.',
    foto: 'fotos/panetone-cereja.jpg', tamanhos: [{ peso: '850 g', preco: 165 }, { peso: '190 g', preco: 52 }]
  },
  {
    id: 'panetone-ninho', nome: 'Panetone brigadeiro com mousse de Ninho', categoria: 'panetones',
    descricao: 'Brigadeiro com mousse de Ninho.',
    foto: 'fotos/panetone-ninho.jpg', tamanhos: [{ peso: '750 g', preco: 160 }, { peso: '170 g', preco: 50 }]
  },
  {
    id: 'panetone-baunilha', nome: 'Panetone brigadeiro de fava de baunilha com caramelo salgado', categoria: 'panetones',
    descricao: 'Brigadeiro de fava de baunilha com caramelo salgado.',
    foto: 'fotos/panetone-baunilha.jpg', tamanhos: [{ peso: '850 g', preco: 165 }, { peso: '190 g', preco: 52 }]
  }
];

const formatoBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 });
const grid = document.querySelector('#product-grid');
const lista = document.querySelector('#cart-list');
const total = document.querySelector('#cart-total');
const drawer = document.querySelector('#cart-drawer');
const overlay = document.querySelector('#cart-overlay');
const mobileBar = document.querySelector('.mobile-cart-bar');
const sendButton = document.querySelector('#send-order');
const copyButton = document.querySelector('#copy-order');
const clearButton = document.querySelector('#clear-cart');
const toast = document.querySelector('#toast');
const selecionados = new Map();
const armazenamento = 'thete-doceria:natal-2026:selecao';
const whatsappDoceria = '5562981068105';
let filtroAtual = 'todos';
let avisoTimer;
let ultimoFoco;
let carrinho = [];

function encontrar(id) { return produtos.find(item => item.id === id); }
function tamanhoDe(produto, peso) { return produto?.tamanhos.find(item => item.peso === peso); }
function chave(id, peso) { return `${id}|${peso}`; }

function lerCarrinho() {
  try {
    const dados = JSON.parse(localStorage.getItem(armazenamento) || '[]');
    if (!Array.isArray(dados)) return [];
    return dados.filter(item => {
      const produto = encontrar(item?.id);
      return Boolean(tamanhoDe(produto, item?.peso)) && Number.isInteger(item?.qtd) && item.qtd > 0 && item.qtd <= 99;
    });
  } catch { return []; }
}

function salvarCarrinho() {
  try { localStorage.setItem(armazenamento, JSON.stringify(carrinho)); } catch { /* Prévia funcional sem armazenamento persistente. */ }
}

function renderizarProdutos() {
  grid.innerHTML = produtos
    .filter(produto => filtroAtual === 'todos' || produto.categoria === filtroAtual)
    .map((produto) => {
      const indice = produtos.indexOf(produto) + 1;
      const tamanhoSelecionado = tamanhoDe(produto, selecionados.get(produto.id)) || produto.tamanhos[0];
      return `<article class="product-card" data-product-id="${produto.id}">
        <div class="product-photo"><img src="${produto.foto}" alt="${produto.nome} da Thetê Doceria" loading="lazy" decoding="async" /><span class="product-label${produto.especial ? ' special' : ''}">${produto.especial ? 'Especial de Natal' : 'Thetê Doceria'}</span></div>
        <div class="product-info"><span class="product-index">COLEÇÃO NATAL · ${String(indice).padStart(2, '0')}</span><h3>${produto.nome}</h3><p class="product-desc">${produto.descricao}</p>
          <div class="product-divider"><span class="size-label">Escolha o tamanho</span><div class="size-options" role="group" aria-label="Tamanhos de ${produto.nome}">${produto.tamanhos.map(tamanho => `<button type="button" class="size-option${tamanho.peso === tamanhoSelecionado.peso ? ' selected' : ''}" data-size="${tamanho.peso}" aria-pressed="${tamanho.peso === tamanhoSelecionado.peso}">${tamanho.peso}</button>`).join('')}</div>
          <div class="product-buy-row"><div class="product-price-wrap"><span class="product-price-label">Valor para ${tamanhoSelecionado.peso}</span><strong class="product-price">${formatoBRL.format(tamanhoSelecionado.preco)}</strong></div><button type="button" class="add-button" data-add="${produto.id}" aria-label="Adicionar ${produto.nome} à seleção"><span aria-hidden="true">+</span> Adicionar</button></div></div>
        </div>
      </article>`;
    }).join('');
}

function renderizarCarrinho() {
  const quantidade = carrinho.reduce((soma, item) => soma + item.qtd, 0);
  const subtotal = carrinho.reduce((soma, item) => soma + tamanhoDe(encontrar(item.id), item.peso).preco * item.qtd, 0);
  document.querySelectorAll('[data-cart-count]').forEach(contador => { contador.textContent = String(quantidade); });
  total.textContent = formatoBRL.format(subtotal);
  if (quantidade > 0) {
    sendButton.href = `https://wa.me/${whatsappDoceria}?text=${encodeURIComponent(mensagemWhatsApp())}`;
    sendButton.removeAttribute('aria-disabled');
    sendButton.removeAttribute('tabindex');
  } else {
    sendButton.removeAttribute('href');
    sendButton.setAttribute('aria-disabled', 'true');
    sendButton.setAttribute('tabindex', '-1');
  }
  copyButton.disabled = quantidade === 0;
  clearButton.disabled = quantidade === 0;
  mobileBar.hidden = quantidade === 0;
  document.querySelector('[data-mobile-label]').textContent = quantidade === 1 ? 'item selecionado' : 'itens selecionados';
  if (!carrinho.length) {
    lista.innerHTML = `<div class="cart-empty"><span aria-hidden="true">✦</span><h3>Sua seleção começa aqui</h3><p>Escolha os doces e seus tamanhos para montar uma lista de Natal especial.</p></div>`;
    return;
  }
  lista.innerHTML = carrinho.map(item => {
    const produto = encontrar(item.id);
    const preco = tamanhoDe(produto, item.peso).preco;
    const itemKey = chave(item.id, item.peso);
    return `<div class="cart-item"><img src="${produto.foto}" alt="" loading="lazy" /><div class="cart-item-main"><h3>${produto.nome}</h3><span class="cart-item-meta">${item.peso} · ${formatoBRL.format(preco)} cada</span><div class="cart-item-bottom"><div class="quantity" aria-label="Quantidade de ${produto.nome}, ${item.peso}"><button type="button" data-qty-action="minus" data-key="${itemKey}" aria-label="Diminuir quantidade">−</button><span>${item.qtd}</span><button type="button" data-qty-action="plus" data-key="${itemKey}" aria-label="Aumentar quantidade">+</button></div><strong class="cart-item-price">${formatoBRL.format(preco * item.qtd)}</strong></div></div></div>`;
  }).join('');
}

function mostrarToast(mensagem) {
  clearTimeout(avisoTimer);
  toast.textContent = mensagem;
  toast.classList.add('show');
  avisoTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function abrirCarrinho() {
  ultimoFoco = document.activeElement;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.hidden = false;
  document.body.classList.add('cart-is-open');
  document.querySelector('#close-cart').focus();
}

function fecharCarrinho() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.hidden = true;
  document.body.classList.remove('cart-is-open');
  if (ultimoFoco?.isConnected) ultimoFoco.focus();
}

function atualizarQuantidade(id, peso, delta) {
  const registro = carrinho.find(item => item.id === id && item.peso === peso);
  if (registro) registro.qtd = Math.max(0, Math.min(99, registro.qtd + delta));
  else if (delta > 0 && tamanhoDe(encontrar(id), peso)) carrinho.push({ id, peso, qtd: 1 });
  carrinho = carrinho.filter(item => item.qtd > 0);
  salvarCarrinho();
  renderizarCarrinho();
}

function mensagemWhatsApp() {
  const itens = carrinho.map(item => {
    const produto = encontrar(item.id);
    const subtotal = tamanhoDe(produto, item.peso).preco * item.qtd;
    return `• ${item.qtd}× ${produto.nome} (${item.peso}) — ${formatoBRL.format(subtotal)}`;
  }).join('\n');
  const valor = carrinho.reduce((soma, item) => soma + tamanhoDe(encontrar(item.id), item.peso).preco * item.qtd, 0);
  return `Olá, Thetê! Tudo bem? 😊\nGostaria de consultar a disponibilidade destes itens para o Natal:\n\n${itens}\n\nTotal estimado: ${formatoBRL.format(valor)}\n\nPode me informar sobre a disponibilidade e as opções de retirada ou entrega? Obrigado(a)!`;
}

async function copiarMensagem() {
  if (!carrinho.length) return;
  const texto = mensagemWhatsApp();
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
    await navigator.clipboard.writeText(texto);
    mostrarToast('Lista copiada! Cole na conversa com a doceria no WhatsApp.');
  } catch {
    const campo = document.createElement('textarea');
    campo.value = texto;
    campo.style.position = 'fixed';
    campo.style.opacity = '0';
    document.body.appendChild(campo);
    campo.focus(); campo.select();
    const copiou = document.execCommand('copy');
    campo.remove();
    if (copiou) mostrarToast('Lista copiada! Cole na conversa com a doceria no WhatsApp.');
    else mostrarToast('Não foi possível copiar automaticamente neste navegador.');
  }
}

grid.addEventListener('click', (evento) => {
  const botaoTamanho = evento.target.closest('[data-size]');
  if (botaoTamanho) {
    const cartao = botaoTamanho.closest('[data-product-id]');
    const produto = encontrar(cartao.dataset.productId);
    const tamanho = tamanhoDe(produto, botaoTamanho.dataset.size);
    if (!tamanho) return;
    selecionados.set(produto.id, tamanho.peso);
    cartao.querySelectorAll('[data-size]').forEach(botao => {
      const ativo = botao === botaoTamanho;
      botao.classList.toggle('selected', ativo);
      botao.setAttribute('aria-pressed', String(ativo));
    });
    cartao.querySelector('.product-price-label').textContent = `Valor para ${tamanho.peso}`;
    cartao.querySelector('.product-price').textContent = formatoBRL.format(tamanho.preco);
  }
  const botaoAdicionar = evento.target.closest('[data-add]');
  if (botaoAdicionar) {
    const produto = encontrar(botaoAdicionar.dataset.add);
    const peso = selecionados.get(produto.id) || produto.tamanhos[0].peso;
    atualizarQuantidade(produto.id, peso, 1);
    abrirCarrinho();
  }
});

document.querySelectorAll('[data-filter]').forEach(botao => botao.addEventListener('click', () => {
  filtroAtual = botao.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => {
    const ativo = item === botao;
    item.classList.toggle('active', ativo);
    item.setAttribute('aria-pressed', String(ativo));
  });
  renderizarProdutos();
}));

document.querySelectorAll('[data-open-cart]').forEach(botao => botao.addEventListener('click', abrirCarrinho));
document.querySelector('#close-cart').addEventListener('click', fecharCarrinho);
overlay.addEventListener('click', fecharCarrinho);
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && drawer.classList.contains('open')) fecharCarrinho();
  if (evento.key === 'Tab' && drawer.classList.contains('open')) {
    const focaveis = Array.from(drawer.querySelectorAll('button:not(:disabled)'));
    const primeiro = focaveis[0], ultimo = focaveis.at(-1);
    if (evento.shiftKey && document.activeElement === primeiro) { ultimo.focus(); evento.preventDefault(); }
    else if (!evento.shiftKey && document.activeElement === ultimo) { primeiro.focus(); evento.preventDefault(); }
  }
});
lista.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-qty-action]');
  if (!botao) return;
  const [id, peso] = botao.dataset.key.split('|');
  atualizarQuantidade(id, peso, botao.dataset.qtyAction === 'plus' ? 1 : -1);
});
clearButton.addEventListener('click', () => { carrinho = []; salvarCarrinho(); renderizarCarrinho(); });
copyButton.addEventListener('click', copiarMensagem);

carrinho = lerCarrinho();
renderizarProdutos();
renderizarCarrinho();
