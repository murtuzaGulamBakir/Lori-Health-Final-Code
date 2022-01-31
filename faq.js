var it=9;

const searchFun=  ()=>{
  delclass();
  document.querySelector('.q-tiles-container').style.display="inline-block"
   let words= document.getElementById('myinput').value.toUpperCase();
   console.log(words);
  let mytable= document.querySelectorAll('.q-tile');
  let a=[];
 
 var j=0;
  var m=0;
  for(var i=0;i<mytable.length;i++){
  
    let d=mytable[i].getElementsByTagName('h3')[0];

    let e=mytable[i].getElementsByTagName('p')[0];
    if(d||e){
     
        let textval=d.textContent || d.innerHTML;
        let textval2=e.textContent || e.innerHTML
         if(textval.toUpperCase().indexOf(words)>-1 || textval2.toUpperCase().indexOf(words)>-1){
          document.querySelector('.faq-tiles').style.display="none"
               mytable[i].style.display="none";
               
             mytable[i].classList.add('fun');
                 a[m]=mytable[i];
                       m++;
                     
        } 
        else{
          mytable[i].style.display="none";
        }
      
    }

   
   
  }
 
   // document.querySelectorAll('.q-tile').classList.remove('.fun')
 
  if(words.length===0){
    document.querySelector('.faq-tiles').style.display="flex"
    document.querySelector('.q-tiles-container').style.display="none"
    document.getElementById('errmsg').style.display="none";
    document.querySelectorAll('.q-tile').classList.remove('.fun');
  }
 if(m==0 && words.length){
    document.getElementById('errmsg').style.display="flex";
    document.querySelector('.faq-tiles').style.display="flex"
    document.querySelector('.q-tiles-container').style.display="none"
    document.querySelectorAll('.q-tile').classList.remove('.fun');
  }
 
  funny();
 
  document.getElementById('errmsg').style.display="none";
}


 function funny(){
   $(".fun").slice(0,9).show();
  
   
 }

function LoadMore(){
   $('#errmsg').hide();
   
    $(".fun:hidden").slice(0,3).show()
 
    
    if($(".fun:hidden").length==0){
      $(".btn3").hide();
      $(".btn2").show();
    }
    
  
}
function delclass(){
  if($('.q-tile').hasClass("fun")){
    $('.q-tile').removeClass("fun");
   }
}
function ShowLess(){
  $(".fun").slice(9,).hide()
  if($(".fun:visible").length==9){
    $(".btn3").show();
      $(".btn2").hide();
  }
}


$(".view").click(function(){
 
  /*$(this).children('p').toggle(
    function(){ $(this).children('p').css({"display": "block"});
    
   
  },
    function(){ $(this).children('p').css({"display": "none"});
  
   
  },
  )*/

  if($(this).parent().children('p').hasClass('answer')==true){
    $(this).parent().children('p').removeClass('answer');
    $(this).parent().removeClass('q-tile');
   $(this).parent().addClass('q-tile-b');
    $(this).text("Hide");
    $(this).parent()
  
  }
  else{
    $(this).parent().children('p').addClass('answer');
    $(this).parent().removeClass('q-tile-b');
   $(this).parent().addClass('q-tile');
   $(this).text("VIEW");
  }
 
 

});







const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');
const title = window.document.title;


$('.fa-share-alt').click(function (){
 
 
  console.log($(this).parent().attr('id'))
  const url = window.document.location.href+"#"+$(this).parent().attr('id');
    if(navigator.share){
    navigator.share({
      
        title:`${title}`,
        url:`${url}`
    }).then(()=>{
        console.log('thanks for sharing')
    }).catch(console.error)
    } else{
       overlay.addClass('show-share');
       shareModal.addClass('show-share')
    }
  
})
              $('.overlay').click(()=>{
                  overlay.classList.remove('show-share')
                  shareModal.classList.remove('show-share')
              })








  /// filter functionality
  /*function filtergeneral(){
    $('.q-tile').hide();
    $('.q-tile.general').show();
  }

  function filterpcos(){
    $('.q-tile').hide();
    $('.q-tile.pcos').show();
  }

  function filterdiab(){
    $('.q-tile').hide();
    $('.q-tile.diabetes').show();
  }

  function filterperiod(){
    $('.q-tile').hide();
    $('.q-tile.menstrual').show();
  }

  function filterdna(){
    $('.q-tile').hide();
    $('.q-tile.dna').show();
  }

  function filterbd(){
    $('.q-tile').hide();
    $('.q-tile.blood-test').show();
  }

  function filterbp(){
    $('.q-tile').hide();
    $('.bp').show();
  }
  function filterif(){
    $('.q-tile').hide();
    $('.q-tile.fasting').show();
  }
  */