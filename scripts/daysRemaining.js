let dateToday = new Date();
let dateExam = new Date('2022, 11, 13');

let days = document.getElementById("days");

const daysRemaining = (exam, toDay) => {
  let difference = exam.getTime() - toDay.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  
  return totalDays;
};

days.innerHTML = `Faltam <b>${daysRemaining(dateExam, dateToday)}</b> dias.`;
