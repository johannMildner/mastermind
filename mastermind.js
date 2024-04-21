/* jshint esversion: 6 */
'use strict';

let zufallszahl = 0;
let konsole = "";
let versuche = 0;
let beschissen = 0;

function erstelle_5stellige_zufallszahl() {
    let zz = ""
    for (let i = 1; i <= 5; i++) {
        zz = zz + "" + Math.floor(Math.random() * (10));
    }

    return zz
}

function start() {
    document.getElementById("message").innerHTML = "";
    versuche = 0;
    beschissen=0;
    zufallszahl = erstelle_5stellige_zufallszahl();
    konsole = "Spiel gestartet<br />bitte eine 5-stellige Zahl eingeben <br />";
    document.getElementById("konsole").innerHTML = konsole;
    document.getElementById("eingabe").value = "";
    document.getElementById("start").disabled = "disabled";
    document.getElementById("stopp").disabled = "";
    document.getElementById("rechnen").disabled = "";
    document.getElementById("eingabe").disabled = "";
    document.getElementById("help").disabled = "";
}

function help() {
    document.getElementById("message").innerHTML = zufallszahl;
    versuche = versuche + 100;
    konsole = konsole + "Sie haben beschissen!<br>"
    document.getElementById("konsole").innerHTML = konsole;
    beschissen = 1;
}

function stopp() {
    document.getElementById("message").innerHTML = "";
    konsole = konsole + "Spiel beendet, die Zahl war " + zufallszahl + "<br />";
    document.getElementById("konsole").innerHTML = konsole;
    konsole = "";
    document.getElementById("eingabe").value = "";

    document.getElementById("stopp").disabled = "disabled";
    document.getElementById("start").disabled = "";
    document.getElementById("help").disabled = "disabled";
    document.getElementById("rechnen").disabled = "disabled";
    document.getElementById("eingabe").disabled = "disabled";
}

function rechnen() {
    document.getElementById("message").innerHTML = " ";
    let eingabe = document.getElementById("eingabe");
    eingabe = eingabe.value;
    if (!eingabeOk(eingabe)) {
        document.getElementById("message").innerHTML = " eingabe falsch ...";
        return;
    }
    versuche++;
    konsole = konsole + check(zufallszahl, eingabe) + " " +
        versuche + ".Versuch  " + "<br />";
    document.getElementById("konsole").innerHTML = konsole;
}

function check(z, e) {
    if (z === e) {
        document.getElementById("eingabe").value = "";
        document.getElementById("help").disabled = "disabled";
        document.getElementById("stopp").disabled = "disabled";
        document.getElementById("start").disabled = "";
        document.getElementById("rechnen").disabled = "disabled";
        document.getElementById("eingabe").disabled = "disabled";
        if (beschissen == 1)
            return e + "<br />" + "*****";
        else
            return e + "<br />" + "*****  GEWONNEN";
    }
    z = "" + z;
    e = "" + e;
    let zarr = z.split("");
    let earr = e.split("");
    let erg1 = "";
    let erg2 = "";
    for (let i = 0; i < 5; i++) {
        if (zarr[i] === earr[i]) {
            erg1 = erg1 + "*";
            zarr[i] = "";
            earr[i] = "";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (zarr[i] !== "") {
            for (let j = 0; j < 5; j++) {
                if (zarr[i] === earr[j]) {
                    erg2 = erg2 + "0";
                    earr[j] = "";
                    break;
                }
            }
        }
    }
    let erg = erg1 + erg2;
    while (erg.length < 5) {
        erg += ".";
    }
    return e + "<br />" + erg;
}

function eingabeOk(s) {
    // 5-stellig, alle muessen numerisch sein
    if (s.length !== 5) return false;
    return allInteger(s);
}