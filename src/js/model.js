import { Result } from "postcss";
import { API_URL } from "./config";
import { getJSON } from "./helpers";
import { RES_PER_PAGE } from "./config";

export const state = {
  flashcard: {},
  search: {
    results: [],
    query: "",
    page: 1,
    resultsPerPage: RES_PER_PAGE
  },
};

export const loadFlashcard = async function (id) {
  try {
    const flashcard = await getJSON(`${API_URL}/${id}`);

    state.flashcard = {
      id: flashcard.id,
      title: flashcard.title,
      publisher: flashcard.publisher,
      image: flashcard.image_url,
      period: flashcard.period,
      socialBehavior: flashcard.social_behavior,
      characteristics: flashcard.characteristics,
      description: flashcard.description,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {

    state.search.query = query

    const data = await getJSON(
      `${API_URL}?q=${query}&_select=id&_select=title&_select=image_url&_select=publisher`
    );
    state.search.results = data.map((res) => {
      return {
        id: res.id,
        title: res.title,
        image: res.image_url,
        publisher: res.publisher,
      };
    });

  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getSearchResultsPage = function(page = start.search.page) {
  state.search.page = page
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage
  return state.search.results.slice(start, end)
}

