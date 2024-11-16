const projects = [
    {
        title: "Dt Shishas",
        description: "Esse visual foi feito para expressar o desejo de ter uma shisha ao lado.",
        client: "Cliente: @dt_shishas_",
        image: "url('outros/dtshishas.webp')",
        background: "url('outros/dt-port.webp')"
    },
    {
        title: "Porsche 911",
        description: "Um design homocromático descrevendo o carro ¨Porsche 911¨.",
        client: "Cliente: @lub.gfx",
        image: "url('outros/porsche911.png')",
        background: "url('outros/ps-port.webp')"
    },
    {
        title: "Diga não ao plágio",
        description: "Oposição ao plágio, o cliente abaixo mencionado foi plagiado por outro.",
        client: "Cliente: @br_shopp_",
        image: "url('outros/plagio.webp')",
        background: "url('outros/br-port.webp')"
    }
];

let currentIndex = 0;

function loadProject(index) {
    document.getElementById('project-title').innerText = projects[index].title;
    document.getElementById('project-description').innerText = projects[index].description;
    document.getElementById('project-client').innerText = projects[index].client;
    document.getElementById('project-image').style.backgroundImage = projects[index].image;
    document.getElementById('project-container').style.backgroundImage = projects[index].background;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    loadProject(currentIndex);
});

// Carrega o primeiro projeto inicialmente
loadProject(currentIndex);
