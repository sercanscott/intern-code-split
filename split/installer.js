(() => {
  const btn = document.getElementById('btn');

  const listener = () => {
    const script = document.createElement('script');
    script.src = 'big.js';
    document.head.appendChild(script);
  };

  btn.addEventListener('click', listener);
})();
