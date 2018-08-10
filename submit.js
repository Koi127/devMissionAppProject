var airtable_list_url = 'https://api.airtable.com/v0/appisAbJHpn3g39kj/Table%201?api_key=keypj4V7NjedBWVpK';

$("#form").on('submit', function(e){
    var inputVal= $("#input").val();
  e.preventDefault();
  var data = {};
  data.fields = {
    'To Do': $(this).find('#input').val(),
  };
  $.post(`https://api.airtable.com/v0/appisAbJHpn3g39kj/Table%201?api_key=keypj4V7NjedBWVpK`,
    data, function () {
      // On Success
      $("#text").append(`<h3>`+ inputVal +`<h3>`);
      $("#input").val("");
    }
  );
});

$(document).on('change',".check",function(){
  console.log("hit");
  var completed = false;
  if($(this).val() == 'on') {
    completed = true;
}
var id = $(this).attr("id");
var data = {};
data.fields = {
  'completed':completed,
};
console.log(data);

  $.ajax(
    {
      method: "PATCH",
      url: `https://api.airtable.com/v0/appisAbJHpn3g39kj/Table%201/${id}?api_key=keypj4V7NjedBWVpK`,
      data: data,
      sucess: function (data) {
        console.log(data);
      }
    });
});

var cardTemplate = function(id,toDo) {
    return `
    <div class="container">
      <input class="check" id="${id}" type="checkbox">
      <span id="checkmark"></span>
      <h1 class="itemList">${toDo}<h1>
      </div>`;
    }

$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      console.log(val.fields)
      var toDo = val.fields['To Do'];
      var id = val.id;
      var html = cardTemplate(id,toDo);
      items.push(html);

    });
    $("#text").append(items.join(''));
  });