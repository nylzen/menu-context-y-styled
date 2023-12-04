# Menú desplegable usando React Context API y Styled Components

## Descripción

En este mini proyecto se muestra como crear un menú desplegable usando React Context API y Styled components.

No se han creado las rutas ya que el objetivo es mostrar como crear un menú desplegable usando React Context API y Styled components. La parte del ruteo la tienen que realizar ustedes mismos. De todas maneras, no es una tarea complicada ya teniendo la base.

**Recuerden que cuando clonen el repo, deberán hacer un npm install para que carguen los paquetes instalados (vite,styled-components,etc.)**

Les dejamos una breve descripción de los archivos y carpetas que se encuentran en el proyecto:

### styles (carpeta) y GlobalStyles.jsx (archivo)

En la carpeta styles se encuentran los estilos globales del proyecto. En el archivo GlobalStyles.jsx se encuentran los estilos globales del proyecto (Para este mini proyecto simplemente reseteamos los estilos por defecto del navegador). Para que los estilos globales estén disponibles en toda la aplicación, el archivo GlobalStyles.jsx se encuentra en el archivo **app.jsx**.

### context (carpeta) y Context.jsx (archivo)

En el archivo Context.jsx se encuentra la creación del contexto y el proveedor del mismo. En este caso, el contexto se llama "MenuContext" y el proveedor "MenuProvider". En el proveedor se encuentran las funciones que se van a utilizar para abrir y cerrar el menú, y el estado que indica si el menú está abierto o cerrado. Para que el contexto esté disponible en toda la aplicación, el proveedor se encuentra en el archivo **main.jsx**.

### Components (carpeta)

En esta carpeta encuentran los componentes que se utilizan en el proyecto.

#### icon (carpeta) y Icon.jsx (archivo)

En este archivo realizamos toda la lógica y estilado para mostrar el icono clickeable que nos permite desplegar el menú o cerrarlo. Agregamos un poco de lógica para que el icono cambie dependiendo si el menú está abierto o cerrado. Aquí utilizamos el hook useContext para traernos lo que necesitamos del contexto y usarlo tanto para abrir o cerrar como para cambiar los estilos del ícono. Para la creación del ícono aprovechamos el uso de ::before y ::after para crear las líneas que conforman el ícono, y en base a si necesitamos las barras en línea( cuando el menú está cerrado) o en cruz (cuando el menú está abierto) le agregamos los estilos correspondientes.

#### navbar (carpeta) y Navbar.jsx (archivo)

Esta carpeta contiene el componente Navbar , que es el que renderiza el menú (nav). En este archivo estilamos el navbar para desktop como queremos y luego lo preparamos para que se vea bien en mobile. Finalmente, utilizamos el context para que según si el menú está abierto o cerrado, se muestre o no el menú, mediante las prop $clicked colocada en la propiedad transform del StyledNavbar.

#### header (carpeta) y Header.jsx (archivo)

Esta carpeta contiene el componente Header que es el encargado de componente principal de nuestra aplicación. En el importamos tanto el componente Navbar como el componente Icon.

**Importante:**: se utiliza la prop "$clicked" y no "clicked" ya que Styled-Components te indica que si se trata de una prop booleana, se debe colocar el signo "$" antes del nombre de la prop.
