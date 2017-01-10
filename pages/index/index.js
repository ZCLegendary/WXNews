

var currentPage = 0;
var loadType = 0;
var dataArr;

Page({

    data:{
//body
     datas: [],
//modal     
     modalHidden: true,
//loading
     hide: false,     
//data end
    },


    //view load
    onLoad :function() {

    //http://c.m.163.com//nc/article/headline/T1348648037603/0-20.html
    loadType = 0;
    this.getContentData();
    
    },

    // scrollView EventHandler
        upper: function(e) {
            // console.log(e)
        },
        lower: function(e) {
           console.log(e)
          //  currentPage += 10;
          //  loadType = 1;
          //   this.setData({
          //   hide: false
          // })
          //  this.getContentData();
          
        },
        scroll: function(e) {
           // console.log(e)
           // console.log("哈哈哈哈哈")
        },

      //modal changed
         modalChange: function(e) {
          this.setData({
            modalHidden: true
          })},



          getContentData :function () {

              var self = this;
              var number = 10+currentPage;
              //var url = 'http://c.m.163.com//nc/article/headline/T1348647853363/' +currentPage+ '-' + number +'.html';
              var url = 'http://c.m.163.com//nc/article/headline/T1348647853363/0-40.html' 
              console.log(url);
            //network request
            wx.request( {
                  url: url,
                  header: {
                    "Content-Type": "application/json"
                  },
                  method: "GET",
                  data: {
                    
                  },
                  success: function( res ) {
                    //get data 
                    var newData = res.data;
                    dataArr = newData.T1348647853363;
                    // if (!loadType) {
                    //   console.log(dataArr)
                    // } else {
                    //   var tempArr = newData.T1348647853363;
                    //   for (var i = 0; i < tempArr.count-1; i++) {
                    //     dataArr.push(tempArr[i]);
                    //   }
                      console.log(dataArr)
                    // }

                    self.setData( {
                      datas: dataArr,
                    })
                    
                    // console.log(self.data.image_one)
                    // self.update()

                    setTimeout (function () {
                      self.setData({
                      hide: true
                    })
                    }, 500)
                  }
                });
    }


})



