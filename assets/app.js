(() => {
  const dialog = document.querySelector('.download-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const confirm = dialog.querySelector('[data-download-confirm]');
    const frame = dialog.querySelector('#kofiframe');
    document.querySelectorAll('[data-download-prompt]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        confirm.href = link.href;
        confirm.textContent = `Download for ${link.textContent.trim()}`;
        if (frame && !frame.hasAttribute('src')) frame.src = frame.dataset.src;
        dialog.showModal();
      });
    });
    confirm.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  }

  const imageDialog = document.querySelector('.image-dialog');
  const imageLink = document.querySelector('.product-image-zoom');
  if (imageDialog && imageLink && typeof imageDialog.showModal === 'function') {
    imageLink.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      imageDialog.showModal();
    });
    imageDialog.addEventListener('click', event => {
      if (event.target === imageDialog) imageDialog.close();
    });
  }

  const links = [...document.querySelectorAll('nav a')].filter(link => link.pathname === window.location.pathname && link.hash);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-5% 0px -65% 0px', threshold: 0 });
  links.forEach(link => { const target = document.querySelector(link.hash); if (target) observer.observe(target); });
})();
