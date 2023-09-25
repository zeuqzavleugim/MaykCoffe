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
    switch (pagina){
        case 'index':
            ul.className = "nav justify-content-center nav-tabs";
            li0.className = "nav-item";
            li1.className = "nav-item"; 
            li2.className = "nav-item";
            a1.className = "nav-link text-white"; 
            a2.className = "nav-link text-white";
            a0.className = "nav-link text-bg-light active";
            a0.textContent= "MaykCoffe";
            a0.href = "index.html";
            a1.textContent = "Quienes Somos";
            a1.href = "info.html";
            a2.textContent = "Menú";
            a2.href = "menu.html";
            li0.appendChild(a0);
            ul.appendChild(li0);
            li1.appendChild(a1);
            ul.appendChild(li1);
            li2.appendChild(a2);
            ul.appendChild(li2);
            div.appendChild(ul);
            break;
        case 'info':
            ul.className = "nav justify-content-center nav-tabs";
            li0.className = "nav-item";
            li1.className = "nav-item"; 
            li2.className = "nav-item";
            a0.className = "nav-link text-white"; 
            a2.className = "nav-link text-white";
            a1.className = "nav-link text-bg-light active";
            a0.textContent= "MaykCoffe";
            a0.href = "index.html";
            a1.textContent = "Quienes Somos";
            a1.href = "info.html";
            a2.textContent = "Menú";
            a2.href = "menu.html";
            li0.appendChild(a0);
            ul.appendChild(li0);
            li1.appendChild(a1);
            ul.appendChild(li1);
            li2.appendChild(a2);
            ul.appendChild(li2);
            div.appendChild(ul);
            break;
        case 'menu':
            ul.className = "nav justify-content-center nav-tabs";
            li0.className = "nav-item";
            li1.className = "nav-item"; 
            li2.className = "nav-item"; 
            a0.className = "nav-link text-white"; 
            a1.className = "nav-link text-white";
            a2.className = "nav-link text-bg-light active";
            a0.textContent= "MaykCoffe";
            a0.href = "index.html";
            a1.textContent = "Quienes Somos";
            a1.href = "info.html";
            a2.textContent = "Menú";
            a2.href = "menu.html";
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
/*
<div>
    <ul class="nav justify-content-center nav-tabs">
        <li class="nav-item">
            <a class="nav-link text-bg-light active" href="index.html">MaykCoffe</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="info.html">Quienes Somos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="menu.html">Menú</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="contactos.html">Contactanos</a>
        </li>
    </ul>
</div>
*/