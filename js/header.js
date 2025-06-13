(function () {
    document.addEventListener('DOMContentLoaded', () => {
      const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
      if (!usuario?.nombre || !usuario?.rol) return;
  
      const header = document.createElement('div');
      header.style.borderBottom = '1px solid #eaeaea';
      header.style.background = 'rgba(234, 234, 234, 0.75)';
      header.className = 'd-flex align-center px-4 py-2';
  
      header.innerHTML = `
        <div class="text-h6 font-weight-bold">XYZ Inventario</div>
        <div class="ml-auto d-flex align-center">
          <div class="mr-3 text-right">
            <div class="text-subtitle-2 font-weight-bold">${usuario.nombre}</div>
            <div class="text-caption text-muted">${usuario.rol}</div>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="cerrarSesion()">
            <i class="mdi mdi-logout"></i> Salir
          </button>
        </div>
      `;
  
      const app = document.querySelector('#app');
      if (app) {
        app.prepend(header);
      }
  
      window.cerrarSesion = function () {
        localStorage.removeItem('usuario');
        window.location.href = 'login.html';
      };
    });
  })();
  