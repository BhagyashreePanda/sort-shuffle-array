let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const HTML = numbers.map(item => `<li>${item}</li> `).join('');
document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>'
function shuffle() {
    numbers = numbers.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
    const HTML = numbers.map(item => `<li>${item}</li> `).join('');
    document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>'

}
function sort() {
    numbers.sort((a, b) => a - b);
    const HTML = numbers.map(item => `<li>${item}</li> `).join('');
    document.getElementById("item-list").innerHTML = '<ul>' + HTML + '</ul>'

}