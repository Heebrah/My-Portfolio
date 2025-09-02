// let mytext = document.getElementById('text')
// document.onscrollend = ()=>{
//     mytext.style.animation = 'disable'
//     mytext.style.display = 'block'
// }


 var tablinks = document.getElementsByClassName('tab-links')
 var tabcontents = document.getElementsByClassName('tab-contents')

 

 function opentab(tabname){
   for(tablink of tablinks){
    tablink.classList.remove('active-link')
   }

   for (tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab')
   }
   event.currentTarget.classList.add('active-link');
   document.getElementById(tabname).classList.add('active-tab')
 }
 



var sidemenu = document.querySelector('#sidemenu')

function openmenu(){
  sidemenu.style.right = '0'
}

function closemenu(){
  sidemenu.style.right = '-200px'
}









  const scriptURL = 'https://script.google.com/macros/s/AKfycbzjOScrtmtzL3HsIE5iLop_OsxQKk8JYDCwR_d5SqYbjdL55eigGU9TK5d0b4WiL56mtw/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})

      .then(response => {
       
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
        
      })
      .catch(error => console.error('Error!', error.message))


  })


  

 


    // function showmore(){
    //   const dispMore = document.querySelector('.more')
    //   const morePics = document.querySelectorAll('.hide')
    //   dispMore.addEventListener('click', () =>{

    //     if(dispMore.innerText === 'See More'){
    //       morePics.forEach(workDisplay => {
        
    //         workDisplay.style.height = 'auto'
           
    //         dispMore.innerText = 'Hide'
    //         console.log('click')

    //     });
    //     }
    //     else{
    //       morePics.forEach(workDisplay => {
        
    //         workDisplay.style.height = 0
           
    //         dispMore.innerText = 'See More'
            
          
         
         
    //     });
    //     }
      
    //   })
    // }