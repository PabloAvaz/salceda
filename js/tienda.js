$(".producto .imagen").on("mouseenter",function(){
  this.src = this.src.replace("preview","lateral")
})
$(".producto .imagen").on("mouseleave",function(){
  this.src = this.src.replace("lateral","preview")
})

productos = $(".producto");
actual = 0;
$(".carrousel-d").on("click", function(){
  productos.get(actual++).removeClass("mostrar")
  actual = actual >= productos.length ? 0 : actual;
  productos.get(actual).addClass("mostrar")
})
$(".carrousel-i").on("click", function(){
  productos.get(actual--).removeClass("mostrar")
  actual = actual < 0 ? productos.length - 1 : actual;
  productos.get(actual).addClass("mostrar")
})