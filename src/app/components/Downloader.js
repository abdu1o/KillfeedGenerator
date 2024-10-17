import html2canvas from 'html2canvas';

class Downloader {
  constructor(killFeedId, buttonId) {
    this.killFeedElement = document.getElementById(killFeedId);
    this.downloadButton = document.getElementById(buttonId);
    this.handleClick = this.downloadAsPNG.bind(this);
    this.init();
  }

  init() {
    this.downloadButton.addEventListener('click', this.handleClick);
  }

  downloadAsPNG() {
    html2canvas(this.killFeedElement, {
      useCORS: true,
      allowTaint: false,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'killFeed.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  destroy() {
    this.downloadButton.removeEventListener('click', this.handleClick);
  }
}

export default Downloader;