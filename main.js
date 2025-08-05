// Esperamos a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL BOTÓN 'SÍ' ---
    // Obtenemos el botón 'SÍ' por su ID
    const btnSi = document.getElementById('btn-si');
    
    // Obtenemos la imagen oculta que se mostrará al decir 'SÍ'
    const imgFeliz = document.getElementById('img5');

    // Añadimos un "escuchador" para el evento 'click' en el botón 'SÍ'
    btnSi.addEventListener('click', function() {
        // Hacemos visible la imagen cambiando su estilo 'display' de 'none' a 'block'
        imgFeliz.style.display = 'block';
    });


    // --- LÓGICA DEL BOTÓN 'NO' ---
    // Obtenemos el botón 'NO' por su ID
    const btnNo = document.getElementById('btn-no');

    // Añadimos un "escuchador" para el evento 'mouseenter' (cuando el ratón pasa por encima)
    btnNo.addEventListener('mouseenter', function() {
        // Hacemos que el botón se mueva a una posición aleatoria

        // Usamos el ancho y alto de la ventana para que se mueva por toda la pantalla
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calculamos una posición aleatoria en X (horizontal) y Y (vertical)
        // Restamos el tamaño del botón para que no se salga de la pantalla
        const randomX = Math.random() * (screenWidth - btnNo.offsetWidth);
        const randomY = Math.random() * (screenHeight - btnNo.offsetHeight);

        // Cambiamos la posición del botón a 'fixed' para que se mueva por toda la ventana
        btnNo.style.position = 'fixed'; 
        
        // Aplicamos las nuevas coordenadas
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    });
});