const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const prices = ['$12', '$22.99', '$21.99', '$15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

console.log(breakfastMenuItemsHTML)

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

console.log(mainCourseItem)

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

console.log(dessertItem)

//bonus add prices
let breakfastMenuItemsHTML2 = '';
for (let i = 0; i < breakfastMenu.length; i++) {
    breakfastMenuItemsHTML2 += `<p>Item ${i + 1}: ${breakfastMenu[i]} - ${prices[i]}</p>`;}

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML2;

console.log(breakfastMenuItemsHTML2)