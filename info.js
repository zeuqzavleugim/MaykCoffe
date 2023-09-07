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