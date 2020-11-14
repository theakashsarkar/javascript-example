// Challenge 1'st Your Age in Days
function ageIndDay(){
    var birthYear = prompt("What year where you born... Good friend?");
    var birthYear = prompt("What year wher ");
    var ageIndDays = (2020 -birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageIndDays + ' days');
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function rest(){
    document.getElementById('ageInDay').remove();
}
