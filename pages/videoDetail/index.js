Page({

  data: {
    play_url: ""
  

  },

onLoad: function(options) {
    
    //http://c.m.163.com/nc/article/CAAR120K0001875P/full.html
    var self = this;
    var optionId = options.id;
    this.setData ({
      play_url:optionId
    })
    console.log(optionId);
    
}



})