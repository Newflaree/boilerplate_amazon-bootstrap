// Components
import { CardGrid1 } from '@/components/ui';


export const PageSection = ({
  title = '',
  p = '',
  p2 = '',
  p3 = '',
  products =  []
}) => {
  const linkedWordsParaph = ( text = '', words = [] ) => {
    /*
    const textWords = text.split(' ');

    const result = textWords.map((textWord) => {
      const palabraEnlace = words.find((word) => word.toLowerCase() === textWord.toLowerCase());

      if (palabraEnlace) {
        return `<a href=${palabraEnlace}>${palabraEnlace}</a>`;

      } else {
        return textWord;
      }
    });

    return result.join(' ');
      * */
    const palabras = text.split(' ');

  const resultado = palabras.map((palabra) => {
    const palabraEnlace = words.find((word) => word.toLowerCase() === palabra.toLowerCase());

    if (palabraEnlace) {
      return `<a href=${palabraEnlace}>${palabraEnlace}</a>`;
    } else {
      return palabra;
    }
  });

  return resultado.join(' ');
  }

  const renderedLinks = ( text = '' ) => {
    const div = document.createElement('p');
    div.innerHTML = text;
    return div.innerHTML;
  }

  return (
    <section>
      <div className='container mb-5'>
        <h2 className='display-5'>{ title }</h2>

        <p dangerouslySetInnerHTML={{ __html: renderedLinks( linkedWordsParaph( p, [ 'Stone', 'HS700D' ] )) }} />
        {
          p2.length > 0 && (
            <p>{ p2 }</p>
          )
        }
        {
          p3.length > 0 && (
            <p>{ p3 }</p>
          )
        }
      </div>

      <CardGrid1
        products={ products }
      />
    </section>
  );
}
