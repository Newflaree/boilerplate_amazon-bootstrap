// Components
import { AmazonCard1 } from './';
// Database
import { dbProducts } from '@/database';


export const CardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
      {
        dbProducts.amazonProducts.map( product => (
          <div className="col">
            <AmazonCard1 
              key={ product.id }
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
