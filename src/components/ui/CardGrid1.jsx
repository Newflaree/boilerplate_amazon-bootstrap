// Components
import { AmazonCard1, AmazonCard2 } from './';
// Database
import { dbProducts } from '@/database';


export const CardGrid1 = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-4 my-4">
      {
        dbProducts.amazonProducts.map( product => (
          <div
            key={ product.id }
            className="col"
          >
            <AmazonCard1
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
