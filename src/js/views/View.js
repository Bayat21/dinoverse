export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
          <div class="flex justify-center pt-[7rem]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-light-blue  animate-spin w-[2.5rem] h-[2.5rem] @2xl:w-[4.5rem] @2xl:h-[4.5rem]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

          </div>;`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._successMessage) {
    const markup = `
                  <div class="flex gap-[2px] justify-center items-start px-[3px] py-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                    <div >
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.3rem] h-[1.3rem] text-light-blue @5xl:w-[2rem] @5xl:h-[2rem] ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
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
                  <div class="flex gap-[2px] justify-center items-start px-[3px] py-[5rem] @5xl:px-[5px] @8xl:gap-[1rem]">
                    <div >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1.3rem] h-[1.3rem] text-light-blue  @5xl:w-[2rem] @5xl:h-[2rem] ">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
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
