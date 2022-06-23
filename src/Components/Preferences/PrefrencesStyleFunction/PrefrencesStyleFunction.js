const info = []
let filtru

export const clickHandlerFamily = () => {
    const checkbox = document.querySelector(".checkboxFamily")
    const border = document.querySelector(".borderFamily")
    const text = document.querySelector(".paragraphFamily")
    const index = 1
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")
        

        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}


export const clickHandlerMultifamily = () => {
    const checkbox = document.querySelector(".checkboxMultifamily")
    const border = document.querySelector(".borderMultifamily")
    const text = document.querySelector(".paragraphMultifamily")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")

        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerRetail = () => {
    const checkbox = document.querySelector(".checkboxRetail")
    const border = document.querySelector(".borderRetail")
    const text = document.querySelector(".paragraphRetail")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")


        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerIndustrial = () => {
    const checkbox = document.querySelector(".checkboxIndustrial")
    const border = document.querySelector(".borderIndustrial")
    const text = document.querySelector(".paragraphIndustrial")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")


        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerHospitality = () => {
    const checkbox = document.querySelector(".checkboxHospitality")
    const border = document.querySelector(".borderHospitality")
    const text = document.querySelector(".paragraphHospitality")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push (value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")


        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerWarehousing = () => {
    const checkbox = document.querySelector(".checkboxWarehousing")
    const border = document.querySelector(".borderWarehousing")
    const text = document.querySelector(".paragraphWarehousing")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")


        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerOffice = () => {
    const checkbox = document.querySelector(".checkboxOffice")
    const border = document.querySelector(".borderOffice")
    const text = document.querySelector(".paragraphOffice")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")

        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

export const clickHandlerOther = () => {
    const checkbox = document.querySelector(".checkboxOther")
    const border = document.querySelector(".borderOther")
    const text = document.querySelector(".paragraphOther")
    const value = checkbox.value

    if (checkbox.checked === true) {
        border.style.backgroundColor = "#f6fcff"
        border.style.border = "solid 2px #92c3e7"
        text.style.color = "#89bde5"

        info.push(value)
        console.log(info)
    } else {
        border.style.removeProperty("background-color")
        border.style.removeProperty("border")
        text.style.removeProperty("color")


        filtru = info.splice(info.indexOf(value),1)
        console.log(info)
    }
}

