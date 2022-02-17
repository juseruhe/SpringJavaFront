$(document).ready(function () {
 var tabla =  $('#tabla').DataTable({
         ajax:{
             url: "http://localhost:8080/SpringAngular/personas",
             method: "GET",
             dataSrc: "",
             destroy: true,
            
         },

         columns: [
           {data: "id"},
           {data: "dni"},
           {data: "nombre"},
           {defaultContent: "<button class='btn btn-info' id='mostrar'><i class='bi bi-eye-fill'></i> Mostrar</button> <button class='btn btn-warning' id='editar'> <i class='bi bi-pencil-square'></i> Editar </button> <button class='btn btn-danger' id='eliminar'><i class='bi bi-eraser-fill'></i> Eliminar</button>"}
         ],

         language: {
            "paginate":{
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "search": "Buscar:",
            "info": "Mostrando _END_  Personas",
            "infoFiltered": "",
            "zeroRecords": "No se ha encontrado nínguna persona",
            "infoEmpty": "Mostrando 0 tipos persona(s)",
           },
    })

       // Mostrar Modal
       $("#crear").click(function (e) { 
           e.preventDefault();

           $("#crearModal").modal("show")
           
       });

       // Crear Persona
       $("#formulario").submit(function (e) { 
           e.preventDefault();
    
           $.ajax({
               url: "http://localhost:8080/SpringAngular/personas",
               type: "post",
               data: JSON.stringify( {dni: $("#dni").val(), nombre: $("#nombre").val()}),
               contentType:'application/json',
               processData: false,
               success: function (response) {
                $('#mensaje').html('<div class="alert alert-success" role="alert">Datos Enviados a la base de datos  <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>');
                $('#crearModal').modal('hide')
                tabla.ajax.reload()
               }, error: function(error){
                $('#mensaje').html('<div class="alert alert-danger" role="alert">Error al enviar datos  <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
                $('#crearModal').modal('hide')
            },
               
           });
       });

       $(document).on("click", "#mostrar",function () {
        fila = $(this).closest('tr')
        id = parseInt(fila.find('td:eq(0)').text())
        
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/SpringAngular/personas/"+id,
            success: function (response) {
                console.log(response)

                $('#mostrarId').html(response.id);
                $('#mostrarDni').html(response.dni)
                $('#mostrarNombre').html(response.nombre)
                $('#mostrarTituloNombre').html("Datos de "+response.nombre)
            }
        });
     

        $('#mostrarModal').modal('show')

       });

       $(document).on("click", "#editar",function () {
        fila = $(this).closest('tr')
        id = parseInt(fila.find('td:eq(0)').text())
        dni = fila.find('td:eq(1)').text()
        nombre = fila.find('td:eq(2)').text()

        $('#editarDni').val(dni)
        $('#editarNombre').val(nombre)
        $('#editarTitulo').html('Editar Datos de '+nombre)

        $('#editarModal').modal('show')

        $('#formEditar').submit(function (e) { 
            e.preventDefault();
        
            $.ajax({
                type: "put",
                url: "http://localhost:8080/SpringAngular/personas/"+id,
                data: JSON.stringify({"dni": $('#editarDni').val(), "nombre":  $('#editarNombre').val() }),
                contentType:'application/json',
                success: function (response) {
                    $('#mensaje').html('<div class="alert alert-success" role="alert">Datos Actualizados <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
                    $('#editarModal').modal('hide')
                    tabla.ajax.reload()
                },
                error: function(error){
                   $('#mensaje').html('<div class="alert alert-danger" role="alert">Error al Actualizar <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
                }
            });
        });
 });

 $(document).on("click", "#eliminar",function () {
    fila = $(this).closest("tr")
    id= fila.find('td:eq(0)').text()
    nombre = fila.find('td:eq(2)').text()
    
   
    if(confirm("¿Desea eliminar persona llamada "+nombre+" ?")){
        $.ajax({
            type: "delete",
            url: "http://localhost:8080/SpringAngular/personas/"+id,
            success: function (response) {
                $('#mensaje').html('<div class="alert alert-danger" role="alert"> <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>Datos Eliminados Correctamente</div>')
                tabla.ajax.reload()
            }, error: function(error){
                $('#mensaje').html('<div class="alert alert-warning" role="alert"> <button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>Error al eliminar</div>')
            }
        });
    }

})
       
});