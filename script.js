let money = "";
let time = "";

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpensive(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if((typeof(a) === 'string') && (typeof(a) != null) 
            && (typeof(b) != null) && (a != '') && (b != '') 
            && (a.length < 50)){
            console.log("done");
            appData.expenses[a] = b;
        }else {
            console.log("bad result");
            i--;
        }
    
    
        
    }
}

chooseExpensive();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет составляет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel(){
    if(appData.moneyPerDay < 1000){
        alert("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000){
        alert("Средний уровень достака");
    } else if(appData.moneyPerDay > 5000){
        alert("Высокий уровень достатка");
    } else{
        alert("Произошла ошибка");
    }
}

detectLevel();

function checkSaving(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.monthIncome =save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);

    }
}

checkSaving();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
