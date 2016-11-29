// l'importation des classe de l'index
import { Data, TimeSeries, Datum , Sensor, Temperature, Humidity ,Light , Door, FanSpeed } from './index';

/*export const decodage = (data.js) =>
{
	var objets = new Array();
	var Sensor = function(){
		this.id = '';
		this.name = '';
		this.type = '';
	};*/
export function decoding(data) {
  //tableaux pour stockage des sensor et data
  var Sensor = [], Data = [], iterator;


  // decodage du fichier JSON
  for (iterator = 0; iterator < data.length; iterator++) {
	   
	    switch (data[iterator].type) {
	      case 'TEMPERATURE':
	        Sensor[iterator] = new Temperature(data[iterator].id, data[iterator].name);
	     //if undefined Property 
	      if (typeof data[iterator].data.value === 'undefined') {
	          Data[iterator] = new TimeSeries(data[iterator].data.values, data[iterator].data.labels, Sensor[iterator]);
	        } 
	        else {
	          if (isNaN(parseInt(data[iterator].data.value))) {
	            throw Error('Error when decoding');
	          } 
	        else {
	            Data[iterator] = new Datum(data[iterator].data.value, Sensor[iterator]);
	          }
	        } 
	        break;
	      case 'HUMIDITY':
		        Sensor[iterator] = new Humidity(data[iterator].id, data[iterator].name);
		        if (typeof data[iterator].data.value === 'undefined') {
		          Data[iterator] = new TimeSeries(data[iterator].data.values, data[iterator].data.labels, Sensor[iterator]);
		        } else {
		          if (isNaN(parseInt(data[iterator].data.value))) {
		            throw Error('Error when decoding');
		          } else {
		            Data[iterator] = new Datum(data[iterator].data.value, Sensor[i]);
		          }
		        }
		        break;
	      case 'LIGHT':
		        Sensor[iterator] = new Light(data[iterator].id, data[iterator].name);
		        if (typeof data[iterator].data.value === 'undefined') {
		          Data[iterator] = new TimeSeries(data[iterator].data.values, data[iterator].data.labels, Sensor[iterator]);
		        } else {
		          if (isNaN(parseInt(data[iterator].data.value))) {
		            throw Error('Error when decoding');
		          } else {
		            Data[iterator] = new Datum(data[iterator].data.value, Sensor[iterator]);
		          }
		        }
		        break;
	      case 'DOOR':
	        Sensor[iterator] = new Door(data[iterator].id, data[iterator].name);
	        if (typeof data[iterator].data.value === 'undefined') {
	          Data[iterator] = new TimeSeries(data[iterator].data.values, data[iterator].data.labels, Sensor[iterator]);
	        } 
	        else {
	          if (isNaN(parseInt(data[iterator].data.value))) {
	            throw Error('Error when decoding');
	          } 
	        else {
	            Data[iterator] = new Datum(data[iterator].data.value, Sensor[iterator]);
	          }
	        }
	        break;
	      case 'FAN_SPEED':
	        Sensor[iterator] = new FanSpeed(data[iterator].id, data[iterator].name);
	        if (typeof data[iterator].data.value === 'undefined') {
	          Data[iterator] = new TimeSeries(data[iterator].data.values, data[iterator].data.labels, Sensor[iterator]);
	        } 
	        else {
	          if (isNaN(parseInt(data[iterator].data.value))) {
	            throw Error('Error when decoding');
	          } 
	        else {
	            Data[iterator] = new Datum(data[iterator].data.value, Sensor[iterator]);
	          }
	        }
	        break;
	 
	  
	      
	    }
      
    }
  
  const tabData = []; tabData[0] = Sensor; tabData[1] = Data;
  			return tabData;
}