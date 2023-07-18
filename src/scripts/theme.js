/* Desenvolva sua lógica aqui ... */

// funcao para fazer a retirada da lua e do sol e fazer suas substituicoes 
const render = () =>{
    const darkButton = document.querySelector('.moon__button')
    const iImg = document.querySelector('i')
    const html = document.querySelector('html')
    const verify = localStorage.getItem('display')
    if(verify !== ''){
        if(verify === 'dark'){
            html.classList.toggle('dark__mode')
            iImg.classList.add('fa-moon')
            iImg.classList.remove('fa-sun')
        }else{
            iImg.classList.remove('fa-moon')
            iImg.classList.add('fa-sun')
        }
    }

    
    // fazer a troca do modo darkmode e ligthmode 
    darkButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')){
            iImg.classList.remove('fa-moon')
            iImg.classList.add('fa-sun')
            localStorage.setItem('display', 'ligth')
        }else{
            iImg.classList.add('fa-moon')
            iImg.classList.remove('fa-sun')
            localStorage.setItem('display', 'dark')
        }
    })
}
render()