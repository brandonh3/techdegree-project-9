// Variables
const header = document.querySelector('header');
const mainNav = document.getElementById('main-nav');
const mainNavUl = document.querySelector('.main-nav-ul');
const mainNavLi = document.getElementsByClassName('main-nav-li');
const navSVG = document.getElementsByClassName('main-nav-svg');
const overlay = document.querySelector('.overlay');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const alert = document.querySelector('.alert-main');
const alertCloseBtn = document.querySelector('.alert-close-btn');
const sendBtn = document.getElementById('send-message-btn');
const saveBtn = document.getElementById('save-settings-btn');
const cancelBtn = document.getElementById('cancel-settings-btn');
const searchUser = document.querySelector('.search-user-input');
const msgUser = document.querySelector('.message-user-textarea');
const msgSent = document.querySelector('.message-sent');
const msgFail = document.querySelector('.message-fail');
const settingsSave = document.querySelector('.settings-alert-msg');
const settingsCancel = document.querySelector('.settings-reset-msg');
const trafficNav = document.querySelector('.traffic-nav');
const trafficNavItem = document.querySelectorAll('.traffic-nav-item');
const notifBtn = document.querySelector('.notif-btn');
const notifBadge = document.querySelector('.notif-badge');
const notifList = document.querySelector('.notif-list');
const notifClose = document.querySelectorAll('.notif-list-item-close');
const settingsSwitch = document.querySelectorAll('.settings-switch');
const settingsTimezone = document.getElementById('timezone');
let trafficGraph = document.getElementById('traffic-graph').getContext('2d');
let trafficGraphHourly;
let trafficGraphDaily;
let trafficGraphWeekly = new Chart(trafficGraph, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: 'rgba(180, 183, 228, .5)',
            borderColor: '#6568bc',
            borderWidth: 1,
            lineTension: 0,
            pointRadius: 6,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        }
    }
});
let trafficGraphMonthly;


const getLocalStorage = () => {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
};

// On Page Load
window.onload = () => {
    if (getLocalStorage()) {
        for (let i = 0; i < settingsSwitch.length; i++) {
            if (localStorage.getItem(settingsSwitch[i].value) === 'true') {
                settingsSwitch[i].checked = true;
            } else {
                settingsSwitch[i].checked = false;
            }
        }
        if (localStorage.getItem(settingsTimezone.id) != null) {
            settingsTimezone.value = localStorage.getItem(settingsTimezone.id);
        }
    }
};

// Notifications
notifBtn.addEventListener('click', () => {
    notifBadge.style.display = 'none';
    notifList.style.display = 'flex';
});

notifList.addEventListener('click', (event) => {
    if (event.target.nodeName == 'SPAN') {
      closeBtnItem = event.target.parentElement;
      if (closeBtnItem.previousElementSibling == null && closeBtnItem.nextElementSibling == null) {
          closeBtnItem.parentElement.removeChild(closeBtnItem);
          notifList.parentElement.removeChild(notifList);
      }  else if (closeBtnItem.previousSibling || closeBtnItem.nextSibling) {
          closeBtnItem.parentElement.removeChild(closeBtnItem);
      }
    }
});

// Alert Close

alertCloseBtn.addEventListener('click', () => {
    alert.style.display = 'none';
});


// Search Auto Complete

new autoComplete({
    selector: 'input[name="search-input"]',
    minChars: 1,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var choices = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Brandon Howard'];
        var matches = [];
        for (i = 0; i < choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

new autoComplete({
    selector: 'input[name="search-top"]',
    minChars: 1,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var choices = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Brandon Howard'];
        var matches = [];
        for (i = 0; i < choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

// Decide Which Traffic Graph to Display

trafficNav.addEventListener('click', (event) => {
    if (event.target.nodeName == 'LI') {
        event.target.classList.add('active');
        console.log(event.target.id);
        console.log (trafficNavItem.length);
        for (let i = 0; i < trafficNavItem.length; i++) {
            console.log(trafficNavItem[i].id);
            console.log(event.target.id);
            if (trafficNavItem[i].id != event.target.id) {
                trafficNavItem[i].classList.remove('active');
            }
        }
        if (event.target.id == 'Hourly') {
            trafficGraphHourly = new Chart(trafficGraph, {
                type: 'line',
                data: {
                    labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                    datasets: [{
                        data: [750, 950, 900, 1050, 1200, 1225, 1150, 1050, 1000, 1100, 1150, 1100],
                        backgroundColor: 'rgba(180, 183, 228, .5)',
                        borderColor: '#6568bc',
                        borderWidth: 1,
                        lineTension: 0,
                        pointRadius: 6,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }]
                    }
                }
            });
        } else if (event.target.id == 'Daily') {
            trafficGraphDaily = new Chart(trafficGraph, {
                type: 'line',
                data: {
                    labels: ['16', '17', '18', '19', '20', '21', '22'],
                    datasets: [{
                        data: [725, 900, 875, 1000, 950, 1000, 1100],
                        backgroundColor: 'rgba(180, 183, 228, .5)',
                        borderColor: '#6568bc',
                        borderWidth: 1,
                        lineTension: 0,
                        pointRadius: 6,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }]
                    }
                }
            });
        } else if (event.target.id == 'Weekly') {
            trafficGraphWeekly = new Chart(trafficGraph, {
                type: 'line',
                data: {
                    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
                    datasets: [{
                        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                        backgroundColor: 'rgba(180, 183, 228, .5)',
                        borderColor: '#6568bc',
                        borderWidth: 1,
                        lineTension: 0,
                        pointRadius: 6,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }]
                    }
                }
            });
        } else {
            trafficGraphMonthly = new Chart(trafficGraph, {
                type: 'line',
                data: {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [{
                        data: [900, 975, 1050, 1125, 1025, 1100, 1000, 975, 1050, 1025, 1150, 1225],
                        backgroundColor: 'rgba(180, 183, 228, .5)',
                        borderColor: '#6568bc',
                        borderWidth: 1,
                        lineTension: 0,
                        pointRadius: 6,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }]
                    }
                }
            });
        }
    }
});



    // Daily Traffic Bar Chart

    const dailyTrafficChart = document.getElementById('daily-traffic-graph').getContext('2d');

    const dailyTrafficChartBar = new Chart(dailyTrafficChart, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                data: [75, 100, 175, 125, 225, 200, 100],
                backgroundColor: 'rgba(101, 104, 188, 1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            }
        }
    });

    // Mobile Users Donut Chart

    const mobileUsersChart = document.getElementById('mobile-users-graph').getContext('2d');

    const mobileUsersChartDonut = new Chart(mobileUsersChart, {
        type: 'doughnut',
        data: {
            labels: ['Phones', 'Tablets', 'Desktop'],
            datasets: [{
                data: [750, 500, 1500],
                backgroundColor: [
                    'rgba(116, 191, 167, 1)',
                    'rgba(116, 177, 191, 1)',
                    'rgba(101, 104, 188, 1)'
                ],
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'center'
            }
        }
    });



// Display Nav Overlay

menuBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

function openNav() {
    closeBtn.style.display = 'block';
    mainNav.classList.add('overlay');
    mainNavUl.classList.add('overlay-content');

    for(let i = 0; i < mainNavLi.length; i++) {
        mainNavLi[i].classList.add('overlay-content-li');
    }

    for (let i = 0; i < navSVG.length; i++) {
        navSVG[i].classList.add('overlay-svg');
    }
}

// Hide Nav Overlay

function closeNav() {
    mainNav.classList.remove('overlay');
    mainNavUl.classList.remove('overlay-content');
    closeBtn.style.display = 'none';

    for (let i = 0; i < mainNavLi.length; i++) {
        mainNavLi[i].classList.remove('overlay-content-li');
    }

    for (let i = 0; i < navSVG.length; i++) {
        navSVG[i].classList.remove('overlay-svg');
    }
}

// Send User Message

sendBtn.addEventListener('click', () => {
    if (searchUser.value == "" || msgUser.value == "") {
        setTimeout(function() {
            msgFail.style.display = 'none';
        }, 3000);
        msgFail.style.display = 'block';
        msgSent.style.display = 'none'; 
    } else {
        setTimeout(function () {
            msgSent.style.display = 'none';
        }, 3000);
        msgSent.style.display = 'block'; 
        msgFail.style.display = 'none';
    }
});


// Settings Buttons

saveBtn.addEventListener('click', () => {
    for (let i = 0; i < settingsSwitch.length; i++) {
        localStorage.setItem(settingsSwitch[i].value, settingsSwitch[i].checked);
    }
    localStorage.setItem(settingsTimezone.id, settingsTimezone.value);

    setTimeout(function () {
        settingsSave.style.display = 'none';
    }, 3000);
    settingsSave.style.display = 'block';
    settingsCancel.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    setTimeout(function () {
        settingsCancel.style.display = 'none';
    }, 3000);
    settingsCancel.style.display = 'block';
    settingsSave.style.display = 'none';
    localStorage.clear();
    settingsTimezone.selectedIndex = 0;
    for (let i = 0; i < settingsSwitch.length; i++) {
        settingsSwitch[i].checked = false;
    }
});
