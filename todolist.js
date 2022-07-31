const input = document.querySelector('input');
const Add = document.querySelector('#add');
const ul = document.querySelector('ul');


Add.addEventListener('click' , ()=>{
        let text = input.value
        if(input.value == ''){
            alert('You have to write something')
        }else{
            var li = document.createElement('li')
            li.textContent +=  text;
            li.innerHTML += '<span><i class="fa-solid fa-trash-can"></i></span>'
            ul.appendChild(li)
            input.value = '';
        }
})

ul.addEventListener('click' , (e)=>{
    if(e.target.nodeName == 'I'){
        e.target.parentElement.parentElement.style = 'display :none'
    }
    if(e.target.nodeName == 'LI'){
        e.target.classList.toggle('liStyle')
    }
})