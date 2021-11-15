//what day of the year is today
//Forma de saber que dia del año es hoy
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());
