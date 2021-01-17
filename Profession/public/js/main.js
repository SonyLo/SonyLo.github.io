$(document).ready(function(){
// arrow animate
        $("#header_section").on("click","a", function (event) {
   
            //отменяем стандартную обработку нажатия по ссылке
    
            event.preventDefault();
  
     
    
          //забираем идентификатор бока с атрибута href
    
          var id  = $(this).attr('href'),
    
          
    
          //узнаем высоту от начала страницы до блока на который ссылается якорь
    
              top = $("#"+id).offset().top;
    
          
    
          //анимируем переход на расстояние - top за 1500 мс
    
          $('body,html').animate({scrollTop: top}, 1500);
    
      });
// arrow animate





    
    });

    $(function () {
      $('#1').hover(sourceSwap, sourceSwap);
     
  });

    var sourceSwap = function () {
      var $this = $(this);
      var newSource = $this.data('alt-src');
      $this.data('alt-src', $this.attr('src'));
      $this.attr('src', newSource);
  }

  


  function onclickFile(){
    $('#file').trigger('click');
  }


 function sendForm(){
  fileInput = document.getElementById('file');
  fileInput.files.length;
  console.log(fileInput.files.length)
  console.log(fileInput.files[0].name)

  //провеврку на то есть ли вообще файл, если есть - загребаем  

 }




 $(document).ready( function () {
  $('#table_id').DataTable();
} );
  
 



  





$('#post_add').on('submit', function(e){
  e.preventDefault()
  alert("Hello")
 
  var formData = new FormData( this)

 
  $.ajax({
      type: 'POST',
      url: '/addPost',
      data:formData,
      processData:false,
      contentType:false,
      success: function(r){
          alert('Успешно добавлено!')
          // document.location.href ='/panel'
      },
      error: function(er){
          console.log(er);
          alert('Упс, что то пошло не так')
      }
  })
})



 
function changeContact(elem, id){
  let newsrc =  document.getElementById(elem).value
  result = confirm("are you sure?");
  if(result){
    $.ajax({
      type: 'POST',
      url: '/UpdateContact',
      data: JSON.stringify({
        newsrc,
        id
      }) ,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      processData:false,
      success: function(r){
          alert('Успешно обновлено!')
          //  document.location.href ='/panel'
      },
      error: function(er){
          console.log(er);
          alert('Упс, что то пошло не так')
      }
  })
  }
  


 
}
