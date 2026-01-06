// Email submission
function submitEmail() {
  const email = document.getElementById("emailInput").value;
  if (email.trim()) {
    alert("Thank you for subscribing with: " + email);
    document.getElementById("emailInput").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// Modal open/close
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  if (event.target === document.getElementById("imageModal")) {
    closeImageModal();
  }
};

// ========== LIGHTBOX GALLERY FIX ========== //
const galleries = {
  "baking, 12/17": [
    "Images/Baking (12:17) - 1.jpg", "Images/Baking (12:17) - 2.jpg", "Images/Baking (12:17) - 3.jpg", "Images/Baking (12:17) - 4.jpg",
    "Images/Baking (12:17) - 5.jpg", "Images/Baking (12:17) - 6.jpg", "Images/Baking (12:17) - 7.jpg", "Images/Baking (12:17) - 8.jpg",
    "Images/Baking (12:17) - 9.jpg", "Images/Baking (12:17) - 10.jpg"
  ],
  "baking, 12/10": [
    "Images/Baking (12:10) - 1.jpg", "Images/Baking (12:10) - 2.jpg", "Images/Baking (12:10) - 3.jpg", "Images/Baking (12:10) - 4.jpg",
    "Images/Baking (12:10) - 5.jpg", "Images/Baking (12:10) - 6.jpg", "Images/Baking (12:10) - 7.jpg", "Images/Baking (12:10) - 8.jpg"
  ],
  "baking, 12/3": [
    "Images/Baking (12:3) - 1.jpg", "Images/Baking (12:3) - 2.jpg", "Images/Baking (12:3) - 3.jpg", "Images/Baking (12:3) - 4.jpg",
    "Images/Baking (12:3) - 5.jpg", "Images/Baking (12:3) - 6.jpg", "Images/Baking (12:3) - 7.jpg"
  ],
  "baking, 11/12": [
    "Images/Baking (11:12) - 1.jpg", "Images/Baking (11:12) - 2.jpg", "Images/Baking (11:12) - 3.jpg", "Images/Baking (11:12) - 4.jpg",
    "Images/Baking (11:12) - 5.jpg", "Images/Baking (11:12) - 6.jpg", "Images/Baking (11:12) - 7.jpg", "Images/Baking (11:12) - 8.jpg",
    "Images/Baking (11:12) - 9.jpg", "Images/Baking (11:12) - 10.jpg"
  ],
  "baking, 10/15": [
    "Images/Baking (10:15) - 1.jpg", "Images/Baking (10:15) - 2.jpg", "Images/Baking (10:15) - 3.jpg", "Images/Baking (10:15) - 4.jpg",
    "Images/Baking (10:15) - 5.jpg", "Images/Baking (10:15) - 6.jpg", "Images/Baking (10:15) - 7.jpg", "Images/Baking (10:15) - 8.jpg",
    "Images/Baking (10:15) - 9.jpg"
  ],
  "baking, 10/8": [
    "Images/Baking (10:8) - 1.jpg", "Images/Baking (10:8) - 2.jpg", "Images/Baking (10:8) - 3.jpg", "Images/Baking (10:8) - 4.jpg",
    "Images/Baking (10:8) - 5.jpg", "Images/Baking (10:8) - 6.jpg", "Images/Baking (10:8) - 7.jpg", "Images/Baking (10:8) - 8.jpg",
    "Images/Baking (10:8) - 9.jpg", "Images/Baking (10:8) - 10.jpg", "Images/Baking (10:8) - 11.jpg"
  ],
  "baking, 9/24": [
    "Images/Baking (9:24) - 1.jpg", "Images/Baking (9:24) - 2.jpg", "Images/Baking (9:24) - 3.jpg", "Images/Baking (9:24) - 4.jpg",
    "Images/Baking (9:24) - 5.jpg"
  ],
  "music, 8/9": [
    "Images/Music (8:9) - 1.jpg", "Images/Music (8:9) - 2.jpg", "Images/Music (8:9) - 3.jpg", "Images/Music (8:9) - 4.jpg",
    "Images/Music (8:9) - 5.jpg", "Images/Music (8:9) - 6.jpg", "Images/Music (8:9) - 7.jpg", "Images/Music (8:9) - 8.jpg",
    "Images/Music (8:9) - 9.jpg", "Images/Music (8:9) - 10.jpg", "Images/Music (8:9) - 11.jpg", "Images/Music (8:9) - 12.jpg",
    "Images/Music (8:9) - 13.jpg", "Images/Music (8:9) - 14.jpg", "Images/Music (8:9) - 15.jpg", "Images/Music (8:9) - 16.jpg",
    "Images/Music (8:9) - 17.jpg", "Images/Music (8:9) - 18.jpg", "Images/Music (8:9) - 19.jpg", "Images/Music (8:9) - 20.jpg",
    "Images/Music (8:9) - 21.jpg", "Images/Music (8:9) - 22.jpg", "Images/Music (8:9) - 23.jpg", "Images/Music (8:9) - 24.jpg"
  ],
  "sports, 7/26": [
    "Images/Sports (7:26) - 1.jpg", "Images/Sports (7:26) - 2.jpg", "Images/Sports (7:26) - 3.jpg", "Images/Sports (7:26) - 4.jpg",
    "Images/Sports (7:26) - 5.jpg", "Images/Sports (7:26) - 6.jpg", "Images/Sports (7:26) - 7.jpg", "Images/Sports (7:26) - 8.jpg",
    "Images/Sports (7:26) - 9.jpg", "Images/Sports (7:26) - 10.jpg", "Images/Sports (7:26) - 11.jpg", "Images/Sports (7:26) - 12.jpg",
    "Images/Sports (7:26) - 13.jpg", "Images/Sports (7:26) - 14.jpg", "Images/Sports (7:26) - 15.jpg", "Images/Sports (7:26) - 16.jpg",
    "Images/Sports (7:26) - 17.jpg", "Images/Sports (7:26) - 18.jpg", "Images/Sports (7:26) - 19.jpg", "Images/Sports (7:26) - 20.jpg"
  ],
  "silent auction": [
    "Images/SilentAuction1.jpg", "Images/SilentAuction2.jpg", "Images/SilentAuction3.jpg", "Images/SilentAuction4.jpg",
    "Images/SilentAuction5.jpg", "Images/SeniorGrad1.jpg", "Images/SeniorGrad2.jpg", "Images/SeniorGrad3.jpg",
    "Images/SeniorGrad4.jpg", "Images/SeniorGrad5.jpg", "Images/SeniorGrad6.jpg", "Images/SeniorGrad7.jpg",
    "Images/SeniorGrad8.jpg", "Images/SeniorGrad9.jpg", "Images/SeniorGrad10.jpg", "Images/SeniorGrad11.jpg",
    "Images/SeniorGrad12.jpg", "Images/SeniorGrad13.jpg", "Images/SeniorGrad14.jpg", "Images/SeniorGrad15.jpg"
  ],
  "spring": [
    "Images/SpRetreat1.jpg", "Images/SpRetreat2.jpg", "Images/SpRetreat3.jpg", "Images/SpRetreat4.jpg",
    "Images/SpRetreat5.jpg", "Images/SpRetreat6.jpg", "Images/SpRetreat7.jpg", "Images/SpRetreat8.jpg",
    "Images/SpRetreat9.jpg", "Images/SpRetreat10.jpg", "Images/SpRetreat11.jpg", "Images/SpRetreat12.jpg",
    "Images/SpRetreat13.jpg", "Images/SpRetreat14.jpg", "Images/SpRetreat15.jpg", "Images/SpRetreat16.jpg",
    "Images/SpRetreat17.jpg", "Images/SpRetreat18.jpg", "Images/SpRetreat19.jpg", "Images/SpRetreat20.jpg",
    "Images/SpRetreat21.jpg", "Images/SpRetreat22.jpg", "Images/SpRetreat23.jpg", "Images/SpRetreat24.jpg",
    "Images/SpRetreat25.jpg"
  ],
  "baking, 4/17": [
    "Images/Baking (4:17) - 1.jpg", "Images/Baking (4:17) - 2.jpg", "Images/Baking (4:17) - 3.jpg", "Images/Baking (4:17) - 4.jpg",
    "Images/Baking (4:17) - 5.jpg", "Images/Baking (4:17) - 6.jpg", "Images/Baking (4:17) - 7.jpg", "Images/Baking (4:17) - 8.jpg",
    "Images/Baking (4:17) - 9.jpg", "Images/Baking (4:17) - 10.jpg", "Images/Baking (4:17) - 11.jpg", "Images/Baking (4:17) - 12.jpg",
    "Images/Baking (4:17) - 13.jpg", "Images/Baking (4:17) - 14.jpg", "Images/Baking (4:17) - 15.jpg", "Images/Baking (4:17) - 16.jpg",
    "Images/Baking (4:17) - 17.jpg", "Images/Baking (4:17) - 18.jpg", "Images/Baking (4:17) - 19.jpg", "Images/Baking (4:17) - 20.jpg",
    "Images/Baking (4:17) - 21.jpg"
  ],
  "baking, 3/27": [
    "Images/Baking (3:27) - 1.jpg", "Images/Baking (3:27) - 2.jpg", "Images/Baking (3:27) - 3.jpg", "Images/Baking (3:27) - 4.jpg",
    "Images/Baking (3:27) - 5.jpg", "Images/Baking (3:27) - 6.jpg", "Images/Baking (3:27) - 7.jpg", "Images/Baking (3:27) - 8.jpg",
    "Images/Baking (3:27) - 9.jpg", "Images/Baking (3:27) - 10.jpg", "Images/Baking (3:27) - 11.jpg", "Images/Baking (3:27) - 12.jpg",
  ],
  "canine": [
    "Images/Canine1.jpg", "Images/Canine2.jpg", "Images/Canine3.jpg", "Images/Canine4.jpg",
    "Images/Canine5.jpg", "Images/Canine6.jpg", "Images/Canine7.jpg", "Images/Canine8.jpg",
    "Images/Canine9.jpg", "Images/Canine10.jpg", "Images/Art (3:22) - 1.jpg", "Images/Art (3:22) - 2.jpg",
    "Images/Art (3:22) - 3.jpg", "Images/Art (3:22) - 4.jpg", "Images/Art (3:22) - 5.jpg", "Images/Art (3:22) - 6.jpg",
    "Images/Art (3:22) - 7.jpg", "Images/Art (3:22) - 8.jpg", "Images/Art (3:22) - 9.jpg", "Images/Art (3:22) - 10.jpg",
    "Images/Art (3:22) - 11.jpg", "Images/Art (3:22) - 12.jpg", "Images/Art (3:22) - 13.jpg"
  ],
  "baking, 3/13": [
    "Images/Baking (3:13) - 1.jpg", "Images/Baking (3:13) - 2.jpg", "Images/Baking (3:13) - 3.jpg", "Images/Baking (3:13) - 4.jpg",
    "Images/Baking (3:13) - 5.jpg", "Images/Baking (3:13) - 6.jpg", "Images/Baking (3:13) - 7.jpg", "Images/Baking (3:13) - 8.jpg"
  ],
  "baking, 3/6": [
    "Images/Baking (3:6) - 1.jpg", "Images/Baking (3:6) - 2.jpg", "Images/Baking (3:6) - 3.jpg", "Images/Baking (3:6) - 4.jpg",
    "Images/Baking (3:6) - 5.jpg", "Images/Baking (3:6) - 6.jpg", "Images/Baking (3:6) - 7.jpg", "Images/Baking (3:6) - 8.jpg",
    "Images/Baking (3:6) - 9.jpg", "Images/Baking (3:6) - 10.jpg", "Images/Baking (3:6) - 11.jpg", "Images/Baking (3:6) - 12.jpg",
    "Images/Baking (3:6) - 13.jpg", "Images/Baking (3:6) - 14.jpg", "Images/Baking (3:6) - 15.jpg", "Images/Baking (3:6) - 16.jpg",
    "Images/Baking (3:6) - 17.jpg", "Images/Baking (3:6) - 18.jpg"
  ],
  "baking, 2/27": [
    "Images/Baking (2:27) - 1.jpg", "Images/Baking (2:27) - 2.jpg", "Images/Baking (2:27) - 3.jpg", "Images/Baking (2:27) - 4.jpg",
    "Images/Baking (2:27) - 5.jpg", "Images/Baking (2:27) - 6.jpg", "Images/Baking (2:27) - 7.jpg", "Images/Baking (2:27) - 8.jpg",
    "Images/Baking (2:27) - 9.jpg", "Images/Baking (2:27) - 10.jpg", "Images/Baking (2:27) - 11.jpg", "Images/Baking (2:27) - 12.jpg",
    "Images/Baking (2:27) - 13.jpg", "Images/Baking (2:27) - 14.jpg", "Images/Baking (2:27) - 15.jpg", "Images/Baking (2:27) - 16.jpg",
    "Images/Baking (2:27) - 17.jpg", "Images/Baking (2:27) - 18.jpg"
  ],
  "baking, 1/16": [
    "Images/Baking (1:16) - 1.jpg", "Images/Baking (1:16) - 2.jpg", "Images/Baking (1:16) - 3.jpg", "Images/Baking (1:16) - 4.jpg",
    "Images/Baking (1:16) - 5.jpg", "Images/Baking (1:16) - 6.jpg", "Images/Baking (1:16) - 7.jpg", "Images/Baking (1:16) - 8.jpg",
  ],
  "baking, 1/9": [
    "Images/Baking (1:9) - 1", "Images/Baking (1:9) - 2.jpg", "Images/Baking (1:9) - 3.jpg", "Images/Baking (1:9) - 4.jpg",
    "Images/Baking (1:9) - 5.jpg", "Images/Baking (1:9) - 6.jpg", "Images/Baking (1:9) - 7.jpg", "Images/Baking (1:9) - 8.jpg",
    "Images/Baking (1:9) - 9.jpg", "Images/Baking (1:9) - 10.jpg", "Images/Baking (1:9) - 11.jpg", "Images/Baking (1:9) - 12.jpg",
    "Images/Baking (1:9) - 13.jpg"
  ],
  music24: [
    "Images/Music1.jpg", "Images/Music2.jpg", "Images/Music3.jpg", "Images/Music4.jpg",
    "Images/Music5.jpg", "Images/Music6.jpg", "Images/Music7.jpg", "Images/Music8.jpg",
    "Images/Music9.jpg", "Images/Music10.jpg", "Images/Music11.jpg", "Images/Music12.jpg",
    "Images/Music13.jpg", "Images/Music14.jpg", "Images/Music15.jpg"
  ],
  care: [
    "Images/care1.avif", "Images/care2.avif", "Images/care3.avif", "Images/care4.avif",
    "Images/care5.avif", "Images/care6.avif", "Images/care7.avif", "Images/care8.avif",
    "Images/care9.avif", "Images/care10.avif", "Images/care11.avif", "Images/care12.avif",
    "Images/care13.avif", "Images/care14.avif", "Images/care15.avif", "Images/care16.avif",
    "Images/care17.avif", "Images/care18.avif", "Images/care19.avif", "Images/care20.avif",
    "Images/care21.avif", "Images/care22.avif", "Images/care23.avif", "Images/care24.avif"
  ],
  sc: [
    "Images/sc1.avif", "Images/sc2.avif", "Images/sc3.avif", "Images/sc4.avif",
    "Images/sc5.avif", "Images/sc6.avif", "Images/sc7.avif", "Images/sc8.avif",
    "Images/sc9.avif", "Images/sc10.avif", "Images/sc11.avif", "Images/sc12.avif",
    "Images/sc13.avif", "Images/sc14.avif", "Images/sc15.avif", "Images/sc16.avif",
    "Images/sc17.avif", "Images/sc19.avif", "Images/sc20.avif", "Images/sc21.avif",
    "Images/sc22.avif", "Images/sc23.png", "Images/sc24.avif", "Images/sc25.avif",
    "Images/sc26.avif", "Images/sc27.avif", "Images/sc28.avif", "Images/sc29.avif",
    "Images/sc30.avif", "Images/sc31.avif", "Images/sc32.avif", "Images/sc33.avif",
    "Images/sc34.avif", "Images/sc35.avif", "Images/sc36.avif", "Images/sc37.avif",
    "Images/sc38.avif", "Images/sc39.avif", "Images/sc40.avif"
  ],
  june: [
    "Images/june1.avif", "Images/june2.avif", "Images/june3.avif", "Images/june4.avif",
    "Images/june5.avif", "Images/june6.avif", "Images/june7.avif", "Images/june8.avif",
    "Images/june9.avif", "Images/june10.avif", "Images/june11.avif", "Images/june12.avif",
    "Images/june13.avif", "Images/june14.avif", "Images/june15.avif", "Images/june16.avif",
    "Images/june17.avif", "Images/june18.avif", "Images/june19.avif", "Images/june20.avif",
    "Images/june21.avif", "Images/june22.avif", "Images/june23.avif", "Images/june24.avif"
  ],
  apr: [
    "Images/apr1.avif", "Images/apr2.avif", "Images/apr3.avif", "Images/apr4.avif",
    "Images/apr5.avif", "Images/apr6.avif", "Images/apr7.avif", "Images/apr8.avif",
    "Images/apr9.avif", "Images/apr10.avif", "Images/apr11.avif", "Images/apr12.avif",
    "Images/apr13.avif", "Images/apr14.avif", "Images/apr15.avif", "Images/apr16.avif",
    "Images/apr17.avif", "Images/apr18.avif", "Images/apr19.avif"
  ],
  mar: [
    "Images/mar1.avif", "Images/mar2.avif", "Images/mar3.avif", "Images/mar4.avif",
    "Images/mar5.avif", "Images/mar6.avif", "Images/mar7.avif", "Images/mar8.avif",
    "Images/mar9.avif", "Images/mar10.avif", "Images/mar11.avif", "Images/mar12.avif"
  ],
  ny: [
    "Images/ny1.avif", "Images/ny2.avif", "Images/ny3.avif", "Images/ny4.avif",
    "Images/ny5.avif", "Images/ny6.avif", "Images/ny7.avif", "Images/ny8.avif",
    "Images/ny9.avif", "Images/ny10.avif"
  ],
  dec: [
    "Images/dec1.avif", "Images/dec2.avif", "Images/dec3.avif", "Images/dec4.avif",
    "Images/dec5.avif", "Images/dec6.avif", "Images/dec7.avif", "Images/dec8.avif",
    "Images/dec9.avif", "Images/dec10.avif", "Images/dec11.avif", "Images/dec12.avif",
    "Images/dec13.avif", "Images/dec14.avif", "Images/dec15.avif", "Images/dec16.avif"
  ],
  mus: [
    "Images/mus1.avif", "Images/mus2.avif", "Images/mus3.avif", "Images/mus4.avif",
    "Images/mus5.avif", "Images/mus6.avif", "Images/mus7.avif", "Images/mus8.avif"
  ],
  nov: [
    "Images/nov1.avif", "Images/nov2.avif", "Images/nov3.avif", "Images/nov4.avif",
    "Images/nov5.avif", "Images/nov6.avif", "Images/nov7.avif", "Images/nov8.avif",
    "Images/nov9.avif", "Images/nov10.avif"
  ],
  oct: [
    "Images/oct1.avif", "Images/oct2.avif", "Images/oct3.avif", "Images/oct4.avif", 
    "Images/oct5.avif", "Images/oct6.avif"
  ], 
  sum: [
    "Images/sum1.avif", "Images/sum2.avif", "Images/sum3.avif", "Images/sum4.avif", 
    "Images/sum5.avif", "Images/sum6.avif", "Images/sum7.avif"
  ],
  may: [
    "Images/may1.avif", "Images/may2.avif", "Images/may3.avif", "Images/may4.avif",
    "Images/may5.avif", "Images/may6.avif", "Images/may7.avif", "Images/may8.avif",
    "Images/may9.avif", "Images/may10.avif", "Images/may11.avif", "Images/may12.avif",
    "Images/may13.avif", "Images/may14.avif", "Images/may15.avif", "Images/may16.avif",
    "Images/may17.avif"
  ],
  feb: [
    "Images/feb1.avif", "Images/feb2.avif", "Images/feb3.avif", "Images/feb4.avif", 
    "Images/feb5.avif", "Images/feb6.avif", "Images/feb7.avif"
  ],
  aug: [
    "Images/aug1.avif", "Images/aug2.avif", "Images/aug3.avif", "Images/aug4.avif",
    "Images/aug5.avif", "Images/aug6.avif", "Images/aug7.avif", "Images/aug8.avif",
    "Images/aug9.avif", "Images/aug10.avif", "Images/aug11.avif", "Images/aug12.avif",
    "Images/aug13.avif", "Images/aug14.avif", "Images/aug15.avif", "Images/aug16.avif",
    "Images/aug17.avif", "Images/aug18.avif", "Images/aug19.avif"
  ],
  aug14: [
    "Images/aug141.avif", "Images/aug142.avif", "Images/aug143.avif", "Images/aug144.avif",
    "Images/aug145.avif", "Images/aug146.avif", "Images/aug147.avif", "Images/aug148.avif",
    "Images/aug149.avif", "Images/aug1410.avif", "Images/aug1411.avif", "Images/aug1412.avif",
    "Images/aug1413.avif", "Images/aug1414.avif", "Images/aug1415.avif", "Images/aug1416.avif",
    "Images/aug1417.avif", "Images/aug1418.avif", "Images/aug1419.avif", "Images/aug1420.avif", 
    "Images/aug1421.avif", "Images/aug1422.avif"
  ],
  july: [
    "Images/july1.avif", "Images/july2.avif", "Images/july3.avif", "Images/july4.avif",
    "Images/july5.avif", "Images/july6.avif", "Images/july7.avif", "Images/july8.avif",
    "Images/july9.avif", "Images/july10.avif", "Images/july11.avif", "Images/july12.avif",
    "Images/july13.avif"
  ],
  july31: [
    "Images/july311.avif", "Images/july312.avif", "Images/july313.avif", "Images/july314.avif",
    "Images/july315.avif", "Images/july316.avif", "Images/july317.avif", "Images/july318.avif",
    "Images/july319.avif", "Images/july3110.avif", "Images/july3111.avif", "Images/july3112.avif",
    "Images/july3113.avif", "Images/july3114.avif", "Images/july3115.avif", "Images/july3116.avif",
    "Images/july3117.avif", "Images/july3118.avif", "Images/july3119.avif"
  ],
  2020: [
    "Images/20201.avif", "Images/20202.avif", "Images/20203.avif", "Images/20204.avif", 
    "Images/20205.avif", "Images/20206.avif"
  ],
  2019: [
    "Images/20191.webp", "Images/20192.webp", "Images/20193.webp", "Images/20194.webp",
    "Images/20195.webp", "Images/20196.webp", "Images/20197.webp", "Images/20198.webp",
    "Images/20199.webp", "Images/201910.webp", "Images/201911.webp", "Images/201912.webp",
    "Images/201913.webp"
  ],
  art: [
    "Images/art1.avif", "Images/art2.avif", "Images/art3.avif", "Images/art4.avif", 
    "Images/art5.avif", "Images/art6.avif"
  ],
  2018: [
    "Images/20181.avif", "Images/20182.avif", "Images/20183.avif", "Images/20184.avif",
    "Images/20185.avif", "Images/20186.avif", "Images/20187.avif", "Images/20188.avif",
    "Images/20189.avif", "Images/201810.avif", "Images/201811.avif", "Images/201812.avif",
    "Images/201813.avif", "Images/201814.avif"
  ]
};

// Lightbox state manager
const lightbox = {
  currentIndex: 0,
  currentGallery: null,
  
  init: function() {
    this.element = document.getElementById("imageModal");
    this.image = document.getElementById("lightboxImg");
    this.bindEvents();
  },
  
  bindEvents: function() {
    document.querySelector('.lightbox-prev').addEventListener('click', () => this.changeImage(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => this.changeImage(1));
  },
  
  open: function(index, galleryName) {
    if (!galleries[galleryName]) {
      console.error("Invalid gallery:", galleryName);
      return;
    }
    
    this.currentGallery = galleryName;
    this.currentIndex = index;
    this.loadImage(galleries[galleryName][index]);
  },
  
  loadImage: function(src) {
    this.image.src = "";
    this.image.alt = "";
    
    const loader = new Image();
    loader.onload = () => {
      this.image.src = src;
      this.element.style.display = "block";
    };
    loader.src = src;
  },
  
  changeImage: function(direction) {
    if (!this.currentGallery) return;
    
    const gallery = galleries[this.currentGallery];
    this.currentIndex = (this.currentIndex + direction + gallery.length) % gallery.length;
    this.loadImage(gallery[this.currentIndex]);
  },
  
  close: function() {
    this.element.style.display = "none";
    this.image.src = "";
    this.currentGallery = null;
  }
};

// Initialize lightbox on DOM load
document.addEventListener('DOMContentLoaded', () => {
  lightbox.init();
});

// Modified openImageModal to use the lightbox manager
function openImageModal(index, galleryName) {
  lightbox.open(index, galleryName);
}

function closeImageModal() {
  lightbox.close();
}