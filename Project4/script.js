
let MyNumberValue = (Math.floor(Math.random() * 10) + 1) * 10;
const HeaderText = document.querySelector('.text');
const PlayBtn = document.querySelector('.container1 .text1');

PlayBtn.addEventListener('click', function(event) {
    HeaderText.innerHTML = `<h3>My Number <strong>${MyNumberValue}</strong> That You Add in Your Calculation</h3>`;
    
});


const HeaderDisplay = document.querySelector('.text2');
const ResultBtn = document.getElementById('resultBtn');

ResultBtn.addEventListener('click', function() {
    const finalResult = MyNumberValue / 2;
    HeaderDisplay.innerHTML = `<h3> Result : ${finalResult}</h3>`;
});