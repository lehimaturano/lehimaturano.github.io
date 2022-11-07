(function(){

    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>
        changePosition(1)
    );

    buttonBefore.addEventListener('click', ()=>
        changePosition(-1)
    );

    function changePosition(add){
        
        const currentTestimony = Number(document.querySelector('.testimony_body--show').dataset.id);
        value =currentTestimony;
        value+= add;
    
        console.log(sliders.length)
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }
        
        sliders[currentTestimony-1].classList.toggle('testimony_body--show');
        sliders[value-1].classList.toggle('testimony_body--show');
    }
})();