
let encryptMessage = document.querySelector("#encrypt"),
    btnEncrypt = document.querySelector("#btnEncrypt"),
    btnDecrypt = document.querySelector("#btnDecrypt"),
    txtMessages = document.querySelector("#txtMessage"),
    encryptMsg = document.querySelector("#ecrypt-msg"),
    copy = document.querySelector("#copy"),
    p = document.querySelector("#p");

let toEncryptMessage = () => {
    let arrayMessage = encryptMessage.value,
        a = "";
    const pattern = /[A-Z0-9]|(á|é|í|ó|ú|Ü|Á|É|Í|Ó|Ú)/g;

    if (pattern.test(encryptMessage.value)) return swal('Error!','Error sólo puedes ingresar letras minúsculas y sin acentos','error');

    for (let i = 0; i < arrayMessage.length; i++) {

        switch (arrayMessage[i]) {

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
    clear(a)
}
let toDecrypt = () => {
    let decrypt = txtMessages.value,
        regExp  = /(ai)/g,
        regExp2 = /(enter)/g,
        regExp3 = /(imes)/g,
        regExp4 = /(ober)/g,
        regExp5 = /(ufat)/g;

    for (let i = 0; i < txtMessages.value.length; i++) {

        if(txtMessages.value[i] === 'a'){
            decrypt = decrypt.replace(regExp, 'a')
        }
        else if(txtMessages.value[i] === 'e'){
            decrypt = decrypt.replace(regExp2, 'e')
        }
        else if(txtMessages.value[i] === 'i'){
            decrypt = decrypt.replace(regExp3, 'i')
        }
        
        else if(txtMessages.value[i] === 'o'){
            decrypt = decrypt.replace(regExp4, 'o')
        }
        else if(txtMessages.value[i] === 'u'){
            decrypt = decrypt.replace(regExp5, 'u')
        }
    }

    if (decrypt !== "") {
        txtMessages.textContent = decrypt
        swal('Éxito','Mensaje desencriptado exitosamente','success')
    }else{
        swal('Error!','No se a encontrado texto a desencriptar','error')
    }
}

let clear = (text) => {
    if (text !== "") {
        txtMessages.textContent = text;
        swal('Éxito','Mesaje encriptado','success')
    }else{
        swal('Error!','Ingrese un texto a encriptar','error')
    }
    encryptMsg.classList.add('ecrypt-msg');
    txtMessages.classList.add("set-textarea");
    p.classList.remove('off');
    encryptMessage.value = "";
    copy.style.display = "block";
}


let  ToCopy = async ()  =>  {    
    if (txtMessages.value !== "") {
        try {
            const text = await navigator.clipboard.writeText(txtMessages.value);
            swal('Éxito','Texto copiado correctamente','success')
        } catch (error) {
            console.log(`Ocurrió un error: ${error}`)
        }
    } else{
        swal('Error!','Húbo un error al intentar copiar el texto','error');
    }
}


btnEncrypt.addEventListener("click", toEncryptMessage);
btnDecrypt.addEventListener("click", toDecrypt);
copy.addEventListener("click", ToCopy );




