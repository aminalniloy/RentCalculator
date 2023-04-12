function laskeOsuudet(){
    let vuokra = parseFloat(document.getElementById("vuokra").value);
    let henkilomaara = parseInt(document.getElementById("henkilomaara").value);

    let osuus = vuokra / henkilomaara;
    console.log(osuus);

    let tuloste = "";
    for (let i=1; i<=henkilomaara; i++){
        tuloste += "Henkilö " + i + ":" + osuus.toFixed(2) + " euroa<br>";
        

    }
    document.getElementById("osuudet").innerHTML = tuloste;
    
}