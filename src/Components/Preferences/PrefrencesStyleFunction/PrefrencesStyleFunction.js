
export const clickHandlerClass = (index, checkboxClass, borderClass, paragraphClass ) => {
    const checkbox = document.querySelector(checkboxClass)
    const border = document.querySelector(borderClass)
    const text = document.querySelector(paragraphClass)
    const valueHospitality = checkbox.value
    const index = index 
    const info = []

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(index, valueHospitality, true)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")

        info.push(index, valueHospitality, false)
        console.log(info)
    }
}

