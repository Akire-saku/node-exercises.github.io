var Habitacion = function ( planta,
                            numeroCamas ,
                            telefono ) {
    var sthis = this;
    this.datosHabitacion = {
        planta:"",
        numeroCamas: 0,
        telefono: ""
    };
    sthis.datosHabitacion.planta=planta;
    sthis.datosHabitacion.numeroCamas=numeroCamas;
    sthis.datosHabitacion.telefono=telefono


    sthis.getPlanta = function getPlanta() {
        return sthis.datosHabitacion.planta;
    }
    sthis.setPlanta = function setPlanta(planta) {
        sthis.datosHabitacion.planta = planta;
    }
    sthis.getNumeroCamas = function getNumeroCamas () {
        return sthis.datosHabitacion.numeroCamas;
    }
    sthis.setNumeroCamas = function setNumeroCamas(numeroCamas) {
        sthis.datosHabitacion.numeroCamas = numeroCamas;
    }
    sthis.getTelefono = function getTelefono() {
        return sthis.datosHabitacion.telefono;
    }
    sthis.setTelefono = function setTelefono(telefono) {
        sthis.datosHabitacion.telefono = telefono;
    }
    var checkTel = function  () {
        var re = new RegExp("[+][0-9]{2}. [0-9]{8}");
        return re.test(sthis.datosHabitacion.telefono);
    }

    this.check = function check (campo) {
        var check;
        switch(campo) {
            case "telefono": {
                check = checkTel();
                break;
            }
        }
        return check;
    }

};