export const formatDate = (d) => {
  var date = new Date(d);
  const months = [
    'janúar',
    'febrúar',
    'mars',
    'apríl',
    'maí',
    'júní',
    'júlí',
    'ágúst',
    'september',
    'október',
    'nóvember',
    'desember',
  ];

  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};
