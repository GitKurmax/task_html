function alignLastRow() {
  let items = document.getElementsByTagName('article');
  let firstElemInRow = items[0].getBoundingClientRect();
  let lastItem = items[items.length - 1].getBoundingClientRect();

  for (let item of items) {
    item.style.marginLeft = 0;
  }

  for (i = 0; i < items.length; i++) {
    let elem = items[i].getBoundingClientRect();
    if (elem.top === lastItem.top) {
      items[i].style.marginLeft = firstElemInRow.left - 20 + 'px';
      return;
    }  
  }
}

alignLastRow();
window.addEventListener('resize', alignLastRow);

