class Section {
  constructor({ renderer }, templateSelector) {
    this._renderer = renderer;
    this._templateContainer = document.querySelector(templateSelector);
  }
  renderItems(res) {
    res.forEach(this._renderer);
  }
  addItem(cardElement) {
    this._templateContainer.prepend(cardElement);
  }
}
export { Section };
