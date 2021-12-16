var $imagen = $("#foto");

var colorThief = new ColorThief();
colorDominante = colorThief.GetColor($imagen[0]);

console.log(colorDominante)