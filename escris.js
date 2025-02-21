document.addEventListener('DOMContentLoaded', function() {
    // Evento click en "Animal Favorito"
    document.getElementById('animalFav').addEventListener('click', function() {
        alert('Mi animal favorito es el Gato');
    });

    // Eventos mouseover y mouseout en "Comida Favorita"
    const comidaFav = document.getElementById('comidaFav');
    comidaFav.addEventListener('mouseover', function() {
        comidaFav.style.backgroundColor = '#8854f1';
    });
    comidaFav.addEventListener('mouseout', function() {
        comidaFav.style.backgroundColor = 'white';
    });

    // Evento doble clic en "Película Favorita"
    document.getElementById('peliculaFav').addEventListener('dblclick', function() {
        this.innerHTML = '<h3>Película Favorita</h3><h4>Intensamente</h4><p>Es una película animada de Pixar y Disney, estrenada en 2015, que explora el mundo de las emociones dentro de la mente de una niña llamada Riley. Para mi es algo que nos demuestra que necesitamos de todas nuestras emociones para ser felices.</p>';
    });

    // Eventos mousedown y mouseup en "Canción Favorita"
    const cancionFav = document.getElementById('cancionFav');
    cancionFav.addEventListener('mousedown', function() {
        cancionFav.style.transform = 'rotate(180deg)';
    });
    cancionFav.addEventListener('mouseup', function() {
        cancionFav.style.transform = 'rotate(0deg)';
    });

    // Eventos mouseenter y mouseleave en "Persona que Admiro"
    const personaAdmira = document.getElementById('personaAdmira');
    personaAdmira.addEventListener('mouseenter', function() {
        personaAdmira.style.fontSize = '18px';
    });
    personaAdmira.addEventListener('mouseleave', function() {
        personaAdmira.style.fontSize = '16px';
    });

    // Evento click derecho en "País a Visitar"
    document.getElementById('paisVisitar').addEventListener('contextmenu', function(event) {
        event.preventDefault();
        this.innerHTML = '<h3>País a Visitar</h3><p>Italia</p><p>Es un pais al que tengo muchas ganas de visitar por su historia cultural, por su gastronomia y por la anecdota tambien. Hay numerosos lugares históricos y arqueológicos que explorar, como el Coliseo de Roma, Pompeya y los antiguos yacimientos de Herculano.</p>';
    });
});
