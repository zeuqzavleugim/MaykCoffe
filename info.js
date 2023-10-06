function redirigir(pagina){
    switch(pagina){
        case 'whatsapp':
            var win = window.open("https://wa.me/525584145536?text=Hola,%20quiero%20saber%20mas%20sobre%20tus%20servicios", "_blank");
            win.focus;
            break;
        case 'YouTube':
            var win = window.open("https://www.youtube.com/@MaykCoffe", "_blank");
            win.focus;
            break;
        case 'instagram':
            var win = window.open("https://www.instagram.com/mayk_coffe/", "_blank");
            win.focus;
            break;
    }
}

function pagina(pagina){
    const div = document.getElementById("1");
    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const a0 = document.createElement('a');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    li0.className = "nav-item";
    li1.className = "nav-item"; 
    li2.className = "nav-item";
    a0.textContent= "MaykCoffe";
    a0.href = "index.html";
    a1.textContent = "Quienes Somos";
    a1.href = "info.html";
    a2.textContent = "Menú";
    a2.href = "menu.html";
    a0.id = 'letra';
    a1.id = 'letra';
    a2.id = 'letra';
    switch (pagina){
        case 'indexs':
            ul.className = "nav justify-content-center nav-tabs";        
            a1.className = "nav-link text-white"; 
            a2.className = "nav-link text-white";
            a0.className = "nav-link text-bg-light active";
            li0.appendChild(a0);
            ul.appendChild(li0);
            li1.appendChild(a1);
            ul.appendChild(li1);
            li2.appendChild(a2);
            ul.appendChild(li2);
            div.appendChild(ul);
            break;
        case 'infos':
            ul.className = "nav justify-content-center nav-tabs";
            a0.className = "nav-link text-white"; 
            a2.className = "nav-link text-white";
            a1.className = "nav-link text-bg-light active";
            li0.appendChild(a0);
            ul.appendChild(li0);
            li1.appendChild(a1);
            ul.appendChild(li1);
            li2.appendChild(a2);
            ul.appendChild(li2);
            div.appendChild(ul);
            break;
        case 'menus':
            ul.className = "nav justify-content-center nav-tabs";
            a0.className = "nav-link text-white"; 
            a1.className = "nav-link text-white";
            a2.className = "nav-link text-bg-light active";
            li0.appendChild(a0);
            ul.appendChild(li0);
            li1.appendChild(a1);
            ul.appendChild(li1);
            li2.appendChild(a2);
            ul.appendChild(li2);
            div.appendChild(ul);
            break;
    }
}
function pie(){
    const footer = document.getElementById("footer");              // elemento ya creado
    
    const h3 = document.createElement('h3');                       // se introduse a footer
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const a = document.createElement('a');
    const p0 = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const boton0 = document.createElement('a');
    const boton1 = document.createElement('a');
    const boton2 = document.createElement('a');
    const img0 = document.createElement('img');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
                                                                    // introduccion de contenido de texto
    h3.textContent = "Contacto";
    p0.textContent = "Cafeteria MaykCoffe";
    p1.textContent = "Whatsapp";
    p2.textContent = "YouTube";
    p3.textContent = "Instagram";
                                                                    // introduccion de clases
    h3.className = "text-white";
    nav.className = "navbar navbar-expand-lg";
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0 container-fluid";
    li0.className = "nav-item col-8";
    li1.className = "nav-item col";
    li2.className = "nav-item col";
    li3.className = "nav-item col";
    a.className = "btn text-white";
    p0.className = "h4";
    boton0.className = "btn";
    boton1.className = "btn";
    boton2.className = "btn";
                                                                    //introduccion de id
    p1.id = "logos";
    p2.id = "logos";
    p3.id = "logos";
    img0.id = "log";
    img1.id = "log";
    img2.id = "log";
                                                                    //introduciondo href
    a.href = "#0";
    boton0.href = "https://wa.me/525584145536?text=Hola,%20quiero%20saber%20mas%20sobre%20tus%20servicios";
    boton1.href = "https://www.youtube.com/@MaykCoffe";
    boton2.href = "https://www.instagram.com/mayk_coffe/";
                                                                    //introduccion de imagenes
    img0.src = "logos/logoWhats.png";
    img1.src = "logos/logoYoutube.png";
    img2.src = "logos/logInsta.png";
                                                                    //introduccion de alt
    img0.alt = "logoWhats";
    img1.alt = "logoYoutube";
    img2.alt = "logInsta";
                                                                    //formar el html
    footer.appendChild(h3);
    a.appendChild(p0);
    li0.appendChild(a);
    ul.appendChild(li0);
    p1.appendChild(img0);
    boton0.appendChild(p1);
    li1.appendChild(boton0);
    ul.appendChild(li1);
    p2.appendChild(img1);
    boton1.appendChild(p2);
    li2.appendChild(boton1);
    ul.appendChild(li2);
    p3.appendChild(img2);
    boton2.appendChild(p3);
    li3.appendChild(boton2);
    ul.appendChild(li3);
    nav.appendChild(ul);
    footer.appendChild(nav);
}