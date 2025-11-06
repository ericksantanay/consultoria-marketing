
   //PARTE DO MENU HAMBURGEUR
    let r = document.getElementById('burguer-menu')
    // PARTE DO MENU
    function ClickMenu() {

    if (itens.style.display == 'block') {
       itens.style.display = 'none'
       r.innerText = ('menu')
    }else {
       itens.style.display = 'block'
       r.innerText = ('close')
    }
}

   



    