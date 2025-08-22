import { API_URL } from "./config";
import { getJSON } from "./helpers";


export const state = {
  flashcard: {},
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
    alert(err);
  }
};
