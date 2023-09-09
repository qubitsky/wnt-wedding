// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    bgImgs: [
      'https://qnm.hunliji.com/FpPJ6C7JbcWbaTRrzPkFnvQr8pSu?imageView2/2/format/webp/w/1284'
    ]
  },
  handleTapCover() {
    wx.navigateTo({
      url: `/subpackages/invite/great-happy/index`
    });
  },

})
