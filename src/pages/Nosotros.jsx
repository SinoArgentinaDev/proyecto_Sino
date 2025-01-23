import { Header } from '../components/shared/Header/Header'
import { Title } from '../components/shared/Title/Title'
import { AboutUsTwo } from '../components/AboutUsTwo/AboutUsTwo'
import nosotros from '../assets/videos/SobreNosotros.mp4'
import { About } from '../components/About/About'


export const Nosotros = () => {
  return (
    <div>
      <Header />
      <Title title='SOBRE NOSOTROS' text='Home / Sobre Nosotros' />
      <AboutUsTwo videoSrc={nosotros} 
      title="Confianza y Éxito en tus operaciones con el Mercado Chino sin barreras ni riesgos" 
      paragraph1="Somos Sino Argentina Group, una empresa de comercio exterior con oficinas en la ciudad de Guangzhou, China, y en Buenos Aires, Argentina. Nuestra misión es asistir a las pymes argentinas para integrarse en el mercado Chino."
       paragraph2="Ofrecemos un servicio integral de comercio exterior con el mercado Chino. Nos encargamos de facilitar todas las gestiones de importación y exportación tanto en China como en Argentina, con profesionales bilingües radicados en China, con excelente dominio del idioma chino y español."
       paragraph3="Conocemos la complejidad de encontrar el proveedor adecuado en China para poder importar sin caer en fraudes o estafas; así como la incertidumbre de saber si el comprador de tus productos en China es serio y cumplirá con las condiciones de compra para tus exportaciones hacia China."/>
       <About videoSrc={nosotros} 
       paragraph1="Estas dificultades que se presentan tanto en la importación desde China como en la venta de productos argentinos hacia allí, requieren de nuestra gestión para llevar a cabo con éxito las negociaciones y gestiones de compra/venta."
       paragraph2="Sino Argentina Group se encarga de la búsqueda de proveedores profesionales, ofreciendo distintas alternativas de proveedores de acuerdo a tus requerimientos y negociando los mejores precios y condiciones de compra. Una vez cerrado el contrato de compra, nos encargamos de efectuar toda la logística para que tus productos lleguen a Argentina correctamente." 
       paragraph3="En el caso de que estés planificando abrir el mercado Chino para tus exportaciones, nos encargamos de efectuar la investigación de mercado, identificando posibles clientes; facilitamos la negociación de venta y constatamos la veracidad y seriedad del importador chino. Una vez cerrada la venta, también nos encargamos de toda la logística desde cualquier localidad en Argentina hasta el destino final en China."/>
    </div>
  )
}
