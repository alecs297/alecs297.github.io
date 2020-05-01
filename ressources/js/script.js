var languages_hell = [
    "Language?",
    "langue?",
    "limbă?",
    "言語",
    "lengua?",
    "لغة?",
    "hizkuntza?",
    "语言?",
    "taal?",
    "wika?",
    "Sprache?",
    "ʻolelo?",
    "nyelv?",
    "Lingua?",
    "言語?",
    "sermone?",
    "kalba?",
    "भाषा?",
    "linguagem?",
    "язык?",
    "jezika?",
    "språk?",
    "ngôn ngữ?",
    "01101100 01100001 01101110 01100111 01110101 01100001 01100111 01100101?",
    ".-.. .- -. --. ..- .- --. .?",
    "ꖎᔑリ⊣⚍ᔑ⊣ᒷ?",
    "●︎♋︎■︎♑︎◆︎♋︎♑︎♏︎?",
    "Language?"
];
var age = new Date().getFullYear() - 2001 - ((new Date().getMonth() < 6) || ((new Date().getMonth() == 6) && (new Date().getDate() < 29))); // Yes this is my birthday, bonus points if you remember it
var lang = {
    "title": {
        "en": "Welcome.",
        "fr": "Bienvenue."
    },
    "biotitle": {
        "en": "Who am I?",
        "fr": "Qui suis-je?"
    },
    "bio": {
        "en": "Currently " + age + " years old, I am a student at Pau's <a target='_blank'href='https://eisti.fr/en'>EISTI engineering school</a>, in France. Passionated by computers since my early childhood, I accumulated a decent base of knowledge in different domains and have taken part in countless projects.<br><br>While having a preference for web related activities, <br>I have experience with <a>Node.js, PHP, HTML/CSS, server management, web APIs, Java, python, domain administration, Wordpress, Shopify and some basic C</a>. Perpetually improving my software development skills, I can be a very useful asset for your projects.",
        "fr": "Actuellement âgé de " + age + " ans, je suis un étudiant de <a target='_blank'href='https://eisti.fr/'>l'EISTI de Pau</a> souhaitant poursuivre vers une carrière d'ingénieur. Passionné par la technologie depuis tout petit, j'ai pu bâtir une bonne base de connaissance dans de nombreux domaines et participer à d'innombrables projets au fil des années.<br><br>Ayant tout de même une préférence pour le développement web, <br> Je possède de l'expérience avec <a>Node.js, PHP, HTML/CSS, la gestion serveur, les web APIs, Java, python, la gestion des noms de domaine, Wordpress, Shopify et les bases de C</a>. Améliorant mes compétences perpétuellement, je peux être un atout pour vos projets."
    },
    "welcome": {
        "en": "Probably the solution to all your problems.",
        "fr": "Probablement la solution à tous vos problèmes."
    },
    "projects": {
        "en": 'echo "Some of my projects, without any order (clickable)" && ls',
        "fr": 'echo "Quelques projets, non rangés (cliquables, en anglais)" && ls'
    },
    "ls": {
        "en": 'Some of my projects, without any order (clickable)',
        "fr": 'Quelques projets, non rangés (cliquables, en anglais)'
    },
    "cv_text": {
        "en": "How about we build something together? Let's have a talk!",
        "fr": "Et si on construisait quelque chose ensemble? Discutons!"
    },
    "cv_dl": {
        "en": "Download my curriculum vitae",
        "fr": "Téléchargez mon curriculum vitae"
    },
    "sad": {
        "en": 'Sadly, this website is designed for desktop only, I cannot yet provide the full experience on mobile.    -Alex',
        "fr": "Désolé, ce site web n'est pas encore prêt pour les appareils mobiles, utilisez un ordinateur pour accèder à cette expérience.    -Alex"
    },
    "skills_title": {
        "en": 'My current skills',
        "fr": "Mes compétences actuelles"
    },
    "s_lang": {
        "en": "Spoken languages",
        "fr": "Langues maîtrisées"
    },
    "s_web": {
        "en": "Web development",
        "fr": "Développement web"
    },
    "s_cms": {
        "en": "CMS",
        "fr": "CMS"
    },
    "s_plang": {
        "en": "Coding languages",
        "fr": "Langages de programmation"
    },
    "s_server": {
        "en": "Server and domain management",
        "fr": "Gestion serveur & domaine"
    },
    "s_frm": {
        "en": "Node.js frameworks",
        "fr": "Frameworks Node.js"
    },
    "darkmode": {
        "en": '<br>An extension is modifying the website, some effects cannot be displayed because of it (ex: dark mode extension)',
        "fr": "<br>Une extension modifie le contenu du site, certains effets ne peuvent pas être affichés à caude de cela (ex: extension mode nuit)"
    }
}
var projets = {
    "C": "Learning in progress, most complete project so far: Huffman encryption & decryption program.",
    "Discord_Bots": "Using discord.js API, a lot of different bots. Entertainement bots, utility bots, moderation bots, private bots...<br>Most complete one: <a target='_blank'href='https://top.gg/bot/442652120999526411'>EnigmaBot</a><br><br>Other active bots: HaveIBeenPwned, 2FA, TeamManager, OnlineSim API, UntoldRadio...",
    "Domains_Servers": "Passioned about bulk buying fun domain names, basic but decent DNS knowledge. Know my way with apache, php, nodejs, letsencrypt and virtualhosts (on linux, of course)",
    "IoT": "Random projects with esp32, arduino, digi-spark, RPI<br>WOL over Google Assistant, custom small APIs, custom home security, a lot of ifttt integrations.",
    "Java": "GuessWho: GUI based game dependant on a server, from the principle of Identifiable Images of Bystanders Extracted from Corneal Reflections<br>Android Apps: Published game - <a target='_blank'href='https://play.google.com/store/apps/details?id=fr.fouiny.grass'>Enigma - Second Anniversary Puzzle</a><br>Unpublished apps: FindMyPhone over sms, RGB IoT controller",
    "Old_Stuff": "Minecraft servers & plugins, some of them being for sale.",
    "Pentesting": "Ethical hacking: rubber duckies, mitm (arp & dns spoof), simulated phishing campaigns for some companies, reverse-engineered my highschool network. Just discovered VoIP.<br>Tried out kali linux, zAnti, droidsheep, csploit, dsploit, metasploit, android app injections, SSL strip, evilginx2. Not fully-experienced but highly passionated about this domain.",
    "Shopify": "Multiple websites for third parties<br>My own papercraft store concept (fully functionnal, for sale)",
    "Treasure_Hunts": "Occasionnal treasure hunts & internet puzzles: <a target='_blank'href='https://the-enigma.party'>Enigma</a>",
    "Websites": "Misc static webpages, Misc dynamic websites (design not included)<br>Wordpress, CPanels, Shopify, buycraft and other CMS<br>This website, 90% hand made (had to use some third party functions)."
}
var current_lang = "en";
var carrousel = 0;
var scrolled_console = 0;
var scrolled_tree = 0;
var moreinfo = 0;
var console_fs = 0;
var console_p1 = 0;
var console_p2 = 0;
var console_p3 = 0;
var t;
// https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
function get(id)
{
    return document.getElementById(id);
}
function text(id, text)
{
    get(id).innerHTML = text;
}
function ecrire(id, texte, i, delay, special)
{
    if (i < texte.length) {
        text(id, get(id).innerHTML.slice(0, -1) + texte[i] + "_");
    } else {
        if (i < texte.length + 19 + (texte.length%2)) {
            if (i%2) {
                text(id, texte + "_");
            } else {
                text(id, texte);
                if(special) {
                    let p_t = "<br>" + lang.ls[current_lang] + "<br>";
                    let keys = Object.keys(projets);
                    let values = Object.values(projets);
                    for (let i = 0; i < keys.length; i++) {
                        p_t += "<span class='lss' id=p_" + keys[i] + ">" + keys[i] + "</span><br>";
                    }
                    text("project_list", p_t);
                    for (let i = 0; i < keys.length; i++) {
                        let el = document.getElementById("p_" + keys[i])
                        el.addEventListener("click", () => {
                            text("project_info", "<br><br><u>" + keys[i] + "</u><br>"+ values[i]);
                        });
                    }
                    document.getElementById("console").style.fontSize = "16";
                }
            }
        } else {
            return;
        }
    }
    setTimeout(function() {
        ecrire(id, texte, i + 1, delay, special)
    }, delay);
}
function couleur(id, texte, tab, n) {
    let el = document.getElementById(id);
    if (document.getElementById("dark_test").innerHTML == '<span style="color: white"></span>') {
        if (n == 0) {
            for (let j = 0; j < texte.length; j++) {
                tab[j] = false;
            }
        }
        let t;
        do {
            t = Math.round(Math.random() * (texte.length - 1));
        } while(tab[t] == true);
        tab[t] = true;
        let j = 0;
        let i = 0;
        let div_length = 0;
        while(j < t) {
            if (el.innerHTML[i] == "<") {
                if (!div_length) { // In order to adapt to Samuel's lame dark mode extensions that inject code, we're taking extra precautions xoxo
                    let temp = 0;
                    do {
                        i++;
                        div_length++;
                        if (el.innerHTML[i] == ">") {
                            temp++;
                        }
                    }
                    while(temp < 2);
                } else {
                    i += div_length;
                }
            }
            j++;
            i++;
        }
        let delay = 0;
        if (texte[t] != " ") {
            let code;
            if (el.innerHTML[i] == "$" || el.innerHTML[i] == "@" || el.innerHTML[i] == "%") {
                code = "59C837";
            } else if (el.innerHTML[i] == "(" || el.innerHTML[i] == ")") {
                code = "E9524A";
            } else {
                code = "755232";
            }
            if (el.innerHTML.slice(i + 1) != undefined) {
                el.innerHTML = el.innerHTML.slice(0, i) + "<span style='color: #" + code + ";'>" + el.innerHTML[i] + "</span>" + el.innerHTML.slice(i + 1);
            }
            else {
                el.innerHTML = el.innerHTML.slice(0, i) + "<span style='color: #" + code + ";'>" + el.innerHTML[i] + "</span>";
            }
            delay = 50;
        }
        tab[t] = true;
        if (n < texte.length - 1) {
            setTimeout(function() {
                couleur(id, texte, tab, n + 1)
            }, delay);
        }
    } else {
        el.innerHTML += lang.darkmode[current_lang];
    }
    
}
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
window.mobileCheck = function()
{
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera || ( window.innerWidth <= 800 ) || ( window.innerHeight <= 600 ));
    return check;
};
function update_lang(i)
{
    current_lang = i;
    carrousel = 42;
    text("welcome", "");
    text("biotitle", "");
    text("langholder", i);
    ecrire("welcome", lang.welcome[i], 0, 50);
    ecrire("biotitle", lang.biotitle[i], 0, 50);
    text("bio", lang.bio[i]);
    text("skills_title", lang.skills_title[i]);
    text("cv_text", lang.cv_text[i]);
    text("cv_dl", lang.cv_dl[i]);
    text("s_lang", lang.s_lang[i]);
    text("s_web", lang.s_web[i]);
    text("s_cms", lang.s_cms[i]);
    text("s_plang", lang.s_plang[i]);
    text("s_server", lang.s_server[i]);
    text("s_frm", lang.s_frm[i]);
}
function update_carrousel()
{
    if (carrousel == 24) {
        document.getElementById("hiddenbutton").hidden = false;
    } else {
        document.getElementById("hiddenbutton").hidden = true;
    }
    if (carrousel >= languages_hell.length) {
        clearInterval(t);
    } else {
        document.getElementById("language_carrousel").innerHTML = languages_hell[carrousel];
        unfade(document.getElementById("language_carrousel"));
        carrousel++;
    }
}
function show_website(input) {
    document.getElementById('overlay').hidden = true;
    if (window.mobileCheck()) {
        document.getElementById("mobile_sad").hidden = false;
        ecrire("mobile_sad", lang.sad[input], 0, 50);
    } else {
        document.getElementById('all').hidden = false;
        update_lang(input);
    }
}
document.getElementById('overlay').addEventListener('mousemove', () => {
    if (!carrousel) {
        carrousel = 1;
        t = setInterval(update_carrousel,1000);
    }
});
function myonscroll()
{
    let h = document.body.scrollTop || document.documentElement.scrollTop
    if (!scrolled_console && (h > 5)) {
        scrolled_console = 1;
        ecrire("projects", lang.projects[current_lang], 0, 40, 1);
    }
    if (!scrolled_tree && (h > window.innerHeight*0.7)) {
        scrolled_tree = 1;
        let tab = [];
        let texte = document.getElementById("tree").innerHTML;
        couleur("tree", texte, tab, 0);
    }
    if (h > window.innerHeight - document.getElementById("langholder").offsetHeight) {
        document.getElementById("lang_button").style.position = "absolute";
    } else {
        document.getElementById("lang_button").style.position = "fixed";
    }
    let scrolledvh = h;
    if (scrolledvh > window.innerHeight*2.25) {
        let ded = document.getElementById("F");
        if (scrolledvh < window.innerHeight*2.25 + 1000) {
            document.getElementById("abyss").style.opacity = parseInt(scrolledvh - window.innerHeight*2.25)/1000;
            ded.style.opacity = 0;
        } else {
            document.getElementById("abyss").style.opacity = 1;
            ded.innerHTML = "YOU DIED";
            ded.style.opacity = 1;
            ded.style.color = "#4F0004";
            unfade(ded);
        }
    } else {
        document.getElementById("abyss").style.opacity = 0;
    }
}
window.onscroll = function() {myonscroll()};
document.getElementById('overlay_en').addEventListener("click", () => {
    show_website("en");
});
document.getElementById('overlay_fr').addEventListener("click", () => {
    show_website("fr");
});
document.getElementById('galactic').addEventListener("click", () => {
    show_website("galactic");
});
document.getElementById('langholder').addEventListener("click", () => {
    document.getElementById("overlay").hidden = false;
    document.getElementById('all').hidden = true;
    carrousel = 0;
});
document.getElementById('close_button').addEventListener("click", () => {
    document.getElementById('all').hidden = true;
    document.getElementById('nothing').hidden = false;
});
document.getElementById("nothing").addEventListener("click", () => {
    document.getElementById('all').hidden = false;
    document.getElementById('nothing').hidden = true;
});
document.getElementById('max_button').addEventListener("click", () => {
    let elt = document.getElementById("window");
    if (!console_fs) {
        elt.style.height = '99vh';
        elt.style.width = '100vw';
        console_p1 = elt.style.top;
        console_p2 = elt.style.left;
        console_p3 = document.documentElement.scrollTop || document.body.scrollTop;
        elt.style.top = '0';
        elt.style.left = '0';
        document.getElementById("front").hidden = true;
        document.getElementById("back").hidden = true;
        document.getElementById("cv").hidden = true;
        document.getElementById("quack").hidden = true;
    } else {
        document.getElementById("front").hidden = false;
        document.getElementById("back").hidden = false;
        document.getElementById("cv").hidden = false;
        document.getElementById("quack").hidden = false;
        elt.style.height = '40vh';
        elt.style.width = '50vw';
        elt.style.top = console_p1;
        elt.style.left = console_p2;
        document.documentElement.scrollTop = document.body.scrollTop = console_p3;
    }
    console_fs = !console_fs;
});
document.getElementById('min_button').addEventListener("click", () => {
    document.getElementById('window').hidden = true;
    if (console_fs) {
        document.getElementById("front").hidden = false;
        document.getElementById("back").hidden = false;
        document.getElementById("cv").hidden = false;
        document.getElementById("quack").hidden = false;
        document.documentElement.scrollTop = document.body.scrollTop = console_p3;
    }
})
//https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    if (console_fs) return;
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (console_fs) return;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}