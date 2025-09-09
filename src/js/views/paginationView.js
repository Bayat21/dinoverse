import View from "./View";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addhandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
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
          <button data-goto=${
            currentPageNum - 1
          } class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1rem] h-[1rem]  @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>

            <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${
              currentPageNum - 1
            }</span>
          </button>
    `;
  }

  _generateMarkupBtnNext(currentPageNum) {
    return `
          <button data-goto=${
            currentPageNum + 1
          } class="btn--inline flex items-center justify-center bg-turquoise px-[5px] py-[2px] rounded-full text-regal-blue font-bold @5xl:px-[1rem] @5xl:py-[5px] @8xl:px-[2rem] @8xl:py-[1rem] hover:scale-105 duration-500 ease-in-out">
              <span class="text-sm @5xl:text-lg @8xl:text-2xl">page ${
                currentPageNum + 1
              }</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1rem] h-[1rem]   @5xl:w-[1.5rem] @5xl:h-[1.5rem] @8xl:w-[2rem] @8xl:h-[2rem]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>


          </button>
    `;
  }
}

export default new PaginationView();
