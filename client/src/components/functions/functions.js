export function getDate() {
  const date = new Date();
  return date.toLocaleDateString("fr");
}

export function getTime() {
  const date = new Date();
  return date.toLocaleTimeString("fr");
}

export function getLevel(lvl) {
  const levels = [
    "---Selectioner un niveau",
    "Prescolaire",
    "Premier anne primaire",
    "Deuxieme anne primaire",
    "Troisieme anne primaire",
    "Quatrieme anne primaire",
    "Cinquiem anne primaire",
    "Sixiem anne primaire",
    "Premier anne college",
    "Deuxieme anne college",
    "Troisieme anne college",
    "Tronc commun",
    "Premier anner bac",
    "Deuxieme anne bac",
    "Etudes universitaires",
  ];
  return lvl ? levels[lvl] : levels;
}

export function getPaymentType(type) {
  const types = [
    "---Selectionner un type du payment----",
    "Par eleve",
    "Par heure",
    "Pourcentage",
  ];
  return type || type === 0 ? types[type] : types;
}

export function getMonth(month) {
  const months = [
    "Pas encore",
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juilliet",
    "Auot",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  return month || month === 0 ? months[month] : months;
}

export function getHour(hour) {
  const hours = [
    "---Selectioner une heure----",
    "10:00h",
    "10:30h",
    "11:00h",
    "11:30h",
    "12:00h",
    "12:30h",
    "13:00h",
    "13:30h",
    "14:00h",
    "14:30h",
    "15:00h",
    "15:30h",
    "16:00h",
    "16:30h",
    "17:00h",
    "17:30h",
    "18:00h",
    "18:30h",
    "19:00h",
    "19:30h",
    "20:00h",
    "20:30h",
  ];
  return hour || hour === 0 ? hours[hour] : hours;
}

export function getDay(day) {
  const days = [
    "---Selectioner un jour---",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  return day || day === 0 ? days[day] : days;
}

export function calculateTeacherSalary({
  price,
  type_of_payment,
  student_count,
  duration,
  salary,
}) {
  const hours = duration === 120 ? 4 : 3;

  if (type_of_payment === 1) return student_count * salary;
  else if (type_of_payment === 2) return hours * salary * 4;
  else return price * (salary / 100);
}

export function calculateClassesRevenuePerMonth(classes) {
  let revenue = 0;
  classes.map((classe) => {
    revenue +=
      classe.student_count * classe.price - calculateTeacherSalary(classe);
  });
  return revenue;
}
