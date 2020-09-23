export function ErrorFirebase(errorCode) {
	switch (errorCode) {
		case 'auth/app-deleted':
			return 'No se encontró la base de datos';
		case 'auth/expired-action-code':
			return 'El código de acción o el enlace ha caducado';
		case 'auth/invalid-action-code':
			return 'El código de acción no es válido. Esto puede suceder si el código está mal formado o ya se ha utilizado';
		case 'auth/user-disabled':
			return 'El usuario correspondiente a la credencial proporcionada ha sido deshabilitado';
		case 'auth/user-not-found':
			return 'El usuario no coincide con ninguna credencial';
		case 'auth/weak-password':
			return 'La contraseña es demasiado débil';
		case 'auth/email-already-in-use':
			return 'Ya tenía una cuenta con la dirección de correo electrónico proporcionada';
		case 'auth/invalid-email':
			return 'La dirección de correo electrónico no es válida';
		case 'auth/operation-not-allowed':
			return 'El tipo de cuenta correspondiente a esta credencial aún no está activado';
		case 'auth/account-exists-with-different-credential':
			return 'Correo electrónico ya asociado con otra cuenta';
		case 'auth/auth-domain-config-required':
			return 'No se ha proporcionado la configuración para la autenticación';
		case 'auth/credential-already-in-use':
			return 'Ya existe una cuenta para esta credencial';
		case 'auth/operation-not-supported-in-this-environment':
			return 'Esta operación no se admite en el entorno que se realiza. Asegúrese de que debe ser http o https';
		case 'auth/timeout':
			return 'Tiempo de respuesta excedido. Es posible que el dominio no esté autorizado para realizar operaciones';
		case 'auth/missing-android-pkg-name':
			return 'Se debe proporcionar un nombre de paquete para instalar la aplicación de Android';
		case 'auth/missing-continue-uri':
			return 'La siguiente URL debe proporcionarse en la solicitud';
		case 'auth/missing-ios-bundle-id':
			return 'Se debe proporcionar un nombre de paquete para instalar la aplicación iOS';
		case 'auth/invalid-continue-uri':
			return 'La siguiente URL proporcionada en la solicitud no es válida';
		case 'auth/unauthorized-continue-uri':
			return 'El dominio de la siguiente URL no está en la lista blanca';
		case 'auth/invalid-dynamic-link-domain':
			return 'El dominio de enlace dinámico proporcionado, no está autorizado o configurado en el proyecto actual';
		case 'auth/argument-error':
			return 'Verifique la configuración del enlace para la aplicación';
		case 'auth/invalid-persistence-type':
			return 'El tipo especificado para la persistencia de datos no es válido';
		case 'auth/unsupported-persistence-type':
			return 'El entorno actual no admite el tipo especificado para la persistencia de datos';
		case 'auth/invalid-credential':
			return 'La credencial ha caducado o está mal formada';
		case 'auth/wrong-password':
			return 'Contraseña incorrecta';
		case 'auth/invalid-verification-code':
			return 'El código de verificación de credencial no es válido';
		case 'auth/invalid-verification-id':
			return 'El ID de verificación de credencial no es válido';
		case 'auth/custom-token-mismatch':
			return 'El token es diferente del estándar solicitado';
		case 'auth/invalid-custom-token':
			return 'El token proporcionado no es válido';
		case 'auth/captcha-check-failed':
			return 'El token de respuesta reCAPTCHA no es válido, ha caducado o el dominio no está permitido';
		case 'auth/invalid-phone-number':
			return 'El número de teléfono está en un formato no válido (estándar E.164)';
		case 'auth/missing-phone-number':
			return 'El número de teléfono es obligatorio';
		case 'auth/quota-exceeded':
			return 'Se ha excedido la cuota de SMS';
		case 'auth/cancelled-popup-request':
			return 'Solo se permite una solicitud de ventana emergente a la vez';
		case 'auth/popup-blocked':
			return 'El navegador ha bloqueado la ventana emergente';
		case 'auth/popup-closed-by-user':
			return 'El usuario cerró la ventana emergente sin completar el inicio de sesión en el proveedor';
		case 'auth/unauthorized-domain':
			return 'El dominio de la aplicación no está autorizado para realizar operaciones';
		case 'auth/invalid-user-token':
			return 'El usuario actual no fue identificado';
		case 'auth/user-token-expired':
			return 'El token del usuario actual ha caducado';
		case 'auth/null-user':
			return 'El usuario actual es nulo';
		case 'auth/app-not-authorized':
			return 'Aplicación no autorizada para autenticarse con la clave dada';
		case 'auth/invalid-api-key':
			return 'La clave API proporcionada no es válida';
		case 'auth/network-request-failed':
			return 'Error al conectarse a la red';
		case 'auth/requires-recent-login':
			return 'El último tiempo de acceso del usuario no cumple con el límite de seguridad';
		case 'auth/too-many-requests':
			return 'Las solicitudes se bloquearon debido a una actividad inusual. Vuelva a intentarlo después de un tiempo';
		case 'auth/web-storage-unsupported':
			return 'El navegador no es compatible con el almacenamiento o si el usuario ha deshabilitado esta función';
		case 'auth/invalid-claims':
			return 'Los atributos de registro personalizados no son válidos';
		case 'auth/claims-too-large':
			return 'El tamaño de la solicitud excede el tamaño máximo permitido de 1 Megabyte';
		case 'auth/id-token-expired':
			return 'El token informado ha caducado';
		case 'auth/id-token-revoked':
			return 'El token informado ha caducado';
		case 'auth/invalid-argument':
			return 'Se proporcionó un argumento no válido a un método';
		case 'auth/invalid-creation-time':
			return 'La hora de creación debe ser una fecha UTC válida';
		case 'auth/invalid-disabled-field':
			return 'La propiedad para el usuario deshabilitado no es válida';
		case 'auth/invalid-display-name':
			return 'El nombre de usuario no es válido';
		case 'auth/invalid-email-verified':
			return 'El correo electrónico no es válido';
		case 'auth/invalid-hash-algorithm':
			return 'El algoritmo HASH no es compatible con la criptografía';
		case 'auth/invalid-hash-block-size':
			return ' El tamaño del bloque HASH no es válido ';
		case 'auth/invalid-hash-derived-key-length':
			return 'El tamaño de la clave derivada de HASH no es válido';
		case 'auth/invalid-hash-key':
			return 'La clave HASH debe tener un búfer de bytes válido';
		case 'auth/invalid-hash-memory-cost':
			return 'El costo de la memoria HASH no es válido';
		case 'auth/invalid-hash-parallelization':
			return 'La carga paralela HASH no es válida';
		case 'auth/invalid-hash-rounds':
			return 'El redondeo HASH no es válido';
		case 'auth/invalid-hash-salt-separator':
			return 'El campo separador SALT del algoritmo de generación HASH debe ser un búfer de bytes válido';
		case 'auth/invalid-id-token':
			return 'El código de token ingresado no es válido';
		case 'auth/invalid-last-sign-in-time':
			return 'La última hora de inicio de sesión debe ser una fecha UTC válida';
		case 'auth/invalid-page-token':
			return 'La siguiente URL proporcionada en la solicitud no es válida';
		case 'auth/invalid-password':
			return 'La contraseña no es válida, debe tener al menos 6 caracteres de longitud';
		case 'auth/invalid-password-hash':
			return 'La contraseña HASH no es válida';
		case 'auth/invalid-password-salt':
			return 'La contraseña SALT no es válida';
		case 'auth/invalid-photo-url':
			return 'La URL de la foto del usuario no es válida';
		case 'auth/invalid-provider-id':
			return 'El identificador del proveedor no es compatible';
		case 'auth/invalid-session-cookie-duration':
			return 'La duración de la COOKIE de la sesión debe ser un número válido en milisegundos, entre 5 minutos y 2 semanas';
		case 'auth/invalid-uid':
			return 'El identificador proporcionado debe tener un máximo de 128 caracteres';
		case 'auth/invalid-user-import':
			return 'El registro de usuario a importar no es válido';
		case 'auth/invalid-provider-data':
			return 'El proveedor de datos no es válido';
		case 'auth/maximum-user-count-exceeded':
			return 'Se ha excedido el número máximo permitido de usuarios a importar';
		case 'auth/missing-hash-algorithm':
			return 'Es necesario proporcionar el algoritmo de generación HASH y sus parámetros para importar usuarios';
		case 'auth/missing-uid':
			return 'Se requiere un identificador para la operación actual';
		case 'auth/reserved-claims':
			return 'Una o más propiedades personalizadas proporcionaron palabras reservadas usadas';
		case 'auth/session-cookie-revoked':
			return 'La sesión COOKIE ha expirado';
		case 'auth/uid-alread-exists':
			return 'El identificador proporcionado ya está en uso';
		case 'auth/email-already-exists':
			return 'El correo electrónico proporcionado ya está en uso';
		case 'auth/phone-number-already-exists':
			return 'El teléfono proporcionado ya está en uso';
		case 'auth/project-not-found':
			return 'No se encontraron proyectos';
		case 'auth/insufficient-permission':
			return 'La credencial utilizada no tiene acceso al recurso solicitado';
		case 'auth/internal-error':
			return 'El servidor de autenticación encontró un error inesperado al intentar procesar la solicitud';
		default:
			return null;
	}
}
