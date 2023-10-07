# TEP2

Instrucctivo de correcto uso de nuestro formulario:

como primer punto cabe indicar que tenemos 3 metodos de verificar que el CRUD
puede ser visible correctamente para cualquier usuario, esto indica que ya sea por 
celular o mediante una computadora el usuario puede acceder al formulario.

NOTA: si se accede por medio de la liga no se puede visualizar los 
datos enviados ya que los host gratuitos utilizados no son capaces de trabajar con 
documentos de tipo json, en el cual fue indicado que se almacenaran los datos recabados
por lo tanto se mostrara un mensaje de error "Error al enviar los datos. Por favor, inténtalo de nuevo más tarde".

Método 1 - GitHub Pages:

Acceda al formulario en línea utilizando esta URL: https://mirshanohely.github.io/TEP2/public/.
Esto le llevará al formulario alojado en GitHub Pages. Puede acceder a él desde cualquier dispositivo, ya sea un teléfono móvil o una computadora.
Tenga en cuenta que, debido a las restricciones de GitHub Pages, no podrá ver los datos enviados en esta versión en línea. Si intenta enviar datos, verá un mensaje de error que dice: "Error al enviar los datos. Por favor, inténtalo de nuevo más tarde".

Método 2 - Servidor Local (localhost:5000):

Si prefiere trabajar localmente en su máquina y ver los datos enviados, aquí están los pasos para configurar y ejecutar el formulario en su servidor local:
Asegúrese de tener Node.js instalado en su computadora.
Abra Visual Studio Code y haga clic en "Archivo" en la parte superior izquierda de la ventana.
Seleccione la opción "Abrir carpeta" y elija la carpeta del proyecto TEP que desea abrir.
Una vez que su proyecto esté abierto en Visual Studio Code, abra una nueva terminal haciendo clic en "Terminal" en la barra de menú superior y luego seleccionando "Nueva terminal". Esto abrirá una terminal en la parte inferior de la ventana.
En la terminal, ingrese el siguiente comando y presione "Enter" para instalar las dependencias necesarias para hacer la conexión con Node.js.
Abra la terminal de su sistema operativo.
Navegue hasta la ubicación de su proyecto utilizando el comando cd (por ejemplo, cd Documents/TEP2).
Ejecute el siguiente comando para instalar las dependencias necesarias: npm install express.
Una vez que se completen las instalaciones, ejecute el siguiente comando para iniciar el servidor local: node server.js.
Verá un mensaje que dice "Servidor Node.js escuchando en el puerto 5000".
Abra su navegador web y escriba en la barra de direcciones: http://localhost:5000/public/.
Esto le permitirá acceder al formulario a través de su servidor local. Puede ingresar datos en el formulario y, al hacer clic en "Enviar", verá un mensaje en la parte inferior de la página que dice "Datos guardados con éxito".

Método 3 - InfinityFree (crudtep.rf.gd):

Para acceder al formulario alojado en InfinityFree, simplemente visite la siguiente URL en su navegador web: http://crudtep.rf.gd/.
Esto le llevará al formulario que se encuentra alojado en la plataforma InfinityFree.
Al igual que en el caso de GitHub Pages, tenga en cuenta que debido a las restricciones de InfinityFree, no podrá ver los datos enviados en esta versión en línea. Si intenta enviar datos, verá un mensaje de error que dice: "Error al enviar los datos. Por favor, inténtalo de nuevo más tarde".
El formulario es accesible desde cualquier dispositivo, ya sea un teléfono móvil o una computadora.

NOTA: Recuerde que los datos enviados solo se verán y almacenarán correctamente en su servidor local (método 2) debido a las limitaciones de las plataformas de alojamiento en línea como GitHub Pages e InfinityFree.

De esta manera, puede utilizar su formulario tanto en GitHub Pages como en su servidor local y como en infinity free. 
Recuerde que los datos enviados solo se verán y almacenarán correctamente en su servidor local debido a las limitaciones de GitHub Pages.
