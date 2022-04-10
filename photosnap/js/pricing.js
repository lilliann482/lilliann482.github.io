//Updates pricing verbiage on corresponding radio button select

const pricingSwitch = document.getElementById('pricing-switch')
const monthlyPricingPlan = document.getElementById('monthly')
const yearlyPricingPlan = document.getElementById('yearly')
const pricingPlanTextNodes = document.querySelectorAll('p.pricing-plan-text')
const priceTextNodes = document.querySelectorAll('p.price-text')

pricingSwitch.addEventListener('input', e => {    

    if (monthlyPricingPlan.checked == true) {

        Object.values(priceTextNodes).forEach(val => {
            price1 = `$${val.dataset.basePrice}.00`
            price2 = val.innerText

            switchTextNodeContent(priceTextNodes, price1, price2)

            verifyStyles(pricingPlanButtons, 'btn-dark', 'btn-light', 'pricing-card-active')
            
        })

    } else if (yearlyPricingPlan.checked == true) {
        
        Object.values(priceTextNodes).forEach(val => {
            price1 = `$${val.dataset.basePrice * 10}.00`
            price2 = val.innerText
    
            switchTextNodeContent(priceTextNodes, price1, price2)

            verifyStyles(pricingPlanButtons, 'btn-dark', 'btn-light', 'pricing-card-active')
            
        })
    }

    switchTextNodeContent(pricingPlanTextNodes, 'per month', 'per year');

})

function switchTextNodeContent(obj, text1, text2) {
    Object.values(obj).forEach(val => {
        if (val.innerText == text1) {
            val.textContent = text2;
        } else if (val.innerText == text2) {
            val.textContent = text1;
        }
    })
}

//Adds and removes Active Pricing Card styling

const pricingCards = document.querySelectorAll('div.pricing-card')
const pricingPlanButtons = document.querySelectorAll('button.pricing-plan-btn')
const activeClass = 'pricing-card-active';


 pricingPlanButtons.forEach(item => {
     item.addEventListener('click', e => {
         console.log(item.parentNode)
         if (!item.parentNode.classList.contains(activeClass)) {
             console.log('this card is not active')
             console.log(item)
             removeClasses(pricingCards, activeClass)
             addClass(item.parentNode, activeClass)

             switchClasses(pricingPlanButtons, 'btn-light', 'btn-dark')
             addClass(item, 'btn-dark')
         } 
     })
 })

function removeClasses(obj, className) {
    Object.values(obj).forEach(val => {
        val.classList.remove(className)
    })
}

function switchClasses(obj, classNameRemove, classNameAdd) {
    Object.values(obj).forEach(val => {
        val.classList.remove(classNameRemove)
        val.classList.add(classNameAdd)
    })
}

function addClass(item, className) {
    item.classList.add(className)
}

function verifyStyles(obj, inactiveStyleClass, activeStyleClass, activeParentClass){
    Object.values(obj).forEach(val => {
        if (val.classList.contains(inactiveStyleClass) && val.parentNode.classList.contains(activeParentClass)) {
            val.classList.remove(inactiveStyleClass)
            val.classList.add(activeStyleClass)
        } else {
            console.log(false)
        }
        
    })
}




 
