import icons from "url:../../img/icons.svg";
import View from "./View"

class FlashcardView extends View {
  _parentElement = document.querySelector(".flashcard");
  _errorMessage = "We could not find that flashcard. Please try another one!";
  _successMessage = "";

  addHandlerRender(handler) {
    ["load", "hashchange"].forEach((e) => {
      window.addEventListener(e, handler);
    });
  }

  _generateMarkup() {
    console.log(this._data);
    return `
        <figure>
          <img
            src="${this._data.image}"
            alt="${this._data.title}"
            class="w-full h-[15rem] object-cover @2xl:h-[17rem] @8xl:h-[37rem]"
          />
          <h1 class="flex items-center justify-center">
            <span
              class="text-white bg-blue-green-gradient px-[1rem] py-[0.5rem] font-bold text-[15px] skew-y-[-6deg] translate-y-[-50%] @2xl:text-[18px] @5xl:text-[21px] @8xl:text-[30px] hover:scale-105 duration-500 ease-in-out"
              >${this._data.title}</span
            >
          </h1>
        </figure>
        <div
          class="flex justify-between items-center p-[0.5rem] @2xl:p-[1.5rem] @5xl:px-[2rem] @8xl:px-[2.5rem] @8xl:py-[2rem]"
        >
          <div
            class="flex w-[16rem] justify-start gap-[3px] @2xl:gap-[1rem] @2xl:w-[22rem] @5xl:w-[30rem] @8xl:w-[50rem] @8xl:gap-[2rem]"
          >
            <div class="flex gap-[3px] items-center">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-light-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${icons}#icon-clock"></use>
              </svg>
              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.period}</span
              >
            </div>
            <div class="flex gap-[3px] items-center">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-light-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${icons}#icon-users"></use>
              </svg>
              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.socialBehavior}</span
              >
            </div>
          </div>
          <div class="flex gap-2 items-center justify-center @8xl:gap-[1.5rem]">
            <!--<div class="flex items-center justify-center">
              <svg
                class="w-[2rem] h-[2rem] text-light-blue bg-grey-3 fill-current rounded-full p-[3px] @8xl:p-[5px] @8xl:w-[3rem] @8xl:h-[3rem]"
              >
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>-->
            <button>
              <svg
                class="w-[2.5rem] h-[2.5rem] text-white bg-blue-green-gradient px-[0.5rem] fill-current rounded-full @8xl:w-[3.5rem] @8xl:h-[3.5rem]"
              >
                <use href="${icons}#icon-bookmark"></use>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="bg-grey-3 w-full flex flex-col items-center px-[1rem] py-[1rem] gap-[1rem] shadow-sm @5xl:gap-[1.3rem] @8xl:py-[2rem] @8xl:shadow-lg"
        >
          <h2
            class="font-bold text-regal-blue text-[1rem] @2xl:text-[1.2rem] @5xl:text-[1.5rem] @8xl:text-[2rem]"
          >
            SPECIFICATIONS
          </h2>
          <ul class="w-full grid grid-cols-2 gap-[1rem]">
          ${this._data.characteristics
            .map(this._generatedMarkupCharacteristics)
            .join("")}

          </ul>
        </div>

        <div
          class="w-full flex flex-col items-center px-[1rem] py-[1rem] gap-[1rem] @8xl:py-[2rem]"
        >
          <h2
            class="font-bold text-regal-blue text-[1rem] @2xl:text-[1.2rem] @5xl:text-[1.5rem] @8xl:text-[2rem]"
          >
            DESCRIPTION
          </h2>
          <p class="text-sm @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]">
            ${this._data.description}
          </p>
        </div>
    `;
  }

  _generatedMarkupCharacteristics(chr) {
    return `
            <li class="flex gap-[2px] justify-start">
              <svg
                class="w-[1.5rem] h-[1.5rem] text-regal-blue fill-current @8xl:w-[2rem] @8xl:h-[2rem]"
              >
                <use href="${icons}#icon-check"></use>
              </svg>
              <div>
                <span
                  class="text-sm @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                  >${chr.feature}: ${chr.value}</span
                >
              </div>
            </li>
            `;
  }
}

export default new FlashcardView();
