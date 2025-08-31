import icons from "url:../../img/icons.svg";
import View from "./View";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addhandlerClick(handler) {
    this._parentElement.addEventListener("click", function(e) {
      const btn = e.target.closest(".btn--inline")
      if (!btn) return

      const goToPage = +btn.dataset.goto

      handler(goToPage)
    })
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtnNext(curPage);
    }

    if (curPage < numPages) {
      return `${this._generateMarkupBtnPrev(
        curPage
      )} ${this._generateMarkupBtnNext(curPage)}`;
    }

    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupBtnPrev(curPage);
    }

    return "";
  }

  _generateMarkupBtnPrev(currentPageNum) {
    return `
          <button data-goto=${currentPageNum - 1} class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
            <svg class="w-[1rem] h-[1rem] fill-current  @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${
              currentPageNum - 1
            }</span>
          </button>
    `;
  }

  _generateMarkupBtnNext(currentPageNum) {
    return `
          <button data-goto=${currentPageNum + 1} class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
              <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${
                currentPageNum + 1
              }</span>
            <svg class="w-[1rem] h-[1rem] fill-current  @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
    `;
  }
}

export default new PaginationView();
