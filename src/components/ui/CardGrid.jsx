// Components
import { AmazonCard1 } from './';


export const CardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
      <div className="col">
        <AmazonCard1 />
      </div>
      <div className="col">
        <AmazonCard1 />
      </div>
      <div className="col">
        <AmazonCard1 />
      </div>
    </div>
  );
}
