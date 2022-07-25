//Loading
$(window).on('load', function () {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut();
});
//Galerie
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
//Buton Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: 'ro'
        },
        'google_translate_element'
    );
    /*var mymenu = document.getElementBy('menu');
    mymenu.style.top = '100px';*/
}

//Meniul de tip dropdown de la butonul "CURSURI" din bara de navigare
function menudropdown() {
    var x = document.getElementById("dropdown-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


//Plug-in
!function (t, d, e, i, n) {
    (n = d.body).insertAdjacentHTML("beforeend", '<div data-formito-id="43y4nEuLd3BjvMgbCHDP" data-trigger="fab" data-color="#fef246" data-button-icon="https://s.formito.com/img/icon-fab/1.png" data-button-shape="round"></div>'), (i = d.createElement("script")).async = !0, i.src = "https://s.formito.com/ft.js", n.appendChild(i)
}(window, document);

//Galerie
function gallery(imgSelected) {
    var bigImg = document.getElementById("big-img");
    bigImg.src = imgSelected.src;
    bigImg.parentElement.style.display = "block";

}



//Test html
var questions = ["Tag-urile sunt MEREU în perechi &lt;tag&gt;&lt;/tag&gt;.",
            "HTML permite inserarea legaturior (link-urilor) către alte pagini Web aflate oriunde în lume.",
            "Tag-urile &lt;b&gt;&lt;/b&gt; definesc un buton.",
            "Într-un document HTML5 gasim mereu: <code> &lt;!DOCTYPE html&gt; </code>, <code> &lt;head&gt;&lt;/head&gt; </code>,<code> &lt;body&gt;&lt;/body&gt;</code>.",
            "HTML este prescurtarea de la Hyper Text Mark-up Language.",
            "Cum poate fi introdus un comentariu în HTML?",
            "Ce fac tag-urile <code>&lt;a&gt;&lt;/a&gt;</code>?",
            "Care este cel mai mic subtitlu(header)?",
            "HTML este un limbaj de programare.",
            "HTML-ul nu face deosebire între majuscule și minuscule."
        ];

var choose1 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
var choose2 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
var choose3 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
var choose4 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
var choose5 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
var choose6 = ["<button class=next-btn onclick=q1i()>/*Comentariu*/</button><br><br><button class=next-btn onclick=q1c()>&lt;!--Comentariu--&gt;</button>"];
var choose7 = ["<button class=next-btn onclick=q1c()>Inserează o ancoră</button><br><br><button class=next-btn onclick=q1i()>Schimbă culorea unui text</button>"];
var choose8 = ["<button class=next-btn onclick=q1c()>&lt;h6&gt;&lt;/h6&gt;</button><br><br><button class=next-btn onclick=q1i()>&lt;h1&gt;&lt;/h1&gt;</button>"];
var choose9 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
var choose10 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];

var question_number = 0;
question_number++;
var score = 0;
score++;

function start1() {
    disappear.innerHTML = "";
    space1.innerHTML = questions[0];
    space2.innerHTML = choose1;
    qnumbertop.innerHTML = question_number++;
}

function q1c() {
    space3.innerHTML = "Corect!";
    space2.innerHTML = "";
    scoretop.innerHTML = score++;
    space4.innerHTML = "<button class=next-btn onclick=next1()>Continuă!</button>";
}

function q1i() {
    space3.innerHTML = "Incorect!";
    space2.innerHTML = "";
    space4.innerHTML = "<button class=next-btn onclick=next1()>Continuă!</button>";
}

function next1() {
    if (question_number == "2") {
        space1.innerHTML = questions[1];
        space2.innerHTML = choose2;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "3") {
        space1.innerHTML = questions[2];
        space2.innerHTML = choose3;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "4") {
        space1.innerHTML = questions[3];
        space2.innerHTML = choose4;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "5") {
        space1.innerHTML = questions[4];
        space2.innerHTML = choose5;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "6") {
        space1.innerHTML = questions[5];
        space2.innerHTML = choose6;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "7") {
        space1.innerHTML = questions[6];
        space2.innerHTML = choose7;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "8") {
        space1.innerHTML = questions[7];
        space2.innerHTML = choose8;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "9") {
        space1.innerHTML = questions[8];
        space2.innerHTML = choose9;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else if (question_number == "10") {
        space1.innerHTML = questions[9];
        space2.innerHTML = choose10;
        space3.innerHTML = "";
        qnumbertop.innerHTML = question_number++;
        space4.innerHTML = "";
    } else {
        space1.innerHTML = "Final";
        if (score > "9")
            space4.innerHTML = "<b>Felicitări!</b>";
        else if (score > "7")
            space4.innerHTML = "<b>Bravo!</b>";
        else if (score > "5")
            space4.innerHTML = "<b>Este bine!</b>";
        else
            space4.innerHTML = "<b>Mai repetă!</b>";
    }
}
//Test css
var questions2 = ["Rolul CSS-ului e de a stiliza tag-urile HTML",
            "Câte moduri de a stiliza un document HTML există?",
            "Stilizatul unui document în tag-urile <code>&lt;head&gt; &lt;/head&gt;</code> este cel mai recomandat.",
            "Pentru a schimba culoarea fundalului putem folosi codul:",
            "Denumirea CSS provine din expresia Cascading Style Sheets",
            "Cum poate fi introdus un comentariu în CSS?",
            "Care este sintaxa codului CSS?",
            "Extensia unui fişier CSS este .css?",
            "CSS nu este un limbaj de programare.",
            "Care e forma corectă de a lega un fişier extern CSS la unul HTML?"
        ];

var choose12 = ["<button class=next-btn onclick=q2c()>Adevărat</button><br><br><button class=next-btn onclick=q2i()>Fals</button>"];
var choose22 = ["<button class=next-btn onclick=q2i()>4</button><br><br><button class=next-btn onclick=q2c()>3</button>"];
var choose32 = ["<button class=next-btn onclick=q2i()>Adevărat</button><br><br><button class=next-btn onclick=q2c()>Fals</button>"];
var choose42 = ["<button class=next-btn onclick=q2i()>body{color:blue}</button><br><br><button class=next-btn onclick=q2c()>body{ background-color: blue;}</button>"];
var choose52 = ["<button class=next-btn onclick=q2c()>Adevărat</button><br><br><button class=next-btn onclick=q2i()>Fals</button>"];
var choose62 = ["<button class=next-btn onclick=q2c()>/*Comentariu*/</button><br><br><button class=next-btn onclick=q2i()>&lt;!--Comentariu--&gt;</button>"];
var choose72 = ["<button class=next-btn onclick=q2i()>&lt;tag&gt;Conţinut...&lt;/tag&gt;</button><br><br><button class=next-btn onclick=q2c()>obiect{atribute, atribute, etc};</button>"];
var choose82 = ["<button class=next-btn onclick=q2c()>Adevărat</button><br><br><button class=next-btn onclick=q2i()>Fals</button>"];
var choose92 = ["<button class=next-btn onclick=q2c()>Adevărat</button><br><br><button class=next-btn onclick=q2i()>Fals</button>"];
var choose102 = ["<button class=next-btn onclick=q2i()>&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;</button><br><br><button class=next-btn onclick=q2c()>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;</button>"];

var question_number2 = 0;
question_number2++;
var score2 = 0;
score2++;

function start2() {
    disappear2.innerHTML = "";
    space12.innerHTML = questions2[0];
    space22.innerHTML = choose12;
    qnumbertop2.innerHTML = question_number2++;
}

function q2c() {
    space32.innerHTML = "Corect!";
    space22.innerHTML = "";
    scoretop2.innerHTML = score2++;
    space42.innerHTML = "<button class=next-btn onclick=next2()>Continuă</button>";
}

function q2i() {
    space32.innerHTML = "Incorect!";
    space22.innerHTML = "";
    space42.innerHTML = "<button class=next-btn onclick=next2()>Continuă</button>";
}

function next2() {
    if (question_number2 == "2") {
        space12.innerHTML = questions2[1];
        space22.innerHTML = choose22;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "3") {
        space12.innerHTML = questions2[2];
        space22.innerHTML = choose32;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "4") {
        space12.innerHTML = questions2[3];
        space22.innerHTML = choose42;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "5") {
        space12.innerHTML = questions2[4];
        space22.innerHTML = choose52;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "6") {
        space12.innerHTML = questions2[5];
        space22.innerHTML = choose62;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "7") {
        space12.innerHTML = questions2[6];
        space22.innerHTML = choose72;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "8") {
        space12.innerHTML = questions2[7];
        space22.innerHTML = choose82;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "9") {
        space12.innerHTML = questions2[8];
        space22.innerHTML = choose92;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else if (question_number2 == "10") {
        space12.innerHTML = questions2[9];
        space22.innerHTML = choose102;
        space32.innerHTML = "";
        qnumbertop2.innerHTML = question_number2++;
        space42.innerHTML = "";
    } else {
        space12.innerHTML = "Final";
        if (score2 > "9")
            space42.innerHTML = "<b>Felicitări!</b>";
        else if (score2 > "7")
            space42.innerHTML = "<b>Bravo!</b>";
        else if (score2 > "5")
            space42.innerHTML = "<b>Este bine!</b>";
        else
            space42.innerHTML = "<b>Mai repetă!</b>";
    }
}
