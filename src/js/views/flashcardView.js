import icons from "url:../../img/icons.svg";

class FlashcardView {
  #parentElement = document.querySelector(".flashcard");
  #data;
  #errorMessage = "We could not find that flashcard. Please try another one!";
  #successMessage = ""

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
        <div class="flex justify-center pt-[7rem]">
          <svg
            class="text-light-blue fill-current animate-spin w-[2.5rem] h-[2.5rem] @2xl:w-[4.5rem] @2xl:h-[4.5rem]"
          >
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>;`;

    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

    renderMessage(message = this.#successMessage) {
    const markup = `
                <div class="flex gap-[2px] justify-center items-start p-[2px] pt-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                  <div >
                    <svg
                      class="w-[1.3rem] h-[1.3rem] text-light-blue fill-current @5xl:w-[2rem] @5xl:h-[2rem] "
                    >
                      <use href="${icons}#icon-smile"></use>
                    </svg>
                  </div>
                  <p class="text-[10px] @5xl:text-[12px] @8xl:text-[15px]">
                    ${message}
                  </p>
                </div>
    `;

    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this.#errorMessage) {
    const markup = `
                <div class="flex gap-[2px] justify-center items-start p-[2px] pt-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                  <div >
                    <svg
                      class="w-[1.3rem] h-[1.3rem] text-light-blue fill-current @5xl:w-[2rem] @5xl:h-[2rem] "
                    >
                      <use href="${icons}#icon-alert-triangle"></use>
                    </svg>
                  </div>
                  <p class="text-[10px] @5xl:text-[12px] @8xl:text-[15px]">
                    ${message}
                  </p>
                </div>
    `;

    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(handler) {
    ["load", "hashchange"].forEach((e) => {
      window.addEventListener(e, handler);
    });
  }

  #generateMarkup() {
    console.log(this.#data);
    return `
        <figure>
          <img
            src="${this.#data.image}"
            alt="${this.#data.title}"
            class="w-full h-[15rem] object-cover @2xl:h-[17rem] @8xl:h-[37rem]"
          />
          <h1 class="flex items-center justify-center">
            <span
              class="text-white bg-blue-green-gradient px-[1rem] py-[0.5rem] font-bold text-[15px] skew-y-[-6deg] translate-y-[-50%] @2xl:text-[18px] @5xl:text-[21px] @8xl:text-[30px] hover:scale-105 duration-500 ease-in-out"
              >${this.#data.title}</span
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
                >${this.#data.period}</span
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
                >${this.#data.socialBehavior}</span
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
          ${this.#data.characteristics
            .map(this.#generatedMarkupCharacteristics)
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
            ${this.#data.description}
          </p>
        </div>
    `;
  }

  #generatedMarkupCharacteristics(chr) {
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
