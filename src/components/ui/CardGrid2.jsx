// Components
import { AmazonCard2 } from './';
// Database
import { dbProducts } from '@/database';


export const CardGrid2 = () => {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 my-4">
      {
        dbProducts.amazonProducts.map( product => (
          <div
            key={ product.id }
            className="col"
          >
            <AmazonCard2
              cardTitle={ product.name }
              cardImage={ product.img }
              cardPrice={ product.price }
              cardDestination={ product.url }
            />
          </div>
        ))
      }
    </div>
  );
}
