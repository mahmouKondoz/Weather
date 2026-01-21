var locatoinInput = document.querySelector('.locatoin')
var dataBase = [] ; 
var degreeA = document.querySelector('.degreeA')
var degreeB = document.querySelector('.degreeB')
var iconA = document.querySelector('.iconA')
var iconB = document.querySelector('.iconB')
var degreeC = document.querySelector('.degreeC')
var iconC = document.querySelector('.iconC')
var btnFind = document.querySelector('.btnFind')




async function getWeather(city){

    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d16e3640027247bf923162043250111&q=${city}&days=3`)
     dataBase = await data.json() ;
    dataBase = dataBase.forecast.forecastday ;
    console.log(dataBase);
    

  displayWeather()
    
    
    
   
}

async function displayWeather(city){

 
    for(var i = 0 ; i <= dataBase.length ; i++){
        if(i == 0){

            var img = dataBase[i].day.condition.icon
            degreeA.innerHTML = dataBase[i].day.avgtemp_c + '&deg;c' ;
            document.querySelector('.dateA').innerHTML = dataBase[i].date
            iconA.setAttribute('src' , ` https:${img}` )
        }
        if(i==1){

            var img = dataBase[i].day.condition.icon
             iconB.setAttribute('src' , `https:${img}` )
              degreeB.innerHTML = dataBase[i].day.maxtemp_c + '&deg;c' ;
              document.querySelector('.textB').innerHTML = dataBase[i].day.condition.text
              document.querySelector('.pB').innerHTML = dataBase[i].day.mintemp_c+ '&deg:c'
              document.querySelector('.dateB').innerHTML = dataBase[i].date

        }
        if(i==2){

            var img = dataBase[i].day.condition.icon
             iconC.setAttribute('src' , `https:${img}` )
              degreeC.innerHTML = dataBase[i].day.avgtemp_c + '&deg;c' ;
              document.querySelector('.textC').innerHTML = dataBase[i].day.condition.text
              document.querySelector('.pC').innerHTML = dataBase[i].day.mintemp_c+ '&deg:c'
              document.querySelector('.dateC').innerHTML = dataBase[i].date

        }
    }
    


}


btnFind.addEventListener('click' , function(){
     document.querySelector('.city').innerHTML = locatoinInput.value ; 
    getWeather(locatoinInput.value)
    clear()
   
    
})


 function clear(){
    locatoinInput.value = null
 }



 if(dataBase.length == 0 ){

    getWeather('cairo')
    
    
 }
 