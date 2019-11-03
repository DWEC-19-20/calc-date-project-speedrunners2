/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/

function calcDate(startdate, days) {

  startdate.setMonth(startdate.getMonth() - 1);
  startdate.setDate(startdate.getDate() + days);

  return startdate.toLocaleDateString('es-ES');
  
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/

function getDays(startdate, endDate) {

  startdate.setMonth(startdate.getMonth() - 1);
  endDate.setMonth(endDate.getMonth() - 1);

  var inicio = startdate.getTime();
  var final = endDate.getTime();
  var total = final - inicio;
  var Ftotal = parseInt((total/(1000*60*60*24)).toFixed(0));

  return Ftotal;

}

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/

function calcWorkingDate(startdate, days) {

  startdate.setMonth(startdate.getMonth() - 1);
  var finalDays = 0;

  if(days > 0){
        
    for(let i = 0 ; i < days ; i++){
    
        startdate.setDate(startdate.getDate() + 1);
        
        if(diasLibres(startdate)) i--;
        
    }
    
}else if(days < 0){
    for(let i = days ; i <= 0 ; i++){
        startdate.setDate(startdate.getDate() - 1);

        if(diasLibres(startdate)) i--;
        
    }
    
}

  return startdate.toLocaleDateString('es-ES');

}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/

function getWorkingDays(startdate, endDate) {

  var dia = getDays(startdate, endDate);
  var cont = 0;
  
  if(dia > 0){
        
    for(let i = 0 ; i <= dia ; i++){
    
      startdate.setDate(startdate.getDate() + 1);
        
        if(diasLibres(startdate)) cont--;
        
    }
    
}

else if(dia < 0){
    
    for(let i = dia ; i <= 0 ; i++){
    
      startdate.setDate(startdate.getDate() - 1);
        
        if(diasLibres(startdate)) cont++;
        
    }
    
}

  return dia + cont;

}

function ventanas(){
  window.open("index.html", "Fechas", "width=300, height=200");
  
}

function diasLibres(dia){

  var freeDays = ["1/1", "6/1", "1/5" ,"15/8", "12/10", "1/11", "6/12", "8/12", "25/12"];
  var dateF = dia.getDay()+"/"+dia.getMonth();

  var diaLibre = false;

      for(let i = 0 ; i < freeDays.length ; i++){
          if(dia.getDay() == 0 || dia.getDay() == 6) {
            diaLibre = true;
              break;
          }

          if(dateF === freeDays[i]) {
            diaLibre = true;
              break;
          }
      }


  return diaLibre;

}