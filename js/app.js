// ===============================
//        Global Variables
// ===============================

const nav = document.querySelector('.nav');
const recentProjects = document.getElementById('recent-projects');
const projectsH1 = document.querySelector('.projects-h1');
const resume = document.getElementById('resume');
const aboutInfo = document.getElementById('about-info');
const showProject = document.getElementById('show-project');
const projectBtns = document.querySelector('.project-btns');
let index;


// ===============================
//        Skills Icons
// ===============================

const html5 = '<svg class="skill-icon" width="1773" height="2500" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"/><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"/><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"/><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"/></svg>';

const css3 = '<svg class="skill-icon" width="1773" height="2500" viewBox="0 0 256 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z" fill="#264DE4"/><path d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z" fill="#2965F1"/><path d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z" fill="#EBEBEB"/><path d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z" fill="#FFF"/></svg>';

const javascript = '<svg class="skill-icon" enable-background="new 0 0 1776 2500" viewBox="0 0 1776 2500" xmlns="http://www.w3.org/2000/svg"><path d="m1776 489.9h-1776l166.5 1805.5 721.4 204.6 721.4-204.6z" fill="#e6a329"/><path d="m887.9 637v1710l584.5-165.6 142.2-1544.4z" fill="#f1bf22"/><path d="m1352.9 858.5h-898.7l-62.6 676 1.3-4.2h763.5l-24.9 286-243.6 70.1-247.2-71.2-14.8-173.1h-224.4l32 345.9 454.4 129 454.6-129 62.6-678.9h-810.3l10.4-226.2h562.2l8.4 129.6h226.4z" fill="#fff"/><path d="m888.1 858.5h-433.9l-62.6 676 1.3-4.2h495.2v-220.5h-261.7l10.4-226.2h251.3zm-261.7 783.6h-224.9l32 345.7 454.4 128.8v-230l-247.2-71.4z" fill="#ebebeb"/></svg>';

const sass = '<svg class="skill-icon" xmlns="http://www.w3.org/2000/svg" width="2500" height="1875" viewBox="0 0 512 384"><path fill="#CF649A" d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"/></svg>';


// ===============================
//        Project Objects
// ===============================

const projects = [
    {
        title: "App Dashboard",
        img: "../images/project-1.png",
        about: "An interactive dashboard for MyApp users to view their recent activity, notifications and social interactions.",
        skills: [
            html5,
            css3,
            javascript,
            sass
        ],
        link: "../projects/project-1/index.html",
        files: "https://github.com/brandonh3/techdegree-project-7"
    },
    {
        title: "Employee Directory",
        img: "../images/project-2.png",
        about: "An interactive employee directory that pulls  employee images & information using a random user API. Clicking a user's image displays a modal with even more information on that employee. Navigation arrows allow scrolling endlessly through all employees within the directory. A search function allows filering of employees based on their name.",
        skills: [
            html5,
            css3,
            javascript,
            sass
        ],
        link: "../projects/project-2/index.html",
        files: "https://github.com/brandonh3/techdegree-project-8"
    },
    {
        title: "Photo Gallery",
        img: "../images/project-3.png",
        about: "An interactive photo gallery of various landscapes. Clicking an image displays a modal with the ability to scroll through all images within the gallery. A search function allows filering of images based on keywords. A persistent toggle allows for switching between light & dark modes.",
        skills: [
            html5,
            css3,
            javascript,
            sass
        ],
        link: "../projects/project-3/index.html",
        files: "https://github.com/brandonh3/techdegree-project-5"
    },
    {
        title: "Newsletter Signup Form",
        img: "../images/project-4.png",
        about: "A clean, simple signup form for a tech website. Includes form fields for the user's information and which newsletters they would like to sign up for.",
        skills: [
            html5,
            css3
        ],
        link: "../projects/project-4/index.html",
        files: "https://github.com/brandonh3/techdegree-project-3"
    },
    {
        title: "Wheel of Success Game",
        img: "../images/project-5.png",
        about: "An interactive phrase-guessing game where the user selects one letter at a time to fill in blanks on the current phrase. The user is allowed 5 incorrect guesses. Once this limit is reached, or once the phrase is solved, the game ends.",
        skills: [
            html5,
            css3,
            javascript
        ],
        link: "../projects/project-5/index.html",
        files: "https://github.com/brandonh3/techdegree-project-6"
    }
]

// ===============================
//     Validate Email Address
// ===============================

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email)
}


// ===============================
//     Display Project Modal
// ===============================

function displayProject(index) {
    showProject.innerHTML = `
        <p class="subtitle is-light project-title has-text-centered">
            ${projects[index].title}
        </p>
        <image class="project-img" src="${projects[index].img}" alt="project preview"></image>
        <div class="buttons is-grouped project-btns">
            <button class="button is-primary is-rounded is-outlined" id="left" >
                <span class="back" id="back">&lt;</span>
            </button>
            <button class="button is-primary is-rounded is-outlined" id="right">
                <span class="forward" id="forward">&gt;</span>
            </button>
        </div>
        <p class="is-light has-text-centered project-info">
            ${projects[index].about}
        </p>
        <div class="skills-list">
            <p>skills used: </p>
            ${projects[index].skills}
        </div>
        <div class="project-links has-text-centered">
            <a href="${projects[index].link}" target=”_blank”>visit site</a>
            <a href="${projects[index].files}" target=”_blank”>source code</a>
        </div>          
    `;
}

// ===============================
//    Contact Form Validation
// ===============================

const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const formField = document.querySelectorAll('.form-field');
const email = document.getElementById('email');
const chat = document.querySelector('.chat');

if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        let empty = 0;
        for(let i = 0; i < formField.length; i++) {
            if (formField[i].value == '') {
                formField[i].style.borderColor = '#b22734';
                empty++;
            } else {
                formField[i].style.borderColor = '#00D1B2';
            }
        }

        if (empty > 0) {
            submitBtn.classList.remove('is-primary');
            submitBtn.classList.add('is-danger');
            chat.classList.remove('has-text-primary');
            chat.classList.add('has-text-danger');
            chat.innerText = 'fill out all fields.';
        } else if (!emailIsValid(email.value)) {
            email.style.borderColor = '#b22734';
            submitBtn.classList.remove('is-primary');
            submitBtn.classList.add('is-danger');
            chat.classList.remove('has-text-primary');
            chat.classList.add('has-text-danger');
            chat.innerText = 'invalid email.';
        } else {
            submitBtn.classList.remove('is-danger');
            submitBtn.classList.add('is-primary');
            chat.classList.remove('has-text-danger');
            chat.classList.add('has-text-primary');
            chat.innerText = 'message sent.';
            submitBtn.disabled = true;

            for (let i = 0; i < formField.length; i++) {
                if (formField[i].value !== '') {
                    formField[i].style.borderColor = '#00D1B2';
                }
            }
        }
    });
};

if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        for (let i = 0; i < formField.length; i++) {
            formField[i].style.borderColor = '#F5F5F5';
            formField[i].value = '';
        }
        submitBtn.classList.remove('is-danger');
        submitBtn.classList.add('is-primary');
        chat.classList.remove('has-text-danger');
        chat.classList.add('has-text-primary');
        chat.innerText = "let's chat.";
        submitBtn.disabled = false;
    });
};


if (projectsH1) {
    index = 0;
    displayProject(index);
}

if(showProject) {
    showProject.addEventListener('click', (event) => {
        if (event.target.id === 'left' || event.target.id === 'back') {
            if (index !== 0) {
                index--;
                displayProject(index);
            } else {
                index = projects.length - 1;
                displayProject(index);
            }
        } else if (event.target.id === 'right' || event.target.id === 'forward') {
            if (index !== projects.length - 1) {
                index++;
                displayProject(index);
            } else {
                index = 0;
                displayProject(index);
            }
        }
    });
};

resume.addEventListener('click', () => {
    window.open('../images/resume.pdf');
});






