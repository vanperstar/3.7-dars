var formEl = document.querySelector(".myForm")
var currencyInputEl = document.querySelector(".currency")
var valuteSelectEl = document.querySelector(".valute")
var resultDivEl = document.querySelector(".result")

formEl.addEventListener("submit", (event) => {
    event.preventDefault()


    console.log(currencyInputEl.value)
    console.log(valuteSelectEl.value)

    resultDivEl.textContent = currencyInputEl.value * valuteSelectEl.value
    // console.log()
})

