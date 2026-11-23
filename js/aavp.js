/* AAVP — comportamento comum: menu do telemóvel e entrada animada da página inicial. */
(function () {
  var root = document.documentElement;

  // Entrada animada (só existe na página inicial; aparece uma vez por visita)
  var intro = document.querySelector('.intro');
  function fimIntro() {
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
    try { sessionStorage.setItem('aavp-intro', '1'); } catch (e) {}
  }
  if (intro) {
    if (root.classList.contains('no-intro')) fimIntro();
    else {
      intro.addEventListener('click', fimIntro);
      intro.addEventListener('animationend', function (e) { if (e.animationName === 'intro-sair') fimIntro(); });
    }
  }

  // Menu do telemóvel
  var botao = document.querySelector('.menu-toggle');
  if (botao) {
    var fechar = function () { document.body.classList.remove('menu-open'); botao.setAttribute('aria-expanded', 'false'); };
    botao.addEventListener('click', function () {
      var aberto = document.body.classList.toggle('menu-open');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
    var mq = window.matchMedia('(min-width: 700px)');
    if (mq.addEventListener) mq.addEventListener('change', fechar);
  }

  // Notícias: o cartão abre a notícia logo abaixo da sua linha; só uma aberta de cada vez
  var cartoes = document.querySelectorAll('.cartao');
  var abrirNoticia = function (id, rolar) {
    cartoes.forEach(function (c) {
      var alvo = document.getElementById(c.getAttribute('aria-controls'));
      var esta = c.getAttribute('aria-controls') === id;
      c.setAttribute('aria-expanded', esta ? 'true' : 'false');
      if (alvo) alvo.classList.toggle('aberta', esta);
      if (esta && rolar) c.scrollIntoView({ block: 'start' });
    });
  };
  cartoes.forEach(function (c) {
    c.addEventListener('click', function (e) {
      e.preventDefault();
      var id = c.getAttribute('aria-controls');
      var aberto = c.getAttribute('aria-expanded') === 'true';
      abrirNoticia(aberto ? null : id, false);
      try { history.replaceState(null, '', aberto ? location.pathname : '#' + id); } catch (err) {}
    });
  });
  // Endereço com #id (ex.: noticias.html#noticia-12 ou comunicados.html#comunicado-07): abre e mostra
  var abrirAlvo = function () {
    var id = location.hash.slice(1);
    if (!id) return;
    if (/^noticia-\d+$/.test(id) && cartoes.length) { abrirNoticia(id, true); return; }
    var el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
  };
  window.addEventListener('hashchange', abrirAlvo);
  abrirAlvo();

  // Texto colado de outro sítio (Word, e-mail, Facebook…): duas correções automáticas
  document.querySelectorAll('.seccao-corpo, .noticia-corpo').forEach(function (bloco) {
    var paragrafos = function () {
      return Array.prototype.filter.call(bloco.children, function (el) { return el.tagName === 'P' && !el.classList.contains('comunicado-titulo'); });
    };
    // 1. Parágrafos longos colados só com quebras de linha passam a parágrafos separados
    paragrafos().forEach(function (p) {
      if (!p.querySelector('br')) return;
      var partes = [[]];
      Array.prototype.slice.call(p.childNodes).forEach(function (n) {
        if (n.nodeName === 'BR') partes.push([]); else partes[partes.length - 1].push(n);
      });
      var textos = partes.map(function (ns) { return ns.map(function (n) { return n.textContent; }).join('').trim(); });
      var longas = textos.filter(function (t) { return t.length > 160; }).length;
      if (longas < 2 || longas < textos.filter(Boolean).length / 2) return;   // listas de nomes, moradas: ficam como estão
      partes.forEach(function (ns, k) {
        if (!textos[k]) return;
        var np = document.createElement('p');
        ns.forEach(function (n) { np.appendChild(n); });
        p.parentNode.insertBefore(np, p);
      });
      p.parentNode.removeChild(p);
    });
    // 2. Se quase todo o texto vier a negrito, o negrito é acidental e retira-se (negritos pontuais mantêm-se)
    var total = 0, negrito = 0;
    paragrafos().forEach(function (p) {
      total += p.textContent.trim().length;
      p.querySelectorAll('strong, b').forEach(function (b) { negrito += b.textContent.trim().length; });
    });
    if (total > 300 && negrito / total > 0.8) {
      paragrafos().forEach(function (p) {
        p.querySelectorAll('strong, b').forEach(function (b) { while (b.firstChild) b.parentNode.insertBefore(b.firstChild, b); b.parentNode.removeChild(b); });
      });
    }
  });

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
