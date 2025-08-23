import * as model from "./model.js";
import flashcardView from "./views/flashcardView.js";
import searchView from "./views/searchView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

//////////////////////

const controlFlashcard = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  flashcardView.renderSpinner();

  try {
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
    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  flashcardView.addHandlerRender(controlFlashcard);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
