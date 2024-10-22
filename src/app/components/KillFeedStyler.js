import icons from "../styles/icons.module.css";
import weapons from "../styles/weapons.module.css";
import styles from "../page.module.css";

class KillFeedStyler {
  constructor(killFeedData) {
    this.killFeedData = killFeedData;
    this.killFeedElement = document.getElementById("killFeed");
  }

  // Set the container class based on the color scheme
  setContainer() {
    if (this.killFeedData?.colors) {
      const colors = this.killFeedData.colors;
      this.killFeedElement.className = "";
      const colorClassMap = {
        default: styles.killFeedContainerDefault,
        ESL: styles.killFeedContainerESL,
        BLAST: styles.killFeedContainerBLAST,
      };
      this.killFeedElement.classList.add(colorClassMap[colors] || "");
      this.killFeedElement.innerHTML = "";
    }
    return this;
  }

  // Create a name element with appropriate classes
  createNameElement(name, side, colors, isAssist = false) {
    const nameElement = document.createElement("span");
    nameElement.textContent = name;

    const sideClass = side === "T" ? "T" : "CT";
    const colorClass = colors === "BLAST" ? "Blast" : "default";
    nameElement.classList.add(styles[`${sideClass}_${colorClass}`]);

    if (isAssist) {
      const plusElement = document.createElement("span");
      plusElement.textContent = " + ";
      plusElement.classList.add(styles.assist);
      this.killFeedElement.appendChild(plusElement);
    }

    return nameElement;
  }

  // Append an element with a specific class to the kill feed
  appendElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    element.classList.add(className);
    this.killFeedElement.appendChild(element);
    return this;
  }

  // Process and append event icons
  processEventIcons(event) {
    const iconTypes = ["noscope", "smoke", "wallbang", "headshot"];
    iconTypes.forEach((iconType) => {
      if (event[iconType]) {
        this.appendElementWithClass("div", icons[iconType]);
      }
    });
    return this;
  }

  // Process and append event weapons
  processEventWeapons(event) {
    if (event.airkill) {
      this.appendElementWithClass("div", icons.airkill);
    }
    if (event.weapon) {
      this.appendElementWithClass("div", weapons[event.weapon]);
    }
    return this;
  }

  // Process and append event names
  processEventNames(event) {
    if (event.killerName && event.side) {
      const nameElement = this.createNameElement(
        event.killerName,
        event.side,
        this.killFeedData.colors
      );
      if (event.blindfolded) {
        this.appendElementWithClass("div", icons.blindfolded);
      }
      this.killFeedElement.appendChild(nameElement);
    }

    if (event.assist?.name && event.assist.side) {
      const assistElement = this.createNameElement(
        event.assist.name,
        event.assist.side,
        this.killFeedData.colors,
        true
      );
      this.killFeedElement.appendChild(assistElement);
    }

    if (event.victimName && event.side) {
      const nameElement = this.createNameElement(
        event.victimName,
        event.side,
        this.killFeedData.colors
      );
      this.killFeedElement.appendChild(nameElement);
    }

    return this;
  }

  // Process all events in the kill feed data
  processEvents() {
    if (!this.killFeedData?.events) return this;

    this.killFeedData.events.forEach((event) => {
      this.processEventNames(event)
        .processEventWeapons(event)
        .processEventIcons(event);
    });

    return this;
  }

  // Set up the kill feed
  setKillFeed() {
    this.setContainer().processEvents();
    return this;
  }
}

export default KillFeedStyler;
