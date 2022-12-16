const IMAGES = [
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/Azure_Bit_Gopher.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/7TH_BIRTHDAY.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/BATMAN_GOPHER.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/BELGIUM.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/BLUE_GLASSES_GOPHER.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/BLUE_GOPHER.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/Biker_Gopher.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/BuffaloCast.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/COWBOY_GOPHER.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/COMING_SOON_GOPHER.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/CouchPotatoGopher.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://raw.githubusercontent.com/ashleymcnamara/gophers/master/DEATH_METAL_GOPHER.png",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/DOCTOR_STRANGE_GOPHER.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/DockerGopher.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/Doctor_Who_Gopher.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHER%20ACADEMY.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHER%20WEBPACK.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHERCON.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHER_EDWARD.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHER_MIC_DROP.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/GOPHER_VIKING.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/HALLOWEEN_GOPHER.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/RickAndMorty.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/This_is_Fine_Gopher.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/VS%20CODE%20GOPHER.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/ZERO_FUCKS.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
  {
    src: "https://github.com/ashleymcnamara/gophers/blob/master/gopher_unicorn.png?raw=true",
    figcaption: "Gopher Artwork by Ashley McNamara - GitHub",
  },
];
const CLIP_PATH = {
  _: "clip-path",
  PREV: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  FOCUS: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  NEXT: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
};
const TRANSLATE = {
  _: "translate",
  PREV: "-10% 0%",
  FOCUS: "0% 0%",
  NEXT: "10% 0%",
};

const footer = document.querySelector("footer");
const carouselImagesList = document.querySelector(".carousel_images_list");
const footerImagesList = document.querySelector(".images_minimap_list");
const nextImageBtn = document.querySelector("#next-img-btn");
const prevImageBtn = document.querySelector("#prev-img-btn");
const carouselImagesListItems = [];
const imagesMiniMapItems = [];

const state = {
  activeImgIndex: 0,
  rendering: false,
};

function initRender() {
  renderCarouselList();
  renderFooter();
}

function renderCarouselList() {
  IMAGES.forEach((image, index) => {
    const li = document.createElement("li");
    li.classList.add("carousel_image_item");
    if (index === state.activeImgIndex) {
      li.style.setProperty(CLIP_PATH._, CLIP_PATH.FOCUS);
      li.style.setProperty(TRANSLATE._, TRANSLATE.FOCUS);
    } else if (index < state.activeImgIndex) {
      li.style.setProperty(CLIP_PATH._, CLIP_PATH.PREV);
      li.style.setProperty(TRANSLATE._, TRANSLATE.PREV);
    } else if (index > state.activeImgIndex) {
      li.style.setProperty(CLIP_PATH._, CLIP_PATH.NEXT);
      li.style.setProperty(TRANSLATE._, TRANSLATE.NEXT);
    }
    const figure = document.createElement("figure");
    figure.classList.add("carousel_figure");
    const img = document.createElement("img");
    img.classList.add("carousel_img");
    img.src = image.src;
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("carousel_figcaption");
    figcaption.textContent = image.figcaption;
    figure.append(img);
    figure.append(figcaption);
    li.append(figure);
    carouselImagesList.append(li);
    carouselImagesListItems.push(li);
  });
}

function renderFooter() {
  IMAGES.forEach((image, index) => {
    const li = document.createElement("li");
    li.classList.add("minimap_image_item");
    if (state.activeImgIndex === index) {
      li.classList.add("active");
    }
    const img = document.createElement("img");
    img.classList.add("minimap_img");
    img.src = image.src;
    li.append(img);
    footerImagesList.append(li);
    imagesMiniMapItems.push(li);
  });
}

initRender();

nextImageBtn.addEventListener("click", handleMoveToNextImage);
prevImageBtn.addEventListener("click", handleMoveToPrevImage);
window.addEventListener("keydown", handleKeyDown);
footerImagesList.addEventListener("click", handleClickOnImageMinimap);

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowRight":
      handleMoveToNextImage();
      return;
    case "ArrowLeft":
      handleMoveToPrevImage();
      return;
  }
}

function handleMoveToNextImage() {
  if (state.rendering) return;
  state.rendering = true;
  imagesMiniMapItems[state.activeImgIndex].classList.remove("active");
  state.activeImgIndex = normalizeCurrentImgInd(state.activeImgIndex + 1);
  render();
}

function handleMoveToPrevImage() {
  if (state.rendering) return;
  state.rendering = true;
  imagesMiniMapItems[state.activeImgIndex].classList.remove("active");
  state.activeImgIndex = normalizeCurrentImgInd(state.activeImgIndex - 1);
  render();
}

function normalizeCurrentImgInd(currentFocusFigInd) {
  if (currentFocusFigInd < 0)
    currentFocusFigInd = carouselImagesListItems.length - 1;
  return Math.floor(currentFocusFigInd % carouselImagesListItems.length);
}

function handleClickOnImageMinimap(event) {
  const closestMinimapItem = event.target.closest(
    `li[class="minimap_image_item"]`
  );
  if (!closestMinimapItem) return;
  imagesMiniMapItems[state.activeImgIndex].classList.remove("active");
  state.activeImgIndex = imagesMiniMapItems.indexOf(closestMinimapItem);
  render();
}

function render() {
  requestAnimationFrame(() => {
    imagesMiniMapItems[state.activeImgIndex].classList.add("active");
    for (let i = 0; i < carouselImagesListItems.length; i++) {
      if (i < state.activeImgIndex) {
        carouselImagesListItems[i].style.setProperty(
          CLIP_PATH._,
          CLIP_PATH.PREV
        );
        carouselImagesListItems[i].style.setProperty(
          TRANSLATE._,
          TRANSLATE.PREV
        );
        continue;
      }
      if (i > state.activeImgIndex) {
        carouselImagesListItems[i].style.setProperty(
          CLIP_PATH._,
          CLIP_PATH.NEXT
        );
        carouselImagesListItems[i].style.setProperty(
          TRANSLATE._,
          TRANSLATE.NEXT
        );
        continue;
      }
      carouselImagesListItems[i].style.setProperty(
        CLIP_PATH._,
        CLIP_PATH.FOCUS
      );
      carouselImagesListItems[i].style.setProperty(
        TRANSLATE._,
        TRANSLATE.FOCUS
      );
    }
    state.rendering = false;
  });
}
