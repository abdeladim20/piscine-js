import { styles } from "./pimp-my-style.data.js";

let i = 0;
let end = false;
export function pimp() {
  let button = document.querySelector("button");
  if (!end && i < styles.length) {
    button.classList.add(styles[i]);
    i++;
  }
  if (i == styles.length) {
    end = true;
    button.classList.add("unpimp");
  }
  if (end) {
    button.classList.remove(styles[i]);
    i--;
  }
  if (button.classList.length == 2 && button.classList[1]=="unpimp") {
    button.classList.remove("unpimp");
  }
  if (button.classList.length == 1) {
    end = false
    i = 0
  }
}
