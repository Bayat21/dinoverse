import { Result } from "postcss";
import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  flashcard: {},
  search: {
    results: [],
    query: "",
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
        id: data.id,
        title: data.title,
        image: data.image_url,
        publisher: data.image_url,
      };
    });

  } catch (err) {
    console.log(err);
    throw err;
  }
};


