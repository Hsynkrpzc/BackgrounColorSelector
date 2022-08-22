const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "black",
    "yellow",
    "green", 
    "#fc5e03", 
    "#a4e0cc", 
    "red", 
    "purple" , 
    "brown", 
    "blue" ,
    "#c7bf67",
    "#7b55cf",
    "#de4747",
    "#2963ab",
];

let sira = 0;

button.addEventListener("click", changeBackground);

function changeBackground() {
    //console.log("buttona tıklandı");

    //rastgele bir renk , a random color
    //const rastgeleSayi = Math.floor(Math.random() * colors.length);
    //const secilenRenk = colors[rastgeleSayi];
    //console.log(rastgeleSayi, secilenRenk);
    //body.style.backgroundColor = secilenRenk;

    //sırayla renk seciçi ,color selector in order
    //console.log(sira);
    if (sira == 13) sira = 0 ;
    const secilenRenk = colors[sira];
    sira++;
    body.style.backgroundColor = secilenRenk;
}

