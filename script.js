   
   //  let list= document.querySelector('ul');
   //  e.name ==='menu' ? (e.name="close",list.classList.
   //    add('top-[80px]')): (e.name='menu',list.classList.
   //    remove('top-[80px]'))
   
   function Menu(){
   let list= document.querySelector('ul');
   let menuIcon= document.getElementById('icon');
    if 
    (list.classList.contains('top-[80px]')) {
      list.classList.remove('top-[80px]');
      menuIcon.innerText= '=';
   }
    else{
      list.classList.add('top-[80px]');
      menuIcon.innerText= 'x';
    }
   }
  