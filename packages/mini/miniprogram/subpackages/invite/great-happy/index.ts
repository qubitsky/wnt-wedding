// subpackages/invite/great-happy/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
    current: 0,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    const app = getApp();
    const {  statusBarHeight } = app.globalData;
    this.setData({
      topBlank: statusBarHeight,
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

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