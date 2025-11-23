// boton.js - versión con LICENCIA (sin ofuscar)
(function () {
  'use strict';

  // ==========================
  //   CONFIGURACIÓN LICENCIA
  // ==========================
  // ESTA es la licencia que debe coincidir con la que envía el lanzador
  var LICENCIA_VALIDA = 'TYKO-PRUEBA-001';

  // Esta variable global la define el lanzador ANTES de ejecutar este código:
  //   var LICENCIA_RECIBIDA = '...';
  //
  // Si no existe o no coincide, el script NO hace nada.
  if (typeof LICENCIA_RECIBIDA === 'undefined' ||
      LICENCIA_RECIBIDA !== LICENCIA_VALIDA) {

    // Para producción normalmente solo dejaría el console.warn
    console.warn('[PRUEBA-DE-OFUSCAR] Licencia inválida o ausente.');
    return; // CORTA la ejecución: nada de abajo se ejecuta
  }

  // ==========================
  //   CÓDIGO NORMAL (BOTÓN)
  // ==========================
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
