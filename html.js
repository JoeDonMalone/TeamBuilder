// $('#manager').each( function(index) {
//     console.log('this').text()
// })

let x = document.body.querySelectorAll('.manager-container-row');
 let index = 0;
 for( index=0; index < x.length; index++ ) { var navArrow = document.createElement('div'); navArrow.className = 'nav__expand'; navArrow.innerHTML = '<span class="icon icon--down-arrow"></span>';
      x[index].parentNode.insertBefore(navArrow, x[index].nextSibling);   
 };