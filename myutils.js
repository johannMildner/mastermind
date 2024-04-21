
/* jshint esversion: 6 */
'use strict';

/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Ganzzahl ist.
 */
function checkInteger(p) {
    let inp = p;
    if (inp === null) return false
    inp = inp + ""; // macht aus p einen string damit trim() funktioniert
    inp = inp.trim()
    if (inp === "") return false
    inp = inp * 1 // p zu number machen (wenn moeglich sonst NaN)
    if (isNaN(inp)) return false
    return Number.isInteger(inp);
}

/**
 * Prüfen ob ein eingegebener Wert eine
 * gültige Dezimalzahl ist.
 */
function checkFloat(p) {
    let inp = p
    if (inp === null) return false
    inp = inp + ""; // macht aus p einen string damit trim() funktioniert
    inp = inp.trim()
    if (inp === "") return false
    inp = inp * 1 // p zu number machen (wenn moeglich sonst NaN)
    return !isNaN(inp);
}

/**
 * Prüfen ob ein eingegebener Wert
 * komplett aus Ziffern besteht
 */
function allInteger(p) {
    // Laenge muss groesser 0 sein
    // Laenge kann beliebig lang sein
    // alle muessen numerisch sein
    // Nullen zu Beginn sind erlaubt (bspw: 00228)

    if (p === null) return false
    p = p + ""; // macht aus p einen string damit trim() funktioniert
    p = p.trim()
    if (p === "") return false

    for (let i = 0; i < p.length; i++) {
        let z = p.substr(i, 1) * 1 // soll ein number werden
        if (isNaN(z)) return false;
    }

    return true;
}
