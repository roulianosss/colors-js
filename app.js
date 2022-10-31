const inputs = document.querySelectorAll('input')
const orientationRange = document.querySelector('.deg-orientation')
const labels = document.querySelectorAll('label')
const body = document.querySelector('body')
const [copyBtn, randomBtn] = document.querySelectorAll('button')

inputs.forEach(input => input.addEventListener('input', generateBackground))
copyBtn.addEventListener('click', () => navigator.clipboard.writeText(`background-color: linear-gradient(${inputs[2].value}deg, ${inputs[0].value}, ${inputs[1].value})`))
randomBtn.addEventListener('click', generateBackground)

generateBackground()

function generateBackground(e) {
    if(e && e.type === 'input'){
        switch (e.target.name) {
            case 'colorOne':
                labels[0].style.backgroundColor = e.target.value
                labels[0].innerText = e.target.value
                colorOne = e.target.value
                break
            
            case 'colorTwo':
                labels[1].style.backgroundColor = e.target.value
                labels[1].innerText = e.target.value
                colorTwo = e.target.value
                break

            case 'orientation':
                orientationRange.textContent = e.target.value
                orientationBackground = e.target.value
                break

            default:
                console.log('error');
        }
    } else {
        inputs.forEach((input, index) => input.value = index != 2 ? `#${Math.floor(Math.random()*16777215).toString(16)}` : Math.floor(Math.random()*360))
    }
    labels.forEach((label, index) => {
        label.style.background = inputs[index].value
        label.innerText = inputs[index].value
    })
    orientationRange.innerText = `${inputs[2].value}°`

    body.style.background = `linear-gradient(${inputs[2].value}deg, ${inputs[0].value}, ${inputs[1].value})`

}