// 分頁訊息 1,首頁 2,,
let  pageIndex = {
    index :103,

    setIndex:function(index){
      this.index = index
      console.log(`now index value is:${pageIndex.index}`)
    }
};

export{pageIndex}
