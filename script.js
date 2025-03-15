let list= document.getElementById('list')
   list.style.maxHeight = '0px';

   function toggleMenu(){
    if (list.style.maxHeight == '0px') {
      list.style.minHeight = '300px';
    }
    else{
      list.style.maxHeight = '0px';
    }
   }