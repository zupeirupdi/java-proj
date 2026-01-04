// Student Portfolio Project
// Name: Zubeyr Abdiqani
// ID: C6240348


const style = document.createElement('style');
style.textContent = `
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f0f2f5;
        margin: 0;
        padding-bottom: 50px;
        color: #333;
    }
    
    /* Navigation Bar */
    nav {
        background-color: #2c3e50;
        color: white;
        padding: 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    
    .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .logo {
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        color: white;
    }
    .logo span { color: #3498db; }
    
    .menu {
        display: flex;
        gap: 15px;
    }
    
    nav button {
        background: transparent;
        border: 1px solid transparent;
        color: #ecf0f1;
        padding: 8px 15px;
        font-size: 15px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s;
    }
    
    nav button:hover {
        background-color: rgba(255,255,255,0.1);
        color: white;
    }
    
    nav button.active {
        background-color: #3498db;
        color: white;
    }
    
    /* Mobile Menu Toggle */
    .hamburger { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
    
    /* Responsive */
    @media (max-width: 768px) {
        .menu { display: none; }
        .hamburger { display: block; }
    }
    
    .mobile-list {
        display: none;
        background: #34495e;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        border-top: 1px solid #2c3e50;
    }
    .mobile-list div {
        padding: 15px;
        color: white;
        border-bottom: 1px solid #2c3e50;
        cursor: pointer;
        text-align: center;
    }
    .mobile-list div:hover { background-color: #2c3e50; }

    /* Main Content */
    main {
        max-width: 1000px;
        margin: 30px auto;
        padding: 0 20px;
    }

    /* Cards */
    .card {
        background: white;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        border: 1px solid #e1e4e8;
    }
    
    h1 { color: #2c3e50; margin-bottom: 10px; }
    h2 { color: #2c3e50; border-bottom: 2px solid #3498db; display: inline-block; padding-bottom: 5px; margin-bottom: 20px; }
    h3 { color: #34495e; margin-top: 20px; }
    p { line-height: 1.6; color: #555; }

    /* Buttons */
    .btn {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        margin-right: 10px;
        transition: background 0.2s;
    }
    .btn:hover { background-color: #2980b9; }

    .btn-outline {
        background-color: transparent;
        color: #3498db;
        border: 2px solid #3498db;
    }
    .btn-outline:hover { background-color: #3498db; color: white; }

    /* Code Blocks */
    pre {
        background: #2d3436;
        color: #dfe6e9;
        padding: 15px;
        border-radius: 6px;
        overflow-x: auto;
        font-family: 'Consolas', monospace;
        margin-bottom: 15px;
        border-left: 4px solid #3498db;
    }

    /* Profile Image */
    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 4px solid #fff;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        object-fit: cover;
        margin: 0 auto 20px;
        display: block;
    }

    /* Forms */
    input, textarea {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        font-family: inherit;
        box-sizing: border-box;
    }
    input:focus, textarea:focus {
        border-color: #3498db;
        outline: none;
    }

    .output-box {
        display: block;
        margin-top: 10px;
        padding: 10px;
        background-color: #e8f6f3;
        color: #16a085;
        border-radius: 4px;
        font-family: monospace;
        font-weight: bold;
    }
    
    footer {
        text-align: center;
        margin-top: 50px;
        color: #7f8c8d;
        border-top: 1px solid #dcdcdc;
        padding-top: 30px;
    }
`;
document.head.appendChild(style);


let currentPage = 'home';
let currentChapter = 'ch7';

const pages = [
    { id: 'home', title: 'Home' },
    { id: 'chapters', title: 'Chapters' },
    { id: 'assignment', title: 'Assignments' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' }
];

const chaptersData = {
    ch7: {
        title: "Chapter 7: Objects",
        description: "Learning about JavaScript Objects.",
        examples: [
            {
                title: "Object Literal",
                code: `let student = {
  name: "Ali",
  age: 20,
  course: "IT"
};
return student.name;`,
                run: () => {
                    let student = { name: "Ali", age: 20, course: "IT" };
                    return student.name + ", " + student.age;
                }
            },
            {
                title: "Modify & Add Property",
                code: `student.age = 21;
student.city = "Mogadishu";
return student.city;`,
                run: () => {
                    let student = { name: "Ali", age: 20, course: "IT" };
                    student.age = 21;
                    student.city = "Mogadishu";
                    return "Age: " + student.age + ", City: " + student.city;
                }
            },
            {
                title: "Constructor Function",
                code: `function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Ahmed", 22);
return p1.name;`,
                run: () => {
                    function Person(name, age) { this.name = name; this.age = age; }
                    let p1 = new Person("Ahmed", 22);
                    return p1.name;
                }
            },
            {
                title: "ES6 Class",
                code: `class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}
let car1 = new Car("Toyota", 2022);
return car1.brand;`,
                run: () => {
                    class Car { constructor(brand, year) { this.brand = brand; this.year = year; } }
                    let car1 = new Car("Toyota", 2022);
                    return car1.brand;
                }
            },
            {
                title: "Object Loop",
                code: `let out = "";
for (let key in student) {
  out += key + " : " + student[key] + ", ";
}
return out;`,
                run: () => {
                    let student = { name: "Ali", age: 21, course: "IT", city: "Mogadishu" };
                    let out = [];
                    for (let key in student) { out.push(key + ": " + student[key]); }
                    return out.join(", ");
                }
            },
            {
                title: "JSON",
                code: `let jsonData = JSON.stringify(student);
let objData = JSON.parse(jsonData);
return jsonData;`,
                run: () => {
                    let student = { name: "Ali", age: 20 };
                    let jsonData = JSON.stringify(student);
                    return jsonData;
                }
            }
        ]
    },
    ch8: {
        title: "Chapter 8: DOM",
        description: "Document Object Model Manipulation.",
        examples: [
            {
                title: "getElementById",
                code: `let text = document.getElementById("text");
text.style.color = "red";`,
                run: () => "Selected #text and changed color to red"
            },
            {
                title: "getElementsByClassName",
                code: `let boxes = document.getElementsByClassName("box");
boxes[0].style.background = "yellow";`,
                run: () => "Selected .box and changed background to yellow"
            },
            {
                title: "getElementsByTagName",
                code: `let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontSize = "18px";`,
                run: () => "Selected <p> and changed font-size to 18px"
            },
            {
                title: "querySelector",
                code: `let firstP = document.querySelector("p");
firstP.style.color = "blue";`,
                run: () => "Selected first <p> and changed color to blue"
            },
            {
                title: "querySelectorAll",
                code: `let allP = document.querySelectorAll("p");
allP.forEach(p => {
  p.style.fontWeight = "bold";
});`,
                run: () => "Selected all <p> and changed font-weight to bold"
            },
            {
                title: "Create Element",
                code: `let div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);`,
                run: () => "Created <div>New Element</div> and appended to body"
            },
            {
                title: "Remove Element",
                code: `div.remove();`,
                run: () => "Removed the <div> element"
            }
        ]
    },
    ch9: {
        title: "Chapter 9: Events",
        description: "Handling user events.",
        examples: [
            {
                title: "Click Event",
                code: `let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  alert("Button clicked");
});`,
                run: () => { alert("Button clicked (Simulation)"); return "Alert triggered"; }
            },
            {
                title: "Mouse Event",
                code: `let box = document.getElementById("box");
box.addEventListener("mouseover", function () {
  box.style.background = "green";
});`,
                run: () => "Mouseover listener added (simulated)"
            },
            {
                title: "Keyboard Event",
                code: `let input = document.getElementById("input");
input.addEventListener("keyup", function () {
  console.log(input.value);
});`,
                run: () => "Keyup listener added (check console)"
            },
            {
                title: "Form Submit Event",
                code: `let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form Submitted");
});`,
                run: () => { alert("Form Submitted (Simulation)"); return "Submit prevented & Alert triggered"; }
            },
            {
                title: "Focus & Blur",
                code: `input.addEventListener("focus", function () {
  input.style.border = "2px solid blue";
});`,
                run: () => "Focus/Blur listeners added. Input border changes on focus."
            },
            {
                title: "Event Delegation",
                code: `let list = document.getElementById("list");
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});`,
                run: () => "Event Delegation set up on #list"
            }
        ]
    }
};

const assignments = [
    { title: "Student Record", code: "function Student(n, id){ this.n = n; this.id = id; }\nconst s = new Student('Zubeyr', 'C6240348');\nreturn s.n + ' - ' + s.id;", run: () => "Zubeyr - C6240348" },
    { title: "Car Object", code: "const car = { brand: 'Toyota', start: function() { return 'Vroom!' } };\nreturn car.start();", run: () => "Vroom!" },
    { title: "Shopping Cart", code: "const cart = [ {price: 10}, {price: 20} ];\nreturn 'Total: ' + cart.reduce((a,b)=>a+b.price, 0);", run: () => "Total: 30" },
    { title: "Filter Array", code: "const nums = [1, 5, 10, 12];\nreturn nums.filter(n => n > 5).join(',');", run: () => "10,12" },
    { title: "Timer Simulation", code: "return 'Timer started...';", run: () => "Timer started..." },
    { title: "API Fetch Mock", code: "return 'Fetching data... OK';", run: () => "Fetching data... OK" }
];



function switchPage(pageId) {
    currentPage = pageId;
    render();
    window.scrollTo(0, 0);
}

function setChapter(key) {
    currentChapter = key;
    render();
}

function runExample(title) {
    let result = "Not found";

    // Search in chapters
    for (let key in chaptersData) {
        let found = chaptersData[key].examples.find(e => e.title === title);
        if (found) { result = found.run(); break; }
    }

    // Search in assignments if not found
    if (result === "Not found") {
        let found = assignments.find(e => e.title === title);
        if (found) result = found.run();
    }

    // Display result
    const id = 'out-' + title.replace(/[\s']/g, '-');
    const el = document.getElementById(id);
    if (el) {
        el.innerText = "> " + result;
        el.style.opacity = 1;
    } else {
        alert(result);
    }
}

function toggleMenu() {
    const el = document.getElementById('mobileMenu');
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}



function renderHeader() {
    return `
        <nav>
            <div class="container">
                <div class="logo" onclick="switchPage('home')">Zubeyr<span>.Dev</span></div>
                
                <div class="menu">
                    ${pages.map(p => `
                        <button class="${currentPage === p.id ? 'active' : ''}" onclick="switchPage('${p.id}')">
                            ${p.title}
                        </button>
                    `).join('')}
                </div>

                <button class="hamburger" onclick="toggleMenu()">☰</button>
            </div>
        </nav>
        <div id="mobileMenu" class="mobile-list">
            ${pages.map(p => `
                <div style="padding: 10px; cursor: pointer;" onclick="switchPage('${p.id}'); toggleMenu();">
                    ${p.title}
                </div>
            `).join('')}
        </div>
    `;
}

function renderHome() {
    return `
        <div style="text-align: center; margin-top: 50px;">
            <img src="WhatsApp Image 2025-10-18 at 12.01.34_3d4d2162.jpg" class="profile-img">
            <h2 style="color: var(--main-color);">Full Stack Developer</h2>
            <h1>Hello, I'm Zubeyr</h1>
            <p>I build websites using JavaScript, HTML, and CSS.<br>Welcome to my portfolio.</p>
            
            <button class="btn" onclick="switchPage('assignment')">See My Work</button>
            <button class="btn btn-outline" onclick="switchPage('contact')">Contact Me</button>
        </div>
    `;
}

function renderChapters() {
    const data = chaptersData[currentChapter];
    return `
        <div style="text-align: center; margin-bottom: 30px;">
            <h2>Chapters</h2>
            <div style="margin-bottom: 20px;">
                ${Object.keys(chaptersData).map(k => `
                    <button class="btn" style="background: ${currentChapter === k ? 'var(--main-color)' : '#eee'}; color: ${currentChapter === k ? 'white' : 'black'}; margin: 0 5px;" onclick="setChapter('${k}')">
                        ${k.toUpperCase()}
                    </button>
                `).join('')}
            </div>
        </div>

        <div class="card">
            <h3 style="color: var(--main-color); margin-bottom: 10px;">${data.title}</h3>
            <p>${data.description}</p>
            <br>
            ${data.examples.map((ex, i) => createExampleHTML(ex, i)).join('')}
        </div>
        ${renderBackBtn()}
    `;
}

function renderAssignment() {
    return `
        <div class="card">
            <h2 style="text-align:center; color: var(--main-color);">Assignments</h2>
            <p style="text-align:center;">My practical tasks.</p>
            <br>
            ${assignments.map((ex, i) => createExampleHTML(ex, i)).join('')}
        </div>
        ${renderBackBtn()}
    `;
}

function createExampleHTML(ex, i) {
    const safeTitleClick = ex.title.replace(/'/g, "\\'");
    const safeTitleId = ex.title.replace(/[\s']/g, '-');

    return `
        <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px;">
            <h4>${i + 1}. ${ex.title}</h4>
            <pre>${ex.code}</pre>
            <button class="btn" style="font-size: 0.8rem; padding: 5px 15px;" onclick="runExample('${safeTitleClick}')">Run</button>
            <span id="out-${safeTitleId}" class="output-box"></span>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="card" style="text-align: center;">
            <img src="WhatsApp Image 2025-10-18 at 12.01.34_3d4d2162.jpg" class="profile-img">
            <h2>Zubeyr Abdiqani</h2>
            <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 30px;">
                <span style="background: #f0f7ff; color: var(--main-color); padding: 6px 18px; border-radius: 30px; font-size: 0.9rem; border: 1px solid #e0f2fe;">ID: C6240348</span>
                <span style="background: #f0f7ff; color: var(--main-color); padding: 6px 18px; border-radius: 30px; font-size: 0.9rem; border: 1px solid #e0f2fe;">Class: CS242</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; text-align: left; margin-top: 40px;">
                <div>
                    <h4 style="color: var(--main-color); border-left: 3px solid var(--main-color); padding-left: 12px; margin-bottom: 20px;">Contact Info</h4>
                    <div style="margin-bottom: 15px; color: var(--text-light); display: flex; align-items: center; gap: 10px;">📧 zubeyrabdiqani@gmail.com</div>
                    <div style="margin-bottom: 15px; color: var(--text-light); display: flex; align-items: center; gap: 10px;">📱 +252 61 8240507</div>
                    <div style="margin-bottom: 15px; color: var(--text-light); display: flex; align-items: center; gap: 10px;">🐙 github.com/zupeirupdi</div>

                    <h4 style="color: var(--main-color); border-left: 3px solid var(--main-color); padding-left: 12px; margin: 35px 0 20px;">References</h4>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <a href="https://horyaalhospital.so/" target="_blank" style="text-decoration: none; color: var(--main-color); font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                            🏥 Horyaal Hospital
                        </a>
                        <a href="https://deeroinstitute.com/" target="_blank" style="text-decoration: none; color: var(--main-color); font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                            🎓 Deero Institute
                        </a>
                    </div>
                </div>
                <div>
                    <h4 style="color: var(--main-color); border-left: 3px solid var(--main-color); padding-left: 12px; margin-bottom: 20px;">Core Competencies</h4>
                    ${['JavaScript', 'HTML5 & SEO', 'CSS3 & UI', 'Graphic Design'].map(s => `
                        <div style="margin-bottom: 8px; display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 500; color: var(--text-light);">
                            <span>${s}</span>
                            <span style="color: var(--main-color);">90%</span>
                        </div>
                        <div style="height: 8px; background: #f1f5f9; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                            <div style="height: 100%; background: var(--main-color); width: 90%; border-radius: 10px;"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        ${renderBackBtn()}
    `;
}

function renderContact() {
    return `
        <div class="card" style="max-width: 500px; margin: 0 auto; text-align: center;">
            <h2 style="color: var(--main-color);">Contact Me</h2>
            <p>Send me a message.</p>
            
            <form onsubmit="event.preventDefault(); alert('Message Sent!');">
                <input type="text" class="form-input" placeholder="Name">
                <input type="email" class="form-input" placeholder="Email">
                <textarea class="form-input" rows="4" placeholder="Message"></textarea>
                <button class="btn" style="width: 100%;">Send</button>
            </form>
        </div>
        ${renderBackBtn()}
    `;
}

function renderBackBtn() {
    return `
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn btn-outline" onclick="switchPage('home')">Back to Home</button>
        </div>
    `;
}

function renderFooter() {
    return `
        <footer>
            <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 25px;">
                <a href="tel:+252618240507" style="width:45px; height:45px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; border: 1px solid var(--border); color: var(--text-color); box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.2s;" onmouseover="this.style.borderColor='var(--main-color)'; this.style.color='var(--main-color)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-color)'">📞</a>
                <a href="https://github.com/zupeirupdi" style="width:45px; height:45px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; border: 1px solid var(--border); color: var(--text-color); box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.2s;" onmouseover="this.style.borderColor='var(--main-color)'; this.style.color='var(--main-color)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-color)'">🐙</a>
                <a href="mailto:zubeyrabdiqani@gmail.com" style="width:45px; height:45px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; border: 1px solid var(--border); color: var(--text-color); box-shadow: 0 4px 10px rgba(0,0,0,0.05); transition: 0.2s;" onmouseover="this.style.borderColor='var(--main-color)'; this.style.color='var(--main-color)'" onmouseout="this.style.borderColor='var(--border)'; this.style.color='var(--text-color)'">✉️</a>
            </div>
            <p>© 2025 Zubeyr Abdiqani - Student Portfolio</p>
        </footer>
    `;
}

function render() {
    const app = document.getElementById('app') || document.createElement('div');
    app.id = 'app';
    app.innerHTML = '';

    app.innerHTML += renderHeader();

    let content = '';
    if (currentPage === 'home') content = renderHome();
    else if (currentPage === 'chapters') content = renderChapters();
    else if (currentPage === 'assignment') content = renderAssignment();
    else if (currentPage === 'about') content = renderAbout();
    else if (currentPage === 'contact') content = renderContact();

    // Wrap content in main
    content = `<main>${content}</main>`;

    app.innerHTML += content;
    app.innerHTML += renderFooter();

    if (!document.body.contains(app)) {
        document.body.appendChild(app);
    }
}

// Start App
render();
