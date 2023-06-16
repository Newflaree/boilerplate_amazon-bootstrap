export const linkedWordsParaph = ( text = '', words = [] ) => {
  let result = text;

  words.forEach((phrase) => {
    const regex = new RegExp(phrase, 'gi');
    const link = `<a href='/${phrase.replace(/\s/g, '-').toLowerCase()}' class='inter-link'>${ phrase }</a>`;
    result = result.replace(regex, link);
  });

  return result;
}
