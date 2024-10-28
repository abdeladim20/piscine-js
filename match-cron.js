function matchCron(cron, date) {
  let [m, h, dom, moy, dow] = cron.split(" ");

  if (m != "*") {
    if (m != date.getMinutes()) {
      return false;
    }
  }
  if (h != "*") {
    if (h != date.getHours()) {
      return false;
    }
  }
  if (dom != "*") {
    if (dom != date.getDate()) {
      return false;
    }
  }

  // console.log(moy,date.getMonth()+1);

  if (moy != "*") {
    if (moy != date.getMonth() + 1) {
      return false;
    }
  }

  if (dow != "*") {
    if (dow != date.getDay()) {
      return false;
    }
  }

  return true;
}
