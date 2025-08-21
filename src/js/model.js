import { async } from "regenerator-runtime";

export const state = {
  flashcard: {},
};

export const loadFlashcard = async function (id) {
  try {
    const res = await fetch(`http://localhost:5174/dinosaurs/${id}`);
    const data = await res.json();

    let flashcard = data;

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
