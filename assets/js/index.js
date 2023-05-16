const arrayOfSums = document.getElementsByClassName('card__sum');
let sumTotal = 0;
for (let i = 0; i < arrayOfSums.length; i++)
    {
     sumTotal += +arrayOfSums[i].textContent;
    }
const resultSum = document.querySelector(".result-block__total-sum");
resultSum.textContent = sumTotal;