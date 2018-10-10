var Hotel = function (nombre, ciudad, telefono, direccion, sitioWeb, gerente, habitaciones ) {
    var sthis = this;
    this.datosHotel = {
        nombre: "",
        ciudad: "",
        telefono: "",
        direccion: "",
        sitioWeb: "",
        gerente: "",
        habitaciones: 0
    };

        sthis.datosHotel.nombre= nombre;
        sthis.datosHotel.ciudad= ciudad;
        sthis.datosHotel.telefono= telefono;
        sthis.datosHotel.direccion= direccion;
        sthis.datosHotel.sitioWeb= sitioWeb;
        sthis.datosHotel.gerente= gerente;
        sthis.datosHotel.habitaciones= habitaciones;

    sthis.getNombre = function getNombre()
    {
        return sthis.datosHotel.nombre;
    }
    sthis.setNombre = function setNombre(nombre)
    {
        sthis.datosHotel.nombre = nombre;
    }
    sthis.getCiudad = function getCiudad ()
    {
        return sthis.datosHotel.ciudad;
    }
    sthis.setCiudad = function setCiudad(ciudad)
    {
        sthis.datosHotel.ciudad = ciudad;
    }
    sthis.getTelefono = function getTelefono() {
        return sthis.datosHotel.telefono;
    }
    sthis.setTelefono = function setTelefono(telefono)
    {
    sthis.datosHotel.telefono = telefono;
    }
    sthis.getDireccion = function getDireccion()
    {
        return sthis.datosHotel.direccion;
    }
    sthis.setDireccion = function setDireccion(direccion)
    {
    sthis.datosHotel.direccion = direccion;
    }
    sthis.getSitioWeb = function getSitioWeb()
    {
        return sthis.datosHotel.sitioWeb;
    }
    sthis.setSitioWeb = function setSitioWeb(sitioWeb)
    {
    sthis.datosHotel.sitioWeb = sitioWeb;
    }
    sthis.getGerente = function getGerente()
    {
        return sthis.datosHotel.gerente;
    }
    sthis.setGerente = function setGerente(gerente)
    {
    sthis.datosHotel.gerente = gerente;
    }
    sthis.getHabitaciones = function getHabitaciones()
    {
        return sthis.datosHotel.habitaciones;
    }
    sthis.setHabitaciones = function setHabitaciones(habitaciones)
    {
    sthis.datosHotel.habitaciones = habitaciones;
    }
    var checkTel = function (){
        var re = new RegExp("[+][0-9]{2}. [0-9]{8}");
        return re.test(sthis.datosHotel.telefono);
    }, checkSitio = function (){
        var re = new RegExp("[http://www].[a-zA-Z].[a-zA-Z]{2,3}");
        return re.test(sthis.datosHotel.sitioWeb);
    }

    this.check = function check (campo) {
        var check;
        switch(campo) {
            case "telefono": {
                check = checkTel();
                break;
            }
            case "sitio": {
                check = checkSitio();
                break;
            }
        }
        return check;
    }
};