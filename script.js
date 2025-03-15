
   list.style.maxHeight = '0px';
   function Menu(e){
    let list= document.querySelector('ul');
    e.name ==='menu' ? (e.name="close",list.classList.
      add('top-[80px]')): (e.name='menu',list.classList.
      remove('top-[80px]'))
   }