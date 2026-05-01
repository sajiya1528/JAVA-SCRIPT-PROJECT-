function navigate(page) {

let app = document.getElementById("app");

/* HOME */
if(page==="home"){
app.innerHTML="<h1>Welcome to my portfolio </h1>";
}

/* 1 Create an empty div with some id, using js add a paragraph with some text into the div. */
if(page==="task1"){
app.innerHTML=`
<div id="myDiv"></div>
<button onclick="addPara()">Add Text</button>`;
}

/* 2. Use color select input and change complete background of page to that particular color  input.
 */
if(page==="color"){
app.innerHTML=`<input type="color" id="colorPicker">`;

document.getElementById("colorPicker").oninput=(e)=>{
document.body.style.background=e.target.value;
};
}

/* 3 Create a current digital  clock  which is! showing current date and time in 12 hour format */

// Clock
    if (page === "clock") {
        document.getElementById("app").innerHTML = `
            <h2>Digital Clock</h2>
            <h1 id="clock"></h1>
        `;
        startClock();
    }
clearInterval(window.clockInt);
window.clockInt=setInterval(()=>{
let d=new Date();
let h=d.getHours()%12||12;
let m=String(d.getMinutes()).padStart(2,'0');
let s=String(d.getSeconds()).padStart(2,'0');
let ampm=d.getHours()>=12?"PM":"AM";
clock.innerText=`${h}:${m}:${s} ${ampm}`;
},1000);
}

/* 4 calculator*/
if(page==="calc"){
app.innerHTML=`
<input id="result" disabled><br>
<button class="calc-btn" onclick="append('7')">7</button>
<button class="calc-btn" onclick="append('8')">8</button>
<button class="calc-btn" onclick="append('9')">9</button>
<button class="calc-btn" onclick="append('/')">/</button><br>

<button class="calc-btn" onclick="append('4')">4</button>
<button class="calc-btn" onclick="append('5')">5</button>
<button class="calc-btn" onclick="append('6')">6</button>
<button class="calc-btn" onclick="append('*')">*</button><br>

<button class="calc-btn" onclick="append('1')">1</button>
<button class="calc-btn" onclick="append('2')">2</button>
<button class="calc-btn" onclick="append('3')">3</button>
<button class="calc-btn" onclick="append('-')">-</button><br>

<button class="calc-btn" onclick="append('0')">0</button>
<button class="calc-btn" onclick="calculate()">=</button>
<button class="calc-btn" onclick="clearRes()">C</button>`;
}

/* 5 Image slider, carousal. With 3 images changing after 3 seconds or cchanginng with  button click
 */
if(page==="slider"){
app.innerHTML=`
<img id="slider" width="300"><br>
<button onclick="prev()">Prev</button>
<button onclick="next()">Next</button>`;
startSlider();
}

/* 7 Timer app,  which will have a default! value  and can take in a timer value from user.
 */
if(page==="timer"){
app.innerHTML=`
<input id="timeInput" placeholder="Seconds"><br>
<button onclick="startTimer()">Start</button>
<h1 id="timerDisplay">10</h1>`;
}

/* 8 Create a traffic signal stiimulator. 4 traffic lights witth green red yyello colors working properly using settimeout and set interval
 */
if(page==="traffic"){
app.innerHTML=`
<div id="red" class="light"></div>
<div id="yellow" class="light"></div>
<div id="green" class="light"></div>`;
traffic();
}

/* 9 FORM */
if(page==="form"){
app.innerHTML=`
<input id="email" placeholder="Email"><br>
<input id="phone" placeholder="Phone"><br>

<input id="pass" type="password" placeholder="Password">
<button onclick="togglePass()">👁</button><br>

<input id="cpass" type="password" placeholder="Confirm"><br>

<p id="capText"></p>
<input id="capInput" placeholder="Captcha"><br>

<button id="submit" disabled>Submit</button>`;
genCap();
}


/* FUNCTIONS */

/* ADD TEXT */
function addPara(){
let p=document.createElement("p");
p.innerText="Added!";
myDiv.appendChild(p);
}

/* CALC */
function append(v){result.value+=v;}
function clearRes(){result.value="";}
function calculate(){result.value=eval(result.value);}

/* SLIDER */
let imgs=["https://picsum.photos/300?1","https://picsum.photos/300?2","https://picsum.photos/300?3"];
let i=0,slideInt;

function startSlider(){
clearInterval(slideInt);
slider.src=imgs[i];
slideInt=setInterval(next,3000);
}
function next(){i=(i+1)%3;slider.src=imgs[i];}
function prev(){i=(i-1+3)%3;slider.src=imgs[i];}


/* TRAFFIC */
function traffic(){
setInterval(()=>{
red.style.background="red";
yellow.style.background="gray";
green.style.background="gray";

setTimeout(()=>{yellow.style.background="yellow";red.style.background="gray";},2000);
setTimeout(()=>{green.style.background="green";yellow.style.background="gray";},4000);

},6000);
}
let timerInterval;
/* TIMER */

function startTimer() {
    clearInterval(timerInterval);

    let input = document.getElementById("timeInput").value;
    let time = input ? parseInt(input) : 10;

    let display = document.getElementById("timerDisplay");
    display.textContent = time;

    timerInterval = setInterval(() => {
        time--;
        display.textContent = time;

        if (time <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


/* DEFAULT */
navigate("home");