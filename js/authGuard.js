(function () {
    const paginaActual = window.location.pathname.split('/').pop();
    if (paginaActual.toLowerCase() === 'login.html') return;
  
    const usuario = localStorage.getItem('usuario');
    try {
      const userData = JSON.parse(usuario);
      if (!userData || !userData.correo) {
        throw new Error();
      }
    } catch (e) {
      window.location.href = 'login.html';
    }
  })();
  