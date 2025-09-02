import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDOM.querySelectorAll("*"))
    const curElements = Array.from(this._parentElement.querySelectorAll("*"))


    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]

      if(!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value)
        })
      }
    })
  }

  _clear() {
    this._parentElement.innerHTML = "";
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

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._successMessage) {
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

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
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

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
