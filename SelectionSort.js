function selectionSort( arr, sort = defaultCompare){
    let length = arr.length;
    for(i =0; i < length; i++){
        min = i
        for(j = i + 1; j<length; j++){
            if(sort(arr[min], arr[j])){
                min = j;
            }
        }
        if(min!=i){
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function defaultCompare(a,b){
    if(a > b){
        return 1;
    }
    else{
        return 0;
    }
}