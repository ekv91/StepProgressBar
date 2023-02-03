const nextEl = document.getElementById('next');
const prevEl = document.getElementById('prev');
const stepsEl = document.querySelectorAll('.step');
const progressEl = document.querySelector('.progress-bar-front');

let currentCheck = 1

nextEl.addEventListener('click',()=> {
    currentCheck++;
     if(currentCheck > stepsEl.length) {
        currentCheck = stepsEl.length;
     }
     updateStepProgress();
});

prevEl.addEventListener('click',()=> {
    currentCheck --;
     if(currentCheck < 1) {
        currentCheck = 1;
     }
     updateStepProgress();
});


function updateStepProgress() {
    stepsEl.forEach((stepEl, idx)=> {
        if (idx < currentCheck) {
            stepEl.classList.add('checked');
            stepEl.innerHTML = `<i class="fas fa-check"></i>
            <small>${idx === 0 ? 'Start' : idx === stepsEl.length -1 ? 'Final' : 'Step '+ idx}</small>`;
        }else {
            stepEl.classList.remove('checked');
            stepEl.innerHTML = `<i class="fas fa-times"></i>`
        }
    });

    const checkedNumber = document.querySelectorAll('.checked');

    progressEl.style.width = ((checkedNumber.length -1) / (stepsEl.length -1) * 100 + '%');

    if(currentCheck===1) {
        prevEl.disabled = true;
    }else if (currentCheck === stepsEl.length) {
        nextEl.disabled = true;
    }else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }


};