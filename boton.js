// ===============================
//  ARCHIVO LIMPIO CON LICENCIA
// ===============================

// Esta es la licencia requerida para usar el script
const REQUIRED_LICENSE = "TYKO-PRUEBA-001";

// Esta función recibe la licencia que el lanzador envía
function iniciarScript(licenciaCliente) {

    // 1) Validar licencia
    if (licenciaCliente !== REQUIRED_LICENSE) {
        alert("Licencia inválida. Comuníquese con soporte.");
        return;
    }

    // 2) Si la licencia es válida, ejecutar el script real:
    const btn = document.createElement("button");
    btn.textContent = "LO LOGRASTE";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 20px";
    btn.style.background = "orange";
    btn.style.color = "white";
    btn.style.fontWeight = "bold";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "999999";

    btn.addEventListener("click", function () {
        alert("LO LOGRASTE");
    });

    document.body.appendChild(btn);
}
