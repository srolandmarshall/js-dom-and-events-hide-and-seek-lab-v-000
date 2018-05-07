function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0]
}

function nestedTarget(){
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n){
  let ranks = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML)+n;
  }
}

function deepestChild(selector){
  let child = document.getElementById('grand-node');

  while (child.querySelector('div')) {
    child = child.querySelector('div');
  }

  return child;
}
