// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript

//Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr) {
  function sortowanko(a, b) {
        return a-b;
  }

  const tab = arr.sort(sortowanko);
  //console.log(tab);
  const dlugosc = tab.length - 1;
  
  console.log([tab[0], tab[dlugosc]]);
}

//getMinMax([1]); //[1,1];
//getMinMax([1, 2]); //[1,2];

getMinMax( [2,1,13,44,22,62,101,213,432,543,213,43,122,3,4,7,9,0] ); //[1,2];