// 2)
const amarelo = '\x1b[33m%s\x1b[0m'
switch(process.argv[2]){
	case "add":
		console.log(+process.argv[3] + (+process.argv[4]))
		break;
	case "sub":
		console.log(+process.argv[3] - (+process.argv[4]))
		break;
    case "mult":
		console.log(+process.argv[3] * (+process.argv[4]))
		break;
    case "div":
		console.log(+process.argv[3] / (+process.argv[4]))
		break;
	default:
		console.log(`${amarelo}`, 'Você precisa digitar:', 'add, sub, mult ou div antes dos parâmetros.')
    }

