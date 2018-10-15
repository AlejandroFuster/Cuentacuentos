// Based on the fantastic: 
// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

let grammar;

let datos = {
  "start"     : ["#story#"],
  "story"     : ["#[enamorado:#masc#][enamorada:#fem#][villano:#monstruo#]amor#","#[lugar:#sitios#][comida:#alimentos#][adj:#adjetivo#]fantasia#"],
  "amor"      : ["Érase una vez, un #enamorado# que se enamoró de la #enamorada#. Ambos acordaron que estaban destinados a estar juntos #hobby#, su aficción favorita. Pero era una trampa: la #enamorada# había mentido, y el #enamorado# estaba frente a un #villano#. Lleno de ira por su traición, el #enamorado# luchó contra el #villano#. La magia del #villano# transformó al #enamorado# en un #monstruo#, pero escapó..."],
  "fantasia"  : ["Érase una vez, un #lugar# maravilloso donde los #comida# eran #adj#. Un día, un granjero encontró que no todos los #comida# eran #adj#. El granjero, asustado, pensó que una magia oscura se estaba apoderando del #lugar#. Y así era, un #monstruo# asolaba el #lugar#. Pero uno de los #comida# que no eran #adj# pudo derrotar al #monstruo# y le proclamaron el Rey del #lugar#."],
  "hobby"     : ["cantando","bailando","programando","leyendo","escuchando música", "comiendo pizza", "viendo Star Trek","jugando videojuegos"],
  "masc"      : ["bandolero espacial", "canalla", "cazarrecompensas", "príncipe", "emperador"],
  "fem"       : ["princesa espacial", "emperadora", "matemática", "senadora", "minera"],
  "adjetivo"  : ["perfectos","hermosos","apetitosos", "gigantes", "fuertes","valientes"],
  "monstruo"  : ["minotauro","cíclope","troll","orco","duende","dragón","leviatán","Cthulhu"],
  "alimentos" : ["granos de arroz", "pimientos", "guisantes", "limones"],
  "sitios"    : ["país","castillo","imperio","sistema galáctico"]
}

function setup() {
  noCanvas();
  // Creamos la gramática
  grammar = tracery.createGrammar(datos );

  // Botón que genere una nueva frase
  let generador = select('#generador');
  generador.mousePressed(generate);

  // A button to clear everything
  let limpiar = select('#limpiar');
  limpiar.mousePressed(clearAll);
}

// Quitar los cuadros de texto
function clearAll() {
  let elements = selectAll('.text');
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

// Generar los cuadros de texto
function generate() {
  let expansion = grammar.flatten('#start#');
  let par = createP(expansion);
  let r = floor(random(100, 255));
  let g = floor(random(150, 255));
  let b = floor(random(200, 255));
  par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  par.class('text');
}
