import View from "./View";

class PreviewView extends View {
  _parentElement = "";

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
      
          <li
            class=" ${
              String(this._data.id) == id ? "bg-grey-1/30" : ""
            }  list-none  hover:bg-grey-1/30 hover:scale-105 duration-500 ease-in-out"
          >
            <a href="#${
              this._data.id
            }" class="flex flex-row w-full h-full items-center px-[1rem] py-[0.75rem] @2xl:py-[1.5rem] @5xl:px-[2rem] @8xl:py-[2rem]">
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
                <div class="${
                  this._data.key ? "" : "hidden"
                }  absolute right-0 bottom-0">
          
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[0.85rem] h-[0.85rem] text-regal-blue  bg-grey-2 rounded-full p-[2px] @2xl:w-[1.2rem] @2xl:h-[1.2rem] @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2.2rem] @8xl:h-[2.2rem] @8xl:p-[5px] @8xl:translate-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

              </div>
              </div>
            </a>
          </li>
      `;
  }
}

export default new PreviewView();
