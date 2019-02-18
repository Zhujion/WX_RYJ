//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎小祖宗！！！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    motto_No1:"Your practical jokes",
    motto_No2: "I was deliberately move",
    motto_No3: "Because I want to see your smile",
    motto_Name:"—— RYJ"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
  },
  zhujia: function (){
    // 提示框
   
    wx.showActionSheet({
      itemList: ['你不喜欢我', '你喜欢我', '走开'],
      success: function (res) {
        console.log(res.tapIndex)
        switch (res.tapIndex) {
          case 0:
            wx.showToast({
              title: '不，你喜欢',
              icon: 'success',
              duration: 2000
            })
            break;
          case 1:
            wx.showToast({
              title: '我也喜欢你',
              icon: 'success',
              duration: 2000
            })
            break;
          case 2:
            wx.showToast({
              title: '一定喜欢我',
              icon: 'success',
              duration: 2000
            })
            break;
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '我喜欢你！',
          icon: 'success',
          duration: 2000
        })
      }
    })
    //this.zhujia();
  },
  // 初次 渲染启动
  onReady: function () {
    // const back = wx.getBackgroundAudioManager();
    // back.src = "http://music.163.com/song/media/outer/url?id=38574742.mp3";
    // back.title = "你知道嘛！？";
    // back.coverImgUrl = "../../image/RYJ/NO_1.jpg";
    // back.play();
    // back.onPlay(() => {
    //   console.log("音乐播放开始");
    // })
    // back.onEnded(() => {
    //   console.log("音乐播放结束");
    // })
    // this.zhujia();
  }
})