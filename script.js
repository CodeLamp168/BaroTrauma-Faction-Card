const learnBtns = document.querySelectorAll('.btn-learn-more');
const linkBtn = document.querySelectorAll('.btn-to-link')
const firstInfoElement = document.querySelectorAll('.card-opening-info')
const infoElement = document.querySelectorAll('.card-slide');


learnBtns.forEach(function (learnBtn, index){
    learnBtn.addEventListener('click', function(){
        firstInfoElement[index].classList.toggle('active')
        infoElement[index].classList.toggle('active')
        linkBtn[index].classList.toggle('active')

        if(infoElement[index].classList.contains('active')){
            learnBtns[index].innerText = "Return"
        } else {
            learnBtns[index].innerText = "Learn More"
        }
    })
})
 


