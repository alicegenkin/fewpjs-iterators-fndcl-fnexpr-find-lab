function superbowlWin(arr) {
  let winYear = arr.find(win => win.result === "W")

  if (winYear) {
    return winYear.year
  }
}
