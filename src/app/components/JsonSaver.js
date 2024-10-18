class JsonSaver {
  constructor(data, buttonId) {
      this.data = data;
      this.saveButton = document.getElementById(buttonId);
      this.handleClick = this.saveAsJSON.bind(this);
      this.init();
  }

  init() {
      this.saveButton.addEventListener('click', this.handleClick);
  }

  saveAsJSON() {
      const json = JSON.stringify(this.data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'killFeedData.json';
      link.click();
      URL.revokeObjectURL(url);
  }

  destroy() {
      this.saveButton.removeEventListener('click', this.handleClick);
  }
}

export default JsonSaver;