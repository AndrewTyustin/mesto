class Section {
  constructor({ items, renderer }, templateElem) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._templateContainer = document.querySelector(templateElem);
  }
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(cardElement) {
    this._templateContainer.prepend(cardElement);
  }
}

export { Section };
