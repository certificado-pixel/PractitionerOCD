// ============================================================================
// Formação Practitioner OCD — landing page
//
// CONFIGURAÇÃO DO BOTÃO "QUERO PARTICIPAR"
// -----------------------------------------------------------------------
// Ainda não temos o destino final (WhatsApp, formulário, checkout etc).
// Troque o valor de CTA_URL abaixo pelo link real quando tiver — é o único
// lugar que precisa mudar. Enquanto for "#", o botão final some o clique e
// mostra um aviso no console para lembrar de configurar.
// ============================================================================

const CTA_URL = "#"; // <-- SUBSTITUA aqui pelo link real (WhatsApp, formulário, checkout...)

document.addEventListener("DOMContentLoaded", () => {
  // Rodapé: ano automático
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Botão final de inscrição
  const finalCta = document.getElementById("cta-final");
  if (finalCta) {
    if (CTA_URL && CTA_URL !== "#") {
      finalCta.setAttribute("href", CTA_URL);
      finalCta.setAttribute("target", "_blank");
      finalCta.setAttribute("rel", "noopener");
    } else {
      finalCta.addEventListener("click", (e) => {
        e.preventDefault();
        console.warn(
          "[Formação Practitioner OCD] Configure o link real de inscrição na constante CTA_URL em js/script.js"
        );
        alert(
          "Link de inscrição ainda não configurado.\n\nAbra js/script.js e defina a constante CTA_URL com o link do WhatsApp, formulário ou checkout."
        );
      });
    }
  }
});
