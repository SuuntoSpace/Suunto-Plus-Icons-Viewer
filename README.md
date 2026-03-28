# SuuntoPlus Native Icon Viewer (English / Español)

English documentation below. / Documentación en español abajo.

---

## 🇬🇧 English

A compact and standalone tool designed for SuuntoPlus developers who need to preview, identify, and use the vector icons natively built into Suunto watches.

When programming custom views (`t.html`), finding the correct icon for a shoe, heart rate, or weather by blindly guessing the Unicode Private Use Area (PUA) blocks is tedious. This utility app automatically iterates from **F100 to F450**, displaying both the exact icon and its HTML entity code (e.g., `&#xF106;`) directly on the watch screen.

### Features
1. **Built-in Catalog**: View dozens of icons instantly without dealing with offline Unicode tables.
2. **"Copy & Paste" Ready**: The exact HTML entity required for your project is printed right beneath each icon.
3. **Optimized Rendering**: Uses native JS `evaluate` and HTML `$.subscribe` intervals to dynamically update the UI without triggering the Suunto minifier restrictions.
4. **Responsive Circular Layout**: The 2x3 grid is asymmetrically anchored to scale flawlessly across different watch models, from the small Suunto 5 to the massive Suunto Race, preventing edges from being cut off.

### Usage Instructions
1. **Requirements**: Have Visual Studio Code and the **official SuuntoPlus plugin** installed.
2. **Open Project**: Open this `Icon_viewer` folder as the root directory in VS Code.
3. **Simulate**: Start the **Run Watch Simulator** from the Suunto plugin sidebar, choose any watch model, and press Play to start the timer.
4. **Enjoy the Show**: Every 5 seconds (5 clock ticks), the view will auto-rotate to the next batch of 6 icons.
5. **Implement**: Find the icon you need, note the entity code (e.g., `&#xF100;`), and paste it inside a `<span class="f-ico">...</span>` tag in your own SuuntoPlus application.

---

## 🇪🇸 Español

Una herramienta compacta e independiente diseñada para desarrolladores de SuuntoPlus que necesitan previsualizar, identificar y utilizar los iconos vectoriales nativos de los relojes Suunto. 

Al programar vistas personalizadas (`t.html`), buscar el icono correcto de una zapatilla o clima para incrustarlo a través del bloque Private Use Area (PUA) oculto suele implicar recompilar código a ciegas. Esta "app" iterará automáticamente de **F100 a F450**, mostrando en pantalla el icono exacto y su bloque `&#xF...;` necesario para usarlo directamente.

### ¿Qué soluciona esta utilidad?
1. **Catálogo Integrado**: Visualiza decenas de iconos sin tener que pelearte con mapas de caracteres vacíos de Suunto offline.
2. **"Copy & Paste" Directo**: Debajo de cada dibujo verás el texto HTML exacto (ej. `&#xF106;`) que debes teclear en tu código.
3. **Renderizado Optimizado**: Su mecánica usa un ticker del `evaluate` JS y la antena `$.subscribe` para saltarse los dolores de cabeza de los bucles nativos y el empaquetador XML.
4. **Layout Circular Responsivo**: La cuadrícula 2x3 está anclada asimétricamente. Funciona y se centra perfectamente escalada para no colapsar contra los bordes curvos, desde un pequeño Suunto 5 Peak al masivo Suunto Race.

### Instrucciones de Uso
1. **Requisitos**: Ten instalado Visual Studio Code y el **plugin oficial de SuuntoPlus**.
2. **Abrir Proyecto**: Abre la carpeta (`Icon_viewer`) como Raíz del proyecto en VS Code.
3. **Simular**: En el menú lateral, pulsa **Run Watch Simulator**, elige el simulador preferido y dale al botón de Play superior para que corra el tiempo.
4. **Disfruta el Show**: Cada 5 segundos ("5 ticks" de reloj), la herramienta refrescará la pantalla avanzando +6 iconos dentro del registro interno.
5. **Copia**: Ficha el icono que quieres usar y, dentro de tu aplicación principal Suunto, crea la etiqueta idéntica `<span class="f-ico">...</span>` rellenando el contenido con el minicódigo que te hemos impreso.

