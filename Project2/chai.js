const form = document.querySelector('form')

form.addEventListener('submit', function(event){

    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    // console.log(height)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height} in cm`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight} in cm`
    }else {
        results.innerHTML = `<span>${bmi}</span>`
    }
    if (bmi <= 18.6) {
            document.querySelector('#guide').innerHTML = `<span>Your BMI ${bmi} is UnderWeight</span>`
        } else if (bmi > 18.6 && bmi <= 24.9){
            document.querySelector('#guide').innerHTML = `<span>Your BMI ${bmi} is Normal Range Keep it Maintain</span>`  
        }else if (bmi > 24.9){
            document.querySelector('#guide').innerHTML = `<span>Your BMI ${bmi} is OverWeight</span>`
        }else {
            document.querySelector('#guide').innerHTML = `<span>Give Valid Height in Centimeter and Weight in KG</span>`
        }
})