QUnit.test("ej1",function (assert) {
  var gerente = new Gerente("some","123","1234");
    assert.equal(gerente.getNombreCompleto(), "some", "Nombre gerente" );
    assert.equal(gerente.getTelefono(), "1234", "numero gerente" );
    assert.equal(gerente.getNumeroDocumento(), "123", "documento gerente" );

    var habitacion = new Habitacion("planta","2","1234");
    assert.equal(habitacion.getPlanta(), "planta", "planta habitacion" );
    assert.equal(habitacion.getNumeroCamas(), "2", "numero camas habitacion" );
    assert.equal(habitacion.getTelefono(), "1234", "telefono habitacion" );

    var hotel = new Hotel("nombre","ciudad","+52. 32503536","direccion","www.web.com","gerente","2");
    assert.equal(hotel.getNombre(), "nombre", "nombre hotel" );
    assert.equal(hotel.getCiudad(), "ciudad", "ciudad camas hotel" );
    assert.equal(hotel.getTelefono(), "+52. 32503536", "telefono hotel" );
    assert.equal(hotel.getDireccion(), "direccion", "direccion hotel" );
    assert.equal(hotel.getSitioWeb(), "www.web.com", "sitioWeb hotel" );
    assert.equal(hotel.getGerente(), "gerente", "gerente hotel" );
    assert.equal(hotel.getHabitaciones(), "2", "habitaciones hotel" );
})