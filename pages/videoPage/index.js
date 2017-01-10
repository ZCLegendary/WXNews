Page({

    data:{

      datas:[],
      hide:false

    },



    onLoad :function() {

      var self = this;
              var url = 'http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&fn=3&passport=JcFEbJV42ahS7jdcT9vZpbA4%2F9KVLFYQL80lbIO6OE1JIqQNgfEC%2FWRVAHVu3xy3rqJv2nCCD2QqQsfBWgSZWQ%3D%3D&devId=Mk119XLnjjUmJ6L3FxYE3ryK4ttyviIGCzbI3myChofd37V%2Fodl6EmNCrUxTtHG2&offset=0&size=30&version=18.0&spever=false&net=wifi&lat=BFUoxL%2F37rMI%2Fv9MpBUrRg%3D%3D&lon=pUmKDmBKaGKeuh74DI4nrQ%3D%3D&ts=1483975657&sign=Evgvdo%2Blfo0JhrbmusywkPe6IIvG%2BTsT0TMucZfhKut48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore';

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
                    console.log(newData.视频);
                    self.setData( {
                      datas: newData.视频,
                    })

                    setTimeout (function () {
                      self.setData({
                      hide: true
                    })
                    }, 500)
                  }
                });

    
    },





    // scrollView EventHandler
        upper: function(e) {
            // console.log(e)
        },
        lower: function(e) {
           console.log(e)
        },
        scroll: function(e) {
           // console.log(e)
           // console.log("哈哈哈哈哈")
        },

         


})