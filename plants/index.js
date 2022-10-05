const burger = document.querySelector(".navbar-burger");
const navbar = document.querySelector(".navbar-content");
const nav_wrapper = document.body.children[0].children[0];
let content = navbar.cloneNode(true);
function MediaMatch(x) {
  if (x.matches) {
    burger.style.display = "flex";
    navbar.style.display = "none";

    content.classList = "copied_navbar";
    nav_wrapper.insertAdjacentElement("beforeend", content);
    nav_wrapper.style.position = "relative";
    content.style.cssText = `
      position: absolute;
      right: 0;
      width: 0;
      top: ${window.getComputedStyle(nav_wrapper).height}px;
      // display: block;
    `

  } else {
    burger.style.display = "none"
    navbar.style.display = "flex";
  }
}

let x = window.matchMedia('(max-width: 750px)');
MediaMatch(x);
burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  document.querySelector(".copied_navbar").classList.toggle("content-active");

})


// slider for large pictures;

const slider_step = new Array();

// for (let i = 1; i < 4; i++) {
//   const step_img = document.createElement('img');
//   step_img.src = `./img/step${i}.png`;

//   slider_step.push(step_img);

// } 
let counter = 1;
const steps_img = document.querySelector('.steps-img');
console.log(steps_img);
let steps_content_img = document.createElement('img');
steps_content_img.src = `./img/step${counter}.png`;
steps_content_img.id = `steps${counter}`;
steps_img.insertAdjacentElement("beforeend", steps_content_img);
steps_content_img.style.cssText = `

  position: absolute;
  left: 0px;
  right: 0px;
  width: 100%;
  transition: all ease .2s;
  
`
// steps_img.style.height = `${window.getComputedStyle(document.querySelector(".steps_img img").height)}`;
// steps_img.children[0].setAttribute('src', `./img/step${2}.png`);
// console.log(slider_step[1], steps_img.children[0].getAttribute('src'));

// // document.body.insertAdjacentElement("beforeend", slider_step[1]);
// const left_btn = document.body.querySelector("#left_btn");
// const right_btn = document.body.querySelector("#right_btn");
// console.log(right_btn);

right_btn.addEventListener("click", () => {
  var steps_img = document.querySelector('.steps-img');

  if (counter == 3) {
    // steps_img.removeChild(document.querySelector(`#steps${counter}`));
    counter = 1;
  } else {
    counter++;
    // steps_img.removeChild(document.querySelector(`#steps${counter - 1}`));
  }
  console.log(counter);

  let steps_content_img = document.createElement('img');
  steps_content_img.src = `./img/step${counter}.png`;
  steps_content_img.id = `steps${counter}`;
  steps_img.insertAdjacentElement("beforeend", steps_content_img);
  steps_content_img.style.cssText = `

    position: absolute;
    left: ${parseInt(window.getComputedStyle(steps_img).width) + 10}px !important;
    width: 100%;
    transition: all ease .2s;
    
  `
  setTimeout(() => {
    steps_content_img.style.left = 0;
    steps_img.children[0].style.left = `-${parseInt(window.getComputedStyle(steps_img).width) + 10}px`;
    // steps_img.children[0].style.transition = "transition: all ease 2s;"
  }, 100)
  setTimeout(() => {
    steps_img.removeChild(steps_img.children[0]);
  }, 200)
  console.log(console.log(steps_img.children[0]));
  // steps_img.removeChild(document.querySelector(`#steps${counter - 1}`));
})

left_btn.addEventListener("click", () => {
  var steps_img = document.querySelector('.steps-img');

  if (counter == 1) {
    counter = 3;
  } else {
    counter--;
  }

  let steps_content_img = document.createElement('img');
  steps_content_img.src = `./img/step${counter}.png`;
  steps_content_img.id = `steps${counter}`;
  steps_img.insertAdjacentElement("beforeend", steps_content_img);
  steps_content_img.style.cssText = `

    position: absolute;
    right: ${parseInt(window.getComputedStyle(steps_img).width) + 10}px;
    width: 100%;
    transition: all .2s ease;
    
  `
  setTimeout(() => {
    steps_content_img.style.right = 0;
    // document.querySelector(`#steps${counter}`).style.right = `-${parseInt(window.getComputedStyle(steps_img).width) + 10}px`;
    steps_img.children[0].style.right = `-${parseInt(window.getComputedStyle(steps_img).width) + 10}px`;
  }, 100)
  setTimeout(() => {
    steps_img.removeChild(steps_img.children[0]);
  }, 200)
  console.log(console.log(steps_img.children[0]));
})


// plants shop slider

const wrapper = document.querySelector(".shop-slider__wrapper");
let plantsCounter = 0;
const shop_btn_right = document.querySelector(".shop-slider__arrow-right");
const shop_btn_left = document.querySelector(".shop-slider__arrow-left");

shop_btn_right.addEventListener("click", () => {
  if (plantsCounter != 4) {
    plantsCounter++;
    if (plantsCounter <= 4) {
      wrapper.style.marginLeft = `-${(parseInt(window.getComputedStyle(wrapper.children[0]).width) + document.body.clientWidth / 100 * 2.5) * plantsCounter}px`
      if (shop_btn_right.classList.contains("arrow-toggle")) {
        shop_btn_right.classList.toggle("arrow-toggle");
      }
      if (shop_btn_left.classList.contains("arrow-toggle")) {
        shop_btn_left.classList.toggle("arrow-toggle");
      }
      if (plantsCounter == 4) {
        shop_btn_right.classList.toggle("arrow-toggle");
      }
    } 
  }
  console.log(plantsCounter);



})
shop_btn_left.addEventListener("click", () => {
  if (plantsCounter != 0) {
    plantsCounter--;
    if (plantsCounter <= 4) {
      wrapper.style.marginLeft = `${-(parseInt(window.getComputedStyle(wrapper.children[0]).width) + document.body.clientWidth / 100 * 2.5) * plantsCounter}px`
      if (shop_btn_right.classList.contains("arrow-toggle")) {
        shop_btn_right.classList.toggle("arrow-toggle");
      }
      if (shop_btn_left.classList.contains("arrow-toggle")) {
        shop_btn_left.classList.toggle("arrow-toggle");
      }
      if (plantsCounter == 0) {
        shop_btn_left.classList.toggle("arrow-toggle");
      }
    } 
  }
  console.log(plantsCounter, shop_btn_left.classList.contains("arrow-toggle"));

})
// wrapper.style.marginLeft = "-800px";


//slider for review

const data = {
  1: {
    name: "Lores Huita",
    text: "I bought this plant a few weeks ago and it's been going great! I have it in a small pot in my kitchen, but I have the bulb turned on a lot, and it gets a lot of light, so it should last a long time. I've had it for about 2 weeks and it's doing great! From one plant lover to the next, get this plant and watch your indoor"
  },
  2: {
    name: "Forolma",
    text: "I don't know much about plants, but I noticed that this plant has a lot of leaves on the outside, which is kind of strange. I'm not sure about the type of plant this is, but I think it has a lot of leaves and it looks like it's growing."
  },
  3: {
    name: "Pamela S.",
    text: "We adore all our friends atBloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!"
  },
  
}
let textCounter = 3;
function Increase() {
  return textCounter++;
}

function Decrease() {
  return textCounter--;
}

const text_right = document.querySelector(".reviews-right-arrow");
const text_left = document.querySelector(".reviews-left-arrow");

text_left.addEventListener("click", () => {
  if (textCounter != 1) {
    Decrease();
    TextSliding();
  }
})
text_right.addEventListener("click", () => {
  if (textCounter != 3) {
    Increase();
    TextSliding();
  }
})

function TextSliding() {
  let content = document.querySelector(".reviews-content__content");
  content.style.opacity = "0";

  let author = document.querySelector(".reviews-content__info__author");
  author.style.opacity = "0"

  setTimeout(() => {
    content.innerText = `${data[textCounter].text}`;
    author.innerText = `${data[textCounter].name}`;
  }, 300)

  setTimeout(() => {
    content.style.opacity = "1";
    author.style.opacity = "1"
  }, 300)
}