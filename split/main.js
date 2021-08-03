import { x } from './modules/medium.js';

console.log('another module', x);

const btn = document.getElementById('btn');
btn.addEventListener('click', async () => {
  const { default: cb } = await import('./modules/asyncModule.js');
  cb('selam from async module');
});
