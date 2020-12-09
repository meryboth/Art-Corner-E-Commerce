$('#form-login').on('submit', function () {
	var usuario = $('#usuario').val();
	Swal.fire({
		position: 'center-center',
		icon: 'success',
		title: 'You have just logged in with your username',
		showConfirmButton: false,
		timer: 1500,
	});
	$('#person').html(usuario);
	$('#login').hide('slow');
	$('#info-login').show('slow');
	return false;
});

$('#cerrar-sesion').on('click', function () {
	$('#usuario').val('');
	$('#password').val('');
	$('#login').show('slow');
	$('#info-login').hide('slow');
});
