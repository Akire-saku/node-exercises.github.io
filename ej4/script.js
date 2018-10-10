$(document).ready(function () {
    var $sthis=$(this);
    var $procesar = $sthis.find('input#procesar');
    $procesar.click(function (event) {
        event.preventDefault();
        controlador($sthis);
    })
});