describe("Selection sort", function(){
    it("Only positive numbers", function(){
        assert.deepEqual(selectionSort([4,2,2]), [2,2,4]);
    })
    it("Negative numbers", function(){
        assert.deepEqual(selectionSort([4,2,-3]), [-3,2,4]);
    })
    it("Repeat numbers", function(){
        assert.deepEqual(selectionSort([4,2,2,3]), [2,2,3,4]);
    })
    it("Using custom sort", function(){
        assert.deepEqual(selectionSort([1, 2, 3, 4], customSort), [4, 3, 2, 1])
    })
})

function customSort(a,b){
    if(a<b){
        return 1;
    }else{
        return 0;
    }
}