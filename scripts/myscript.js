const $d = document,
        $diaN = $d.querySelector("#dia"),
        $mesN = $d.querySelector("#mes"),
        $anhoN = $d.querySelector("#anho"),
        $edad = $d.querySelector("#edad"),
        $submit = $d.querySelector("#submit")

$submit.addEventListener("click",  event => {
    
    let mes = [31, 28, 31, 30, 31, 30, 31, 31, 30 ,31, 30, 31]

    let diaN = $diaN.value
    let mesN = $mesN.value
    let anhoN = $anhoN.value

    if ((mesN > 0 && mesN < 12) && diaN <= mes[mesN - 1]){

        let hoy = new Date()
        let diaH = hoy.getDate()
        let mesH = hoy.getMonth() + 1 // +1 porque la función empieza a contar los meses en 0
        let anhoH = hoy.getFullYear()


        if (diaN > diaH) {
            diaH += mes[mesH - 1]
            mesH--
        }

        if (mesN > mesH) {
            mesH += 12
            anhoH--
        }

        let d = diaH - diaN
        let m = mesH - mesN
        let a = anhoH - anhoN

        $edad.innerHTML = `Tu edad es ${a} años, ${m} meses y ${d} días`
    
    } else {

        $edad.innerHTML = `Edad incorrecta`

    }

})