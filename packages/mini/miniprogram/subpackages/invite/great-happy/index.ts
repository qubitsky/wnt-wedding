// subpackages/invite/great-happy/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
    isReady: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {
    const app = getApp();
    const { statusBarHeight } = app.globalData;
    this.setData({
      topBlank: statusBarHeight,
    });
    wx.showLoading({
      title: '加载中'
    })
    wx.getImageInfo({
      src: 'https://qubi-1258193362.cos.ap-shanghai.myqcloud.com/wnt-wedding/photos/IMG_2173.jpg',
      success: (res) => {
        console.log(res);
        wx.hideLoading();
        this.setData({
          isReady: true
        });
      }
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  handleSwiperChange(e: WechatMiniprogram.SwiperChange) {
    const { current } = e.detail;
    this.setData({
      current,
    });
  },
})