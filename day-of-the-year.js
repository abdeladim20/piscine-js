const dayOfTheYear = (date) => {
    let year = date.getFullYear()
    if (year == 0) {
        year++
    }
    let c = new Date()
    c.setFullYear(year)
    c.setMonth(0)
    c.setDate(0)
    let t = date - c
    return Math.abs(Math.floor(t / (1000 * 60 * 60 * 24) + 1))
}