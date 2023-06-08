

export const AmazonCard1 = ({
  cardTitle = '',
  cardDesc= '',
  cardPrice = '',
  cardImage = '',
  cardDestination = ''
}) => {
  return (
    <div className="card m-auto" style={{ width: '18rem'} }>
      <a href={ cardDestination } target='_blank'>
        <img src={ cardImage } className="card-img-top p-3" alt={ cardDesc } />
      </a>
      <div className="card-body">
        <a href={ cardDestination } className='text-amazon' target='_blank'>
          <h5 className="card-title text-amazon">{ cardTitle }</h5>
        </a>
        <p className="card-text text-end fw-bold fs-3">
          ${ cardPrice } CLP
        </p>

        <div className="d-grid gap-2">
          <a href={ cardDestination } className="btn btn-amazon" target='_blank'>
            <i className="fa-solid fa-cart-shopping" style={{ marginRight: '40px' }}></i>
            Comprar en Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
