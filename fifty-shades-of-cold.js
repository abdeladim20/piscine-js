import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  for (let i = 0; i < colors.length; i++) {
    style.innerHTML += `.${colors[i]} { background: ${colors[i]}; }\n`;
  }
}

export function generateColdShades() {
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    if (/(aqua|blue|turquoise|green|cyan|navy|purple)/i.test(color)) {
      const div = document.createElement("div");
      div.className = color;
      div.textContent = color;
      div.addEventListener('click', () => choseShade(color));
      document.body.appendChild(div);
    }
  }
}

export function choseShade(shade) {
  const divs = document.querySelectorAll("div");
  for (let div of divs) {
    if (div.className !== shade) {
      div.className = shade;
    }
  }
}

