import View from "./View";

class FlashcardView extends View {
  _parentElement = document.querySelector(".flashcard");
  _errorMessage = "We could not find that flashcard. Please try another one!";
  _successMessage = "";

  addHandlerRender(handler) {
    ["load", "hashchange"].forEach((e) => {
      window.addEventListener(e, handler);
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn_bookmark");
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.5rem] h-[1.5rem] text-light-blue @8xl:w-[2rem] @8xl:h-[2rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.period}</span
              >
            </div>
            <div class="flex gap-[3px] items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.5rem] h-[1.5rem] text-light-blue  @8xl:w-[2rem] @8xl:h-[2rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>

              <span
                class="text-xs @2xl:text-[10px] @5xl:text-[12px] @8xl:text-[16px]"
                >${this._data.socialBehavior}</span
              >
            </div>
          </div>
          <div class="flex gap-2 items-center justify-center @8xl:gap-[1.5rem]">
            <div class="${
              this._data.key ? "" : "hidden"
            } flex items-center justify-center">
 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[2rem] h-[2rem] text-light-blue bg-grey-3  rounded-full p-[3px] @8xl:p-[5px] @8xl:w-[3rem] @8xl:h-[3rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

            </div>
            <button class="btn_bookmark">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[2.5rem] h-[2.5rem] text-white bg-blue-green-gradient px-[0.5rem]  rounded-full @8xl:w-[3.5rem] @8xl:h-[3.5rem] ${
                this._data.bookmarked ? "fill-current" : ""
              }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.5rem] h-[1.5rem] text-regal-blue  @8xl:w-[2rem] @8xl:h-[2rem]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
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
