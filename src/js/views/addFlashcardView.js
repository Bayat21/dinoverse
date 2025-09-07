import icons from "url:../../img/icons.svg";
import View from "./View";

class AddFlashcardView extends View {
  _parentElement = document.querySelector(".upload-form");
  _successMessage = "Flashcard was successfully uploaded :)";
  _window = document.querySelector(".add-flashcard-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".add-card-btn");
  _btnClose = document.querySelector(".close-btn");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHanderUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return ``;
  }
}

export default new AddFlashcardView();
