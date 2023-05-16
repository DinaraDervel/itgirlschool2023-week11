const arrayOfSums = document.getElementsByClassName('card__sum'); //массив элементов со значениями сумм товаров
let sumTotal = 0;
for (let i = 0; i < arrayOfSums.length; i++)
    {
     //получаем значение суммы
     const valueOfSum = arrayOfSums[i].textContent;
     //убираем разрядные разделители в виде запятых и приводим сумму к числу
     const numberOfSum = parseFloat(valueOfSum.replaceAll(',', ''));
     //считаем итоговую сумму
     sumTotal += numberOfSum;
    }
const resultSum = document.querySelector(".result-block__total-sum");
resultSum.textContent = Intl.NumberFormat("en").format(sumTotal); //обратно добавляем разделители разрядов в итоговую сумму

const applyDiscount = () => {
    sumTotal = 0;
    for (let i = 0; i < arrayOfSums.length; i++)
    {
     //получаем значение суммы
     const valueOfSum = arrayOfSums[i].textContent;
     //убираем разрядные разделители в виде запятых и приводим сумму к числу
     let numberOfSum = parseFloat(valueOfSum.replaceAll(',', ''));
     //считаем сумму со скидкой
     numberOfSum -= numberOfSum*0.2;
     //выводим значение суммы со скидкой
     arrayOfSums[i].textContent = Intl.NumberFormat("en").format(numberOfSum);
     //считаем итоговую сумму со скидкой
     sumTotal += numberOfSum;
    }
    //выводим значение итоговой суммы со скидкой
    const resultSum = document.querySelector(".result-block__total-sum");
    resultSum.textContent = Intl.NumberFormat("en").format(sumTotal);
    //делаем кнопку не активной
    const button = document.querySelector(".result-block__discount");
    button.disabled = "true";
};