// Menu de navegação em telas pequenas
document.addEventListener("DOMContentLoaded", function () {
  var botaoMenu = document.getElementById("menuAlternar");
  var navegacao = document.getElementById("navegacao");

  if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", function () {
      var aberto = navegacao.classList.toggle("aberto");
      botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    navegacao.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Monta a mensagem pronta nos links do WhatsApp
  document.querySelectorAll(".link-whatsapp[data-mensagem]").forEach(function (link) {
    var mensagem = link.getAttribute("data-mensagem");
    var urlBase = link.getAttribute("href").split("?")[0];
    link.setAttribute("href", urlBase + "?text=" + encodeURIComponent(mensagem));
  });
});
