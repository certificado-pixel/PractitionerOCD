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

// CARD DO INSTAGRAM
// -----------------------------------------------------------------------
// Deixe em branco ("") para mostrar só "Perfil oficial · Método OCD".
// Preencha com os números reais do perfil (ex: "18 mil" e "640") para
// exibir os seguidores e publicações no card.
const IG_FOLLOWERS = ""; // <-- ex: "18 mil"
const IG_POSTS = ""; // <-- ex: "640"

document.addEventListener("DOMContentLoaded", () => {
  // Rodapé: ano automático
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Estatísticas do card do Instagram
  const igStats = document.getElementById("ig-stats");
  if (igStats && IG_FOLLOWERS) {
    igStats.innerHTML =
      `<span><strong>${IG_FOLLOWERS}</strong> seguidores</span>` +
      (IG_POSTS ? `<span><strong>${IG_POSTS}</strong> publicações</span>` : "");
  }

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

  // ------------------------------------------------------------------------
  // Animações de entrada (scroll reveal)
  // Elementos com a classe .reveal aparecem suavemente ao entrar na tela.
  // ------------------------------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    } else {
      // Navegadores muito antigos: mostra tudo direto, sem animação.
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }

  // ------------------------------------------------------------------------
  // Barra fixa de inscrição
  // Some enquanto o herói está visível ou quando a seção de inscrição /
  // rodapé já está na tela (evita duplicar o botão de CTA).
  // ------------------------------------------------------------------------
  const stickyCta = document.getElementById("sticky-cta");
  const heroEl = document.getElementById("topo");
  const inscricaoEl = document.getElementById("inscricao");
  const footerEl = document.querySelector(".site-footer");

  if (stickyCta && heroEl && "IntersectionObserver" in window) {
    let heroVisible = true;
    const endVisible = { inscricao: false, footer: false };

    const updateStickyCta = () => {
      const nearEnd = endVisible.inscricao || endVisible.footer;
      stickyCta.classList.toggle("is-visible", !heroVisible && !nearEnd);
    };

    new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        updateStickyCta();
      },
      { threshold: 0 }
    ).observe(heroEl);

    if (inscricaoEl) {
      new IntersectionObserver(
        ([entry]) => {
          endVisible.inscricao = entry.isIntersecting;
          updateStickyCta();
        },
        { threshold: 0.15 }
      ).observe(inscricaoEl);
    }

    if (footerEl) {
      new IntersectionObserver(
        ([entry]) => {
          endVisible.footer = entry.isIntersecting;
          updateStickyCta();
        },
        { threshold: 0.15 }
      ).observe(footerEl);
    }
  }
});
