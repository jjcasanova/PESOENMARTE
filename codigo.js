usuario=prompt("Introduce tu peso")
planeta=parseInt(prompt("Elige tu planeta: 1 marte, 2 júpiter"))
g_tierra=9.8
g_marte=3.7
g_jupiter=24.8
switch(planeta){
	case 1:
		peso_final=parseInt(usuario)*g_marte/g_tierra
		document.write("Tu peso en marte es " + peso_final)
	break;
	case 2:
		peso_final=parseInt(usuario)*g_jupiter/g_tierra
		document.write("Tu peso en júpiter es " + peso_final)
	break;
	default:
		peso_final=1000000
		document.write("Tu peso en kriptón es " + peso_final)
	break;
}