/* ============================================================
   Dark Machine — main.js
   Все скрипты сайта в одном файле
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     INDEX: Typing effect для hero-eyebrow
     ---------------------------------------------------------- */
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (eyebrow) {
    const txt = eyebrow.textContent;
    eyebrow.textContent = '';
    let i = 0;
    setTimeout(() => {
      const t = setInterval(() => {
        eyebrow.textContent += txt[i++];
        if (i >= txt.length) clearInterval(t);
      }, 35);
    }, 300);
  }

});
