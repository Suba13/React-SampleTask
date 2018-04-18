bubble 

var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];
function bubbleSort(a) {
  var length = a.length;
  for (var i = 0; i < length; i++) { //Number of passes
    for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
      //Compare the adjacent positions
      if(a[j] > a[j+1]) {
        //Swap the numbers
        var tmp = a[j];  //Temporary variable to hold the current number
        a[j] = a[j+1]; //Replace current number with adjacent number
        a[j+1] = tmp; //Replace adjacent number with current number
      }
    }        
  }
}

bubbleSort(a);
console.log(a);


insertion:
function insertion_Sort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}
insertion_Sort(a)
console.log(a);

selection:
function selectionSort(items) {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
		for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
			if (items[j] < items[min]) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers 
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;
		}
	}
}
selectionSort(a)
console.log(a);

merge:
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

mergeSort(a)
console.log(a);

maximumelement:
var a=[7,3,4,8,9]

function maximum(a){
  var len=a.length
  
  for(var i=0;i<len-1;i++){
   var max=i;
    for(var j=i+1;j<len;j++){
      if(a[max]<a[j]){
        max=j
      }
    }
    if(max!=i){
       var tmp=a[i]
       a[i]=a[max]
       a[max]=tmp
       }
    
  }
  console.log(a[0])
}

maximum(a)
console.log(a)

reverse:
function inplaceReverse(arr) {
  var i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
 
}


var arr = [1, 2, 3,4,5,6];
inplaceReverse(arr)
console.log(arr);
