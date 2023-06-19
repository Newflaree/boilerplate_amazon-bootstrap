// Next.js
import NextLink from 'next/link';
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
        products={ dbProducts.amazonProducts }
      >
        <p>
          <NextLink href='/dji' passHref legacyBehavior><span className='inter-link'>DJI</span></NextLink> es la marca líder indiscutible en el mercado de drones y es reconocida por su calidad y rendimiento excepcionales. Sus drones profesionales, como el <NextLink href='/dji-phantom-4-pro' passHref legacyBehavior><span className='inter-link'>DJI Phantom 4 Pro</span></NextLink> y el <NextLink href='/dji-mavic-2-pro' passHref legacyBehavior><span className='inter-link'>DJI Mavic 2 Pro</span></NextLink>, son altamente cotizados por su capacidad de vuelo estable, cámaras de alta resolución y una amplia gama de funciones avanzadas. Con <NextLink href='/dji' passHref legacyBehavior><span className='inter-link'>DJI</span></NextLink>, puedes capturar impresionantes fotografías aéreas y videos de alta calidad para tus proyectos profesionales o simplemente para disfrutar de la experiencia de vuelo. Aunque los drones de <NextLink href='/dji' passHref legacyBehavior><span className='inter-link'>DJI</span></NextLink> pueden tener un precio más alto, la inversión vale la pena para aquellos que buscan la máxima calidad y confiabilidad en su equipo de drones.
        </p>
      </PageSection>


      <PageSection
        title={ section2.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          <NextLink href='/parrot' passHref legacyBehavior><span className='inter-link'>Parrot</span></NextLink> es una marca reconocida por su enfoque en la innovación y la tecnología de vuelo autónomo. Sus drones, como el <NextLink href='/parrot-anafi' passHref legacyBehavior><span className='inter-link'>Parrot Anafi</span></NextLink> y el <NextLink href='/parrot-bebop-2-power' passHref legacyBehavior><span className='inter-link'>Parrot Bebop 2 Power</span></NextLink>, ofrecen características avanzadas que te permiten capturar imágenes aéreas impresionantes con facilidad. La estabilidad en vuelo, la calidad de la cámara y la portabilidad son puntos fuertes de los drones de <NextLink href='/parrot' passHref legacyBehavior><span className='inter-link'>Parrot</span></NextLink>. Además, la interfaz de usuario intuitiva y las aplicaciones móviles bien diseñadas hacen que volar un dron <NextLink href='/parrot' passHref legacyBehavior><span className='inter-link'>Parrot</span></NextLink> sea una experiencia emocionante y accesible para principiantes y entusiastas por igual.
        </p>
      </PageSection>

      <PageSection
        title={ section3.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          <NextLink href='autel-robotics' passHref legacyBehavior><span className='inter-link'>Autel Robotics</span></NextLink> es una marca en rápido crecimiento que ha ganado una reputación sólida en el mercado de drones. Sus drones, como el <NextLink href='/autel-evo-ii' passHref legacyBehavior><span className='inter-link'>Autel EVO II</span></NextLink> y el <NextLink href='/autel-x-star-premiem' passHref legacyBehavior><span className='inter-link'>Autel X-Star Premium</span></NextLink>, ofrecen un rendimiento excepcional y características de nivel profesional. Con resoluciones de cámara impresionantes, tiempos de vuelo prolongados y una sólida construcción, los drones de <NextLink href='autel-robotics' passHref legacyBehavior><span className='inter-link'>Autel Robotics</span></NextLink> son ideales para fotógrafos y videógrafos aéreos que buscan una calidad de imagen y un rendimiento excepcionales. Además, la atención al detalle y el excelente servicio al cliente de <NextLink href='autel-robotics' passHref legacyBehavior><span className='inter-link'>Autel Robotics</span></NextLink> garantizan una experiencia de usuario satisfactoria y confiable.
        </p>
      </PageSection>

      <PageSection
        title={ section4.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          <NextLink href='/yeneec' passHref legacyBehavior><span className='inter-link'>Yuneec</span></NextLink> es una marca reconocida por su compromiso con la seguridad y la calidad en sus drones. Sus modelos, como el <NextLink href='yuneec-typhoon-h-pro' passHref legacyBehavior><span className='inter-link'>Yuneec Typhoon H Pro</span></NextLink> y el <NextLink href='yrneec-mantis-q' passHref legacyBehavior><span className='inter-link'>Yuneec Mantis Q</span></NextLink>, combinan características avanzadas y una construcción duradera. Con cámaras de alta resolución, modos de vuelo inteligentes y sistemas de evitación de obstáculos, los drones de <NextLink href='yuneec' passHref legacyBehavior><span className='inter-link'>Yuneec</span></NextLink> ofrecen una experiencia de vuelo segura y confiable. Ya sea que estés interesado en la fotografía aérea, la videografía o simplemente volar por diversión, los drones de <NextLink href='yuneec' passHref legacyBehavior><span className='inter-link'>Yuneec</span></NextLink> son una excelente opción para principiantes y pilotos experimentados que buscan un rendimiento sólido y características de seguridad avanzadas.
        </p>
      </PageSection>

      <PageSection
        title={ section5.title }
        products={ dbProducts.amazonProducts }
      >
        <p>
          <NextLink href='/holy-stone' passHref legacyBehavior><span className='inter-link'>Holy Stone</span></NextLink> se destaca como una marca popular para aquellos que buscan drones de calidad a precios asequibles. Sus modelos, como el <NextLink href='holy-stone-hs700d' passHref legacyBehavior><span className='inter-link'>Holy Stone HS700D</span></NextLink> y el <NextLink href='/holy-stone-hs120d' passHref legacyBehavior><span className='inter-link'>Holy Stone HS120D</span></NextLink>, ofrecen un equilibrio entre características avanzadas y facilidad de uso. Estos drones son perfectos para principiantes y entusiastas que desean explorar el vuelo con drones y la fotografía aérea sin romper su presupuesto. Con características como transmisión en vivo de video, modos de vuelo inteligentes y una duración de batería decente, los drones de <NextLink href='holy-stone' passHref legacyBehavior><span className='inter-link'>Holy Stone</span></NextLink> te permiten capturar imágenes impresionantes y disfrutar de la emoción de volar sin complicaciones.
        </p>
      </PageSection>
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
