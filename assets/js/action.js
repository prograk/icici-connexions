$.validator.addMethod("valueNotEquals", function (value, element, arg) {
    return arg !== value;
}, "Please select one");

$(document).ready(function () {

    $("#designation_other").hide("fast");
    // $(".check-error").hide("fast");

    $("#icici-form").validate({
        rules: {
            email_id: {
                required: true,
                email: true
            },
            contact_number: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            designation: {
                valueNotEquals: "designation"
            }
        },
        messages: {
            email_id: {
                email: "Enter valid Email"
            },
            contact_number: {
                digits: "Enter Valid Number",
                minlength: "Min 10 digits",
                maxlength: "Max 10 digits"
            },
            designation: {
                valueNotEquals: "Please select one"
            }
        },
        submitHandler: function (form) {

            if ($('input[name="session[]"]:checked').length == 0) {
                $('.check-error').html('Please select session');
                $('.check-error').show("fast");
                return false;
            }

            // form.submit();

            var formValues = $(this).serialize();
            $("#form-reg-button").prop('disabled', true);
            $("#form-reg-button").html("Submitting...");
            $.ajax({
                type: 'POST',
                url: 'process-registration.php',
                data: formValues,
                dataType: 'json',
                encode: true,
                success: function (data) {
                    $("#form-fields").html("<h3>Thank you for registering.<br/>A mail has been sent with your login details to the registered Email Address.</h3>.");
                }
            })
            return true;
        }
    });

    // $("#icici-form").on("submit", function (event) {
    //     event.preventDefault();

    //     //Validate Session
    //     if ($('input[name="session[]"]:checked').length == 0) {
    //         alert("Please select Session");
    //         return false;
    //     }

    //     var formValues = $(this).serialize();
    //     $("#form-reg-button").prop('disabled', true);
    //     $("#form-reg-button").html("Submitting...");
    //     $.ajax({
    //         type: 'POST',
    //         url: 'process-registration.php',
    //         data: formValues,
    //         dataType: 'json',
    //         encode: true,
    //         success: function (data) {
    //             $("#form-fields").html("<h3>Thank you for registering.<br/>A mail has been sent with your login details to the registered Email Address.</h3>.");
    //         }
    //     })
    //     return true;
    // });

    $("#u_designation").on("change", function () {
        if ($("#u_designation").val() == "others") {
            $("#designation_other").show("fast");

        } else {
            $("#designation_other").hide("fast");
        }
    });

    if ($("#sesson-check1:checked").is(":checked")) {
        $('#sesson-check2').prop('checked', false);
        $('#sesson-check3').prop('checked', false);
        $('#sesson-check4').prop('checked', false);
        $('#sesson-check5').prop('checked', false);
    } else {
        $('#sesson-check1').prop('checked', false);
    }

    $('input[name="session[]"]').change(function () {
        if ($('input[name="session[]"]:checked').length == 0) {
            $('.check-error').html('Please select session');
            $('.check-error').show("fast");
        } else {
            $('.check-error').hide("fast");
        }
    })

    $('#sesson-check1').change(function () {
        if (this.checked) {
            $('#sesson-check2').prop('checked', false);
            $('#sesson-check3').prop('checked', false);
            $('#sesson-check4').prop('checked', false);
            $('#sesson-check5').prop('checked', false);
        }
    });

    $('#sesson-check2').change(function () {
        if (this.checked) {
            $('#sesson-check1').prop('checked', false);
        }
    });
    $('#sesson-check3').change(function () {
        if (this.checked) {
            $('#sesson-check1').prop('checked', false);
        }
    });
    $('#sesson-check4').change(function () {
        if (this.checked) {
            $('#sesson-check1').prop('checked', false);
        }
    });
    $('#sesson-check5').change(function () {
        if (this.checked) {
            $('#sesson-check1').prop('checked', false);
        }
    });

});