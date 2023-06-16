// Database
import { dbContents, dbProducts } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';


const FeaturedBrandsPage = ({ contentData }) => {
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
        p={ section1.p1 }
        linkWords={ section1.linkWords }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section2.title }
        p={ section2.p1 }
        linkWords={ section2.linkWords }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section3.title }
        p={ section3.p1 }
        linkWords={ section3.linkWords }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section4.title }
        p={ section4.p1 }
        linkWords={ section4.linkWords }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section5.title }
        p={ section5.p1 }
        linkWords={ section5.linkWords }
        products={ dbProducts.amazonProducts }
      />
    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = dbContents.generalReviewsContent;

  return {
    props: {
      contentData
    },
  }
}

export default FeaturedBrandsPage;
