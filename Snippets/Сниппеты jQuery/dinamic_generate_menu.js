//Создание динамических меню

/*
Создание  динамичных выпадающих меню любого типа, включая  нумерованные списки ordered lists, 
ненумерованные списки unordered lists и select... Это очень простой скрипт с большим потенциалом.
*/



/*
Применение: 
// Dropdown select month
makeMenu(
  ['January:JAN', 'February:FEB', 'March:MAR'], // item:value
  ['select', 'option']
);
// List of groceries
makeMenu(
  ['Carrots', 'Lettuce', 'Tomatos', 'Milk'],
  ['ol', 'li']
);
*/




function makeMenu(items, tags) {

  tags = tags || ['ul', 'li']; // default tags
  var parent = tags[0];
  var child = tags[1];

  var item, value = '';
  for (var i = 0, l = items.length; i < l; i++) {
    item = items[i];
    // Separate item and value if value is present
    if (/:/.test(item)) {
      item = items[i].split(':')[0];
      value = items[i].split(':')[1];
    }
    // Wrap the item in tag
    items[i] = '<'+ child +' '+
      (value && 'value="'+value+'"') +'>'+ // add value if present
        item +'</'+ child +'>';
  }
  return '<'+ parent +'>'+ items.join('') +'</'+ parent +'>';
