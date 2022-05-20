/* 
    Crear los id's o clases para comunicar el mundo html con el mundo js
    Crear las restricciones que solicitan, sólo minúsculas y sin acentos.
    3) Crear los eventos y asociarles su funcionalidad.
    4) Realizar las pruebas.
*/

let encryptMessage = document.querySelector("#encrypt").value,
    btnEncrypt = document.querySelector("#btnEncrypt"),
    btnDecrypt = document.querySelector("#btnDecrypt"),
    txtMessages = document.querySelector("#txtMessage");

let toEncryptMessage = () => {
    let arrayMessage = encryptMessage,
        a = "";
    const pattern  = /[A-Z]|(á|é|í|ó|ú|Ü|Á|É|Í|Ó|Ú)/g;
        
    if (pattern.test(encryptMessage.value)) return alert('Error sólo puedes ingresar letras minúsculas y sin acentos');

    for (let i = 0; i < arrayMessage.length; i++) {

        switch (encryptMessage[i]) {
            
            case 'a':
                a += arrayMessage[i] = 'ai'

            break;

            case 'e':
                 a += arrayMessage[i] = 'enter'
            break;

            case 'i':
                a += arrayMessage[i] = 'imes'

            break;

            case 'o':
                a += arrayMessage[i] = 'ober'
            break;

            case 'u':
                a += arrayMessage[i] = 'ufat'

            break;

            default:
                a += arrayMessage[i]   
                break;
        }  
    }
}

let clear =  () => {
    

}

btnEncrypt.addEventListener("click", toEncryptMessage);



//console.log(encryptMessage.value)

