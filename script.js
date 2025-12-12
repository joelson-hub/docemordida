// --- LÓGICA DO WHATSAPP ---
const phone = "5596984189056";

function encomendar(produto, preco) {
    const msg = `Olá! Gostaria de encomendar o *${produto}* (R$ ${preco}) do Cardápio de Natal.`;
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(link, '_blank');
}

// --- SCRIPT DE NEVE ---
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    // Posição aleatória e tamanho
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    // Duração aleatória
    const duration = Math.random() * 3 + 2; 
    snowflake.style.animationDuration = duration + 's';

    snowContainer.appendChild(snowflake);

    // Remover floco após animação
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Criar flocos a cada 200ms
setInterval(createSnowflake, 200);