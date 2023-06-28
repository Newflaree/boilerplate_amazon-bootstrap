// Components
import { CardGrid2 } from '@/components/ui';
// Utils


export const ProductSection = ({
  children,
  title = '',
  p = '',
  p2 = '',
  p3 = '',
  linkWords = [],
  products =  []
}) => {
  const product = products[0];

  return (
    <section>
      <div className='container mb-3'>
        <h2 className='display-5'>{ title }</h2>

        { children }
      </div>

      <CardGrid2
        products={ product }
      />
    </section>
  );
}
