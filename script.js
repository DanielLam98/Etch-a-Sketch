const container = document.querySelector('#container');
let boxes = 16;
let size = (960 / boxes) / 3;
let size2 = size + "px";
let rgb = 256;
function createRows(size2) {
    for (let i = 0; i < boxes; i++) {
        const rows = document.createElement('div');
        rows.className = 'rows';
        for (let i = 0; i < boxes; i++) {
            const column = document.createElement('div');
            column.className = 'column';
            column.style.padding = size2;
            rows.appendChild(column);
            column.onmouseover = function () {
                column.style.backgroundColor = randomColor();
                rgb -= 25.6
            }
        }
        container.appendChild(rows);
    }
}
createRows(size2);
const button = document.querySelector('#reset')
button.addEventListener('click', function () {
    const rows = document.querySelector('.rows');
    container.innerHTML = '';
    boxes = window.prompt('Enter the number grid', '');
    size = (960 / boxes) / 3;
    size2 = size + "px";
    rgb = 256;
    createRows(size2);
});
function randomColor() {
    var x = Math.floor(Math.random() * rgb);
    var y = Math.floor(Math.random() * rgb);
    var z = Math.floor(Math.random() * rgb);
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (z < 0) z = 0;
    console.log(x);
    return 'rgb(' + x + ',' + y + ',' + z + ')';
}