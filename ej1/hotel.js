var Hotel = function (nombre, ciudad, telefono, direccion, sitioWeb, gerente, habitaciones ) {
    var sthis = this;
    this.datosHotel = {
        nombre: "",
        ciudad: "",
        telefono: "",
        direccion: "",
        sitioWeb: "",
        gerente: "",
        habitaciones: ""
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

};