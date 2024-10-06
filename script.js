const sideBar =document.getElementById('sidebar');
const main = document.getElementById('main');

function toggleSidebar(){
    sideBar.classList.toggle('show');
    sideBar.classList.toggle('active');
    main.classList.toggle('main');
}

var mainContent = document.querySelector('.main-content');

var toggleProfile = true;
var toggleProject = true;

function profile(){
    if(toggleProfile){
        mainContent.innerHTML = profileContent;
    }
}

function home(){
    mainContent.innerHTML = defaultContent;
}

function toLink(){
    if(confirm("You are about to leve this page. Are you sure?")){
        location.href="https://github.com/rahul142004"
    }
}

function myProject(){
    if(toggleProject){
        mainContent.innerHTML = projectContent;
    }
}

function guessingGame(){
    if(confirm("You are about to leve this page. Are you sure?")){
        location.href="https://rahul142004.github.io/Number-Guessing-game/"
    }
}
const projectButton = document.querySelector('.navigate');
const profileButton = document.querySelector('#profile');
const gitButton = document.querySelector('#git');
const contactButton = document.querySelector('#contact');

projectButton.addEventListener('click',() => {
    sideBar.classList.toggle('show');
    sideBar.classList.toggle('active');
    main.classList.toggle('main');
})

profileButton.addEventListener('click',() => {
    sideBar.classList.toggle('show');
    sideBar.classList.toggle('active');
    main.classList.toggle('main');
})
gitButton.addEventListener('click',() => {
    sideBar.classList.toggle('show');
    sideBar.classList.toggle('active');
    main.classList.toggle('main');
})
contactButton.addEventListener('click',() => {
    sideBar.classList.toggle('show');
    sideBar.classList.toggle('active');
    main.classList.toggle('main');
})












const defaultContent = `
    <h2 id="inner-text">Welcome to Personal Web</h2>
    <p id="p">To know more about me, click 'Profile'</p>
    <p></p>`

const  profileContent = `
    <h2 id="inner-text">About Me</h2>
    <p id="p">Hello! I'm a 20-year-old web developer currently studying at CEC Cherthala. I have a passion for creating dynamic and responsive websites, with a solid foundation in HTML, CSS, and JavaScript.</p>
    <p id = "q">I'm always exploring new web technologies and improving my skills to build more interactive and engaging web experiences</p>`


const projectContent = `<h1 id="inner-text">My Projects</h1>
<button class="navigate" id="guessing-game" onclick="guessingGame()">Number Guessing Game</button>`    