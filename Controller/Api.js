const APIurl = 'https://api.adviceslip.com/advice';
const btn_card = document.getElementById('circle');
const advice_id = document.querySelector('#card h3 span');
const advice_m = document.querySelector('#card p');


construindoCard=(api)=>{
    id = api.id
    mensagem = api.advice

    advice_id.textContent = id;
    advice_m.textContent = mensagem
    // console.log(id)
    // console.log(mensagem)
}

ChamarAPI=()=>{
    fetch(APIurl)
        .then((response)=>{
            // console.log(response)
            return response.json()
        })
        .then((responseBody)=>{
            return responseBody.slip
            // console.log(responseBody.slip)
        })
        .then((listaRes)=>{
            // const id = listaRes.id
            // const mensage = listaRes.advice
            construindoCard(listaRes)
    
        })
}

ChamarAPI();

btn_card.addEventListener('click',()=>{
   ChamarAPI();
})
