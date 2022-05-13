var typeSubtype = {
    "Music for thought": { "focus": [], "selfawareness": [], "wellbeing": [] },
    "Music for sleep": { "ms1": [], "ms2": [] },
    "Celestial sound": { "chants": [], "relaxation": [], "sounds": [] },
}
window.onload = function () {
    var typeSel = document.getElementById("typeSel"),
        subtypeSel = document.getElementById("subtypeSel");
    for (var type in typeSubtype) {
        typeSel.options[typeSel.options.length] = new Option(type, type);
    }
    typeSel.onchange = function () {
        subtypeSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var subtype in typeSubtype[this.value]) {
            subtypeSel.options[subtypeSel.options.length] = new Option(subtype, subtype);
        }
    }
    typeSel.onchange(); // reset in case page is reloaded
}
