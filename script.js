function alignLastRow() {
  let items = document.getElementsByTagName('article');
  let container = document.getElementsByTagName('main');
  let containerCoords = container[0].getBoundingClientRect();
  let firstElemInRow = items[0].getBoundingClientRect();
  let lastElemInRow;
  let itemCoords;
  let margin;

  for (let i = 1; i < items.length; i++) {
    itemCoords = items[i].getBoundingClientRect();
    if(itemCoords.top !== firstElemInRow.top){
      lastElemInRow = items[i-1];
      let lastElemInRowCoords = lastElemInRow.getBoundingClientRect();
      margin = document.body.clientWidth - (lastElemInRowCoords.right + 20 - firstElemInRow.left);
      if (margin > 120) {
        margin = 0;
      }
      container[0].style.marginLeft = margin/2 + 'px';
      return;
    }
  }
}

alignLastRow();
window.addEventListener('resize', alignLastRow);
