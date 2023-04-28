export function getDate() {
  const date = new Date();
  return date.toLocaleDateString("fr");
}

export function getTime() {
  const date = new Date();
  return date.toLocaleTimeString("fr");
}
