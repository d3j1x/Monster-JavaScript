
// conditional statement

let role = prompt('what is your role?')

switch(role)
{
	case 'admin':
		document.write('create, update, delete');
		break;
	case 'moderator':
		document.write('create, update');
		break;
	case 'editor':
		document.write('update');
		break;
	default:
		document.write('Hello user');
}
