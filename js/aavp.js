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

  // Ano no rodapé
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
