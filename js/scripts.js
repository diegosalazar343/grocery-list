

$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    //$("#formButton").click(function(){
      //$("#groceryList").toggle();
    event.preventDefault();

    const items1 = $("input#item1").val();
    const items2 = $("input#item2").val();
    const items3 = $("input#item3").val();

    let groceries = [];
    groceries.push(items1, items2, items3 );

    groceries.forEach(function(food) {
      groceries.sort();
    })

    const upperCaseGroceries = groceries.map(groceries => groceries.toUpperCase());

    console.log(upperCaseGroceries);
    $('#list').show();
    $('#groceryList').hide();
    });
  });
});
