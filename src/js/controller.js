const cardContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//////////////////////

const showCard = async function () {
  try {
    const res = await fetch("http://localhost:5174/dinosaurs?title_like=ex");
    const data = await res.json();
    let [flashCard] = data;
    
    flashCard = {
      id: flashCard.id,
      title: flashCard.title,
      publisher: flashCard.publisher,
      image: flashCard.image_url,
      period: flashCard.period,
      socialBehavior: flashCard.social_behavior,
      characteristics: flashCard.characteristics,
      description: flashCard.description
    }
    console.log(flashCard)
  } catch (err) {
    alert(err);
  }
};

showCard();
