// import * as THREE from "three";
var main_container;
var countryCode;
var bg;
var bgIncognito;
var videoIncognito;
var title,
    title_incognito,
    sub_title_incognito;
var copy1;
var copy2_1;
var copy2_2;
var copy2_3;

var non_Incognito_container,
    incognito_container;


const fetchLocation = async () => {
    try {
      // Attempt to fetch location data based on IP
      let response = await fetch('https://ipapi.co/json/');
      let data = await response.json();
      return data.country_code;
    } catch (error) {
      console.error('Error:', error);
  
      // If IP-based geolocation fails, guess based on browser language
      let language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
                     navigator.language ||   // All browsers
                     navigator.userLanguage;

      // For simplicity, we're assuming the first part of the language tag is the country code
      // e.g., "en-US" for "English - United States"
      countryCode = language.split('-')[1];
      return countryCode || 'Unknown';
    }
  };


function init(){
    // viewportFunction();
    main_container = document.getElementById("main_container");
    non_Incognito_container = document.getElementById("container");
    incognito_container = document.getElementById("container_incognito");
    sub_title_incognito = document.getElementById("sub_title_incognito");
    bg = document.getElementById("bg");
    bgIncognito = document.getElementById("bg_incognito");
    videoIncognito = document.getElementById("videoIncognito");
    title = document.getElementById("title");
    copy1 = document.getElementById("copy1");
    copy2_1 = document.getElementById("copy2_1");
    copy2_2 = document.getElementById("copy2_2");
    copy2_3 = document.getElementById("copy2_3");

    title_incognito = document.getElementById("title_incognito");
    detectLanguage();
    // fetchLocation().then(countryCode => {
    //     main_container.style.display = "block";
    //     // for testing
    //     // countryCode = "FR";
    //     // document.getElementById("country").innerHTML = "<h4>Country Code: " + countryCode + "</h4>";
    //     if(countryCode == "FR"){
    //         title.innerHTML = "LUPIN EST DE RETOUR."
    //         copy1.innerHTML = "DÉCOUVREZ LA BANDE-ANNONCE PROCHAINEMENT."
    //         copy2_1.innerHTML = "OU METTEZ-VOUS EN"
    //         copy2_2.innerHTML = "MODE LUPIN"
    //         copy2_3.innerHTML = "AFIN DE LA REGARDER DÈS MAINTENANT."

    //         title_incognito.innerHTML = "MODE INCOGNITO <br class='title_incognito_br_m'>ACTIVÉ !"
    //         sub_title_incognito.innerHTML = "A PRÉSENT INDÉTECTABLE, PROFITEZ DE LA <br class='title_incognito_br_m'>BANDE-ANNONCE <br class='title_incognito_br_m_2'>SANS LAISSER AUCUNE TRACE."


    //         // A PRESENT INDETECTABLE, PROFITEZ DE LA BANDE-ANNOUNCE SANS LAISSER AUCUNE TRACE.
            
    //     }else{
    //         title.innerHTML = "LUPIN IS BACK."
    //         copy1.innerHTML = "WATCH THE TRAILER SOON."
    //         copy2_1.innerHTML = "OR SWITCH TO"
    //         copy2_2.innerHTML = "LUPIN MODE"
    //         copy2_3.innerHTML = "AND WATCH IT NOW."

    //         title_incognito.innerHTML = "YOU’VE GONE INCOGNITO."
    //         sub_title_incognito.innerHTML = "NOW THAT YOU GOT IN HERE LEAVING <br class='br_sub_title_incognito'>NO TRACE, ENJOY THE TRAILER."

    //     }

    //   });

    detectIncognito().then((result) => {
        if (result.isPrivate==true) {
            console.log("incognito");
            show_Incognito_Elements();
            hide_nonIncognito_Elements();
            // bg.style.backgroundImage = "url('images/bg_incognito.jpg')";;
            // bg.style.backgroundPosition = "center";
            // videoIncognito.style.display = "block";
            // document.getElementById("videoIncognito").innerHTML = "<iframe src='https://www.youtube.com/embed/QH2-TGUlwu4' width='560' height='315' title='Nyan Cat [original]' frameborder='0' allowfullscreen></iframe>";
            // document.getElementById("private").innerHTML ="<h1>Private</h1>";
            // document.getElementById("bg").style.display = "none"
        }else{
            non_Incognito_container.style.display = "block";
        }

    });
}

function detectLanguage(){
    main_container.style.display = "block";
    // var userLang = navigator.language || navigator.userLanguage; 
    // console.log ("The language is: " + userLang);
    const urlString = window.location.href;
    const url = new URL(urlString);

    // Get the query parameters
    const params = new URLSearchParams(url.search);
    // Check if ‘lang’ parameter is set

    if (params.has('lang')) {
        // console.log('Hey Don we have the lang var lets set the wanted language if we have it if not we set it to english');
        const langValue = params.get('lang');
        console.log(langValue)

        if(langValue == "fr"){
            console.log('show fr');
            title.innerHTML = "LUPIN EST DE RETOUR."
            copy1.innerHTML = "DÉCOUVREZ LA BANDE-ANNONCE PROCHAINEMENT."
            copy2_1.innerHTML = "OU METTEZ-VOUS EN"
            copy2_2.innerHTML = "MODE LUPIN"
            copy2_3.innerHTML = "AFIN DE LA REGARDER DÈS MAINTENANT."

            title_incognito.innerHTML = "MODE INCOGNITO <br class='title_incognito_br_m'>ACTIVÉ !"
            sub_title_incognito.innerHTML = "A PRÉSENT INDÉTECTABLE, PROFITEZ DE LA <br class='title_incognito_br_m'>BANDE-ANNONCE <br class='title_incognito_br_m_2'>SANS LAISSER AUCUNE TRACE."
        }else{
            console.log("show en");
            title.innerHTML = "LUPIN IS BACK."
            copy1.innerHTML = "WATCH THE TRAILER SOON."
            copy2_1.innerHTML = "OR SWITCH TO"
            copy2_2.innerHTML = "LUPIN MODE"
            copy2_3.innerHTML = "AND WATCH IT NOW."

            title_incognito.innerHTML = "YOU’VE GONE INCOGNITO."
            sub_title_incognito.innerHTML = "NOW THAT YOU GOT IN HERE LEAVING <br class='br_sub_title_incognito'>NO TRACE, ENJOY THE TRAILER."
        }
    } else {
        // console.log('oh no there is no lang set, lets use the navigator language if its on french show french if its on english show english');
        var userLang = navigator.language || navigator.userLanguage; 
        console.log ("The language is: " + userLang);
        if(userLang == "fr"){
            // console.log('boom')
            title.innerHTML = "LUPIN EST DE RETOUR."
            copy1.innerHTML = "DÉCOUVREZ LA BANDE-ANNONCE PROCHAINEMENT."
            copy2_1.innerHTML = "OU METTEZ-VOUS EN"
            copy2_2.innerHTML = "MODE LUPIN"
            copy2_3.innerHTML = "AFIN DE LA REGARDER DÈS MAINTENANT."

            title_incognito.innerHTML = "MODE INCOGNITO <br class='title_incognito_br_m'>ACTIVÉ !"
            sub_title_incognito.innerHTML = "A PRÉSENT INDÉTECTABLE, PROFITEZ DE LA <br class='title_incognito_br_m'>BANDE-ANNONCE <br class='title_incognito_br_m_2'>SANS LAISSER AUCUNE TRACE."
            
        }else{
            title.innerHTML = "LUPIN IS BACK."
            copy1.innerHTML = "WATCH THE TRAILER SOON."
            copy2_1.innerHTML = "OR SWITCH TO"
            copy2_2.innerHTML = "LUPIN MODE"
            copy2_3.innerHTML = "AND WATCH IT NOW."

            title_incognito.innerHTML = "YOU’VE GONE INCOGNITO."
            sub_title_incognito.innerHTML = "NOW THAT YOU GOT IN HERE LEAVING <br class='br_sub_title_incognito'>NO TRACE, ENJOY THE TRAILER."
        }
            
    }
}

function hide_nonIncognito_Elements(){
    non_Incognito_container.style.display = "none";
}

function show_Incognito_Elements(){
    incognito_container.style.display = "block";
}

// ==================================================== GLOBAL SCOPE DECLARATIONS ========================================================
// let camera: THREE.PerspectiveCamera, scene: THREE.Scene, raycaster: THREE.Raycaster, renderer: THREE.WebGLRenderer;
// let canvas_dom: any;
// let intersects: any;
// let controls;

// let zoom = 1;

window.onload = init;
