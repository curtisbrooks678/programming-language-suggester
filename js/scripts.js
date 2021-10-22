

$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    const ans1 = $("input:radio[name=color]:checked").val();
    const ans2 = $("input:radio[name=weather]:checked").val();
    const ans3 = $("input:radio[name=music]:checked").val();
    const ans4 = $("input:radio[name=dessert]:checked").val();
    const ans5 = $("input:radio[name=vegetable]:checked").val();


    let ruby;
    let csharp;
    let javascript;



    $("#output").text(result);
  });
});


// if (javascript === ruby && javascript > csharp && ruby > csharp) {
//   alert("Javascript and Ruby");
// }
// if (javascript === ruby && javascript === csharp) {
//   alert("Three way tie");
// }