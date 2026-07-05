// ================= MUSIC =================

const music = document.getElementById("bgMusic");

// ================= PAGES =================

const home = document.getElementById("home");
const messagePage = document.getElementById("messagePage");
const galleryPage = document.getElementById("galleryPage");
const finalPage = document.getElementById("finalPage");

// ================= BUTTONS =================

const startBtn = document.getElementById("startBtn");
const galleryBtn = document.getElementById("galleryBtn");
const finalBtn = document.getElementById("finalBtn");

// ================= IMAGES =================

const images = [
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg",
"images/7.jpg",
"images/8.jpg",
"images/9.jpg",
"images/10.jpg"
];

let current = 0;

// ================= HIDE PAGES =================

function hideAll(){

    home.style.display="none";
    messagePage.style.display="none";
    galleryPage.style.display="none";
    finalPage.style.display="none";

}

hideAll();

home.style.display="flex";

// ================= HEARTS =================

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        const hearts=["❤️","💖","💕","💗","💘","💝"];

        heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left=Math.random()*window.innerWidth+"px";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.animationDuration=(4+Math.random()*3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },250);

}

// ================= BALLOONS =================

function createBalloons(){

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML="🎈";

        balloon.style.left=Math.random()*window.innerWidth+"px";

        balloon.style.fontSize=(40+Math.random()*20)+"px";

        balloon.style.animationDuration=(8+Math.random()*4)+"s";

        document.body.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },12000);

    },1200);

}

// ================= LOADER =================

window.addEventListener("load",()=>{

    createHearts();

    createBalloons();

    setTimeout(()=>{

        const loader=document.getElementById("loader");

        if(loader){

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },800);

        }

    },3000);

});

// ================= START BUTTON =================

startBtn.onclick=function(){

    music.play().catch(()=>{});

    hideAll();

    messagePage.style.display="flex";

    startTyping();

};// ================= TYPING EFFECT =================

const text = `Dear Rabii ❤️

Every moment with you is beautiful.
You are the reason behind so many smiles.

May Allah always protect you,
keep you happy,
and fulfill every dream in your life. 🤲💖

🌹 Happy Birthday Once Again 🌹`;

function startTyping(){

    const typing = document.getElementById("typing");

    if(!typing) return;

    typing.innerHTML="";

    let i=0;

    function type(){

        if(i<text.length){

            if(text.charAt(i)==="\n"){
                typing.innerHTML+="<br>";
            }else{
                typing.innerHTML+=text.charAt(i);
            }

            i++;

            setTimeout(type,40);

        }

    }

    type();

}

// ================= GALLERY =================

galleryBtn.onclick=function(){

    hideAll();

    galleryPage.style.display="flex";

    startGallery();

};

function startGallery(){

    const img=document.getElementById("slide");

    setInterval(()=>{

        img.style.opacity="0";

        setTimeout(()=>{

            current=(current+1)%images.length;

            img.src=images[current];

            img.style.opacity="1";

        },500);

    },3000);

}

// ================= FINAL PAGE =================

finalBtn.onclick = function () {

    hideAll();

    finalPage.style.display = "flex";

    if (typeof confetti === "function") {
        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });
    }

};
// ================= GIFT =================

const giftText = `Dear Rabii ❤️

Thank you for being such a beautiful part of my life.

May Allah always protect you,
keep you smiling,
and bless every step you take. 🤲💖

🌹 Happy Birthday Once Again 🌹`;

const openGift = document.getElementById("openGift");

if (openGift) {

    openGift.onclick = function () {

        const letter = document.getElementById("letterText");
        const box = document.getElementById("loveLetter");

        this.style.display = "none";
        document.getElementById("giftBox").style.display = "none";

        box.style.display = "block";
        letter.innerHTML = "";

        let i = 0;

        function typeGift() {

            if (i < giftText.length) {

                if (giftText.charAt(i) === "\n") {
                    letter.innerHTML += "<br>";
                } else {
                    letter.innerHTML += giftText.charAt(i);
                }

                i++;
                setTimeout(typeGift, 40);

            } else {

                // 🎉 Confetti
                if (typeof confetti === "function") {
                    confetti({
                        particleCount: 250,
                        spread: 160,
                        origin: { y: 0.6 }
                    });
                }

                // 💖 Popup letter complete hone ke baad
                const popup = document.getElementById("thanksPopup");

                if (popup) {
                    setTimeout(() => {
                        popup.style.display = "flex";
                    }, 1000);
                }

            }

        }

        typeGift();

    };

}

// ================= SPARKLES =================

function createSparkles() {

    setInterval(() => {

        const s = document.createElement("div");

        s.className = "sparkle";
        s.innerHTML = "✨";

        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(s);
setTimeout(() => {
    s.remove();
}, 1500);
        

    }, 300);

}

createSparkles();const closePopup = document.getElementById("closePopup");

if(closePopup){

    closePopup.onclick = function(){

        document.getElementById("thanksPopup").style.display = "none";

    };
}