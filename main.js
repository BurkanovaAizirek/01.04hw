// 1)----------- Перекрасьте все ссылки в header в красный цвет
const links = document.getElementsByClassName("links");
console.log("links",links);
// links.style.color = "red";
for (let link of links){
    link.style.color = 'red';
}

// 2)------------ У кнопки Contact us измените текстовое содержание на 'Investigate'
const button = document.getElementById("btn");
button.innerText = 'Investigate';
console.log(button.innerText);

// 3)------------- Главный заголовок в секции переведите в верхний регистр
let sectionTitle = document.querySelector("#info h1");
sectionTitle.textContent = sectionTitle.textContent.toUpperCase();

// 4)-------------- Измените высоту всей секции
let section = document.getElementById("info");
console.log("section", section);
section.style.height = "500px";

// 5)-------------- Добавьте дополнительную кнопку под кнопкой contact us
let additionalBtn = document.createElement("button");
additionalBtn.textContent = "tap"; 
additionalBtn.style.height = "45px";

let contactBtn = document.getElementById("btn");
contactBtn.insertAdjacentElement('afterend', additionalBtn);