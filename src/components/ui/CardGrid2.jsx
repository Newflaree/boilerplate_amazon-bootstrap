// Components
import { AmazonCard2 } from './';
// Database
//

export const CardGrid2 = ({ product }) => {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 my-4">
      <div
        className="col"
      >
        <AmazonCard2
          cardTitle={ product.name }
          cardImage={ product.img }
          cardPrice={ product.price }
          cardDestination={ product.url }
        />
      </div>
    </div>
  );
}
