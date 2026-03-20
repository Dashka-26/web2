// завдання 1
// першим виконається big.js, оскільки браузер читає html зверху до низу

// завдання 2
//1) var a = 2; var x = 1 + (a *= 2); a = 4 x = 5

//2) if ("0") { alert('Привіт'); } виконається, оскільки значення "0" True

//3)
let name, admin;
name = "Василь";
admin = name;
console.log(admin);

// завдання 3
let countiesData = [];

async function fetchCountiesData() {
    const url = "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*";
    const response = await fetch(url);
    const rawData = await response.json();

    for (let i = 1; i < rawData.length; i++) {
        let currentItem = rawData[i];

        let countyObject = {
            name: currentItem[0],
            state: currentItem[1],
            county: currentItem[2]
        };

        countiesData.push(countyObject);
    }
    console.log("Дані успішно завантажено", countiesData);
}

function getCountyCode(searchName) {
    const foundCounty = countiesData.find(item => item.name === searchName);

    if (foundCounty) {
        return foundCounty.state + foundCounty.county;
    } else {
        return "Округ не знайдено";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchCountiesData();

    const btn = document.getElementById("searchBtn");
    const input = document.getElementById("countyInput");
    const resultDiv = document.getElementById("result");

    btn.addEventListener("click", () => {
        const textFromInput = input.value;

        if (textFromInput === "") {
            resultDiv.innerText = "Введіть назву округу";
            return;
        }

        const code = getCountyCode(textFromInput);
        resultDiv.innerText = "Результат: " + code;
    });
});

// завдання 4
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstNameValue = document.getElementById("first_name").value.trim();
        const lastNameValue = document.getElementById("last_name").value.trim();
        const emailValue = document.getElementById("email").value.trim();

        if (firstNameValue === "" || lastNameValue === "" || emailValue === "") {
            alert("Не всі поля заповнені");

        } else {
            const message = "Успішно! Дані користувача:\n" +
                "Ім'я: " + firstNameValue + "\n" +
                "Прізвище: " + lastNameValue + "\n" +
                "Email: " + emailValue;

            alert(message);
        }
    });
});

// завдання 5
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("elid");
    const btnLeft = document.getElementById("btnLeft");
    const btnRight = document.getElementById("btnRight");

    let currentPosition = 0;

    btnRight.addEventListener("click", () => {
        currentPosition = currentPosition + 100;
        box.style.transform = "translateX(" + currentPosition + "px)";
    });

    btnLeft.addEventListener("click", () => {
        currentPosition = currentPosition - 100;
        box.style.transform = "translateX(" + currentPosition + "px)";
    });
});