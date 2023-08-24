// Next.js
import NextLink from 'next/link';
// Database
import { dbContents, dbProducts } from '@/database';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';

const DJIPage = ({ contentData }) => {
  const {
    metaTitle,
    metaDesc,
    metaKeywords,
    pageTitle,
    pageBanner,
    section1,
    section2,
    section3
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
          Los drones DJI son reconocidos en todo el mundo por su calidad excepcional y su rendimiento sobresaliente. Con una amplia gama de modelos diseñados tanto para principiantes como para profesionales, DJI ofrece ventajas significativas en el campo de los drones. Una de las principales ventajas de los drones DJI es su estabilidad en vuelo, gracias a la tecnología avanzada de control y navegación que los hace fáciles de pilotar incluso para aquellos sin experiencia previa. Además, los drones DJI están equipados con cámaras aéreas de alta calidad, lo que permite capturar imágenes y videos impresionantes para fotografía aérea y cinematografía profesional. Con características como modos de vuelo inteligentes, seguimiento de objetos y opciones de control remoto, DJI proporciona a los pilotos una experiencia de vuelo fluida y emocionante.
        </p>
      </PageSection>

      <PageSection
        title={ section2.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          DJI no solo se enfoca en la producción de drones de alta calidad, sino que también ofrece una amplia gama de accesorios y tecnología de vuelo para mejorar aún más la experiencia del usuario. Los accesorios de DJI incluyen baterías adicionales para prolongar el tiempo de vuelo, estabilizadores de cámara para obtener tomas más. Además, los drones DJI están equipados con cámaras aéreas de alta calidad, lo que permite capturar imágenes y videos impresionantes para fotografía aérea y suaves y filtros para mejorar la calidad de imagen en diferentes condiciones de iluminación. Además, DJI cuenta con una gran comunidad de desarrolladores y entusiastas que han creado aplicaciones y software complementarios para aprovechar al máximo los drones DJI. Estas aplicaciones ofrecen funciones avanzadas de planificación de vuelo, edición de videos y transmisión en vivo, brindando a los usuarios un control completo sobre sus drones y permitiéndoles explorar nuevas posibilidades en la fotografía aérea y la videografía.
        </p>
          En resumen, DJI se destaca como una marca líder en drones profesionales y accesorios de calidad. Con ventajas en estabilidad de vuelo, cámaras aéreas de alta resolución y una amplia gama de accesorios y tecnología de vuelo, DJI es la elección ideal tanto para principiantes como para profesionales en el mundo de los drones. Explora todo lo que DJI tiene para ofrecer y sumérgete en el emocionante mundo de la fotografía aérea, los vuelos recreativos y mucho más.
        <p>
        </p>
      </PageSection>

      <PageSection
        title={ section3.title }
        products={ dbProducts.amazonProducts }
      >
        <h3>{ section3.subsection1.title }</h3>
        <p>
          El <NextLink href='/dji-mavic-3-pro' passHref legacyBehavior><span className='inter-link'>DJI Mavic 3 Pro</span></NextLink> es uno de los drones más destacados de la marca DJI. Con su cámara Hasselblad de 20 megapíxeles y capacidad de grabación de video en 4K, este dron ofrece una calidad de imagen excepcional. La tecnología de vuelo avanzada, incluyendo el sistema de detección de obstáculos omnidireccional, garantiza un vuelo seguro y estable. Además, el Mavic 2 Pro cuenta con modos de vuelo inteligentes, como el seguimiento de objetos y el Hyperlapse, que permiten capturar tomas únicas y creativas. Con una duración de batería de hasta 31 minutos y un diseño plegable y portátil, el DJI Mavic 2 Pro es ideal tanto para profesionales de la fotografía aérea como para entusiastas que buscan una experiencia de vuelo excepcional.
        </p>
      </PageSection>
    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = dbContents.djiContent;

  return {
    props: {
      contentData
    },
  }
}

export default DJIPage;
