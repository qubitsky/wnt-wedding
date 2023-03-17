Page({
  data: {
    current: 0,
  },

  handleSwiperChange(e: WechatMiniprogram.SwiperChange) {
    const { current } = e.detail;
    this.setData({
      current,
    });
  },
});
