(() => {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  links.forEach(link => { const target = document.querySelector(link.hash); if (target) observer.observe(target); });
})();
