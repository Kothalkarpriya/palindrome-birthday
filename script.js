var inputDate = document.querySelector('#input-date');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');

button.addEventListener('click', clickHandler);

function clickHandler(e){
    var bdyDate = inputDate.value;
    if(bdyDate !== ''){
        var listOfDate = bdyDate.split('-');

        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };

        var convertDateToStr = convertDateToString(date);
        console.log(convertDateToStr);
    }
    // console.log(bdyDate);
}


function reverseStr(str){//str = Hello
    var charList = str.split(''); //['H', 'e', 'l', 'o', 'o']
    var reverseList = charList.reverse();// ['o', 'o', 'l', 'e', 'H']
    var reversedList = reverseList.join(''); //ooleH
    // var lis = str.split('').reverse().join('');
    return reversedList;
}

function isPalindrome(str){// to check is the reverse is equals to the actual string
    var getReverse = reverseStr(str);
    return getReverse == str;
}

function convertDateToString(date){
    var dateStr = {day:'', month:'', year:''};

    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr; //day: '02', month: '09', year: '2021'}
}

// console.log(isPalindrome("lol"))