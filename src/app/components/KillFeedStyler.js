class KillFeedStyler {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      console.log(`Container found: ${this.container !== null}`);
    }
  
    setKillFeed(data) {
        
    //   console.log('Setting kill feed data:', data);
    //   if (!this.container) {
    //     console.error('Container not found');
    //     return;
    //   }
  
      this.container.innerHTML = '';
  
      data.forEach(item => {
        const killFeedItem = document.createElement('div');
        killFeedItem.className = item.className;
  
        if (item.type === 'link') {
          const link = document.createElement('a');
          link.href = item.href;
          link.className = item.linkClassName;
          link.textContent = item.text;
          killFeedItem.appendChild(link);
        } else if (item.type === 'div') {
          killFeedItem.textContent = item.text;
        }
  
        this.container.appendChild(killFeedItem);
        console.log('Added item:', killFeedItem);
      });
    }
  }
  
  export default KillFeedStyler;