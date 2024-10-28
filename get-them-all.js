export const getArchitects = () => {
  const a = Array.from(document.querySelectorAll("a"));
  const span = Array.from(document.querySelectorAll("span"));
  return [a, span];
};
export const getClassical = () => {
  const classical = Array.from(document.getElementsByClassName("classical"));
  let nonClassical = document.querySelectorAll("a:not(.classical)");
  return [classical, nonClassical];
};
export const getActive = () => {
  let isActive = document.querySelectorAll("a.active");
  let notActive = document.querySelectorAll("a.classical:not(.active)");
  return [isActive, notActive];
};

export const getBonannoPisano = () => {
  let arch = document.querySelector("#BonannoPisano");
  let others = document.querySelectorAll("a.active.classical");
  return [arch, others];
};
