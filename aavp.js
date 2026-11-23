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

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
