// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    bgImgs: Array.from({length: 7}).map((_, i) => `./images/invite_bg${i + 1}.png`)
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

})
