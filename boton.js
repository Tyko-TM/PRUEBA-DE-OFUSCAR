// boton.js - versión limpia (sin ofuscar)
(function () {
  'use strict';

  function crearBoton() {
    if (document.getElementById('btn-lo-lograste-demo')) return;

    const btn = document.createElement('button');
    btn.id = 'btn-lo-lograste-demo';
    btn.textContent = 'LO LOGRASTE';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '999999';
    btn.style.padding = '10px 16px';
    btn.style.borderRadius = '8px';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '14px';
    btn.style.fontWeight = 'bold';
    btn.style.background = '#ff9800';
    btn.style.color = '#fff';
    btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.35)';

    btn.addEventListener('click', function () {
      alert('LO LOGRASTE');
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crearBoton);
  } else {
    crearBoton();
  }
})();
