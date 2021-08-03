import React from "react";
import styled from "styled-components";
import { CardBlog } from "../components/cards/blog";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { themes } from "../components/styles/ColorsStyle";
import { H3, Wrapper } from "../components/styles/TextStyles";

import imageBlog1 from "../assets/images/blog/blog1.png";
import imageBlog2 from "../assets/images/blog/blog2.png";
import imageBlog3 from "../assets/images/blog/blog3.jpg";
import imageBlog4 from "../assets/images/blog/blog4.png";
import imageBlog5 from "../assets/images/blog/blog5.png";

export function Blog(props) {
  return (
    <Master {...props} noForm>
      <Title>Todas las publicaciones</Title>
      <Grid>
        {data.map((i, x) => (
          <CardBlog {...props} key={x} {...i} />
        ))}
      </Grid>
      <Title></Title>
    </Master>
  );
}

const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Title = styled(H3)`
  font-weight: bold;
  color: ${themes.light.primary};
  text-align: center;
  margin: 80px auto;
`;

const data = [
  {
    image: imageBlog5,
    date: "30 de Junio, 2021",
    title: "¿Cual es la diferencia entre un call center y un contact center?",
    description:
      "Un call center es una oficina centralizada que maneja el tráfico de llamadas entrantes y salientes de un negocio en particular a través de una red telefónica administrada por conmutador y con múltiples agentes utilizando un marcador predictivo. En él se manejan simultáneamente un gran número de llamadas debido a que puede mantener a los usuarios en espera y atenderlos de acuerdo a su posición en cola.",
    detail: `
    <p><strong>¿Qué es un call center?</strong></p>
    <p>Un call center es una oficina centralizada que maneja el tráfico de llamadas entrantes y salientes de un negocio en particular a través de una red telefónica administrada por conmutador y con múltiples agentes utilizando un marcador predictivo. En él se manejan simultáneamente un gran número de llamadas debido a que puede mantener a los usuarios en espera y atenderlos de acuerdo a su posición en cola.</p>
    <p>Los call centers han experimentado un crecimiento fenomenal en casi todos los países del mundo, el cual ha sido impulsado por las tecnologías de la información y los bajos costos de transmisión de datos. Por tanto, las compañías han considerado redituable el proporcionar servicio al cliente y de ventas a través de estos centros.</p>
    <p><strong>¿Qué es un contact center?</strong></p>
    <p>Un contact center es similar a un call center; sin embargo éste expande los canales mediante los cuales una compañía interactúa con el público, ya que además de hacer y recibir llamadas, también maneja otros medios como emails, chats, SMS y redes sociales, entre otros.</p>
    <p>Un contact center es la evolución de un call center.</p>
    <p>Se adapta a nuevos tipos de requerimientos de las empresas que contratan&nbsp; servicios hoy en día.</p>
    <p><strong>Contact centers vs. call centers, ¿cuál es la diferencia?</strong></p>
    <p>Aunque ambos términos se emplean indistintamente, la diferencia entre éstos radica en los servicios que ofrecen.</p>
    <p>Un call center tradicional maneja llamadas inbound y outbound para vender productos, realizar encuestas post-venta, levantar tickets, dar soporte técnico, etc.</p>
    <p>Los contact centers representan la evolución del call center, ya que proporcionan un servicio al cliente basado en la era digital.</p>
    <p>Éstos administran y procesan las necesidades de comunicación de las empresas creando mejores experiencias en el servicio de los clientes y usuarios.</p>
    <p><strong>Algunas características de un Call Center</strong></p>
    <ul><li>Equipo conformado por: asesores, agentes y supervisores que se encuentran capacitados para realizar llamadas telefónicas dentro de un mercado, un target, un objetivo.</li><li>¿Tipos de llamadas? Pueden ser las que buscan contactar con clientes, ya sean potenciales, usuarios, proveedores o bien fidelizar clientes.</li><li>¿Ubicación? Puede ser dentro del&nbsp; área de una empresa o bien tratarse de una institución ajena a la corporación donde se realiza una gestión masiva de llamadas.</li><li>Entrantes y salientes: un call center puede realizar campañas de marketing tanto outbound como inbound.&nbsp;</li><li>Característica principal: su herramienta de promoción, gestión y fidelización de clientes es el teléfono.</li></ul>
    <p><strong>Cuáles son los tipos de Call Center</strong></p>
    <p>Los call centers se diferencian según su tipo de operación, que puede ser:</p>
    <p><strong>Inbound</strong></p>
    <p>Este tipo de call center se define por la entrada de llamadas, es decir, la recepción de los llamados de los clientes. Por lo general, se relacionan con los servicios de atención al cliente.</p>
    <p><strong>Outbound</strong></p>
    <p>Por otro lado, los call centers outbound se dedican a realizar llamadas y a contactar a los clientes de manera activa. Se relaciona con los servicios de ventas remotas y cobranzas. .</p>
    <p><strong>Blended</strong></p>
    <p>Call centers que trabajan tanto con la emisión de llamadas como con la recepción. Mezclan operaciones inbound y outbound y ofrecen mayor variedad de servicios.</p>
    <p><strong>Canales que utiliza un Contact Center</strong></p>
    <p>Es importante destacar que un contact center no sólo está enfocado en ventas sino también para ofrecer soporte, servicio post-venta, reclamos, etc. a través de un bot o un grupo de agentes. Veamos algunos canales que utiliza el contact center como medio de comunicación:</p>
    <ul><li><strong>Teléfono:</strong> Es una de las herramientas principales del contact center la cual gestiona llamadas de manera masiva. Utilizando líneas VoIP, las cuales son más baratas que las líneas de teléfono tradicionales.</li><li><strong>SMS:</strong> Los mensajes son realizados a través de un software automatizado, ya sea para enviar avisos a clientes, publicidad o bien otras comunicaciones.&nbsp;</li><li><strong>Mail:</strong> Son programados y enviados de manera masiva con contenidos de ofertas o promociones recurrentes. Además, de avisos y recordatorios.&nbsp;</li><li><strong>Chat:</strong> A través de esta herramienta los clientes pueden absolver sus dudas respecto al producto o servicio que ofreces y es la más usada, debido a&nbsp; que los usuarios no se sienten presionados para realizar la compra. Es importante mencionar que a esto se le pueden añadir elementos de IA (Bots con Inteligencia artificial) que permiten la automatización de la atención y mejor respuesta a los usuarios.</li><li><strong>Redes sociales:</strong> es clave para geolocalizar a un determinado grupo de usuarios con intereses y comportamientos específicos relacionados con los servicios y productos que ofrece tu empresa, monitoreando la comunicación que se da de manera privada (inbox, DM, etc.) como pública (comentarios, tweets, etc.).</li></ul>
    <p><strong>Características del Contact Center</strong></p>
    <p>Tecnología Avanzada</p>
    <p>Las soluciones tecnológicas&nbsp; relacionadas con el Contact Center se mueven a un ritmo de vértigo.</p>
    <p>Además de disponer de tecnología diseñada para gestionar de una forma integral las interacciones que se generan en los diversos canales, se está complementando con diversas soluciones:</p>
    <ul><li>Las basadas en Cloud</li><li>La potenciación del autoservicio (IVR y Bots)</li><li>La expansión del teletrabajo</li><li>La incorporación de la Inteligencia Artificial</li><li>También cabe mencionar las herramientas de gestión operativa– como los scripts y gestores de conocimiento-, de gestión analítica – como estadísticas y dashboards en tiempo real.</li></ul>
    <p>Transformación Digital: Mejorar la experiencia Cliente</p>
    <p>Las interacciones con el cliente ya nos son hechos aislados o esporádicos. El cliente requiere cada vez más una experiencia consistente con sus necesidades.</p>
    <p>La estrategia de transformación digital del Contact Center se basa en (a diferencia de lo que es un call center), además de interactuar a través del canal que elijan, considerar el conjunto de la experiencia del cliente desde principio a fin.</p>
    <p>La empresa en su totalidad ha de integrar las tecnologías de gestión de los diferentes departamentos, para identificar el contexto completo del cliente en cada interacción, aprovechar los datos de los sistemas y lograr proporcionar un servicio proactivo.</p>
    <p>Capacidad de los Recursos Humanos</p>
    <p>Una tercera característica, es la gestión de los recursos humanos.</p>
    <p>La estructura de un Centro de Contacto es necesariamente flexible, para adaptarse a volúmenes de interacciones y objetivos fluctuantes.</p>
    <p>El reto está, por un lado, en priorizar que los equipos dispongan de las herramientas necesarias para obtener la máxima eficiencia en tiempo real.</p>
    <p>Por otro, conseguir que los agentes trabajen en equipo, aunque gestionen individualmente diferentes canales (llamadas entrantes, salientes, email etc.).</p>
    <p>Los perfiles de los empleados han de tener las competencias necesarias para interaccionar con el perfil digital del cliente.&nbsp;</p>
    <p>Tanto los mandos intermedios, como los agentes han de ser resolutivos, proactivos y orientados a aportar valor. Por lo tanto, el personal del Contact Center (y del call center, que está en relación directa) ha de estar preparado y formado adecuadamente, y debidamente remunerado de acorde a sus funciones y resultados.Escrito por:&nbsp; César Ponce – <strong>Consultor de procesos</strong></p>
    `,
  },
  {
    image: imageBlog4,
    date: "17 de Junio, 2021",
    title: "¿Que es el tiempo medio de operación? – TMO",
    description:
      "TMO es el tiempo medio de operación, también conocido con sus siglas en inglés como AHT (Average Handling Time). Se puede definir al TMO como el tiempo promedio que se tarda en manejar una llamada o transacción de principio a fin, desde el inicio de la llamada hasta el tiempo de espera, el tiempo de conversación y hasta cualquier tarea relacionada que un agente debe realizar después de la operación.",
    detail: `
      <p>TMO es el tiempo medio de operación, también conocido con sus siglas en inglés como AHT (Average Handling Time). Se puede definir al TMO como el tiempo promedio que se tarda en manejar una llamada o transacción de principio a fin, desde el inicio de la llamada hasta el tiempo de espera, el tiempo de conversación y hasta cualquier tarea relacionada que un agente debe realizar después de la operación.</p>
      <p>Debemos tomar en cuenta que el TMO no es una&nbsp; métrica de éxito ya que al apresurar a los operadores a cerrar las ventas, en lugar de resolver problemas sólo generaría clientes insatisfechos y con una mala experiencia de atención.&nbsp; Sin embargo, es una métrica importante para calcular los niveles del call center y evaluar la eficiencia del centro de llamadas.</p>
      <p><strong>Información para calcular el TMO</strong></p>
      <p>El tiempo medio de operación es fácil de calcular una vez que haya reunido los siguientes datos:</p>
      <p><strong>Tiempo de conversación: </strong>La cantidad de tiempo que sus operadores dedican a una llamada. Asegúrese de incluir cualquier momento interactivo en el que los clientes ingresen datos en un sistema automatizado.</p>
      <p><strong>Tiempo total de espera:</strong> Este debería ser otro número fácil de obtener, y es incluso más finito que el tiempo de conversación.</p>
      <p><strong>Tareas posteriores a la llamada:</strong> este es quizás el número más difícil de evaluar. Las tareas posteriores a la llamada pueden variar según la campaña o el producto que maneje el centro de llamadas.</p>
      <p><strong>Cómo mejorar el tiempo medio de Operación</strong></p>
      <ul><li>Existe una diferencia importante entre&nbsp; <strong>mejorar </strong>el tiempo promedio de operación&nbsp; y&nbsp; <strong>reducir</strong> el tiempo promedio de operación.&nbsp;</li><li>El punto de referencia real para un <strong>TMO</strong> mejorado son los tiempos de operación del ejecutivo de ventas MÁS altos niveles de satisfacción del&nbsp; cliente.</li><li>Teniendo esto en cuenta, definimos&nbsp; <strong>TMO mejorado</strong>&nbsp; como la disminución del tiempo medio de operación, al tiempo que aumenta la satisfacción general del cliente.</li></ul>
      <p><strong>¿Qué podemos hacer para mejorar el TMO?</strong></p>
      <ul><li><strong>Optimizar la capacitación de los operadores:</strong> En última instancia, el tiempo promedio de operación se reduce a la capacidad de sus operadores para persuadir al cliente de obtener el producto ofrecido. La capacitación adecuada e integral (CRM, software (incluido el chat y el servicio de asistencia técnica) y hardware (incluidas sus computadoras y auriculares), herramientas comerciales, etc., así como los estándares de la empresa, las políticas de operación, etc. de manera oportuna y eficaz.</li><li><strong>Habilitar la capacitación continua para operadores:</strong> La capacitación eficiente de los operadores no es un trato que se hace una sola vez; debes nutrir y cultivar continuamente a tu equipo. Las sesiones de coaching para operadores brindan capacitación continua a sus operadores, para que puedan aprender de su experiencia y trabajar para mejorar el TMO, sin sacrificar el servicio y la satisfacción del cliente.</li><li><strong>Optimice el enrutamiento de llamadas:</strong> Una de las formas más fáciles de reducir el TMO es enrutar las llamadas al representante adecuado la primera vez, sin necesidad de transferencias ni de tiempos de espera excesivos. Además, el enrutamiento de llamadas adecuado asegura que sus clientes estén conectados con el operador más informado para su consulta, lo que también reduce el TMO.</li><li><strong>Cree una base de conocimientos completa:</strong> Además del enrutamiento de llamadas, la creación de una base de conocimientos completa es otra forma sencilla de reducir el TMO. La gestión eficaz del conocimiento, incluido el uso de una base de conocimientos, facilita a los operadores el acceso inmediato a información importante, lo que reduce el tiempo medio de operación.</li><li><strong>Habilite las comunicaciones internas: </strong>En lugar de transferir llamadas de un lado a otro, o utilizar comunicaciones lentas por correo electrónico, habilite el chat interno del agente. Las respuestas llegan más rápido y, como resultado, AHT mejora.</li><li><strong>Grabar llamadas:</strong> Grabe todas las llamadas, tanto entrantes como salientes, y revíselas para identificar ineficiencias, problemas y áreas de mejora. Utilice grabaciones durante las sesiones de formación de sus operadores.</li><li><strong>Supervisar el rendimiento de los agentes: </strong>Una vez más, incluso los mejores operadores requieren cierto nivel de tutoría y supervisión. La supervisión del centro de llamadas, son importantes para la capacitación continua y también para mejorar otras métricas, como transferencias de llamadas, tiempo de espera y llamadas escalonadas.</li></ul>
      <p><strong>Beneficios de un TMO mejorado</strong></p>
      <ul><li><strong>Mejora de la experiencia del cliente:</strong> Las resoluciones oportunas y exitosas generan clientes satisfechos.</li><li><strong>Optimización del rendimiento operativo: </strong>A medida que avanza en los pasos para mejorar el tiempo medio de operación, identificará varias áreas de mejora. Estos no solo aumentarán la satisfacción del cliente, sino que también mejorarán la eficiencia del centro de contacto.</li><li><strong>Reducción de los costos: </strong>A medida que mejora la eficiencia, también reducirá sus costos.</li></ul>
      <p><strong>Prácticas recomendadas para el TMO mejorado</strong></p>
      <p>El&nbsp; mejor TMO es una función de tiempo de manejo reducido, mayor satisfacción del cliente y costos reducidos.</p>
      <ul><li>Optimizar la formación de operadores</li><li>Habilite el entrenamiento continuo de operadores</li><li>Optimizar el enrutamiento de llamadas</li><li>Habilitar las comunicaciones internas</li><li>Grabar y analizar llamadas</li><li>Supervisar el rendimiento del operador</li><li>Optimice los procesos para mejorar el flujo de trabajo</li></ul>
      <p>Escrito por:&nbsp; César Ponce – <strong>Consultor de procesos</strong></p>
      `,
  },
  {
    image: imageBlog3,
    date: "26 de Mayo, 2021",
    title: "¿Qué ventajas tiene tercerizar mi centro de atención de llamadas?",
    description:
      "¿Qué ventajas tiene tercerizar mi centro de atención de llamadas? Cuando el tamaño de una empresa aumenta, así",
    detail: `
      <p>Cuando el tamaño de una empresa aumenta, así como sus ganancias, las compañías se ven en la necesidad de contratar mayor personal a fin de mantener un flujo de trabajo estable que brinde un servicio eficiente. Sin embargo, este incremento de personal conlleva un aumento en los costos de la empresa, por ejemplo, los gastos de salario, seguro, beneficios laborales, entre otros.</p>
      <p>Esta es una de las principales razones para contratar un call center o contact center, debido a que al contratar servicios “outsourcing”, es decir, subcontratación o tercerización de servicios evitan incurrir en este tipo de gastos.</p>
      <p>A continuación presentamos las distintas razones para tercerizar tu centro de atención de llamadas:</p>
      <p>1. &nbsp; &nbsp; &nbsp; Flexibilidad: Se adaptan a la necesidad del cliente y ofrecemos servicios personalizados.</p>
      <p>2. &nbsp; &nbsp; &nbsp; Mejora el servicio al cliente. El tercerizar tu call center puede ayudar a gestionar a tus clientes 24/7, por lo que sus clientes no tendrán quejas respecto al horario de atención, y podrán realizar sus consultas siempre y cuando lo deseen.</p>
      <p>3. &nbsp; &nbsp; &nbsp; Incremento en las ventas. Al optar por perfiles de agentes especializados en cada servicio y sector, buscamos acompañar a nuestros clientes en su crecimiento.</p>
      <p>4. &nbsp; &nbsp; &nbsp; Fidelización de clientes. La cordialidad y simpatía con la que los agentes atienden sus llamadas es clave para que sus clientes estén felices. La imagen de la empresa no es el único aspecto que mejora, sino también la percepción de sus servicios.</p>
      <p>5. &nbsp; &nbsp; &nbsp; Efectividad: Mantenemos capacitado de manera continua y monitoreando a nuestro equipo de trabajo para lograr los resultados esperados.</p>
      <p>6. &nbsp; &nbsp; &nbsp; Reduce costos fijos. Al tercerizar un servicio de Call Center, la empresa contratante no tendrá que preocuparse por el aumento de costos fijos como luz o teléfono, ya que la oferta de dicho Call Center siempre incluye todo tipo de costos relacionados a la operación.</p>
      <p>7. &nbsp; &nbsp; &nbsp; Comunicación: Evolucionamos y presentamos la omnicanalidad como alternativa de comunicación</p>
      <p>8. &nbsp; &nbsp; &nbsp; Captación de nuevos clientes. Un cliente satisfecho con este servicio equivale a buenas recomendaciones para clientes potenciales.</p>
      <p>En TContakto consideramos la satisfacción del cliente final en cada punto de nuestros procesos, conocemos a nuestros clientes, crecemos junto con ellos, desarrollamos estrategias de mejora continua y afianzamos nuestros vínculos; brindando como socio estratégico nuestro expertise en el servicio de atención de canales de comunicación.</p>
      <p class="has-black-color has-text-color">Escrito por: Pamela Espejo Venero – <strong>Jefe de Desarrollo Comercial</strong></p>
      `,
  },
  {
    image: imageBlog2,
    date: "18 de Mayo, 2021",
    title: "¿Omnicanalidad = Omnipresencia?",
    description:
      "Imagina que tu SOAT está próximo a vencer, pero no te has percatado de ello.",
    detail: `
      <p>Imagina que tu SOAT está próximo a vencer, pero no te has percatado de ello. Luego, te llaman por teléfono, te tomas tu tiempo en escuchar al asesor y caes en cuenta de que debes renovar el seguro. Pasan las horas y recibes un mensaje de texto SMS anunciando que el tiempo se acaba: ya va a vencer! Pasan los 2 últimos días de tu póliza y recibes un whatsapp con una notificación de la empresa aseguradora indicándote que tengas cuidado con el monto de la multa de manejar sin SOAT y una oferta que es difícil rechazar. Terminas aceptando la póliza en unos simples pasos y ya puedes respirar con paz: has renovado tu SOAT. Para evaluar la atención, luego una operadora telefónica automática toma contacto y te pide discar del 1 al 5 para evaluar la atención. Sin darte cuenta, has tenido una prueba de primera mano con la omnicanalidad.</p>
      <p>¿Y de qué se trata este concepto llamado “Omnicanalidad”? Se trata de una herramienta muy potente del marketing que puede servirte a ti y tu empresa para obtener mejores resultados y rentabilizar tu negocio. <strong>Consiste en utilizar todos los canales de contacto disponibles de una manera secuencial o en paralelo que garanticen el contacto efectivo y con el menor uso de recursos</strong>.</p>
      <p>Antes bastaba con realizar llamadas telefónicas para ofrecer un producto o servicio y realizar seguimiento paulatino por ese&nbsp; mismo medio hasta conseguir que el cliente potencial se decantase por lo que le ofrecemos. Este proceso no solo era largo y propenso a la disponibilidad horaria y humor del cliente prospecto, sino que a nivel de recursos se requería de un operador que constantemente estuviera contactando a clientes (muchas veces de manera secuencial) y se limitaba por la cantidad de clientes dispuestos a atender al momento del contacto y el tiempo de cada llamada. Con la llegada de la era digital ello cambió por completo.</p>
      <p>La mayoría de nosotros estamos conectados mediante equipos telefónicos, tenemos una cuenta de correo, al menos una cuenta en alguna red social y utilizamos algún aplicativo de mensajería instantánea. Teniendo más de un canal de comunicación disponible por persona se volvió&nbsp; necesario generar estrategias que involucren a la mayoría de estos. En nuestro ejemplo inicial de la renovación del SOAT puede resultar algo obvio la utilización de esta estrategia. Sin embargo, dependiendo de la organización&nbsp; y el objetivo del contacto con el cliente se puede evaluar cómo utilizar los canales que tenemos a disposición.</p>
      <p>En TContakto tenemos las plataformas digitales que nos permiten monitorear, controlar y tratar a todos tus clientes de manera personalizada y con un monitoreo integral a fin de generar un contacto ordenado por todos los canales de atención disponibles como correo electrónico, mensaje de texto, whatsapp, llamada por voz o videollamada. Esto nos permite ajustarnos al ritmo de las personas a quienes vamos a contactar. ¿Se necesita generar un recordatorio para un agendamiento, renovación de suscripción o vencimiento de deuda? Enviamos mensajes de whatsapp o SMS, luego contacto con una grabación personalizada y finalmente el contacto humano.</p>
      <p>Escrito por: Giorgio Garibotto –&nbsp;<strong>Sub Gerente Comercial</strong></p>
      `,
  },
  {
    image: imageBlog1,
    date: "31 de Agosto, 2020",
    title: "EL LÍDER BAJO LA LUPA",
    description:
      "El líder bajo la lupa Actualmente en el entorno tan complejo en el que se encuentran las empresas",
    detail: `
      <p>Imagina que tu SOAT está próximo a vencer, pero no te has percatado de ello. Luego, te llaman por teléfono, te tomas tu tiempo en escuchar al asesor y caes en cuenta de que debes renovar el seguro. Pasan las horas y recibes un mensaje de texto SMS anunciando que el tiempo se acaba: ya va a vencer! Pasan los 2 últimos días de tu póliza y recibes un whatsapp con una notificación de la empresa aseguradora indicándote que tengas cuidado con el monto de la multa de manejar sin SOAT y una oferta que es difícil rechazar. Terminas aceptando la póliza en unos simples pasos y ya puedes respirar con paz: has renovado tu SOAT. Para evaluar la atención, luego una operadora telefónica automática toma contacto y te pide discar del 1 al 5 para evaluar la atención. Sin darte cuenta, has tenido una prueba de primera mano con la omnicanalidad.</p>
      <p>¿Y de qué se trata este concepto llamado “Omnicanalidad”? Se trata de una herramienta muy potente del marketing que puede servirte a ti y tu empresa para obtener mejores resultados y rentabilizar tu negocio. <strong>Consiste en utilizar todos los canales de contacto disponibles de una manera secuencial o en paralelo que garanticen el contacto efectivo y con el menor uso de recursos</strong>.</p>
      <p>Antes bastaba con realizar llamadas telefónicas para ofrecer un producto o servicio y realizar seguimiento paulatino por ese&nbsp; mismo medio hasta conseguir que el cliente potencial se decantase por lo que le ofrecemos. Este proceso no solo era largo y propenso a la disponibilidad horaria y humor del cliente prospecto, sino que a nivel de recursos se requería de un operador que constantemente estuviera contactando a clientes (muchas veces de manera secuencial) y se limitaba por la cantidad de clientes dispuestos a atender al momento del contacto y el tiempo de cada llamada. Con la llegada de la era digital ello cambió por completo.</p>
      <p>La mayoría de nosotros estamos conectados mediante equipos telefónicos, tenemos una cuenta de correo, al menos una cuenta en alguna red social y utilizamos algún aplicativo de mensajería instantánea. Teniendo más de un canal de comunicación disponible por persona se volvió&nbsp; necesario generar estrategias que involucren a la mayoría de estos. En nuestro ejemplo inicial de la renovación del SOAT puede resultar algo obvio la utilización de esta estrategia. Sin embargo, dependiendo de la organización&nbsp; y el objetivo del contacto con el cliente se puede evaluar cómo utilizar los canales que tenemos a disposición.</p>
      <p>En TContakto tenemos las plataformas digitales que nos permiten monitorear, controlar y tratar a todos tus clientes de manera personalizada y con un monitoreo integral a fin de generar un contacto ordenado por todos los canales de atención disponibles como correo electrónico, mensaje de texto, whatsapp, llamada por voz o videollamada. Esto nos permite ajustarnos al ritmo de las personas a quienes vamos a contactar. ¿Se necesita generar un recordatorio para un agendamiento, renovación de suscripción o vencimiento de deuda? Enviamos mensajes de whatsapp o SMS, luego contacto con una grabación personalizada y finalmente el contacto humano.</p>
      <p>Escrito por: Giorgio Garibotto –&nbsp;<strong>Sub Gerente Comercial</strong></p>
      `,
  },
];
