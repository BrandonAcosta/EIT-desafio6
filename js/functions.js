export function nameToString(member) {
    let nameString = "";
    for (let i = 0; i < member.getElementsByTagName("dd").length; i++) {
        if (member.getElementsByTagName("dd")[i].innerText != "") {
            switch (i) {
                case 0: 
                    nameString =member.getElementsByTagName("dd")[i].innerText;
                    break;

                case 1:
                    nameString=nameString+" "+member.getElementsByTagName("dd")[i].innerText;
                    break;
    
                case 2:
                case 3:
                    nameString=nameString+" "+member.getElementsByTagName("dd")[i].innerText.toUpperCase();
                    break;
    
                default:
                    console.log("Oops, esto es un error 😢");
                    break;
            }
        }
        
    }
    return nameString;
}

export function coincidencia(m01, m02, range){
    let matchNames = [];
    matchNames[2] = false;
    for (let i = range[0]; i < range[1]; i++) {
        for (let x = range[0]; x < range[1]; x++) {
            if (m01.getElementsByTagName("dd")[i].innerText == m02.getElementsByTagName("dd")[x].innerText) {
                matchNames[0] = i;
                matchNames[1] = x;
                matchNames[2]=true;
            }
            
        }
        
    }
        return matchNames;
}