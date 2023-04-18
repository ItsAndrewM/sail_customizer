import cruising from "../images/pexels-enver-gülmez-16155671.jpg";
import racing from "../images/pexels-athena-1586795.jpg";
import lDCruising from "../images/pexels-johannes-plenio-1118874.jpg";
import offShore from "../images/pexels-justyna-serafin-12996613.jpg";
import clubRacing from "../images/pexels-kassandre-pedro-15843151.jpg";
import circumnavigate from "../images/pexels-matheus-guimarães-611328.jpg";
import now from "../images/pexels-matthis-volquardsen-2156972.jpg";
import thisSeason from "../images/pexels-pixabay-273886.jpg";
import nextSeason from "../images/pexels-szelei-robert-1482193.jpg";
import main from "../images/sailing-mainsail-jib-sailboat-sky-wind.jpg";
import head from "../images/Extra-Images-NOV-202110-scaled-1-838x1024.jpg";
import downwind from "../images/2019-arc-survey-sail-handling-Oyster-565-aerial-view-credit-Brian-Carlin.jpg";
import extra from "../images/pexels-sarah-o'shea-9958543.jpg";

export const sailCustomizer = [
  {
    question: "what kind of sailing are you doing?",
    answers: ["cruising", "racing", "long distance cruising"],
    images: [cruising, racing, lDCruising],
  },
  {
    question: "what type of sailing do you do?",
    answers: [
      "Offshore, lake",
      "club racing, long-distance racing",
      "circumnavigation, ocean crossings",
    ],
    images: [offShore, clubRacing, circumnavigate],
  },
  {
    question: "What kind of sails are you looking for?",
    answers: ["main", "head", "downwind sail"],
    images: [main, head, downwind],
  },
  {
    question: "When do you need sails by?",
    answers: ["now", "this season", "next season"],
    images: [now, thisSeason, nextSeason],
  },
  {
    question: "Reccomendations",
    answers: [
      "3, 4, 5, radial",
      "5, radial, zzp, and more",
      "4, 5, radial, cdx, and more",
    ],
  },
  {
    question: "RFQ",
    answers: [
      { label: "name", type: "text" },
      { label: "email", type: "email" },
      { label: "phone", type: "tel" },
      { label: "boat model", type: "text" },
    ],
  },
];
