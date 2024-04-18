//const images = [
//   {
//     image: "img/01.webp",
//     title: "Marvel's Spiderman Miles Morale",
//     text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
//   },
//   {
//     image: "img/02.webp",
//     title: "Ratchet & Clank: Rift Apart",
//     text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
//   },
//   {
//     image: "img/03.webp",
//     title: "Fortnite",
//     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   },
//   {
//     image: "img/04.webp",
//     title: "Stray",
//     text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
//   },
//   {
//     image: "img/05.webp",
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// let activeIndex = 0;

// printImages(images);

// printThumbs(images);

// const imgElems = document.querySelectorAll(".my-carousel-item");
// console.log(imgElems);

// const thumbElems = document.querySelectorAll(".my-thumbnail")
// console.log(thumbElems);

// imgElems[activeIndex].classList.add("active");

// document.querySelector(".my-next").addEventListener("click", showNext);

// document.querySelector(".my-previous").addEventListener("click", showPrevious);

// function showNext() {
//   imgElems[activeIndex].classList.remove("active");
//   thumbElems[activeIndex].classList.remove("active");
//   if (activeIndex < imgElems.length - 1) {
//     activeIndex++;
//   } else {
//     activeIndex = 0;
//   }
//   imgElems[activeIndex].classList.add("active");
//   thumbElems[activeIndex].classList.add("active");
// }

// function showPrevious() {
//   imgElems[activeIndex].classList.remove("active");
//   thumbElems[activeIndex].classList.remove("active");
//   if (activeIndex > 0) {
//     activeIndex--;
//   } else {
//     activeIndex = imgElems.length - 1;
//   }
//   imgElems[activeIndex].classList.add("active");
//   thumbElems[activeIndex].classList.add("active");
// }

// function printImages(imagesToPrint) {
//   const carouselContainer = document.querySelector(".my-carousel-images");
//   imagesToPrint.forEach((image) => {
//     carouselContainer.innerHTML += `
//     <div class="my-carousel-item" carousel-item="1">
//       <img
//         class="img-fluid"
//         src="./${image.image}"
//         alt="${image.title}"
//       />
//       <div class="item-description px-3">
//         <h2>${image.title}</h2>
//         <p>
//           ${image.text}
//         </p>
//       </div>
//     </div>
//     `;
//   });
// }

// function printThumbs(imagesToPrint) {
//   const thumbsContainer = document.querySelector(".my-thumbnails");
//   imagesToPrint.forEach((image) => {
//     thumbsContainer.innerHTML += `
//     <img
//       class="img-fluid my-thumbnail"
//       src="./${image.image}"
//       alt="Thumbnail of Marvel's Spiderman Miles Morale picture"
//     />
//     `;
//   });
// }

console.log(Vue);

const { createApp } = Vue;

createApp({
  // Qui andranno dati
  data() {
    return {
      images = [
    {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    },
    {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    },
    {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ];
    };
  },
  methods: {
    
  },
}).mount("#app");
