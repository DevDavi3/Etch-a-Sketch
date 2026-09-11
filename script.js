const container = document.querySelector('.container');

function createDivs(number) {
    for (let i = 0; i < number ; i++) {
        const div = document.createElement('div');
        container.appendChild(div);

        for (let j = 0; j < number; j++)
        {
            const sq = document.createElement('div')
            div.appendChild(sq);
        }
    }
}

createDivs(16);