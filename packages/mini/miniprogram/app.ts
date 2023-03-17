// app.ts
App<IAppOption>({
  globalData: {
    statusBarHeight: 0,
    menuButtonHeight: 0,
    navBarHeight: 0,
  },
  onLaunch() {
    const { statusBarHeight, platform } =
      wx.getSystemInfoSync();
    const { top, height } = wx.getMenuButtonBoundingClientRect();

    const globalData = this.globalData;
    globalData.statusBarHeight = statusBarHeight;
    globalData.menuButtonHeight = height || 32;

    // 判断胶囊按钮信息是否成功获取
    if (top && height) {
      globalData.navBarHeight = (top - statusBarHeight) * 2 + height;
    } else {
      globalData.navBarHeight = platform === 'android' ? 48 : 40;
    }
  },
})