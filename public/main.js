$("#submit").on("click", function() {
  const quest1 = $("#q1").val();
  const quest2 = $("#q2").val();
  const quest3 = $("#q3").val();
  const quest4 = $("#q4").val();
  const quest5 = $("#q5").val();
  const quest6 = $("#q6").val();
  const quest7 = $("#q7").val();
  const quest8 = $("#q8").val();
  const quest9 = $("#q9").val();
  const quest10 = $("#q10").val();
  const name = $("#name").val();
  const photo = $("#photo").val();

  const data = {
    name: name,
    photo: photo,
    scores: [
      quest1,
      quest2,
      quest3,
      quest4,
      quest5,
      quest6,
      quest7,
      quest8,
      quest9,
      quest10
    ]
  };

  $.post("/api/friends", data, function(data) {
    console.log(data);

    $(".mal").show();
    $("#resultsname").text(data.name);
    $("#resultspic").attr("src", data.photo);
  });
});

$("#close").on("click", function() {
  $(".modal").hide();
});
