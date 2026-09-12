const container = document.querySelector('.container');
const slider = document.querySelector('#slider');

function createDivs(number) {

    for (let i = 0; i < number; i++) {

        const div = document.createElement('div');

        container.appendChild(div);

        for (let j = 0; j < number; j++) {

            const sq = document.createElement('div');

            sq.classList.add('hover');

            div.appendChild(sq);
        }
    }
}

function addHover() {

    const div = document.querySelectorAll('.hover');

    div.forEach((element) => {

        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = 'red';
        });

    });
}

let size = 16;

createDivs(size);
addHover();

slider.addEventListener('change', (e) => {

    container.innerHTML = "";

    size = e.target.value;

    createDivs(size);
    addHover();
});