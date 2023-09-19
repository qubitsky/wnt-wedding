// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    bgImgs: [
      '/assets/images/marginalia-man-and-woman-near-wedding-arch.png'
    ]
  },
  handleTapCover() {
    wx.navigateTo({
      url: `/subpackages/invite/great-happy/index`
    });
  },

})
