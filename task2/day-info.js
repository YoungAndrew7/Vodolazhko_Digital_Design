function getDayInfo(date) {
  let arrMounth = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  let arrDay = [
    'Воскресение',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  let inputDay = date.substring(0, 2);
  let inputMouth = date.substring(3, 5);
  let inputYear = date.substring(6, 10);
  let newDate = inputMouth + '.' + inputDay + '.' + inputYear;
  let inputDate = new Date(newDate);
  let year = inputDate.getFullYear();
  let month = inputDate.getMonth();
  let day = inputDate.getDate();
  let dayOfTheWeek = inputDate.getDay();
  let week = Math.ceil(day/7)
  console.log(`${arrDay[dayOfTheWeek]}, ${week} неделя ${arrMounth[month]} ${year} года`)
}

let dayX = '15.12.2021';
getDayInfo(dayX)

