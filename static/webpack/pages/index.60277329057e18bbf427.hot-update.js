webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pages_MainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/MainPage */ "./pages/MainPage.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_google_analytics_ga_utils_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/google-analytics/ga-utils.ts */ "./components/google-analytics/ga-utils.ts");


var _jsxFileName = "C:\\Users\\fraan\\Documents\\craonsite-modifiche_giugno\\pages\\index.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var handleAcceptCookie = function handleAcceptCookie() {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      Object(components_google_analytics_ga_utils_ts__WEBPACK_IMPORTED_MODULE_7__["initGA"])(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    console.log('coookies', Object(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["getCookieConsentValue"])());
  };

  var handleDeclineCookie = function handleDeclineCookie() {
    //remove google analytics cookies
    react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["Cookies"].remove("_ga");
    react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["Cookies"].remove("_gat");
    react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["Cookies"].remove("_gid");
    console.log('coookies', Object(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["getCookieConsentValue"])());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var isConsent = Object(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6__["getCookieConsentValue"])();

    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "siteContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_cookie_consent__WEBPACK_IMPORTED_MODULE_6___default.a, {
      debug: false,
      location: "bottom",
      style: {
        background: '#f5f2ee',
        color: '#696259'
      },
      buttonStyle: {
        background: '#2296d4',
        borderColor: '2296d4',
        color: '#fff',
        padding: '1rem'
      },
      buttonText: "ACCONSENTO",
      enableDeclineButton: false,
      declineButtonText: "DECLINO",
      declineButtonStyle: {
        background: 'red',
        borderColor: '2296d4',
        color: '#fff',
        padding: '1rem'
      },
      cookieName: "craon_cookies",
      expires: 150,
      onAccept: handleAcceptCookie,
      onDecline: handleDeclineCookie,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Informazioni sui cookie presenti in questo sito"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["Utilizziamo i ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: '/terminiecondizioni',
                  children: " cookie per raccogliere   "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 51
                }, this), "e analizzare informazioni sulle prestazioni e sull'utilizzo del sito, per fornire funzionalit\xE0 di social media e per migliorare e personalizzare contenuti e pubblicit\xE0 presenti"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Craon Srl"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/favicon/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#ffffff"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "Craon Srl"
      }, "title", false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Progettazione realizzazione gestione sistemi informativi. Digitalizzazione aziendale. B2B e-commerce. Business To Business. Integrazione sistemi.  Assistenza sistemistica. Formazione digitale, Progettazzione sistemi informativi Consulenza informatica it solutions, Sviluppo app, sviluppo applicaizoni, corsi informatica, corso react, corso angular, ricerca IT, ricerca informatica. Buy beautiful, responsive deisgn yourwebsite. Video corsi videocorsi online c# asp.net core 3.1 asp.net cire core Craon \xE8 il partner giusto. sviluppo portali web sviluppo portale web per PMI piccole medie imprese. applicazioni per pmi. resoourcing. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://kit.fontawesome.com/f9028cf83e.js",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(pages_MainPage__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        display: 'none'
      },
      children: "servizi offerti da Craon sono molteplici: si va dalla progettazione, realizzazione e gestione di sistemi informativi allo sviluppo di software, portali web e applicazioni mobile. Un\u2019azienda informatica a 360\xB0 che rivolge i propri servizi sia alle PMI, con prodotti specialistici \u201Con demand\u201D, sia alle grandi aziende del settore bancario e finanziario, che ricercano attraverso l\u2019outsourcing dei propri progetti una maggiore flessibilit\xE0. CRAON \xC8 IL PARTNER GIUSTO riduzione dei costi: Craon si propone di adeguare il giusto dimensionamento di una architettura informatica e la geolocalizzazione della stessa con un reale beneficio a livello di costi adeguatezza dei sistemi: Craon si adopera affinch\xE8 si fornisca al cliente un'infrastruttura su misura,tarata su analisi effettuata dai nostri professionisti,partendo dal livello pi\xF9 basso come l'hardware arrivando alle integrazioni fra i diversi sistemi aziendali Craon \xE8 sempre aggiornata sulle nuove tecnologie e si propone di restare al passo fornendo ai propri clienti soluzioni all'avanguardia in grado di soddisfare le necessit\xE0 sempre pi\xF9 crescenti di performance ottimizzando i costi aziendali . L\u2019interesse per il coding, negli ultimi anni, \xE8 cresciuto in maniera esponenziale. Il termine significa letteralmente programmazione, ma quando si parla di coding non si intende la programmazione informatica nel senso pi\xF9 tradizionale dell\u2019espressione, ovvero la scrittura di codice. Non \xE8 \u201Croba da ingegneri\u201D ma una nuova lingua, indispensabile nel mondo odierno forse pi\xF9 dell\u2019inglese, perch\xE9 permette di capire come funziona un computer e di dialogare con esso per assegnargli dei compiti e dei comandi. Per questo il coding dovrebbe, a nostro avviso, diventare una materia di studio obbligatoria gi\xE0 a partire dalla scuola primaria. Imparando questa lingua, bambini e ragazzi diventano infatti utenti attivi e consapevoli di tecnologia, anzi ne diventano produttori. Il progetto Code Campus nasce un anno e mezzo fa proprio con questo obiettivo: avvicinare i bambini dai 6 anni in su al mondo del digitale con un ruolo attivo e aiutarli a sviluppare competenze e capacit\xE0 che gli saranno utili per il futuro. Come lo facciamo? Attraverso dei percorsi formativi che pensiamo e strutturiamo insieme ai loro insegnanti a scuola. Utilizziamo metodi di apprendimento cooperativo per favorire l\u2019interazione e la collaborazione tra gli studenti, valorizzando l\u2019apporto di ogni singolo componente del gruppo in vista del raggiungimento di un obiettivo comune. Con i nostri corsi bambini e ragazzi scopriranno i lati pi\xF9 divertenti della programmazione e svilupperanno la propria immaginazione. Crediamo infatti che il gioco e la creativit\xE0 siano un fondamentale strumento di conoscenza, un mezzo di aggregazione ma anche di espressione delle capacit\xE0 dei singoli. Il nostro intento non \xE8 quello di formare futuri programmatori, ma educare i bambini al pensiero computazionale, che \xE8 la capacit\xE0 di risolvere problemi pianificando la strategia migliore. Usando la logica, imparano a scomporre i problemi pi\xF9 complessi in tante piccole parti, che diventano pi\xF9 gestibili se affrontate una per volta. Trovando una soluzione a ciascuna di esse, i bambini sono poi in grado di risolvere il problema generale. Il coding \xE8 lo strumento pi\xF9 adatto per insegnare ai bambini a pensare in maniera computazionale, perch\xE9 utilizza un approccio ludico. Insomma i bambini non imparano solo a programmare, ma programmano per apprendere, e lo fanno divertendosi. CRAON ACADEMY La Craon Academy nasce con l\u2019intento di offrire una formazione tecnica adeguata per stare al passo con le richieste provenienti dal mercato ICT. I corsi vertono sulle seguenti aree e tecnologie: Java, Microsoft .Net, C#, PHP, Python, Android, iOs, xmarine, PLSQL I nostri corsi sono rivolti a: giovani neodiplomati e neolaureati in discipline scientifiche, che vogliano colmare il gap tra la preparazione scolastica e le skill richieste dal mercato chiunque desideri una formazione di base o specialistica nelle suddette tecnologie I corsi hanno una durata di 3 mesi e si svolgono dal luned\xEC al venerd\xEC presso la nostra sede di Vimercate. Al termine del corso i migliori candidati verranno inseriti nel nostro organico. Craon da sempre offre l\u2019esperienza e la professionalit\xE0 dei propri addetti alle societ\xE0 che necessitano una consulenza specifica e competente in campo informatico. Le figure professionali che propone sono: analisti programmatori; web developer developer mobile web designer analisti funzionali; programmatori (da Junior a Senior); sistemisti (da Junior a Senior); database administrator (DBA); project manager; personale per la gestione ordinaria delle infrastrutture; operatori business intelligence architetti it PMP PMO Nell\u2019era 4.0 un\u2019impresa di qualsiasi dimensione per avere visibilit\xE0 deve essere online. Per questo motivo Craon offre ai propri clienti soluzioni web a 360\xB0: dalla registrazione del dominio, alla progettazione e creazione del sito, al collocamento dello stesso su server Craon (hosting) o su macchine di propriet\xE0 del cliente ma situate presso il data center Craon (housing), al posizionamento ottimale nei motori di ricerca e alla eventuale manutenzione del sito. Craon utilizza gli strumenti e i linguaggi (HTML, PHP, ASP, ASP.NET, JAVA) pi\xF9 adeguati e all\u2019avanguardia per sviluppare oltre a semplici siti html, applicazioni web per la gestione di banche dati, CMS (Content Management System), soluzioni di \u201Ce-commerce\u201D e di condivisione di documenti. I servizi web offerti da Craon sono: registrazione dominio; soluzioni di posta elettronica; PEC (Posta Elettronica Certificata); progettazione e sviluppo siti web; servizi di hosting e housing; firewall; vulnerability test; web site monitoring; soluzioni web marketing; piattaforme per e-learning; sistemi di ticketing; sviluppo mobile. Il personale di Craon possiede tutte le competenze e capacit\xE0 tecniche per analizzare le esigenze del cliente e proporre la pi\xF9 adeguata soluzione hardware, software e di networking, garantendo anche un\u2019attivit\xE0 di supporto sistemistico a vari livelli su apparecchiature con tecnologie Microsoft e Unix/Linux.CRAON svolge, inoltre, un\u2019attivit\xE0 di assistenza sistemistica (di vari livelli) su apparecchiature con tecnologie Microsoft e Unix/Linux, grazie alle competenze e capacit\xE0 tecniche del proprio personale.Servizi di assistenza sistemistica: progettazione e realizzazione infrastruttura reti; installazione, configurazione di router, firewall e apparati vari; installazione e manutenzione server Microsoft e Unix/Linux; virtualizzazione server; controllo e gestione di sistemi di backup; installazione software; installazione, configurazione e manutenzione postazioni client; installazione e gestione di periferiche (scanner, stampanti di rete e locali). I tecnici CRAON possono operare sulle postazioni dei clienti direttamente o tramite collegamenti da remoto per rendere l\u2019intervento il pi\xF9 tempestivo e rapido possibile. Ogni azienda ha caratteristiche proprie che la distinguono dalle altre. Ci\xF2 implica che soluzioni standard possano non risultare adeguate a soddisfare i bisogni di un\u2019impresa e siano necessarie soluzioni su misura. Per questo motivo Craon si occupa di progettazione sistemi informativi on demand che rispondano in maniera efficace ed efficiente alle necessit\xE0 di ogni singolo cliente. L\u2019evoluzione tecnologica spinge molte societ\xE0 a innovarsi e a rinnovare, ma spesso questo processo implica fasi di transito da un vecchio sistema a uno nuovo con relativi problemi di dialogo tra le diverse applicazioni. Craon dispone di uno staff di analisti e programmatori in grado di valutare le problematiche e sviluppare la migliore soluzione di system integration. RIVENDITA HARDWARE E SOFTWARE Per offrire un servizio globale ai propri clienti Craon si occupa anche della rivendita o noleggio di hardware e software delle migliori marche. Craon si occupa di database management ovvero di ideare e realizzare database relazionali per l\u2019archiviazione dei dati su piattaforme SQL Microsoft, Mysql ed Oracle. Nel 2005 Craon ha ottenuto un riconoscimento dal National Cancer Institute per il servizio di alta professionalit\xE0 reso in qualit\xE0 di Database Designer and Manager nello studio internazionale sulle cause del tumore ai polmoni."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImhhbmRsZUFjY2VwdENvb2tpZSIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfR09PR0xFX0FOQUxZVElDU19JRCIsImluaXRHQSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb29raWVDb25zZW50VmFsdWUiLCJoYW5kbGVEZWNsaW5lQ29va2llIiwiQ29va2llcyIsInJlbW92ZSIsInVzZUVmZmVjdCIsImlzQ29uc2VudCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlckNvbG9yIiwicGFkZGluZyIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFFN0IsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2QkFBaEIsRUFBK0M7QUFDN0NDLDRGQUFNLENBQUNILE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2QkFBYixDQUFOO0FBQ0Q7O0FBQ0RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JDLGtGQUFxQixFQUE3QztBQUNELEdBTEQ7O0FBTUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDO0FBQ0FDLGdFQUFPLENBQUNDLE1BQVIsQ0FBZSxLQUFmO0FBQ0FELGdFQUFPLENBQUNDLE1BQVIsQ0FBZSxNQUFmO0FBQ0FELGdFQUFPLENBQUNDLE1BQVIsQ0FBZSxNQUFmO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JDLGtGQUFxQixFQUE3QztBQUNELEdBTkQ7O0FBT0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVMsR0FBR0wsa0ZBQXFCLEVBQXZDOztB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Y0FsQkgsZUFtQkc7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSCxlQW9CRztBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJILGVBcUJHO0FBQU0sWUFBSSxFQUFDLDZFQUFYO0FBQXlGLFdBQUcsRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJILGVBc0JHO0FBQU0sWUFBSSxFQUFDLG9GQUFYO0FBQWdHLFdBQUcsRUFBQztBQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJILGVBdUJHO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQyxTQUFrRCxPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJILGVBd0JHO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkgsZUE0Qkk7QUFBUSxXQUFHLEVBQUMsMkNBQVo7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDTCxlQStETSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0ROLGVBZ0ZNO0FBQUksV0FBSyxFQUFFO0FBQUVTLGVBQU8sRUFBRTtBQUFYLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpTEQ7O0dBeE11QmxCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjAyNzczMjkwNTdlMThiYmY0MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcInBhZ2VzL01haW5QYWdlXCI7XG5pbXBvcnQgQ29va2llQ29uc2VudCwgeyBDb29raWVzLCBnZXRDb29raWVDb25zZW50VmFsdWUgfSBmcm9tIFwicmVhY3QtY29va2llLWNvbnNlbnRcIjtcbmltcG9ydCB7IGluaXRHQSB9IGZyb20gXCJjb21wb25lbnRzL2dvb2dsZS1hbmFseXRpY3MvZ2EtdXRpbHMudHNcIjtcblxuIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdENvb2tpZSA9ICgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dPT0dMRV9BTkFMWVRJQ1NfSUQpIHtcbiAgICAgIGluaXRHQShwcm9jZXNzLmVudi5SRUFDVF9BUFBfR09PR0xFX0FOQUxZVElDU19JRCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjb29va2llcycsIGdldENvb2tpZUNvbnNlbnRWYWx1ZSgpKVxuICB9O1xuICBjb25zdCBoYW5kbGVEZWNsaW5lQ29va2llID0gKCkgPT4ge1xuICAgIC8vcmVtb3ZlIGdvb2dsZSBhbmFseXRpY3MgY29va2llc1xuICAgIENvb2tpZXMucmVtb3ZlKFwiX2dhXCIpO1xuICAgIENvb2tpZXMucmVtb3ZlKFwiX2dhdFwiKTtcbiAgICBDb29raWVzLnJlbW92ZShcIl9naWRcIik7XG4gICAgY29uc29sZS5sb2coJ2Nvb29raWVzJywgZ2V0Q29va2llQ29uc2VudFZhbHVlKCkpXG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNDb25zZW50ID0gZ2V0Q29va2llQ29uc2VudFZhbHVlKCk7XG4gICAgaWYgKGlzQ29uc2VudCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIGhhbmRsZUFjY2VwdENvb2tpZSgpO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGVDb250YWluZXJcIj5cbiAgICAgICA8Q29va2llQ29uc2VudCBcbiAgICAgICAgICAgIGRlYnVnPXtmYWxzZX1cbiAgICAgICAgICAgIGxvY2F0aW9uPVwiYm90dG9tXCJcbiAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogJyNmNWYyZWUnLCBjb2xvcjogJyM2OTYyNTknIH19XG4gICAgICAgICAgICBidXR0b25TdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzIyOTZkNCcsIGJvcmRlckNvbG9yOiAnMjI5NmQ0JywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzFyZW0nIH19XG4gICAgICAgICAgICBidXR0b25UZXh0PVwiQUNDT05TRU5UT1wiXG4gICAgICAgICAgICBlbmFibGVEZWNsaW5lQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgICAgIGRlY2xpbmVCdXR0b25UZXh0PVwiREVDTElOT1wiXG4gICAgICAgICAgICBkZWNsaW5lQnV0dG9uU3R5bGU9e3sgYmFja2dyb3VuZDogJ3JlZCcsIGJvcmRlckNvbG9yOiAnMjI5NmQ0JywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzFyZW0nIH19XG4gICAgICAgICAgICBjb29raWVOYW1lPVwiY3Jhb25fY29va2llc1wiXG4gICAgICAgICAgICBleHBpcmVzPXsxNTB9XG4gICAgICAgICAgICBvbkFjY2VwdD17aGFuZGxlQWNjZXB0Q29va2llfVxuICAgICAgICAgICAgb25EZWNsaW5lPXtoYW5kbGVEZWNsaW5lQ29va2llfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMz5JbmZvcm1hemlvbmkgc3VpIGNvb2tpZSBwcmVzZW50aSBpbiBxdWVzdG8gc2l0bzwvaDM+XG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxpenppYW1vIGkgPExpbmsgaHJlZj17Jy90ZXJtaW5pZWNvbmRpemlvbmknfT4gY29va2llIHBlciByYWNjb2dsaWVyZSAgIDwvTGluaz5lIGFuYWxpenphcmUgaW5mb3JtYXppb25pIHN1bGxlIHByZXN0YXppb25pIGUgc3VsbCd1dGlsaXp6byBkZWwgc2l0bywgcGVyIGZvcm5pcmUgZnVuemlvbmFsaXTDoCBkaSBzb2NpYWwgbWVkaWEgZSBwZXIgbWlnbGlvcmFyZSBlIHBlcnNvbmFsaXp6YXJlIGNvbnRlbnV0aSBlIHB1YmJsaWNpdMOgIHByZXNlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvQ29va2llQ29uc2VudD5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkNyYW9uIFNybDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjU3eDU3XCIgaHJlZj1cIi9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nXCIvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNjB4NjBcIiBocmVmPVwiL2Zhdmljb24vYXBwbGUtaWNvbi02MHg2MC5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzJ4NzJcIiBocmVmPVwiL2Zhdmljb24vYXBwbGUtaWNvbi03Mng3Mi5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzZ4NzZcIiBocmVmPVwiL2Zhdmljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTE0eDExNFwiIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS1pY29uLTExNHgxMTQucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPVwiL2Zhdmljb24vYXBwbGUtaWNvbi0xMjB4MTIwLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj1cIi9mYXZpY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTUyeDE1MlwiIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS1pY29uLTE1MngxNTIucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2Zhdmljb24vYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTkyeDE5MlwiICBocmVmPVwiL2Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiOTZ4OTZcIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi05Nng5Ni5wbmdcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9mYXZpY29uL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9tcy1pY29uLTE0NHgxNDQucG5nXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCI+PC9tZXRhPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPiAgICBcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNyYW9uIFNybFwiIGtleT1cInRpdGxlXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcm9nZXR0YXppb25lIHJlYWxpenphemlvbmUgZ2VzdGlvbmUgc2lzdGVtaSBpbmZvcm1hdGl2aS4gRGlnaXRhbGl6emF6aW9uZSBhemllbmRhbGUuIEIyQiBlLWNvbW1lcmNlLiBCdXNpbmVzcyBUbyBCdXNpbmVzcy4gSW50ZWdyYXppb25lIHNpc3RlbWkuIFxuICAgICAgICAgICAgIEFzc2lzdGVuemEgc2lzdGVtaXN0aWNhLiBGb3JtYXppb25lIGRpZ2l0YWxlLCBQcm9nZXR0YXp6aW9uZSBzaXN0ZW1pIGluZm9ybWF0aXZpIENvbnN1bGVuemEgaW5mb3JtYXRpY2EgaXQgc29sdXRpb25zLCBTdmlsdXBwbyBhcHAsIHN2aWx1cHBvIGFwcGxpY2Fpem9uaSwgY29yc2kgaW5mb3JtYXRpY2EsIGNvcnNvIHJlYWN0LCBjb3JzbyBhbmd1bGFyLFxuICAgICAgICAgICAgIHJpY2VyY2EgSVQsIHJpY2VyY2EgaW5mb3JtYXRpY2EuIEJ1eSBiZWF1dGlmdWwsIHJlc3BvbnNpdmUgZGVpc2duIHlvdXJ3ZWJzaXRlLiBWaWRlbyBjb3JzaSB2aWRlb2NvcnNpIG9ubGluZSBjIyBhc3AubmV0IGNvcmUgMy4xIGFzcC5uZXQgY2lyZSBjb3JlXG4gICAgICAgICAgICAgQ3Jhb24gw6ggaWwgcGFydG5lciBnaXVzdG8uIHN2aWx1cHBvIHBvcnRhbGkgd2ViIHN2aWx1cHBvIHBvcnRhbGUgd2ViIHBlciBQTUkgcGljY29sZSBtZWRpZSBpbXByZXNlLiBhcHBsaWNhemlvbmkgcGVyIHBtaS4gcmVzb291cmNpbmcuIFwiLz5cbiAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9mOTAyOGNmODNlLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPE1haW5QYWdlIC8+XG4gICAgIFxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIFJlYWR7JyAnfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3Npc3RlbnphXCI+XG4gICAgICAgICAgICAgIDxhPnRoaXMgcGFnZSE8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBzcmM9XCIvYmdfaG9tZS5qcGdcIiAvLyBSb3V0ZSBvZiB0aGUgaW1hZ2UgZmlsZSBcbiAgICAgICAgICAgIGhlaWdodD17MTQ0fSAvLyBEZXNpcmVkIHNpemUgd2l0aCBjb3JyZWN0IGFzcGVjdCByYXRpb1xuICAgICAgICAgICAgd2lkdGg9ezE0NH0gLy8gRGVzaXJlZCBzaXplIHdpdGggY29ycmVjdCBhc3BlY3QgcmF0aW9cbiAgICAgICAgICAgIGFsdD1cIllvdXIgTmFtZVwiXG4gICAgICAgICAgLz4gKi99XG5cblxuXG4gICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSA+XG4gICAgICAgICAgc2Vydml6aSBvZmZlcnRpIGRhIENyYW9uIHNvbm8gbW9sdGVwbGljaTogc2kgdmEgZGFsbGEgcHJvZ2V0dGF6aW9uZSwgcmVhbGl6emF6aW9uZSBlIGdlc3Rpb25lIGRpIHNpc3RlbWkgaW5mb3JtYXRpdmkgYWxsbyBzdmlsdXBwbyBkaSBzb2Z0d2FyZSwgcG9ydGFsaSB3ZWIgZSBhcHBsaWNhemlvbmkgbW9iaWxlLlxuVW7igJlhemllbmRhIGluZm9ybWF0aWNhIGEgMzYwwrAgY2hlIHJpdm9sZ2UgaSBwcm9wcmkgc2Vydml6aSBzaWEgYWxsZSBQTUksIGNvbiBwcm9kb3R0aSBzcGVjaWFsaXN0aWNpIOKAnG9uIGRlbWFuZOKAnSwgc2lhIGFsbGUgZ3JhbmRpIGF6aWVuZGUgZGVsIHNldHRvcmUgYmFuY2FyaW8gZSBmaW5hbnppYXJpbywgY2hlIHJpY2VyY2FubyBhdHRyYXZlcnNvIGzigJlvdXRzb3VyY2luZyBkZWkgcHJvcHJpIHByb2dldHRpIHVuYSBtYWdnaW9yZSBmbGVzc2liaWxpdMOgLlxuQ1JBT04gw4ggSUwgUEFSVE5FUiBHSVVTVE9cbiAgICAgICAgICByaWR1emlvbmUgZGVpIGNvc3RpOlxuICAgICAgICAgIENyYW9uIHNpIHByb3BvbmUgZGkgYWRlZ3VhcmUgaWwgZ2l1c3RvIGRpbWVuc2lvbmFtZW50byBkaSB1bmEgYXJjaGl0ZXR0dXJhIGluZm9ybWF0aWNhIGUgbGEgZ2VvbG9jYWxpenphemlvbmUgZGVsbGEgc3Rlc3NhIGNvbiB1biByZWFsZSBiZW5lZmljaW8gYSBsaXZlbGxvIGRpIGNvc3RpIFxuICAgICAgICAgIGFkZWd1YXRlenphIGRlaSBzaXN0ZW1pOiBcbiAgICAgICAgICBDcmFvbiBzaSBhZG9wZXJhIGFmZmluY2jDqCBzaSBmb3JuaXNjYSBhbCBjbGllbnRlIHVuJ2luZnJhc3RydXR0dXJhIHN1IG1pc3VyYSx0YXJhdGEgc3UgYW5hbGlzaSBlZmZldHR1YXRhIGRhaSBub3N0cmkgcHJvZmVzc2lvbmlzdGkscGFydGVuZG8gZGFsIGxpdmVsbG8gcGnDuSBiYXNzbyBjb21lIGwnaGFyZHdhcmUgYXJyaXZhbmRvIGFsbGUgaW50ZWdyYXppb25pIGZyYSBpIGRpdmVyc2kgc2lzdGVtaSBhemllbmRhbGlcbiAgICAgICAgICBDcmFvbiDDqCBzZW1wcmUgYWdnaW9ybmF0YSBzdWxsZSBudW92ZSB0ZWNub2xvZ2llIGUgc2kgcHJvcG9uZSBkaSByZXN0YXJlIGFsIHBhc3NvIGZvcm5lbmRvIGFpIHByb3ByaSBjbGllbnRpIHNvbHV6aW9uaSBhbGwnYXZhbmd1YXJkaWEgaW4gZ3JhZG8gZGkgc29kZGlzZmFyZSBsZSBuZWNlc3NpdMOgIHNlbXByZSBwacO5IGNyZXNjZW50aSBkaSBwZXJmb3JtYW5jZSBvdHRpbWl6emFuZG8gaSBjb3N0aSBhemllbmRhbGkgXG4gICAgICAgICAgLlxuICAgICAgICAgIEzigJlpbnRlcmVzc2UgcGVyIGlsIGNvZGluZywgbmVnbGkgdWx0aW1pIGFubmksIMOoIGNyZXNjaXV0byBpbiBtYW5pZXJhIGVzcG9uZW56aWFsZS4gSWwgdGVybWluZSBzaWduaWZpY2EgbGV0dGVyYWxtZW50ZSBwcm9ncmFtbWF6aW9uZSwgbWEgcXVhbmRvIHNpIHBhcmxhIGRpIGNvZGluZyBub24gc2kgaW50ZW5kZSBsYSBwcm9ncmFtbWF6aW9uZSBpbmZvcm1hdGljYSBuZWwgc2Vuc28gcGnDuSB0cmFkaXppb25hbGUgZGVsbOKAmWVzcHJlc3Npb25lLCBvdnZlcm8gbGEgc2NyaXR0dXJhIGRpIGNvZGljZS5cblxuTm9uIMOoIOKAnHJvYmEgZGEgaW5nZWduZXJp4oCdIG1hIHVuYSBudW92YSBsaW5ndWEsIGluZGlzcGVuc2FiaWxlIG5lbCBtb25kbyBvZGllcm5vIGZvcnNlIHBpw7kgZGVsbOKAmWluZ2xlc2UsIHBlcmNow6kgcGVybWV0dGUgZGkgY2FwaXJlIGNvbWUgZnVuemlvbmEgdW4gY29tcHV0ZXIgZSBkaSBkaWFsb2dhcmUgY29uIGVzc28gcGVyIGFzc2VnbmFyZ2xpIGRlaSBjb21waXRpIGUgZGVpIGNvbWFuZGkuXG5cblBlciBxdWVzdG8gaWwgY29kaW5nIGRvdnJlYmJlLCBhIG5vc3RybyBhdnZpc28sIGRpdmVudGFyZSB1bmEgbWF0ZXJpYSBkaSBzdHVkaW8gb2JibGlnYXRvcmlhIGdpw6AgYSBwYXJ0aXJlIGRhbGxhIHNjdW9sYSBwcmltYXJpYS4gSW1wYXJhbmRvIHF1ZXN0YSBsaW5ndWEsIGJhbWJpbmkgZSByYWdhenppIGRpdmVudGFubyBpbmZhdHRpIHV0ZW50aSBhdHRpdmkgZSBjb25zYXBldm9saSBkaSB0ZWNub2xvZ2lhLCBhbnppIG5lIGRpdmVudGFubyBwcm9kdXR0b3JpLlxuXG5JbCBwcm9nZXR0byBDb2RlIENhbXB1cyBuYXNjZSB1biBhbm5vIGUgbWV6em8gZmEgcHJvcHJpbyBjb24gcXVlc3RvIG9iaWV0dGl2bzogYXZ2aWNpbmFyZSBpIGJhbWJpbmkgZGFpIDYgYW5uaSBpbiBzdSBhbCBtb25kbyBkZWwgZGlnaXRhbGUgY29uIHVuIHJ1b2xvIGF0dGl2byBlIGFpdXRhcmxpIGEgc3ZpbHVwcGFyZSBjb21wZXRlbnplIGUgY2FwYWNpdMOgIGNoZSBnbGkgc2FyYW5ubyB1dGlsaSBwZXIgaWwgZnV0dXJvLlxuXG5Db21lIGxvIGZhY2NpYW1vPyBBdHRyYXZlcnNvIGRlaSBwZXJjb3JzaSBmb3JtYXRpdmkgY2hlIHBlbnNpYW1vIGUgc3RydXR0dXJpYW1vIGluc2llbWUgYWkgbG9ybyBpbnNlZ25hbnRpIGEgc2N1b2xhLiBVdGlsaXp6aWFtbyBtZXRvZGkgZGkgYXBwcmVuZGltZW50byBjb29wZXJhdGl2byBwZXIgZmF2b3JpcmUgbOKAmWludGVyYXppb25lIGUgbGEgY29sbGFib3JhemlvbmUgdHJhIGdsaSBzdHVkZW50aSwgdmFsb3JpenphbmRvIGzigJlhcHBvcnRvIGRpIG9nbmkgc2luZ29sbyBjb21wb25lbnRlIGRlbCBncnVwcG8gaW4gdmlzdGEgZGVsIHJhZ2dpdW5naW1lbnRvIGRpIHVuIG9iaWV0dGl2byBjb211bmUuXG5cbkNvbiBpIG5vc3RyaSBjb3JzaSBiYW1iaW5pIGUgcmFnYXp6aSBzY29wcmlyYW5ubyBpIGxhdGkgcGnDuSBkaXZlcnRlbnRpIGRlbGxhIHByb2dyYW1tYXppb25lIGUgc3ZpbHVwcGVyYW5ubyBsYSBwcm9wcmlhIGltbWFnaW5hemlvbmUuIENyZWRpYW1vIGluZmF0dGkgY2hlIGlsIGdpb2NvIGUgbGEgY3JlYXRpdml0w6Agc2lhbm8gdW4gZm9uZGFtZW50YWxlIHN0cnVtZW50byBkaSBjb25vc2NlbnphLCB1biBtZXp6byBkaSBhZ2dyZWdhemlvbmUgbWEgYW5jaGUgZGkgZXNwcmVzc2lvbmUgZGVsbGUgY2FwYWNpdMOgIGRlaSBzaW5nb2xpLlxuSWwgbm9zdHJvIGludGVudG8gbm9uIMOoIHF1ZWxsbyBkaSBmb3JtYXJlIGZ1dHVyaSBwcm9ncmFtbWF0b3JpLCBtYSBlZHVjYXJlIGkgYmFtYmluaSBhbCBwZW5zaWVybyBjb21wdXRhemlvbmFsZSwgY2hlIMOoIGxhIGNhcGFjaXTDoCBkaSByaXNvbHZlcmUgcHJvYmxlbWkgcGlhbmlmaWNhbmRvIGxhIHN0cmF0ZWdpYSBtaWdsaW9yZS4gVXNhbmRvIGxhIGxvZ2ljYSwgaW1wYXJhbm8gYSBzY29tcG9ycmUgaSBwcm9ibGVtaSBwacO5IGNvbXBsZXNzaSBpbiB0YW50ZSBwaWNjb2xlIHBhcnRpLCBjaGUgZGl2ZW50YW5vIHBpw7kgZ2VzdGliaWxpIHNlIGFmZnJvbnRhdGUgdW5hIHBlciB2b2x0YS4gVHJvdmFuZG8gdW5hIHNvbHV6aW9uZSBhIGNpYXNjdW5hIGRpIGVzc2UsIGkgYmFtYmluaSBzb25vIHBvaSBpbiBncmFkbyBkaSByaXNvbHZlcmUgaWwgcHJvYmxlbWEgZ2VuZXJhbGUuXG5cbklsIGNvZGluZyDDqCBsbyBzdHJ1bWVudG8gcGnDuSBhZGF0dG8gcGVyIGluc2VnbmFyZSBhaSBiYW1iaW5pIGEgcGVuc2FyZSBpbiBtYW5pZXJhIGNvbXB1dGF6aW9uYWxlLCBwZXJjaMOpIHV0aWxpenphIHVuIGFwcHJvY2NpbyBsdWRpY28uIEluc29tbWEgaSBiYW1iaW5pIG5vbiBpbXBhcmFubyBzb2xvIGEgcHJvZ3JhbW1hcmUsIG1hIHByb2dyYW1tYW5vIHBlciBhcHByZW5kZXJlLCBlIGxvIGZhbm5vIGRpdmVydGVuZG9zaS5cblxuIFxuXG5DUkFPTiBBQ0FERU1ZXG5MYSBDcmFvbiBBY2FkZW15IG5hc2NlIGNvbiBs4oCZaW50ZW50byBkaSBvZmZyaXJlIHVuYSBmb3JtYXppb25lIHRlY25pY2EgYWRlZ3VhdGEgcGVyIHN0YXJlIGFsIHBhc3NvIGNvbiBsZSByaWNoaWVzdGUgcHJvdmVuaWVudGkgZGFsIG1lcmNhdG8gSUNULiBJIGNvcnNpIHZlcnRvbm8gc3VsbGUgc2VndWVudGkgYXJlZSBlIHRlY25vbG9naWU6IEphdmEsIE1pY3Jvc29mdCAuTmV0LCBDIywgUEhQLCBQeXRob24sIEFuZHJvaWQsIGlPcywgeG1hcmluZSwgUExTUUxcbkkgbm9zdHJpIGNvcnNpIHNvbm8gcml2b2x0aSBhOlxuXG5naW92YW5pIG5lb2RpcGxvbWF0aSBlIG5lb2xhdXJlYXRpIGluIGRpc2NpcGxpbmUgc2NpZW50aWZpY2hlLCBjaGUgdm9nbGlhbm8gY29sbWFyZSBpbCBnYXAgdHJhIGxhIHByZXBhcmF6aW9uZSBzY29sYXN0aWNhIGUgbGUgc2tpbGwgcmljaGllc3RlIGRhbCBtZXJjYXRvXG5jaGl1bnF1ZSBkZXNpZGVyaSB1bmEgZm9ybWF6aW9uZSBkaSBiYXNlIG8gc3BlY2lhbGlzdGljYSBuZWxsZSBzdWRkZXR0ZSB0ZWNub2xvZ2llXG5JIGNvcnNpIGhhbm5vIHVuYSBkdXJhdGEgZGkgMyBtZXNpIGUgc2kgc3ZvbGdvbm8gZGFsIGx1bmVkw6wgYWwgdmVuZXJkw6wgcHJlc3NvIGxhIG5vc3RyYSBzZWRlIGRpIFZpbWVyY2F0ZS5cbkFsIHRlcm1pbmUgZGVsIGNvcnNvIGkgbWlnbGlvcmkgY2FuZGlkYXRpIHZlcnJhbm5vIGluc2VyaXRpIG5lbCBub3N0cm8gb3JnYW5pY28uXG5cblxuQ3Jhb24gZGEgc2VtcHJlIG9mZnJlIGzigJllc3BlcmllbnphIGUgbGEgcHJvZmVzc2lvbmFsaXTDoCBkZWkgcHJvcHJpIGFkZGV0dGkgYWxsZSBzb2NpZXTDoCBjaGUgbmVjZXNzaXRhbm8gdW5hIGNvbnN1bGVuemEgc3BlY2lmaWNhIGUgY29tcGV0ZW50ZSBpbiBjYW1wbyBpbmZvcm1hdGljby5cbkxlIGZpZ3VyZSBwcm9mZXNzaW9uYWxpIGNoZSBwcm9wb25lIHNvbm86XG5cbmFuYWxpc3RpIHByb2dyYW1tYXRvcmk7XG53ZWIgZGV2ZWxvcGVyXG5kZXZlbG9wZXIgbW9iaWxlXG53ZWIgZGVzaWduZXJcbmFuYWxpc3RpIGZ1bnppb25hbGk7XG5wcm9ncmFtbWF0b3JpIChkYSBKdW5pb3IgYSBTZW5pb3IpO1xuc2lzdGVtaXN0aSAoZGEgSnVuaW9yIGEgU2VuaW9yKTtcbmRhdGFiYXNlIGFkbWluaXN0cmF0b3IgKERCQSk7XG5wcm9qZWN0IG1hbmFnZXI7XG5wZXJzb25hbGUgcGVyIGxhIGdlc3Rpb25lIG9yZGluYXJpYSBkZWxsZSBpbmZyYXN0cnV0dHVyZTtcbm9wZXJhdG9yaSBidXNpbmVzcyBpbnRlbGxpZ2VuY2VcbmFyY2hpdGV0dGkgaXRcblBNUFxuUE1PXG5cbk5lbGzigJllcmEgNC4wIHVu4oCZaW1wcmVzYSBkaSBxdWFsc2lhc2kgZGltZW5zaW9uZSBwZXIgYXZlcmUgdmlzaWJpbGl0w6AgZGV2ZSBlc3NlcmUgb25saW5lLlxuUGVyIHF1ZXN0byBtb3Rpdm8gQ3Jhb24gb2ZmcmUgYWkgcHJvcHJpIGNsaWVudGkgc29sdXppb25pIHdlYiBhIDM2MMKwOiBkYWxsYSByZWdpc3RyYXppb25lIGRlbCBkb21pbmlvLCBhbGxhIHByb2dldHRhemlvbmUgZSBjcmVhemlvbmUgZGVsIHNpdG8sIGFsIGNvbGxvY2FtZW50byBkZWxsbyBzdGVzc28gc3Ugc2VydmVyIENyYW9uIChob3N0aW5nKSBvIHN1IG1hY2NoaW5lIGRpIHByb3ByaWV0w6AgZGVsIGNsaWVudGUgbWEgc2l0dWF0ZSBwcmVzc28gaWwgZGF0YSBjZW50ZXIgQ3Jhb24gKGhvdXNpbmcpLCBhbCBwb3NpemlvbmFtZW50byBvdHRpbWFsZSBuZWkgbW90b3JpIGRpIHJpY2VyY2EgZSBhbGxhIGV2ZW50dWFsZSBtYW51dGVuemlvbmUgZGVsIHNpdG8uXG5cbkNyYW9uIHV0aWxpenphIGdsaSBzdHJ1bWVudGkgZSBpIGxpbmd1YWdnaSAoSFRNTCwgUEhQLCBBU1AsIEFTUC5ORVQsIEpBVkEpIHBpw7kgYWRlZ3VhdGkgZSBhbGzigJlhdmFuZ3VhcmRpYSBwZXIgc3ZpbHVwcGFyZSBvbHRyZSBhIHNlbXBsaWNpIHNpdGkgaHRtbCwgYXBwbGljYXppb25pIHdlYiBwZXIgbGEgZ2VzdGlvbmUgZGkgYmFuY2hlIGRhdGksIENNUyAoQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbSksIHNvbHV6aW9uaSBkaSDigJxlLWNvbW1lcmNl4oCdIGUgZGkgY29uZGl2aXNpb25lIGRpIGRvY3VtZW50aS5cblxuSSBzZXJ2aXppIHdlYiBvZmZlcnRpIGRhIENyYW9uIHNvbm86XG5cbnJlZ2lzdHJhemlvbmUgZG9taW5pbztcbnNvbHV6aW9uaSBkaSBwb3N0YSBlbGV0dHJvbmljYTtcblBFQyAoUG9zdGEgRWxldHRyb25pY2EgQ2VydGlmaWNhdGEpO1xucHJvZ2V0dGF6aW9uZSBlIHN2aWx1cHBvIHNpdGkgd2ViO1xuc2Vydml6aSBkaSBob3N0aW5nIGUgaG91c2luZztcbmZpcmV3YWxsO1xudnVsbmVyYWJpbGl0eSB0ZXN0O1xud2ViIHNpdGUgbW9uaXRvcmluZztcbnNvbHV6aW9uaSB3ZWIgbWFya2V0aW5nO1xucGlhdHRhZm9ybWUgcGVyIGUtbGVhcm5pbmc7XG5zaXN0ZW1pIGRpIHRpY2tldGluZztcbnN2aWx1cHBvIG1vYmlsZS5cbklsIHBlcnNvbmFsZSBkaSBDcmFvbiBwb3NzaWVkZSB0dXR0ZSBsZSBjb21wZXRlbnplIGUgY2FwYWNpdMOgIHRlY25pY2hlIHBlciBhbmFsaXp6YXJlIGxlIGVzaWdlbnplIGRlbCBjbGllbnRlIGUgcHJvcG9ycmUgbGEgcGnDuSBhZGVndWF0YSBzb2x1emlvbmUgaGFyZHdhcmUsIHNvZnR3YXJlIGUgZGkgbmV0d29ya2luZywgZ2FyYW50ZW5kbyBhbmNoZSB1buKAmWF0dGl2aXTDoCBkaSBzdXBwb3J0byBzaXN0ZW1pc3RpY28gYSB2YXJpIGxpdmVsbGkgc3UgYXBwYXJlY2NoaWF0dXJlIGNvbiB0ZWNub2xvZ2llIE1pY3Jvc29mdCBlIFVuaXgvTGludXguQ1JBT04gc3ZvbGdlLCBpbm9sdHJlLCB1buKAmWF0dGl2aXTDoCBkaSBhc3Npc3RlbnphIHNpc3RlbWlzdGljYSAoZGkgdmFyaSBsaXZlbGxpKSBzdSBhcHBhcmVjY2hpYXR1cmUgY29uIHRlY25vbG9naWUgTWljcm9zb2Z0IGUgVW5peC9MaW51eCwgZ3JhemllIGFsbGUgY29tcGV0ZW56ZSBlIGNhcGFjaXTDoCB0ZWNuaWNoZSBkZWwgcHJvcHJpbyBwZXJzb25hbGUuU2Vydml6aSBkaSBhc3Npc3RlbnphIHNpc3RlbWlzdGljYTpcbnByb2dldHRhemlvbmUgZSByZWFsaXp6YXppb25lIGluZnJhc3RydXR0dXJhIHJldGk7XG5pbnN0YWxsYXppb25lLCBjb25maWd1cmF6aW9uZSBkaSByb3V0ZXIsIGZpcmV3YWxsIGUgYXBwYXJhdGkgdmFyaTtcbmluc3RhbGxhemlvbmUgZSBtYW51dGVuemlvbmUgc2VydmVyIE1pY3Jvc29mdCBlIFVuaXgvTGludXg7XG52aXJ0dWFsaXp6YXppb25lIHNlcnZlcjtcbmNvbnRyb2xsbyBlIGdlc3Rpb25lIGRpIHNpc3RlbWkgZGkgYmFja3VwO1xuaW5zdGFsbGF6aW9uZSBzb2Z0d2FyZTtcbmluc3RhbGxhemlvbmUsIGNvbmZpZ3VyYXppb25lIGUgbWFudXRlbnppb25lIHBvc3RhemlvbmkgY2xpZW50O1xuaW5zdGFsbGF6aW9uZSBlIGdlc3Rpb25lIGRpIHBlcmlmZXJpY2hlIChzY2FubmVyLCBzdGFtcGFudGkgZGkgcmV0ZSBlIGxvY2FsaSkuXG5JIHRlY25pY2kgQ1JBT04gcG9zc29ubyBvcGVyYXJlIHN1bGxlIHBvc3RhemlvbmkgZGVpIGNsaWVudGkgZGlyZXR0YW1lbnRlIG8gdHJhbWl0ZSBjb2xsZWdhbWVudGkgZGEgcmVtb3RvIHBlciByZW5kZXJlIGzigJlpbnRlcnZlbnRvIGlsIHBpw7kgdGVtcGVzdGl2byBlIHJhcGlkbyBwb3NzaWJpbGUuXG5cbk9nbmkgYXppZW5kYSBoYSBjYXJhdHRlcmlzdGljaGUgcHJvcHJpZSBjaGUgbGEgZGlzdGluZ3Vvbm8gZGFsbGUgYWx0cmUuIENpw7IgaW1wbGljYSBjaGUgc29sdXppb25pIHN0YW5kYXJkIHBvc3Nhbm8gbm9uIHJpc3VsdGFyZSBhZGVndWF0ZSBhIHNvZGRpc2ZhcmUgaSBiaXNvZ25pIGRpIHVu4oCZaW1wcmVzYSBlIHNpYW5vIG5lY2Vzc2FyaWUgc29sdXppb25pIHN1IG1pc3VyYS4gUGVyIHF1ZXN0byBtb3Rpdm8gQ3Jhb24gc2kgb2NjdXBhIGRpIHByb2dldHRhemlvbmUgc2lzdGVtaSBpbmZvcm1hdGl2aSBvbiBkZW1hbmQgY2hlIHJpc3BvbmRhbm8gaW4gbWFuaWVyYSBlZmZpY2FjZSBlZCBlZmZpY2llbnRlIGFsbGUgbmVjZXNzaXTDoCBkaSBvZ25pIHNpbmdvbG8gY2xpZW50ZS5cblxuTOKAmWV2b2x1emlvbmUgdGVjbm9sb2dpY2Egc3BpbmdlIG1vbHRlIHNvY2lldMOgIGEgaW5ub3ZhcnNpIGUgYSByaW5ub3ZhcmUsIG1hIHNwZXNzbyBxdWVzdG8gcHJvY2Vzc28gaW1wbGljYSBmYXNpIGRpIHRyYW5zaXRvIGRhIHVuIHZlY2NoaW8gc2lzdGVtYSBhIHVubyBudW92byBjb24gcmVsYXRpdmkgcHJvYmxlbWkgZGkgZGlhbG9nbyB0cmEgbGUgZGl2ZXJzZSBhcHBsaWNhemlvbmkuIENyYW9uIGRpc3BvbmUgZGkgdW5vIHN0YWZmIGRpIGFuYWxpc3RpIGUgcHJvZ3JhbW1hdG9yaSBpbiBncmFkbyBkaSB2YWx1dGFyZSBsZSBwcm9ibGVtYXRpY2hlIGUgc3ZpbHVwcGFyZSBsYSBtaWdsaW9yZSBzb2x1emlvbmUgZGkgc3lzdGVtIGludGVncmF0aW9uLlxuUklWRU5ESVRBIEhBUkRXQVJFIEUgU09GVFdBUkVcblBlciBvZmZyaXJlIHVuIHNlcnZpemlvIGdsb2JhbGUgYWkgcHJvcHJpIGNsaWVudGkgQ3Jhb24gc2kgb2NjdXBhIGFuY2hlIGRlbGxhIHJpdmVuZGl0YSBvIG5vbGVnZ2lvIGRpIGhhcmR3YXJlIGUgc29mdHdhcmUgZGVsbGUgbWlnbGlvcmkgbWFyY2hlLlxuXG5DcmFvbiBzaSBvY2N1cGEgZGkgZGF0YWJhc2UgbWFuYWdlbWVudCBvdnZlcm8gZGkgaWRlYXJlIGUgcmVhbGl6emFyZSBkYXRhYmFzZSByZWxhemlvbmFsaSBwZXIgbOKAmWFyY2hpdmlhemlvbmUgZGVpIGRhdGkgc3UgcGlhdHRhZm9ybWUgU1FMIE1pY3Jvc29mdCwgTXlzcWwgZWQgT3JhY2xlLlxuTmVsIDIwMDUgQ3Jhb24gaGEgb3R0ZW51dG8gdW4gcmljb25vc2NpbWVudG8gZGFsIE5hdGlvbmFsIENhbmNlciBJbnN0aXR1dGUgcGVyIGlsIHNlcnZpemlvIGRpIGFsdGEgcHJvZmVzc2lvbmFsaXTDoCByZXNvIGluIHF1YWxpdMOgIGRpIERhdGFiYXNlIERlc2lnbmVyIGFuZCBNYW5hZ2VyIG5lbGxvIHN0dWRpbyBpbnRlcm5hemlvbmFsZSBzdWxsZSBjYXVzZSBkZWwgdHVtb3JlIGFpIHBvbG1vbmkuXG4gICAgICAgICAgPC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==