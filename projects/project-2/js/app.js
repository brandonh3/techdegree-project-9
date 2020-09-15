// ===============================
//          Variables
// ===============================

const url = 'https://randomuser.me/api/?results=12&nat=us';
const employeesList = document.querySelector('.employee-cards');
const employeeCards = document.getElementsByClassName('card');
const employeeModal = document.querySelector('.modal');
const modalTop = document.querySelector('.modal-info');
const modalBottom = document.querySelector('.modal-info-bottom');
let cardIndex;
let employees;
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');


// ======================================
//       Create Employee Cards
// ======================================

fetch(url)
    .then(resp => resp.json())
    .then(resp => resp.results)
    .then(addEmployeeCards)
    .catch(err => console.log(err));

function addEmployeeCards(employeeInfo) {
    employees = employeeInfo;
    let employeeHTML = '';

    employees.forEach((employee, index) => {
        let profile = employee.picture;
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        
        employeeHTML += `
        <div class='card' data-index='${index}'>
            <div class='card-img'>
                <img src='${profile.large}' />
            </div>
            <div class='card-info'>
                <h3 class='name'>${name.first} ${name.last}</h3>
                <p>${email}</p>
                <p>${city}</p>
            </div>
        </div>
        `;
    });
    employeesList.innerHTML = employeeHTML;
}


// ======================================
//       Display Modal Function
// ======================================

function displayModal(index) {
    let { name, dob, phone, email, location: { city, street, state, postcode
    }, picture } = employees[index];
    let birthdate = new Date(dob.date);
    const modalTopHTML = `

            <div class="modal-img">
                <img src="${picture.large}" />
            </div>
            <h3>${name.first} ${name.last}</h3>
            <p>${email}</p>
            <p>${city}</p>

    `;

    const modalBottomHTML = `

            <p>${phone}</p>
            <p>${street.number} ${street.name}</p>
            <p>${city}, ${state} ${postcode}</p>
            <p>Birthday:
            ${birthdate.getMonth()}.${birthdate.getDate()}.${birthdate.getFullYear()}</p>

    `;

    employeeModal.style.display = 'flex';
    modalTop.innerHTML = modalTopHTML;
    modalBottom.innerHTML = modalBottomHTML;
}


// ======================================
//       Display Modal On-Click
// ======================================

employeesList.addEventListener('click', event => {
    if (event.target !== employeesList) {

        const employeeCard = event.target.closest(".card");
        let index = employeeCard.getAttribute('data-index');
        cardIndex = index;
        displayModal(index);
    }

    const modalClose = document.querySelector('.close');

    modalClose.addEventListener('click', () => {
        employeeModal.style.display = 'none';
    });
});


// ======================================
//       Modal Arrows On-Click
// ======================================

back.addEventListener('click', () => {
    if (cardIndex > 0) {
        cardIndex--;
        displayModal(cardIndex);
    } else if (cardIndex == 11) {
        displayModal(cardIndex);
    } else {
        cardIndex = 11;
        displayModal(cardIndex);
    }
});

forward.addEventListener('click', () => {
    if (cardIndex < 11) {
        cardIndex++;
        displayModal(cardIndex);
    } else if (cardIndex == 11) {
        cardIndex = 0;
        displayModal(cardIndex);
    }
});


// ======================================
//          Search Employees
// ======================================

const search = document.getElementById('search');

search.addEventListener('keyup', function () {

    let input = document.querySelector("#search");
    let lowercase = input.value.toLowerCase();
    
    for (let i = 0; i < employeeCards.length; i++) {

        const employeeNames = document.querySelectorAll(".name"); 
        const name = employeeNames[i].innerText.toLowerCase();

        if (name.includes(lowercase)) {
            employeeCards[i].style.display = "";
        } else {
            employeeCards[i].style.display = "none";
        }
    }
});

