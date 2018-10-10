QUnit.test("ej2",function (assert) {
  var gerente = new Gerente("some","34567894-A","+52. 32503536",);
    assert.equal(gerente.getNombreCompleto(), "some", "Nombre gerente" );
    assert.equal(gerente.getNumeroDocumento(), "34567894-A", "documento gerente" );
    assert.equal(gerente.getTelefono(), "+52. 32503536", "numero gerente" );

    assert.ok(gerente.checkDoc(), "documento ok gerente" );
    assert.ok(gerente.checkTel(), "telefono ok gerente" )

    var habitacion = new Habitacion("planta","2","+52. 32503536");
    assert.equal(habitacion.getPlanta(), "planta", "planta habitacion" );
    assert.equal(habitacion.getNumeroCamas(), "2", "numero camas habitacion" );
    assert.equal(habitacion.getTelefono(), "+52. 32503536", "telefono habitacion" );

    assert.ok(habitacion.checkTel(), "telefono ok habitacion" )

    var hotel = new Hotel("nombre","ciudad","+52. 32503536","direccion","http://www.web.com","gerente","2");
    assert.equal(hotel.getNombre(), "nombre", "nombre hotel" );
    assert.equal(hotel.getCiudad(), "ciudad", "ciudad camas hotel" );
    assert.equal(hotel.getTelefono(), "+52. 32503536", "telefono hotel" );
    assert.equal(hotel.getDireccion(), "direccion", "direccion hotel" );
    assert.equal(hotel.getSitioWeb(), "http://www.web.com", "sitioWeb hotel" );
    assert.equal(hotel.getGerente(), "gerente", "gerente hotel" );
    assert.equal(hotel.getHabitaciones(), "2", "habitaciones hotel" );

    assert.ok(hotel.checkTel(), "telefono ok hotel" );
    assert.ok(hotel.checkSitio(), "sitio ok hotel" );
})