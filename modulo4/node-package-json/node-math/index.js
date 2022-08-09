// 2)
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
    }

