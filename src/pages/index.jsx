// Database
import {
  dbContents,
  dbProducts
} from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';


export default function Home({ contentData }) {
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
    section5
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
          backgroundPosition: 'center',
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
        p2={ section1.p2 }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section2.title }
        p={ section2.p1 }
        p2={ section2.p2 }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section3.title }
        p={ section3.p1 }
        p2={ section3.p2 }
        p3={ section3.p3 }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section4.title }
        p={ section4.p1 }
        p2={ section4.p2 }
        products={ dbProducts.amazonProducts }
      />

      <PageSection
        title={ section5.title }
        p={ section5.p1 }
        p2={ section5.p2 }
        p3={ section5.p3 }
        products={ dbProducts.amazonProducts }
      />

    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = dbContents.homeContent;

  return {
    props: {
      contentData
    },
  }
}
