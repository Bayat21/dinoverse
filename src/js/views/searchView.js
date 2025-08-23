class SearchView {
  #parentEl = document.querySelector(".search");

  getQuery() {
    const query = this.#parentEl.querySelector(".search_input").value;
    this.#clear();
    return query;
  }

  #clear() {
    this.#parentEl.querySelector(".search_input").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
