// $( document ).ready(function(){  
//   var airtable_list_url = 'https://api.airtable.com/v0/appisAbJHpn3g39kj/Table%201?api_key=keypj4V7NjedBWVpK';
//   //this url is from airtable's authentication section including the API key


//   var cardTemplate = function(name, picture) {
//     return `
//       <div id="whole_card" class="card col-sm-8">
//         <img src="${picture}" class="card-img-top" id="koi_fish"alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${name}</h5>
//           <a href="second_page.html" id="start_button" class="button btn btn-primary"><span>Start</span></a>
//         </div>
//       </div>`;
//     }

//   $.getJSON( airtable_list_url, function( data ) {
//     var items = [];
//     $.each( data.records, function( key, val ) {
//       console.log(val.fields)
//       var name = val.fields['Name'];
//       var picture = val.fields['Picture'] ? val.fields['Picture'][0].url : null;
//       var html = cardTemplate(name, picture);
//       items.push(html);

//     });
//     $(".list-view").append(items.join(''));
//   });

// });