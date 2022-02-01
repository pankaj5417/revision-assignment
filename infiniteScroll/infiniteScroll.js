var infiniteList = document.querySelector('#infinite-list');

var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement('li');
    item.innerText = 'Item ' + nextItem++;
    infiniteList.appendChild(item);
  }
}

infiniteList.addEventListener('scroll', function() {
  if (infiniteList.scrollTop + infiniteList.clientHeight >= infiniteList.scrollHeight) {
    loadMore();
  }
});

loadMore();