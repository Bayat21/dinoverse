import { Result } from "postcss";
import { API_URL } from "./config";
import { getJSON, sendJSON } from "./helpers";
import { RES_PER_PAGE } from "./config";

export const state = {
  flashcard: {},
  search: {
    results: [],
    query: "",
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createFlashcardObject = function (flashcard) {
  return {
    id: flashcard.id,
    title: flashcard.title,
    publisher: flashcard.publisher,
    image: flashcard.image_url,
    period: flashcard.period,
    socialBehavior: flashcard.social_behavior,
    characteristics: flashcard.characteristics,
    description: flashcard.description,
  };
};

export const loadFlashcard = async function (id) {
  try {
    const flashcard = await getJSON(`${API_URL}/${id}`);

    state.flashcard = createFlashcardObject(flashcard);

    if (state.bookmarks.some((bookmark) => String(bookmark.id) === id))
      state.flashcard.bookmarked = true;
    else state.flashcard.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

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

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

const persistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (flashcard) {
  state.bookmarks.push(flashcard);
  if (flashcard.id === state.flashcard.id) state.flashcard.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.flashcard.id) state.flashcard.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

export const uploadFlashcard = async function (newFlashcard) {
  try {
    const characteristics = Object.entries(newFlashcard)
      .filter(
        (entry) => entry[0].startsWith("characteristic") && entry[1] !== ""
      )
      .map((ch) => {
        const chArr = ch[1].split(",");

        if (chArr.length !== 2) {
          throw new Error(
            "please use the correct format for characteristics !"
          );
        }

        const [feature, value] = chArr;
        return { feature, value };
      });
    const flashcard = {
      title: newFlashcard.title,
      publisher: newFlashcard.publisher,
      image_url: newFlashcard.image,
      period: newFlashcard.period,
      social_behavior: newFlashcard.socialBehavior,
      characteristics,
      description: newFlashcard.description,
    };

    const data = await sendJSON(API_URL, flashcard);
    state.flashcard = createFlashcardObject(data);
    addBookmark(state.flashcard);
  } catch (err) {
    throw err;
  }
};
