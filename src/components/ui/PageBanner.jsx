import Image from 'next/image';


export const PageBanner = ({ pageBanner, pageTitle }) => {
  return (
      <section
        className="banner"
        style={{
          backgroundImage: `url( ${ pageBanner } )`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-content text-center">
                <h1 className="text-white display-1">
                  { pageTitle }
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
