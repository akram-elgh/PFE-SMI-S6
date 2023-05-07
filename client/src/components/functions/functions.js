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
  return type ? types[type] : types;
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
  return month ? months[month] : months;
}
