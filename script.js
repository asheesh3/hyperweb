let home = document.getElementById('home')
let tech = document.getElementById('technological-videos')
let code = document.getElementById('coding-videos')


filtered_content = (message) => {

    switch (message) {
        case "tech":
            tech.classList.add('active');
            home.classList.remove('active');
            code.classList.remove('active');
            break;

        case "home":
            tech.classList.remove('active');
            home.classList.add('active');
            code.classList.remove('active');
            break;

        case "coding":
            tech.classList.remove('active');
            home.classList.remove('active');
            code.classList.add('active');
            break;

        case "reload":
            window.location.reload();
            break;
    }

}





function rn() {
     
    let close_active = document.getElementById('popup');

    if (close_active.style.display == 'block') {
        close_active.style.display = 'none';
    } else {
        close_active.style.display = 'block';
    }
}