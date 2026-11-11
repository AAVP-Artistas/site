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

  // Notícias: cada cartão abre a notícia numa janela; o endereço guarda #noticia-NN
  var noticias = document.querySelectorAll('.noticia');
  if (noticias.length) {
    var aberta = null, origem = null;
    var abrir = function (id) {
      var el = document.getElementById(id);
      if (!el || !el.classList.contains('noticia')) return;
      if (aberta && aberta !== el) aberta.classList.remove('aberta');
      aberta = el;
      el.classList.add('aberta');
      el.scrollTop = 0;
      root.classList.add('modal-aberta');
      var f = el.querySelector('.fechar'); if (f) f.focus({ preventScroll: true });
    };
    var fechar = function () {
      if (!aberta) return;
      aberta.classList.remove('aberta'); aberta = null;
      root.classList.remove('modal-aberta');
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
      if (origem) { origem.focus({ preventScroll: true }); origem = null; }
    };
    document.querySelectorAll('.cartao').forEach(function (c) {
      c.addEventListener('click', function (e) {
        e.preventDefault(); origem = c;
        var id = c.getAttribute('href').slice(1);
        abrir(id);
        try { history.pushState(null, '', '#' + id); } catch (err) { location.hash = id; }
      });
    });
    document.querySelectorAll('.fechar').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); fechar(); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
    var sincronizar = function () {
      var id = location.hash.slice(1);
      if (/^noticia-\d+$/.test(id)) abrir(id); else fechar();
    };
    window.addEventListener('popstate', sincronizar);
    window.addEventListener('hashchange', sincronizar);
    sincronizar();
  }

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
