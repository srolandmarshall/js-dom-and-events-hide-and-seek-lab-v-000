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
  let node = document.getElementById('grand-node');

  while (node.querySelector('div')) {
    node = node.querySelector('div');
  }
  
  return node;
}
