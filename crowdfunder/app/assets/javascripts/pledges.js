

$(function(){
    $('#pledge >li > a').on('click', function(eventObject){
      console.log("clicked")
      eventObject.preventDefault();
      $.ajax({
      url: $(this).attr('href'),
      method: 'get',
      data: {},
      dataType: 'json'
    }).done(function(responseData) {
      console.log("hello")
    }).fail(function(){
      console.log("fail");
    })
    });
});


$(function(){
    console.log("works");
});