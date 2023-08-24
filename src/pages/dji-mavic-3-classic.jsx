// Databas
import { dbContents, dbProducts } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';
import { CardGrid2 } from '@/components/ui';


const DjiMavic3ClassicPage = ({ contentData }) => {
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
      pageBanner={ pageBanner }
      pageTitle={ pageTitle }
    >
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
      >
        <h3>{ section4.subSection1.title }</h3>
        <p>
          { section4.subSection1.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <h3>{ section4.subSection2.title }</h3>
        <p>
          { section4.subSection2.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <h3>{ section4.subSection3.title }</h3>
        <p>
          { section4.subSection3.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <h3>{ section4.subSection4.title }</h3>
        <p>
          { section4.subSection4.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <h3>{ section4.subSection5.title }</h3>
        <p>
          { section4.subSection5.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <h3>{ section4.subSection6.title }</h3>
        <p>
          { section4.subSection6.p }
        </p>
        <CardGrid2 product={ dbProducts.amazonProducts[0] } />

        <p>
          { section4.p1 }
        </p>
      </PageSection>
    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = dbContents.djiMavic3ClassicContent;

  return {
    props: {
      contentData
    },
  }
}


export default DjiMavic3ClassicPage;
