function zeroPad(num: string, places: number): string {
  return num.padStart(places, '0');
}

function formatDate(unparsedDate: Date): string {
  const date = new Date(unparsedDate);
  const format = new Intl.DateTimeFormat('en');
  const [month, , day, , year] = format.formatToParts(date);

  return `${zeroPad(day.value, 2)}/${zeroPad(month.value, 2)}/${year.value}`;
}

export default formatDate;
