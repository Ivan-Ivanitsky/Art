export{form}


const form = () => {
    const btnConsultation = document.querySelectorAll('.button-consultation')

    const form = document.querySelectorAll('form')
    const input = document.querySelectorAll('input');

 

    console.log(form, input)

    const messages = {
        load: 'Загрузка',
        succesful: 'Готово',
        false: 'Ошибка'
    }

    
    // async function postData(url,data){
    //  let res = await fetch(url,{
    //     method : 'POST',
    //     headers : {'Content-type':'application/json'},
    //     body: JSON.stringify(data)
    //  })
    //  return await res.json()
    // }


    form.forEach(item => {
        post(item)
    })


   function post(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        console.log(e)

        const statusMessages = document.createElement('div');
              statusMessages.classList.add('messages');
              statusMessages.innerHTML = messages.load;
              statusMessages.style.cssText =`margin-top:10px;` 
              form.insertAdjacentElement('afterend',statusMessages);

        const request = new XMLHttpRequest();
        request.open('POST','server.php')

        const formData = new FormData(form)
    
        request.send(formData)


        request.addEventListener('load',()=>{
            if(request.status == 200){
                statusMessages.innerHTML = messages.succesful
                form.reset()

            }
        })
        
        //  fetch('../assets/server.php',{
        //     method:'POST',
        //     // headers: {'Content-type':'application/json'},
        //     body: formData
        // }).then(data =>{
        //     console.log(data)
        // }).catch(() =>{
        //     console.log('error')
        // })


    })
   } 
}
