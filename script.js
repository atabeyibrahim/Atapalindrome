const userInput= document.getElementById("text-input");
const inputCheckBtn = document.getElementById("check-btn");
const finalResult = document.getElementById("result");

const checkInput = entry => {
    const orgnInput = entry;
    if(entry === ''){
        alert("Please input a value.");
        return;
    }
    finalResult.replaceChildren();
    const lowerCase = entry.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
    let message = `${orgnInput} ${lowerCase === [...lowerCase].reverse().join('') ? 'is' : 'is not'} a palindrome.` 

    const pelem = document.createElement('p');
    pelem.className = 'finalMessage';
    pelem.innerHTML = message;
    finalResult.appendChild(pelem);
    finalResult.classList.remove('secret');
};

inputCheckBtn.addEventListener('click', () => {
    checkInput(userInput.value);
    userInput.value='';
});
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkInput(userInput.value);
      userInput.value = '';
    }
});