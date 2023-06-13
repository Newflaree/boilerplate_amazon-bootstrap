// Database
import {
  dbContents,
  dbProducts
} from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { HomeSection } from '@/views';


export default function Home({ contentData }) {
  const {
    metaTitle,
    metaDesc,
    metaKeywords,
    pageTitle,
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
      <section className="banner">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="banner-content text-center">
                <h1 class="text-white display-1">
                  { pageTitle }
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <HomeSection
        title={ section1.title }
        p={ section1.p1 }
        p2={ section1.p2 }
        products={ dbProducts.amazonProducts }
      />

      <HomeSection
        title={ section2.title }
        p={ section2.p1 }
        p2={ section2.p2 }
        products={ dbProducts.amazonProducts }
      />

      <HomeSection
        title={ section3.title }
        p={ section3.p1 }
        p2={ section3.p2 }
        p3={ section3.p3 }
        products={ dbProducts.amazonProducts }
      />

      <HomeSection
        title={ section4.title }
        p={ section4.p1 }
        p2={ section4.p2 }
        products={ dbProducts.amazonProducts }
      />

      <HomeSection
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
