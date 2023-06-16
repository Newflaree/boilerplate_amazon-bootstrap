// Components
import { CardGrid1 } from '@/components/ui';
// Utils
import { stringMethods } from '@/utils';


export const PageSection = ({
  title = '',
  p = '',
  p2 = '',
  p3 = '',
  linkWords = [],
  products =  []
}) => {
  const str = stringMethods.linkedWordsParaph( p, linkWords );

  return (
    <section>
      <div className='container mb-5'>
        <h2 className='display-5'>{ title }</h2>

        <p dangerouslySetInnerHTML={{ __html: str }} />
        {
          p2.length > 0 && (
            <p>
            </p>
          )
        }
        {
          p3.length > 0 && (
            <p>
            </p>
          )
        }
      </div>

      <CardGrid1
        products={ products }
      />
    </section>
  );
}
