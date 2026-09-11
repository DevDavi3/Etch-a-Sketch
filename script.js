const container = document.querySelector('.container');

function createDivs(number) {
    for (let i = 0; i < number ; i++) {
        const div = document.createElement('div');
        
        container.appendChild(div);

        for (let j = 0; j < number; j++)
        {
            const sq = document.createElement('div')
            sq.classList.add('hover')
            div.appendChild(sq);
        }
    }
}

createDivs(16);
const div = document.querySelectorAll('.hover')
div.forEach((element)=>{
    element.addEventListener('mouseenter', ()=>{
        element.style.backgroundColor = 'red'
    })
})

console.log(div)