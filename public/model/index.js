/*
 * @author Imane Zerouali
 */
//suite au modele objet donné
//la classe Sensor contient comme attributs l'Id et le Name
export class Sensor {
  constructor(id, name) {
    this.id = id + '';
    this.name = name;
  }
  get Id() {
	    return this.id  || '';
	  }
	  set Id(identity) {
	    this.id = identity;
	  }
	  get Name() {
	    return this.name  || '';
	  }
	  set Name(nom) {
	    this.name = nom;
	  }

	}

//Les sous classes de Sensor 
export class Temperature extends Sensor
{
  constructor(Id, name) {
    super(Id, name);
    this.type = 'Temperature';
  }
  get Type() {
    return this.type || '';
  }
  set Type(t) {
    this.type = t;
  }

}
export class Humidity extends Sensor
{
  constructor(Id, name) {
    super(Id, name);
    this.type = 'Humidity';
  }

  get Type() {
    return this.type || '';
  }
  set Type(t) {
    this.type = t;
  }
}

export class Light extends Sensor
{
  constructor(Id, name) {
    super(Id, name);
    this.type = 'Light';
  }

  get Type() {
    return this.type || '';
  }
  set Type(t) {
    this.type = t;
  }
}

export class Door extends Sensor
{
  constructor(Id, name) {
    super(Id, name);
    this.type = 'Door';
  }

  get Type() {
    return this.type || '';
  }
  set Type(t) {
    this.type = t;
  }
}

export class FanSpeed extends Sensor
{
  constructor(Id, name) {
    super(Id, name);
    this.type = 'Fan_Speed';
  }

  get Type() {
    return this.type || '';
  }
  set Type(t) {
    this.type = t;
  }
}

// la classe Data contient un objet de la classe sensors
export class Data
{
  constructor(sensor) {
    this.sensor = sensor;
  }
  get SensorId() {
    return this.sensor.Id;
  }
  get SensorName() {
    return this.sensor.Name;
  }

  get SensorType() {
    return this.sensor.Type;
  }

  set SensorId(identity) {
    this.sensor.Id = identity;
  }
  set SensorName(nom) {
    this.sensor.Name = nom;
  }

  set SensorType(nom) {
    this.sensor.Type = nom;
  }

}

export class TimeSeries extends Data
{
  constructor(Values, Labels, sensor) {
    super(sensor);
    this.values = Values || [];
    this.labels = Labels || [];
  }

  get Values() {
	 return this.values || [];
  }
  set Values(valeur) {
    this.values = valeur || [];
  }

  get Labels() {
    return this.labels || [];
  }
  set Labels(l) {
    this.labels = l;
  }
}

export class Datum extends Data
{
  constructor(valeur, sensor) {
    super(sensor);
    this.value = parseInt(valeur) || 0;
  }

  get Value() {
    return this.value || 0;
  }
  set Value(valeur) {
    this.value = valeur;
  }
}