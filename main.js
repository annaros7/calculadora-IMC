var insertPeso = document.querySelector('input#peso')
var insertAltura = document.querySelector('input#altura')
var res = document.querySelector('div#res')
var calculo = document.querySelector('input#calcular')

function soma()
{
    // calculo IMC = peso / altura²
    // ² é feito por: **2
    // .value faz com que os insertPeso e insertAltura se tornem valores numéricos
    var result = (insertPeso.value) / ((insertAltura.value **2)); 
    
    // para mudar as casas decimais: .toFixed(casas...)
    res.innerHTML += '<p>Seu índice de massa corporal é: '+result.toFixed(2)+'</p>'
    
    if (result <= 18.5)
        {
            res.innerHTML += '<p>Você está abaixo do peso ideal!</p>'
        }else if (result >= 18.6 && result <= 24.9)
            {
                res.innerHTML += '<p>Você está no seu peso ideal!</p>'
            }else if (result >= 20.0 && result <= 29.9)
                {
                    res.innerHTML += '<p>Você está levemente acima do peso!</p>'
                }else if (result >= 30.0 && result <= 34.9)
                    {
                        res.innerHTML += '<p>Você está com obesidade grau 1!</p>'
                    }else if (result >= 35.0 && result <= 39.9)
                        {
                            res.innerHTML += '<p>Você está com obesidade grau 2!</p>'
                            res.innerHTML += '<p>Severa</p>'   
                        }else if (result > 40)
                            {
                                res.innerHTML += '<p>Você está com obesidade grau 3!</p>'
                                res.innerHTML += '<p>Mórbida</p>'    
                            }
}

calculo.addEventListener('click', soma)
