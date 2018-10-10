function Gerente (nombreCompleto,numeroDocumento,telefono) {
    var sthis = this;
    this.datosGerente={
        nombreCompleto:"",
        numeroDocumento: "",
        telefono: ""
    };

    sthis.datosGerente.nombreCompleto=nombreCompleto;
    sthis.datosGerente.numeroDocumento=numeroDocumento;
    sthis.datosGerente.telefono=telefono;

    this.getNombreCompleto = function getNombreCompleto() {
        return sthis.datosGerente.nombreCompleto;
    }
    this.setNombreCompleto = function setNombreCompleto(nombreCompleto) {
        sthis.datosGerente.nombreCompleto = nombreCompleto;
    }
    this.getNumeroDocumento = function getNumeroDocumento() {
        return sthis.datosGerente.numeroDocumento;
    }
    this.setNumeroDocumento = function (numeroDocumento) {
        sthis.datosGerente.numeroDocumento = numeroDocumento;
    }
    this.getTelefono = function getTelefono () {
        return sthis.datosGerente.telefono;
    }
    this.setTelefono = function setTelefono(telefono) {
        sthis.datosGerente.telefono = telefono;
    }


};