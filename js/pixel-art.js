var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
var colorPersonalizado = document.getElementById('color-personalizado');

// Variables globales
var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");


// Checkea si el mouse esta apretado
var down = false;
$(document).mousedown(function () {
  down = true;
}).mouseup(function () {
  down = false;
});

// Crea paleta de colores dinamicamente

function crearPaleta() {
  for (i = 0; i < nombreColores.length; i++) {
    var color = document.createElement("div");
    $paleta.append(color);
    $(color).attr("class", "color-paleta");
    $(color).css("background-color", nombreColores[i]);
  }
};

// Crea grilla dinamicamente

function crearGrilla() {
  for (i = 0; i < 1750; i++) {
    var pixelGrilla = document.createElement("div");
    $grillaPixeles.append(pixelGrilla);
    $(pixelGrilla).attr("class", "pixelIndividual");
  }

};

// Selecciona color
function seleccionarColor() {
  $(".color-paleta").click(function () {
    $("#indicador-de-color").css("background-color", $(this).css('background-color'));
  });
};

// Permite pintar pixeles

function pintarPixeles() {
  $(".pixelIndividual").click(function () {
    $(this).css("background-color", $("#indicador-de-color").css("background-color"));
  }
  );
};

// Evento que captura el movimiento del mouse para pintar de corrido
function eventoPintarCorrido() {
  $(".pixelIndividual").hover(function () {
    if (down === true) {
      $(this).css("background-color", $("#indicador-de-color").css("background-color"));
    }
  });
};

// Borrar canvas
$("#borrar").click(function(){
  $(".pixelIndividual").animate({"background-color": "#FFFFFF"},2500);
});

// Cargar canvas
$("#batman").click(function () {cargarSuperheroe(batman)});
$("#wonder").click(function () {cargarSuperheroe(wonder)});
$("#flash").click(function () {cargarSuperheroe(flash)});
$("#invisible").click(function () {cargarSuperheroe(invisible)});

// Guardar png
$("#guardar").click(function () {guardarPixelArt()});

// Rueda de Colores
colorPersonalizado.addEventListener('change',
  (function () {
    colorActual = colorPersonalizado.value;
    $("#indicador-de-color").css("background-color", colorActual);
  })
);

// Ejecuta las funciones al estar listo el documento
$(document).ready(function() {
  crearGrilla();
  crearPaleta();
  seleccionarColor();
  pintarPixeles();
  eventoPintarCorrido();
});