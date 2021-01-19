

$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();

    const items1 = $("input#item1").val();
    const items2 = $("input#item2").val();
    const items3 = $("input#item3").val();

    let groceries = [];
    groceries.push(items1, items2, items3 );

    groceries.forEach(function(food) {
      groceries.sort();
    })
    console.log(groceries);
  })
})
