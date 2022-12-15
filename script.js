"use strict";

let checklist = document.querySelector('.checklist');
let textarea  = document.querySelector('.textarea');
let buttonAdd = document.querySelector('.add');
let date      = document.querySelector('.date');

buttonAdd.addEventListener('click', function () {

    if (textarea.value.length > 0) {

        //create li;
        let li   = document.createElement('li');
        let span = document.createElement('span');
       
        span.textContent = textarea.value;
        textarea.value = '';

        checklist.appendChild(li);
        li.appendChild(span);

        // edit li;
        span.addEventListener('click', function edit() {
            let input = document.createElement('input');
                input.value = this.innerHTML;
                                
                this.innerHTML = '';
                
                this.appendChild(input);
                this.removeEventListener('click', edit);

                input.focus();

            input.addEventListener('blur', function () {
                span.textContent = this.value;

                span.addEventListener('click', edit);
            });
        });

        //create checkbox done;
        let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

        li.appendChild(checkbox);

        //click done;
        checkbox.addEventListener('click', function () {
            span.classList.toggle('active');
        });

        //create link remove;
        let remove = document.createElement('a');
            remove.textContent = '✖';
            remove.href = '';

        li.appendChild(remove);

        //click remove;
        remove.addEventListener('click', function (event) {
            li.parentElement.removeChild(li);

            event.preventDefault();
        });
    };
});

function dates(){
    let now   = new Date();
    let year  = now.getFullYear();
    let month = now.getMonth() + 1;
    let day   = now.getDate();
    
    if(day < 10){ day = '0' + day };
    
    date.textContent = day + '-' + month + '-' + year;
}

dates();