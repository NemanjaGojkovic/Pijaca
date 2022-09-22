var hrana=[]
var cene=[]
var gramaza=[]
var total=0

function ukljuciKorpu() {

    let korpica = document.getElementById("korp")
    korpica.style.opacity = "100%";

}


function iskljuciKorpu() {

    let korpica = document.getElementById("korp")
    korpica.style.opacity = "0%";

}


// [banana, breskva, jabuka, jagode, lubenica, visnja]
// [luk, kupus, paradajz, paprika, krompir, krastavac]

function dodajUKorpuVoce() {
    let korpa = document.querySelectorAll("input")
    let nizVoca = ["imeBanana", "imeBreskva", "imeJabuka", "imeJagoda", "imeLubenica", "imeVisnja"]
    let nizCenaVoca = ["cenaBanana", "cenaBreskva", "cenaJabuka", "cenaJagoda", "cenaLubenica", "cenaVisnja"]
    var signal=0

    for(var i=0;i<korpa.length;i++){
        if(korpa[i].value!=0){
            signal=1
        }
    }

    if(signal==0){
        alert("Niste izabrali nijedan proizvod")
        return
    }

    var novoDugme = document.getElementById("dugmeZaKasu")
    novoDugme.innerHTML = '<a href="index3.html"><button id="uKorpu">Kasa</button></a>'
    
    hrana=[]
    cene=[]
    gramaza=[]

    for(var i=0;i<korpa.length;i++){
        if(korpa[i].value==0){
            continue
        }

        hrana.push(document.querySelector(`#${nizVoca[i]}`).innerHTML)
        gramaza.push(korpa[i].value)
        cene.push(parseInt(document.querySelector(`#${nizCenaVoca[i]}`).innerHTML.replace(/[^0-9]/g,''))*korpa[i].value)

        
        
    }

    
    sessionStorage.setItem("hranaNiz", JSON.stringify(hrana))
    sessionStorage.setItem("ceneNiz", JSON.stringify(cene))
    sessionStorage.setItem("gramazaNiz", JSON.stringify(gramaza))
    
   

}

function prikaziKorpu() {
    var kontis = document.getElementById("racun")
    var ukupno = document.getElementById("total")
    hrana=JSON.parse(sessionStorage.getItem("hranaNiz"))
    cene=JSON.parse(sessionStorage.getItem("ceneNiz"))
    gramaza=JSON.parse(sessionStorage.getItem("gramazaNiz"))
    total=0;
    
    var dugmeRed=document.getElementById("dugmeRed")
    dugmeRed.innerHTML=null
    kontis.innerHTML+='<div class="row" id="specif"><div class="col-md-4 text-start align-self-center proizvod">Proizvod</div><div class="col-md-2 text-start align-self-center proizvod">Gramaza</div><div class="col-md-2 text-start align-self-center proizvod">Cena</div></div>'

    for(var i=0;i<hrana.length;i++){
        kontis.innerHTML+= `<div class="row" id="red${i}">
        <div class="col-md-4 text-start align-self-center" id="redoviHrana"> ${hrana[i]}</div>
        <div class="col-md-2 text-start align-self-center" id="gramazaCene">${gramaza[i]} kg</div>
        <div class="col-md-3 text-start align-self-center" id="redoviCene"><span>${cene[i]}</span> din</div>
        <div class="col-md-1 text-start align-self-center">
        <img src="slike/kanta.png" width="74.66666px" heigth="93.3333" id="kanta${i}" onclick="brisiRed(this.parentNode.parentNode)"/>
        </div>
        </div>`
        total+=cene[i]
    }

    ukupno.innerText=`Ukupno: ${total} din`

}



function dodajUKorpuPovrce() {
    let korpa = document.querySelectorAll("input")
    let nizPovrca = ["imeLuk", "imeKupus", "imeParadajz", "imePaprika", "imeKrompir", "imeKrastavac"]
    let nizCenaPovrca = ["cenaLuk", "cenaKupus", "cenaParadajz", "cenaPaprika", "cenaKrompir", "cenaKrastavac"]
    var signal=0

    for(var i=0;i<korpa.length;i++){
        if(korpa[i].value!=0){
            signal=1
        }
    }

    if(signal==0){
        alert("Niste izabrali nijedan proizvod")
        return
    }

    var novoDugme = document.getElementById("dugmeZaKasu")
    novoDugme.innerHTML = '<a href="index3.html"><button id="uKorpu">Kasa</button></a>'
    
    hrana=[]
    cene=[]
    gramaza=[]

    for(var i=0;i<korpa.length;i++){
        if(korpa[i].value==0){
            continue
        }

        hrana.push(document.querySelector(`#${nizPovrca[i]}`).innerHTML)
        gramaza.push(korpa[i].value)
        cene.push(parseInt(document.querySelector(`#${nizCenaPovrca[i]}`).innerHTML.replace(/[^0-9]/g,''))*korpa[i].value)

        
        
    }

    
    sessionStorage.setItem("hranaNiz", JSON.stringify(hrana))
    sessionStorage.setItem("ceneNiz", JSON.stringify(cene))
    sessionStorage.setItem("gramazaNiz", JSON.stringify(gramaza))
    
    

}


function brisiRed(slika){
    var brojka=slika.querySelector('div div span')
    slika.remove()
    var racunRed=document.getElementById("racun")
    var redovi=racunRed.getElementsByClassName('row')
    

    var ukupno=document.getElementById("total")
    total-=parseInt(brojka.innerText)
    ukupno.innerText=`Ukupno: ${total} din`
    if(redovi.length==4){
        var specif=document.getElementById("specif")
        specif.remove()
        racunRed.innerHTML+='<div class="row"><div class="col-md-10 offset-2 text-start align-self-center" id="nemaArtikla">Nema nijednog artikla u korpi! Vratite se u prodavnicu!</div></div>'
    }

}



