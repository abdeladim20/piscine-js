export function generateLetters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const totalLetters = 120;

  for (let i = 0; i < totalLetters; i++) {
    const letterDiv = document.createElement("div");
    letterDiv.textContent = letters[Math.floor(Math.random() * 26)];
    const fontSize = 11 + i;
    let fontWeight;
    if (i < totalLetters / 3) {
      fontWeight = 300;
    } else if (i < (2 * totalLetters) / 3) {
      fontWeight = 400;
    } else {
      fontWeight = 600;
    }

    Object.assign(letterDiv.style, {
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      margin: "5px",
      textAlign: "center",
      flex: "0 0 auto",
    });
   document.body.appendChild(letterDiv);
  }
}

