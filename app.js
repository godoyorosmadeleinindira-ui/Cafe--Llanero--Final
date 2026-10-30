// ================================
// MENÚ RESPONSIVE
// ================================
const botonMenu = document.getElementById('boton-menu');
const navLista = document.getElementById('nav-lista');

botonMenu.addEventListener('click', () => {
  const abierto = navLista.classList.toggle('mostrar');
  botonMenu.setAttribute('aria-expanded', abierto);
});

document.querySelectorAll('.nav-lista a').forEach((enlace) => {
  enlace.addEventListener('click', () => navLista.classList.remove('mostrar'));
});

// ================================
// VALIDACIÓN DEL FORMULARIO
// ================================
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.getElementById('error-nombre').textContent = '';
  document.getElementById('error-correo').textContent = '';
  document.getElementById('error-mensaje').textContent = '';
  document.getElementById('mensaje-exito').textContent = '';

  let formularioValido = true;

  if (nombre === '') {
    document.getElementById('error-nombre').textContent = 'Por favor, escribe tu nombre.';
    formularioValido = false;
  }

  if (correo === '') {
    document.getElementById('error-correo').textContent = 'Por favor, escribe tu correo.';
    formularioValido = false;
  } else if (!correoValido.test(correo)) {
    document.getElementById('error-correo').textContent = 'Escribe un correo válido.';
    formularioValido = false;
  }

  if (mensaje === '') {
    document.getElementById('error-mensaje').textContent = 'Por favor, escribe un mensaje.';
    formularioValido = false;
  }

  if (formularioValido) {
    document.getElementById('mensaje-exito').textContent =
      `¡Gracias, ${nombre}! Tu mensaje fue validado correctamente.`;
    formulario.reset();
  }
});

// ================================
// CARRITO DE COMPRAS BÁSICO
// ================================
const botonesCarrito = document.querySelectorAll('.boton-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalElemento = document.getElementById('total');
const botonVaciar = document.getElementById('vaciar-carrito');

let carrito = [];
let total = 0;

function formatearPrecio(valor) {
  return valor.toLocaleString('es-CO');
}

function actualizarCarrito() {
  listaCarrito.innerHTML = '';

  if (carrito.length === 0) {
    const mensaje = document.createElement('p');
    mensaje.className = 'carrito-vacio';
    mensaje.textContent = 'Tu carrito está vacío.';
    listaCarrito.appendChild(mensaje);
  } else {
    carrito.forEach((producto, indice) => {
      const item = document.createElement('div');
      item.className = 'item-carrito';

      const informacion = document.createElement('div');

      const nombre = document.createElement('h3');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('p');
      precio.textContent = `Precio: $${formatearPrecio(producto.precio)}`;

      informacion.appendChild(nombre);
      informacion.appendChild(precio);

      const botonEliminar = document.createElement('button');
      botonEliminar.className = 'boton-eliminar';
      botonEliminar.type = 'button';
      botonEliminar.textContent = 'Eliminar';

      botonEliminar.addEventListener('click', () => {
        total -= producto.precio;
        carrito.splice(indice, 1);
        actualizarCarrito();
      });

      item.appendChild(informacion);
      item.appendChild(botonEliminar);
      listaCarrito.appendChild(item);
    });
  }

  totalElemento.textContent = formatearPrecio(total);
}

botonesCarrito.forEach((boton) => {
  boton.addEventListener('click', () => {
    const producto = {
      id: boton.dataset.id,
      nombre: boton.dataset.nombre,
      precio: Number(boton.dataset.precio)
    };

    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito();
  });
});

botonVaciar.addEventListener('click', () => {
  carrito = [];
  total = 0;
  actualizarCarrito();
});

actualizarCarrito();


// ================================
// REGISTRO DE CLIENTES (DEMO ACADÉMICA)
// No se guardan contraseñas ni se simula una autenticación real.
// Los datos de contacto se guardan localmente en este navegador.
// ================================
const formularioRegistro = document.getElementById('formulario-registro');

if (formularioRegistro) {
  const camposRegistro = {
    nombre: document.getElementById('registro-nombre'),
    correo: document.getElementById('registro-correo'),
    celular: document.getElementById('registro-celular'),
    contrasena: document.getElementById('registro-contrasena'),
    confirmar: document.getElementById('registro-confirmar')
  };
  const correoRegistroValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const celularRegistroValido = /^[0-9+()\s-]{7,20}$/;
  const erroresRegistro = {
    nombre: document.getElementById('error-registro-nombre'),
    correo: document.getElementById('error-registro-correo'),
    celular: document.getElementById('error-registro-celular'),
    contrasena: document.getElementById('error-registro-contrasena'),
    confirmar: document.getElementById('error-registro-confirmar')
  };
  const mensajeRegistro = document.getElementById('registro-exito');

  formularioRegistro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    Object.values(erroresRegistro).forEach((elemento) => elemento.textContent = '');
    Object.values(camposRegistro).forEach((campo) => campo.setAttribute('aria-invalid', 'false'));
    mensajeRegistro.textContent = '';
    let valido = true;

    const nombre = camposRegistro.nombre.value.trim();
    const correo = camposRegistro.correo.value.trim().toLowerCase();
    const celular = camposRegistro.celular.value.trim();
    const contrasena = camposRegistro.contrasena.value;
    const confirmar = camposRegistro.confirmar.value;

    function marcarError(campo, mensaje) {
      erroresRegistro[campo].textContent = mensaje;
      camposRegistro[campo].setAttribute('aria-invalid', 'true');
      valido = false;
    }

    if (nombre.length < 3) marcarError('nombre', 'Escribe tu nombre completo (mínimo 3 caracteres).');
    if (!correoRegistroValido.test(correo)) marcarError('correo', 'Escribe un correo electrónico válido.');
    if (!celularRegistroValido.test(celular) || celular.replace(/\D/g, '').length < 7) {
      marcarError('celular', 'Escribe un número de celular válido.');
    }
    if (contrasena.length < 8) marcarError('contrasena', 'La contraseña debe tener al menos 8 caracteres.');
    if (confirmar === '' || confirmar !== contrasena) marcarError('confirmar', 'Las contraseñas no coinciden.');

    let clientes = [];
    try {
      clientes = JSON.parse(localStorage.getItem('cafeLlaneroClientes') || '[]');
      if (!Array.isArray(clientes)) clientes = [];
    } catch (error) {
      clientes = [];
    }

    if (correoRegistroValido.test(correo) && clientes.some((cliente) => cliente.correo === correo)) {
      marcarError('correo', 'Este correo ya está registrado en este navegador.');
    }

    if (!valido) return;

    // Por seguridad, solo se conservan datos básicos y nunca la contraseña.
    clientes.push({ nombre, correo, celular, fechaRegistro: new Date().toISOString() });
    try {
      localStorage.setItem('cafeLlaneroClientes', JSON.stringify(clientes));
      mensajeRegistro.textContent = `¡Registro exitoso, ${nombre}! Tus datos quedaron guardados en este navegador.`;
      formularioRegistro.reset();
    } catch (error) {
      mensajeRegistro.textContent = 'No fue posible guardar el registro en este navegador. Intenta nuevamente.';
    }
  });
}
