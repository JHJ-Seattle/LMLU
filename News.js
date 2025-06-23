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