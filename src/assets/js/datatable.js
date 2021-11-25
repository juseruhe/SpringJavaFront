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
           {defaultContent: "<button class='btn btn-info'><i class='bi bi-eye-fill'></i> Mostrar</button> <button class='btn btn-warning'> <i class='bi bi-pencil-square'></i> Editar </button> <button class='btn btn-danger'><i class='bi bi-eraser-fill'></i> Eliminar</button>"}
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
               type: "post",
               url: "http://localhost:8080/SpringAngular/personas",
               data:  $("#formulario").serialize(),
               contentType:'application/json',
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
});