
function Agregar() {
    debugger;

    //$("#ModalAgregar").modal("hide");
    $.ajax({
        type: "POST",
        url: '../Home/_Agregar',
        traditional: true,
        success: function (data) {
            debugger;
            $('#renderModal').html(data);
            $("#ModalAgregar").modal('show');
            $("#ModalAgregar").modal('handleUpdate');



        },



    });
};
