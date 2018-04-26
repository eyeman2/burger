

$(function () {
 
  $(".fav").on("click", function (event) {
    event.preventDefault()
    var id = $(this).data("id");

console.log("id" + id)
    var newlikeIt = { listIt: true }
    console.log("my favorite")
    $.ajax("/api/names/" + id, {
      type: "PUT",
      data: newlikeIt
    }).then(
      function () {

        location.reload();
      }
    );
  });

  $(".notfav").on("click", function (event) {
    event.preventDefault()
    var id = $(this).data("id");

console.log("id" + id)
    var newlikeIt = { listIt: false }
    console.log("my favorite")
    $.ajax("/api/names/" + id, {
      type: "PUT",
      data: newlikeIt
    }).then(
      function () {
       location.reload();
      }
    );
  });

$("#addOn").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  // var id = $(this).data("name")
  var newName = $("#babe").val().trim();
  var nameupdate = {name: newName}
  console.log(nameupdate);
  // name: newName
  
  // Send the POST request.
  $.ajax("/api/names", {
    type: "POST",
    data: nameupdate
  }).then(
    function () {
      
      location.reload();
    }
  );
});
});
//$(".delete-cat").on("click", function(event) {
 //   var id = $(this).data("id");

    // Send the DELETE request.
//    {{!-- $.ajax("/api/cats/" + id, {
//      type: "DELETE"
////    }).then(
//      function() {
//        console.log("deleted cat", id); --}}
        // Reload the page to get the updated list
//        location.reload();
//      }
//    );
//  });
