// Components
import { PageBanner } from '@/components/ui';
// Database
import { homeContent } from '@/database/pages-content';
// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { PageSection } from '@/views';


export default function Home({ contentData, productsData }) {
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
      <PageBanner pageTitle={ pageTitle } pageBanner={ pageBanner } />

      <hr />

      <PageSection
        title={ section1.title }
        products={ productsData }
      >
        <p>
          Bienvenido a nuestro sitio web dedicado al apasionante mundo de los drones. Si alguna vez has soñado con volar, los drones te brindan la oportunidad de experimentar la emoción y la libertad de surcar los cielos. Tanto si eres un principiante curioso como si eres un piloto experimentado, estás en el lugar correcto para descubrir todo lo que necesitas saber sobre vuelos con drones.
        </p>
        <p>
          En nuestro sitio, encontrarás recursos y guías completas que te ayudarán a dar tus primeros pasos en el mundo de los drones. Aprenderás los conceptos básicos del vuelo, las mejores prácticas de seguridad y las regulaciones necesarias para volar de forma responsable. Además, te proporcionaremos consejos prácticos y trucos de pilotos experimentados para que puedas perfeccionar tus habilidades y disfrutar de vuelos emocionantes.
        </p>
      </PageSection>

      <PageSection
        title={ section2.title }
        products={ productsData }
      >
        <p>
          La fotografía aérea es una forma fascinante de capturar el mundo desde una perspectiva completamente nueva. Con nuestros drones y cámaras aéreas de última generación, podrás elevar tu creatividad y capturar imágenes y vídeos impresionantes que dejarán a todos sin aliento.
        </p>
        <p>
          Nuestro sitio te brinda las herramientas y los conocimientos necesarios para convertirte en un experto en fotografía aérea. Aprenderás sobre los diferentes estilos y técnicas de captura, cómo ajustar la configuración de la cámara para obtener los mejores resultados y cómo editar y mejorar tus fotos para lograr resultados profesionales. Ya sea que desees capturar paisajes impresionantes, eventos deportivos emocionantes o imágenes únicas de viajes, te ayudaremos a llevar tus habilidades de fotografía aérea al siguiente nivel.
        </p>
      </PageSection>

      <PageSection
        title={ section3.title }
        products={ productsData }
      >
        <p>
          En nuestro sitio web, encontrarás una amplia selección de drones profesionales y para principiantes que se adaptan a tus necesidades y preferencias. Si eres un piloto experimentado que busca un dron de alto rendimiento con funciones avanzadas, tenemos los últimos modelos con tecnología de vuelo autónomo, seguimiento de objetos y estabilización de imagen para garantizar resultados excepcionales.
        </p>
        <p>
          Para aquellos que se están adentrando en el mundo de los drones, ofrecemos una variedad de opciones amigables para principiantes. Estos drones son fáciles de manejar, cuentan con características de seguridad mejoradas y te brindan la oportunidad de aprender y perfeccionar tus habilidades de vuelo de manera segura y divertida.
        </p>
        <p>
          Nuestros expertos han realizado reseñas detalladas y comparativas de drones para que puedas tomar decisiones informadas al realizar tu compra. Entendemos que cada piloto tiene necesidades y objetivos diferentes, por lo que estamos aquí para ayudarte a encontrar el dron perfecto que se ajuste a tu presupuesto y expectativas.
        </p>
      </PageSection>

      <PageSection
        title={ section4.title }
        products={ productsData }
      >
        <p>
          Además de los drones, también ofrecemos una amplia gama de accesorios esenciales que te ayudarán a mejorar tu experiencia de vuelo. Desde baterías adicionales y hélices de repuesto hasta estuches de transporte y filtros para la cámara, tenemos todo lo que necesitas para garantizar vuelos sin problemas y capturas increíbles.
        </p>
        <p>
          Nuestras guías de vuelo te brindarán consejos prácticos, técnicas avanzadas y consideraciones de seguridad para que puedas aprovechar al máximo tus sesiones de vuelo. Aprenderás cómo planificar rutas de vuelo, evitar obstáculos y optimizar los ajustes del dron para obtener resultados óptimos. Ya seas un aficionado que busca explorar nuevos horizontes o un profesional en busca de mejorar tus habilidades, nuestras guías de vuelo te brindarán la información necesaria para que cada vuelo sea exitoso.
        </p>
      </PageSection>

      <PageSection
        title={ section5.title }
        products={ productsData }
      >
        <p>
          Los drones están revolucionando múltiples industrias y abriendo nuevas posibilidades en el ámbito de la tecnología. Desde la agricultura y la inspección de infraestructuras hasta la cinematografía y la entrega de paquetes, los drones se están convirtiendo en herramientas indispensables en diversos sectores.
        </p>
        <p>
          En nuestro sitio web, te mantendremos actualizado sobre las últimas aplicaciones y tendencias en el mundo de los drones. Exploraremos cómo los drones están transformando la manera en que se realizan tareas cotidianas y cómo están impulsando la innovación en diferentes campos. Únete a nosotros y sé parte de la revolución de los drones, donde las posibilidades son infinitas.
        </p>
        <p>
          Te invitamos a explorar nuestro sitio web, aprender, descubrir y disfrutar de todo lo que el mundo de los drones tiene para ofrecer. Únete a la emocionante comunidad de pilotos de drones y descubre cómo volar puede cambiar tu perspectiva del mundo.
        </p>
      </PageSection>
    </MainLayout>
  );
}

export const getServerSideProps = async ( ctx ) => {
  const contentData = homeContent.textData;
  const productsData = homeContent.productsData;

  return {
    props: {
      contentData,
      productsData
    },
  }
}
