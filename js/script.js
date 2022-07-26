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

//Teste
var questions, choose1, choose2, choose3, choose4, choose5, choose6, choose7, choose8, choose9, choose10;



function start1() {
      questions = ["Tag-urile sunt MEREU în perechi &lt;tag&gt;&lt;/tag&gt;.",
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
    
    
    
  choose1 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose2 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose3 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose4 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose5 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose6 = ["<button class=next-btn onclick=q1i()>/*Comentariu*/</button><br><br><button class=next-btn onclick=q1c()>&lt;!--Comentariu--&gt;</button>"];
  choose7 = ["<button class=next-btn onclick=q1c()>Inserează o ancoră</button><br><br><button class=next-btn onclick=q1i()>Schimbă culorea unui text</button>"];
  choose8 = ["<button class=next-btn onclick=q1c()>&lt;h6&gt;&lt;/h6&gt;</button><br><br><button class=next-btn onclick=q1i()>&lt;h1&gt;&lt;/h1&gt;</button>"];
  choose9 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose10 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
    
    disappear.innerHTML = "";
    space1.innerHTML = questions[0];
    space2.innerHTML = choose1;
    qnumbertop.innerHTML = question_number++;
}

function start2() {
    questions = ["Rolul CSS-ului e de a stiliza tag-urile HTML",
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

  choose1 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose2 = ["<button class=next-btn onclick=q1i()>4</button><br><br><button class=next-btn onclick=q2c()>3</button>"];
  choose3 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose4 = ["<button class=next-btn onclick=q1i()>body{color:blue}</button><br><br><button class=next-btn onclick=q1c()>body{ background-color: blue;}</button>"];
  choose5 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose6 = ["<button class=next-btn onclick=q1c()>/*Comentariu*/</button><br><br><button class=next-btn onclick=q1i()>&lt;!--Comentariu--&gt;</button>"];
  choose7 = ["<button class=next-btn onclick=q1i()>&lt;tag&gt;Conţinut...&lt;/tag&gt;</button><br><br><button class=next-btn onclick=q1c()>obiect{atribute, atribute, etc};</button>"];
  choose8 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose9 = ["<button class=next-btn onclick=q1c()>Adevărat</button><br><br><button class=next-btn onclick=q1i()>Fals</button>"];
  choose10 = ["<button class=next-btn onclick=q1i()>&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;</button><br><br><button class=next-btn onclick=q1c()>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;</button>"];
    disappear.innerHTML = "";
    space1.innerHTML = questions[0];
    space2.innerHTML = choose1;
    qnumbertop.innerHTML = question_number++;
}

function start3() {
    questions = ["Ce simbol trebuie folosit pentru a stiliza un ID?",
            "Numele unei clase trebuie sa fie unic in document.",
            "Ce simbol trebuie folosit pentru a stiliza o clasa?",
            "... este un exemplu bun de clase.",
            "Numele unui ID nu trebuie sa fie unic in document",
            "... este un exemplu bun de ID.",
            "Clasele, in informatica, sunt...",
            "Pentru a atribui un ID unui obiect folosim <tag id:&quot;numeID&quot;>",
            "Id-urile, in informatica, sunt...",
            "Pentru a atribui o clasa unui obiect folosim <tag clase=&quot;numeClasa&quot;>"   
            
        ];

  choose1 = ["<button class=next-btn onclick=q1c()>#</button><br><br><button class=next-btn onclick=q1i()>.</button>"];
  choose2 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose3 = ["<button class=next-btn onclick=q1i()>#</button><br><br><button class=next-btn onclick=q1c()>.</button>"];
  choose4 = ["<button class=next-btn onclick=q1i()>CNP</button><br><br><button class=next-btn onclick=q1c()>Scoala</button>"];
  choose5 = ["<button class=next-btn onclick=q1i()>Adevărat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
  choose6 = ["<button class=next-btn onclick=q1c()>Numar de inmatriculare</button><br><br><button class=next-btn onclick=q1i()>Clasa pensionarilor</button>"];
    choose7 = ["<button class=next-btn onclick=q1i()>Incaperi in care se studiaza informatica</button><br><br><button class=next-btn onclick=q1c()>Grupuri de obiecte cu aceleasi atribute/actiuni</button>"];
    choose8 = ["<button class=next-btn onclick=q1i()>Adevarat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
    choose9 = ["<button class=next-btn onclick=q1c()>&quot;Nume&quot; unice date unui singur obiect</button><br><br><button class=next-btn onclick=q1i()>Acte, documente ale unei persoane</button>"];
    choose10 = ["<button class=next-btn onclick=q1i()>Adevarat</button><br><br><button class=next-btn onclick=q1c()>Fals</button>"];
    disappear.innerHTML = "";
    space1.innerHTML = questions[0];
    space2.innerHTML = choose1;
    qnumbertop.innerHTML = question_number++;
}





var question_number = 0;
question_number++;
var score = 0;
score++;



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
            {
            space4.innerHTML = "<b>Felicitări!</b>";
                document.getElementById("results_img").src = "img/tests/undraw_Happy_news_re_tsbd.png";
    document.getElementById("results_img").style.display = "block";
            }
        else if (score > "7")
            {
            space4.innerHTML = "<b>Bravo!</b>";
                document.getElementById("results_img").src = "img/tests/undraw_Happy_announcement_re_tsm0.png";
    document.getElementById("results_img").style.display = "block";
            }
        else if (score > "5")
            {
            space4.innerHTML = "<b>Este bine!</b>";
        document.getElementById("results_img").src = "img/tests/undraw_Learning_re_32qv.png";
    document.getElementById("results_img").style.display = "block";
            }
        else
            {
            space4.innerHTML = "<b>Mai repetă!</b>";
        document.getElementById("results_img").src = "img/tests/undraw_Books_re_8gea.png";
    document.getElementById("results_img").style.display = "block";
            }
    }
}


