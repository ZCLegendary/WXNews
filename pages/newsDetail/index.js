
var WxParse = require('../../wxParse/wxParse.js');

Page({

  data: {
  },

onLoad: function(options) {
    
    //http://c.m.163.com/nc/article/CADGA4VH0001875N/full.html
    var self = this;
    var optionId = options.id;
    console.log(optionId);
    wx.request( {
      url: 'http://c.m.163.com/nc/article/' +optionId+ '/full.html',
      header: {
        "Content-Type": "application/json"
      },
      method: "GET",
      data: {
        
      },
      success: function( res ) {
        console.log(optionId);
        var data = res.data[optionId];
        var imgInfoArr = res.data[optionId].img;

        //替换标签中特殊字符
        var infoFlg = "<!--SPINFO#0-->";
        var imgFlg = "<!--IMG#";
        var title = " <p style=\"margin:15px 15px; line-height: 20px;\"> " + res.data[optionId].title + "</p>";
        var source = " <p style=\"margin:15px 15px; font-size: 14px; color:darkgray \">来源于: " + res.data[optionId].source + "</p>";
        var content = "<div style=\"margin:10px; line-height:25px; font-weight:200; font-size:17px; color:black; word-break:normal\">" + res.data[optionId].body + "</div>";

         //替换标签中特殊字符
        var infoFlg = "<!--SPINFO#0-->";
        if (content.indexOf(infoFlg) > 0) {
         content = content.replace(/<!--SPINFO#0-->/, "");
        }

        var imgFlg = "<!--IMG#";
        //图片数量
        var imgCount = (content.split(imgFlg)).length-1; 
        if (imgCount > 0) {
          console.log("有dd" + imgCount + "张图片");  
          
          for (var i = 0; i < imgCount; i++) {
            var imgStr = "<!--IMG#" + i + "-->";
            var imgSrc = "\"" + imgInfoArr[i].src + "\""; 
            var imgHTML = "<div> <img style=\"width:100%\" src=" +imgSrc+ "> </div>";
            content = content.replace(imgStr, imgHTML);
          }
        }

        var article = title + source + content ;
        WxParse.wxParse('article', 'html', article, self,imgCount);


        setTimeout (function () {
          self.setData({
          hide: true
        })
        }, 500)
      }
    });
}



})