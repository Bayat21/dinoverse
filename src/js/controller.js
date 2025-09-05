import * as model from "./model.js";
import flashcardView from "./views/flashcardView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

//////////////////////

if (module.hot) {
  module.hot.accept();
}

const controlFlashcard = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    flashcardView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());

    //1) loading flashcard

    await model.loadFlashcard(id);

    //2) rendering flashcard
    flashcardView.render(model.state.flashcard);
  } catch (err) {
    flashcardView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.renderSpinner();

    //1) loading search results
    await model.loadSearchResults(query);

    //2) rendering results
    resultsView.render(model.getSearchResultsPage(1));

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const controlAddBookmark = function () {
  if (!model.state.flashcard.bookmarked) {
    model.addBookmark(model.state.flashcard);
  } else {
    model.deleteBookmark(model.state.flashcard.id);
  }

  flashcardView.update(model.state.flashcard);

  bookmarksView.render(model.state.bookmarks)
};

const init = function () {
  flashcardView.addHandlerRender(controlFlashcard);
  flashcardView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addhandlerClick(controlPagination);
};

init();
