
function gerar() {

    var tn1 = window.document.getElementById('exc')
    var tn2 = window.document.getElementById('pula')
    var res = window.document.getElementById('res')
    var res2 = window.document.getElementById('res2')
    var res3 = window.document.getElementById('res3')

    if (tn1.value.length == 0 || tn2.value.length == 0 ){
                res.innerHTML = 'Impossivel contar'
            } else {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var n3 = 4 * n1
    var n4 = 1 + n2

    var soma = n3 * n4
    res.innerHTML = `\u{23F1} Seu tempo de treino dura ${soma} minutos`
            }

    if (soma >= 120) {
        res2.innerHTML =  `\u{274C} Treino passou de duas horas.`
        res3.innerHTML =  `\u{1F6CC} Bom descanso`
    } else {
        res2.innerHTML =  `\u{2714} tempo ideal de treino.`
        res3.innerHTML =  `\u{1F6B4} E o cardio?`
    }
}