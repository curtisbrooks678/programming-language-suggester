

$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();

    const ans1 = $("input:radio[name=color]:checked").val();
    const ans2 = $("input:radio[name=weather]:checked").val();
    const ans3 = $("input:radio[name=music]:checked").val();
    const ans4 = $("input:radio[name=dessert]:checked").val();
    const ans5 = $("input:radio[name=vegetable]:checked").val();

    let ruby = 0
    let csharp = 0;
    let javascript = 0;

    if (ans1 === "red") {
      ruby += 1;
    } else if (ans1 === "yellow") {
      csharp += 1;
    } else if (ans1 === "blue") {
      javascript += 1;
    } else {
      alert("Error: Please select an option for the first question.");
    }

    if (ans2 === "sunny") {
      ruby += 1;
    } else if (ans2 === "rainy") {
      csharp += 1;
    } else if (ans2 === "snowy") {
      javascript += 1;
    } else {
      alert("Error: Please select an option for the second question.");
    }

    if (ans3 === "classical") {
      ruby += 1;
    } else if (ans3 === "rock") {
      csharp += 1;
    } else if (ans3 === "bossa-nova") {
      javascript += 1;
    } else {
      alert("Error: Please select an option for the third question.");
    }

    if (ans4 === "ice-cream") {
      ruby += 1;
    } else if (ans4 === "cake") {
      csharp += 1;
    } else if (ans4 === "cookies") {
      javascript += 1;
    } else {
      alert("Error: Please select an option for the fourth question.");
    }

    if (ans5 === "broccoli") {
      ruby += 1;
    } else if (ans5 === "kale") {
      csharp += 1;
    } else if (ans5 === "carrots") {
      javascript += 1;
    } else {
      alert("Error: Please select an option for the fifth question.");
    }

    if (ruby > csharp && ruby > javascript) {
      result = "Ruby";
    } else if (csharp > ruby && csharp > javascript) {
      result = "C#";
    } else if (javascript > ruby && javascript > csharp) {
      result = "Javascript";
    } else if (ruby === csharp && ruby > javascript && csharp > javascript) {
      result = "Ruby and C#";
    } else if (csharp === javascript && csharp > ruby && javascript > ruby) {
      result = "C# and Javascript";
    } else if (javascript === ruby && javascript > csharp && ruby > csharp) {
      result = "Javascript and Ruby";
    } else {
      alert("User Error");
    }
    
    $("#result-here").text(result);
    $("#output").show();
  });
});