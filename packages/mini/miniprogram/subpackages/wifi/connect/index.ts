Page({
  /**
   * 页面的初始数据
   */
  data: {
    ssid: "",
    bssid: "",
    password: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({ ssid, bssid = "", password }) {
    this.setData({
      ssid,
      bssid,
      password,
    });
  },

  /**
   * 点击连接按钮触发
   */
  handleTapConnect: function () {
    const that = this;
    that.startWiFi();
  },

  /**
   * 加载WiFi模块
   */
  startWiFi: function () {
    const that = this;
    wx.showLoading({
      title: "请稍等...",
    });
    wx.startWifi({
      complete: () => {
        that.connect();
      },
    });
  },

  /**
   * 连接WiFi
   */
  connect: function () {
    const that = this;
    wx.connectWifi({
      SSID: that.data.ssid,
      BSSID: that.data.bssid,
      password: that.data.password,
      success: () => {
        wx.showToast({
          title: "WiFi连接成功",
        });
      },
      fail: (res) => {
        that.errorDialog(res);
      },
    });
  },

  /**
   * 连接失败弹窗
   * @param {错误返回} res
   */
  errorDialog: function (res: { errMsg: any }) {
    const that = this;
    wx.showModal({
      title: "连接失败",
      content: res.errMsg,
      confirmText: "复制密码",
      success(res) {
        if (res.confirm) {
          that.copyPassword();
        } else if (res.cancel) {
          console.log("cancel");
        }
      },
      fail(res) {
        wx.showToast({
          title: res.errMsg,
        });
      },
    });
  },

  /**
   * 复制密码到剪贴板
   */
  copyPassword: function () {
    const that = this;
    wx.setClipboardData({
      data: that.data.password,
      success() {
        wx.getClipboardData({
          success(res) {
            console.log(res.data);
          },
        });
      },
    });
  },
});
