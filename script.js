var inputDate = document.querySelector('#input-date');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');

button.addEventListener('click', checkInput);

function checkInput(){
    if(inputDate.value == ''){
        // alert('Please insert the Birthdate!');
        output.style.color = "red";
        output.innerText = "Please insert the Birthdate";
    }
    else{
        clickHandler();
    }
}

function clickHandler(e) {
    var bdyDate = inputDate.value;
    if (bdyDate !== '') {
        var listOfDate = bdyDate.split('-');

        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };

        var checkPalindrome = checkPalindromeForAllDateFormats(date);
        if (checkPalindrome) {
            output.style.color = "green";
            output.innerText = "Hurray! Your birthday is palindrome";
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date);
            output.style.color = "red";
            output.innerText = `Sad! Your Birthday is not a Palindrome. The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed the palindrome date by ${ctr} days`;

        }
        // output.innerText = "The next date is " + varia;
    }
    // console.log(bdyDate);
}


function reverseStr(str) {//str = Hello
    var charList = str.split(''); //['H', 'e', 'l', 'o', 'o']
    var reverseList = charList.reverse();// ['o', 'o', 'l', 'e', 'H']
    var reversedList = reverseList.join(''); //ooleH
    // var lis = str.split('').reverse().join('');
    return reversedList;
}

function isPalindrome(str) {// to check is the reverse is equals to the actual string
    if(str === reverseStr(str)){
        return true;
    }
    return false;
    // var getReverse = reverseStr(str);
    // return getReverse == str;
}

function convertDateToString(date) {
    var dateStr = { day: '', month: '', year: '' };

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr; //day: '02', month: '09', year: '2021'}
}

function getAllDateFormats(date) {
    var dateStr = convertDateToString(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];//['02092021', '09022021', '20210902', '020921', '090202', '210902']
}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);
    // var flag = false;
    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            return true;
        }
    }
    return false;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
    
    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {//for other month
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    
    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);
    while (1) {
        ctr++;
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
}
// console.log(isPalindrome("lol"))