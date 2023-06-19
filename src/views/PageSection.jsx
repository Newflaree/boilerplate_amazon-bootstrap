// Components
import { CardGrid1 } from '@/components/ui';
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
      <div className='container mb-5'>
        <h2 className='display-5'>{ title }</h2>

        { children }
      </div>

      <CardGrid1
        products={ products }
      />
    </section>
  );
}
