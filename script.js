function showMoreInfo(id) {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");

    if (id === 'terapia-online') {
        modalText.textContent = "Aqui estão mais informações detalhadas sobre a Terapia Online.";
    } else if (id === 'grupos-apoio') {
        modalText.textContent = "Aqui estão mais informações detalhadas sobre Grupos de Apoio.";
    } else if (id === 'artigos-videos') {
        modalText.textContent = "Aqui estão mais informações detalhadas sobre Artigos e Vídeos.";
    }

    modal.style.display = "block";
}

// Fechar o modal quando o usuário clica no X
document.querySelector('.close').onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

// Fechar o modal quando o usuário clica fora dele
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
