
function active(){

    let options= document.querySelector('.options');
    options.classList.toggle('active');
}

function remove(){

    let options= document.querySelector('.options');
    options.classList.remove('active');
}


function del(num){

    let delete_class = document.querySelectorAll('.notification')[num];

    delete_class.classList.add('del');
    


}