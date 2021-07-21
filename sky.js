var sky = new XMLHttpRequest();
sky.open('GET','https://restcountries.eu/rest/v2/all',true);
sky.send();
sky.onload=function(){
    var data=JSON.parse(this.response);
    for(i=0;i<250;i++){
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag); 
    }
}