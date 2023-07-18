/* Desenvolva sua lógica aqui ... */

// rederizar cartas mas todas elas 
function renderCarts(obj){
    const ul = document.querySelector('.cards__container')

    const li = document.createElement('li')
    ul.appendChild(li)
    li.classList.add('container__card')
    li.dataset.id = obj.id

    const img = document.createElement('img')
    li.appendChild(img)
    img.src = obj.img

    const divInformation = document.createElement('div')
    li.appendChild(divInformation)
    divInformation.classList.add('container__information')

    const divContainerBand =  document.createElement('div')
    divInformation.appendChild(divContainerBand)
    divContainerBand.classList.add('container__band')

    const nameBand = document.createElement('h3')
    divContainerBand.appendChild(nameBand)
    nameBand.classList.add('band__name')
    nameBand.innerHTML = obj.band

    const yearProduce = document.createElement('p')
    divContainerBand.appendChild(yearProduce)
    yearProduce.classList.add('year')
    yearProduce.innerHTML = obj.year

    const disco = document.createElement('h2')
    divInformation.appendChild(disco)
    disco.classList.add('name__disco')
    disco.innerHTML = obj.title

    const divBuy = document.createElement('div')
    divInformation.appendChild(divBuy)
    divBuy.classList.add('container__buy')

    const pricetoBuy = document.createElement('p')
    divBuy.appendChild(pricetoBuy)
    pricetoBuy.classList.add('price__buy')
    pricetoBuy.innerHTML = `R$ ${obj.price.toFixed(2).replace('.',',')}`

    const buyButton =  document.createElement('button')
    divBuy.appendChild(buyButton)
    buyButton.classList.add('buy__button')
    buyButton.innerHTML = 'Comprar'
}

function renderImagens(){
    products.forEach(element => {
        renderCarts(element)
    });
}
renderImagens()

// funcao pra deixar selecionado o botao
function select(){
    const buttons = document.querySelectorAll('.container__buttons > button')
    let index;

    buttons.forEach((element, i) => {
        if(element.classList.contains('active')){
            index = i 
        }
        element.addEventListener('click', () => {
            element.classList.add('active')
            buttons[index].classList.remove('active')
            index = i
        })

    });
}
select()

// filtro funcioanal
function filterRange () {
    const range = document.querySelector('#range__number')
    const price = document.querySelector('.define__number')
    
    range.addEventListener('input', ()=>{
        const value = parseInt(range.value)
        price.innerHTML = `até R$${value.toFixed(2).replace('.',',')}`
    })
}
filterRange()

function filterArray(){
    const buttons = document.querySelectorAll('.container__buttons > button')
    const input =  document.querySelector('#range__number')

    buttons.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            let category;
            buttons.forEach((element, i) => {
               if(element.classList.contains('active')){
                category = i
            }
        })
        const rangeValue = input.value
    if(category === 0){
            const filterAll = products.filter(item => item.price <= rangeValue)
            filterAll.forEach(element =>{
                const getId = element.id
                const item = document.querySelector(`[data-id="${getId}"]`)
                item.classList.remove('hidden')
            })
            const verifyAll = products.filter(item => item.price > rangeValue)
            verifyAll.forEach(element =>{
                const allEnconter = element.id;
                const item = document.querySelector(`[data-id="${allEnconter}"]`)
                item.classList.add('hidden')
            })
        }else{
            const filterbyRange =  products.filter(item => item.price <= rangeValue && item.category === category)
            filterbyRange.forEach(element =>{
                const enconterid = element.id;
                const item = document.querySelector(`[data-id="${enconterid}"]`) 
                item.classList.remove('hidden')
            })
            const verifyOpost = products.filter(item => item.price > rangeValue || item.category !== category)
            verifyOpost.forEach(element =>{
                const enconterOther = element.id;
                const item = document.querySelector(`[data-id="${enconterOther}"]`)
                item.classList.add('hidden')
            })
        }
    })
    })

    input.addEventListener('input', ()=>{
        let category;
        buttons.forEach((element, i) => {
           if(element.classList.contains('active')){
            category = i
        }
    })
    const rangeValue = input.value
    if(category === 0){
            const filterAll = products.filter(item => item.price <= rangeValue)
            filterAll.forEach(element =>{
                const getId = element.id
                const item = document.querySelector(`[data-id="${getId}"]`)
                item.classList.remove('hidden')
            })
            const verifyAll = products.filter(item => item.price > rangeValue)
            verifyAll.forEach(element =>{
                const allEnconter = element.id;
                const item = document.querySelector(`[data-id="${allEnconter}"]`)
                item.classList.add('hidden')
            })
        }else{
            const filterbyRange =  products.filter(item => item.price <= rangeValue && item.category === category)
            filterbyRange.forEach(element =>{
                const enconterid = element.id;
                const item = document.querySelector(`[data-id="${enconterid}"]`) 
                item.classList.remove('hidden')
            })
            const verifyOpost = products.filter(item => item.price > rangeValue || item.category !== category)
            verifyOpost.forEach(element =>{
                const enconterOther = element.id;
                const item = document.querySelector(`[data-id="${enconterOther}"]`)
                item.classList.add('hidden')
            })
        }
    })

}
filterArray()