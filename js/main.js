document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a los elementos ---
    const introScene = document.getElementById('intro-scene');
    const startBtn = document.getElementById('start-btn');
    const questionScene = document.getElementById('question-scene');

    // --- Lógica de transición ---
    startBtn.addEventListener('click', () => {
        // 1. Añadir clase para animar la salida de la intro
        introScene.classList.add('fade-out-up');

        // 2. Esperar a que termine la animación (0.8s según CSS)
        setTimeout(() => {
            // Ocultar completamente la intro
            introScene.classList.add('hidden');
            
            // Mostrar la escena de la pregunta
            questionScene.classList.remove('hidden');
            
            // AQUÍ INICIAREMOS EL EFECTO MÁQUINA DE ESCRIBIR EN EL SIGUIENTE PASO
            // iniciarMaquinaDeEscribir(); 
            console.log("Transición completada. Listo para escribir el texto.");

        }, 800); // 800ms = 0.8 segundos
    });
});