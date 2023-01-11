# Componentes
--> Los componentes son los bloques de construcción de React 
Armar muchas carpetas en el src no ayuda con la organizacion de los componentes
# Export default
--> nos permite buscar y obtener informacion de otro archivo
# Public (carpeta)
--> dentro de la carpeta public siempre agregamos los archivos estaticos (html, imgenes)
# Carpeta src
--> agregamos los componentes que se van a ir modificando y actualizando
# Props
--> Los componentes usan Props para mejorar su funcionalidad y poder reusar el código.
Gracias a las props podemos crear varios componentes cambiandoles sus propiedades para generar un resultado distinto.
Los Props tiene una importante función: ellos pasan los datos de un componente a otro, ofreciendo así un canal por el medio del cual los componentes se puede comunicar.
# Props != Estados
--> Al igual que con las props, con el state podemos hacer que nuestro componente cambie la forma en que se comporta o renderiza.
Las props son definidas en el momento que se crea el componente, son simplemente un parámetro que recibe la función que crea nuestro componente.
El state, solo vive dentro de nuestro componente, es un dato privado de los class component. Esa es la principal diferencia entre props y state.
Cuando pensamos en props, pensamos en datos de iniciación de un componente. Cuando pensamos en state, pensamos en datos internos del componente que pueden cambiar y modificar su comportamiento. Un componente no puede modificar el valor de sus props, pero si el de su state.
# Estados
--> variables que nos permiten guardar informacion que podemos cambiar a lo largo del tiempo, la utilizo en mi componente para poder cambiar su valor. Tiende a cambiar si el componente lo pide.
# Use State (pieza de estado)
--> funcion que nos permite manejar y actualizar el estado dentro de un componente.
Nos permite hacer mucho mas facil la actualizacion del estado.
Nos devuelve un array donde en la posicion 0 se ubica el estado actual, y en la posicion 1 se ubica el setter (una fx que nos permite actualizar el valor del estado).
Nos permite armar una estructura donde vamos a tener nuestro estado actual, una fx que nos va a permitir cambiar ese estado y una definicion inicial.
# Hook
--> fx que modifican el estado (state) y nos devuelve algo, siempre se inician con la palabra "use" y son propias de react. Ej: useState 
# Map
--> su fx es iterar dentro de mis distintos items y generar algo nuevo en cada uno de ellos. Es similar al for each. Me permite hacer multiples elementos o multiples estados sin tener que escribir uno por uno.
# Key Props
--> son propiedades unicas de react, necesita que las identifiquemos a cada una para entederlas de forma unica. 
Permite que cuando tengamos un cambio en alguna de ellas, pueda tener idea de cual fue modificada y pueda hacer la actualizacion en el DOM de manera mas eficiente.
# Vinculacion entre paginas/componentes
--> si quiero vincular con hojas/paginas externas utilizo <a>
--> para vincular entre componentes utilizo <Link> : viene de la libreria react-router-dom
# Formularios Controlados
--> value, onChange y onBlur lo vamos a utilizar en todos los formularios controlados
# Fragment
--> a diferencia del div, nos permite componetizar (armar todo en un mismo componente) pero cuando lo transforme a html, no lo va a mostrar. Remplaza los div que no cumplen ninguna fx, mas que englobar el componente que renderiza React.