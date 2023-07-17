// Databas
import { dbContents, dbProducts } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';


const DjiMavic3ProPage = ({ contentData }) => {
  const {
    metaTitle,
    metaDesc,
    metaKeywords,
    pageTitle,
    pageBanner,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
  } = contentData;


  return (
    <MainLayout
      titlePage={ metaTitle }
      descPage={ metaDesc }
      keywordsPage={ metaKeywords }
    >
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

      <hr />

      <PageSection
        title={ section1.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section1.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section2.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section2.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section3.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section3.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section4.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section4.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section5.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section5.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section6.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section6.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section7.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section7.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section8.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section8.p1 }
        </p>
      </PageSection>

      <PageSection
        title={ section9.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          { section9.p1 }
        </p>
      </PageSection>
    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = dbContents.djiMavic3ProContent;

  return {
    props: {
      contentData
    },
  }
}


export default DjiMavic3ProPage;
