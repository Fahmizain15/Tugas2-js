const person = [`Adjie`, `aji`, `adji`, `Adjie`, `ajie`]
function filname() {
    const filter = person.filter(el => {
        return el == `Adjie`
    })
    console.log(filter);
}
filname()