import View from "./View";
import icons from "url:../../img/icons.svg";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    const id = window.location.hash.slice(1)
    return `
      
          <li
            class=" ${String(this._data.id) == id ? "bg-grey-1/30" : ""}  list-none  hover:bg-grey-1/30 hover:scale-105 duration-500 ease-in-out"
          >
            <a href="#${this._data.id}" class="flex flex-row w-full h-full items-center px-[1rem] py-[0.75rem] @2xl:py-[1.5rem] @5xl:px-[2rem] @8xl:py-[2rem]">
              <figure class="flex-shrink-0">
                <img
                  src="${this._data.image}"
                  alt="${this._data.title}"
                  class="rounded-full object-cover w-[2.5rem] h-[2.5rem] @2xl:w-[3.5rem] @2xl:h-[3.5rem] @5xl:w-[4.5rem] @5xl:h-[4.5rem] @8xl:w-[6rem] @8xl:h-[6rem]"
                />
              </figure>
              <div class="flex flex-col pl-[1rem] @8xl:gap-[5px] relative w-full">
                <h4
                  class="text-red-700 text-sm @2xl:text-xl @5xl:text-2xl @8xl:text-4xl"
                >
                  ${this._data.title}
                </h4>
                <p class="text-xs @2xl:text-lg @5xl:text-xl @8xl:text-2xl">
                  ${this._data.publisher}
                </p>
                <div class="${this._data.key ? "" : "hidden"}  absolute right-0 bottom-0">
                <svg
                  class="w-[0.85rem] h-[0.85rem] text-regal-blue fill-current bg-grey-2 rounded-full p-[2px] @2xl:w-[1.2rem] @2xl:h-[1.2rem] @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2.2rem] @8xl:h-[2.2rem] @8xl:p-[5px] @8xl:translate-1"
                >
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
              </div>
            </a>
          </li>
      `;
  }
}

export default new PreviewView();