import View from "./View";

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
              </div>
            </a>
          </li>
      `;
  }
}

export default new PreviewView();