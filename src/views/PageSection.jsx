// Components
import { CardGrid1, CardGrid3 } from '@/components/ui';
// Utils
import { stringMethods } from '@/utils';


export const PageSection = ({
  children,
  title = '',
  p = '',
  p2 = '',
  p3 = '',
  linkWords = [],
  products =  []
}) => {
  return (
    <section>
      <div className='container mb-3'>
        <h2 className='display-5'>{ title }</h2>

        { children }
      </div>

      {
        products.length > 0 && (
          <CardGrid3
            products={ products }
          />
        )
      }
    </section>
  );
}
