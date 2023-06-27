import Image from "next/image";

export const AmazonCard2 = ({
  cardTitle = '',
  cardDesc= '',
  cardPrice = '',
  cardImage = '',
  cardDestination = ''
}) => {
  return (
    <div className="card m-auto shadow" style={{ maxWidth: '1000px' }}>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
        <div className="col">
          <a href={ cardDestination } target='_blank'>
            <Image src={ cardImage } className="card-img-top p-5" alt={ cardDesc } />
          </a>
          </div>
        <div className="col">

      <div className="card-body">
        <a href={ cardDestination } className='text-amazon' target='_blank'>
          <h5 className="card-title text-amazon">{ cardTitle }</h5>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus elit, ullamcorper eget nisl nec, tempus tempor lorem. Vestibulum euismod orci eu tellus convallis, a eleifend metus posuere. Pellentesque a nibh eget risus cursus hendrerit. In eget gravida augue, at egestas tortor. Vivamus nec cursus erat. Proin in suscipit erat, non tempor enim. Sed ac odio tincidunt, tempor nunc sit amet, tristique augue.
        </p>
        <p className="card-text text-end fw-bold fs-3">
          ${ cardPrice } CLP
        </p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href={ cardDestination } className="btn btn-amazon" target='_blank'>
            <i className="fa-solid fa-cart-shopping" style={{ marginRight: '40px' }}></i>
            Comprar en Amazon
          </a>
        </div>
      </div>


        </div>
      </div>
    </div>
  );
}
