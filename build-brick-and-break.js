export function build(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      const brick = document.createElement("div");
      brick.setAttribute("id", `brick-${i}`);
      if (i % 3 === 2) {
        brick.setAttribute("data-foundation", "true");
      }
      document.body.appendChild(brick);
    }, i * "100");
  }
}

export function repair(...ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);
    if (element && element.getAttribute("data-foundation") == "true") {
      element.setAttribute("data-repaired", "in progress");
    } else {
      element.setAttribute("data-repaired", "true");
    }
  }
}

export function destroy() {
  const bricks = document.querySelectorAll('div[id^="brick-"]');
  if (bricks.length > 0) {
    const lastBrick = bricks[bricks.length - 1];
    lastBrick.remove();
  }
}

