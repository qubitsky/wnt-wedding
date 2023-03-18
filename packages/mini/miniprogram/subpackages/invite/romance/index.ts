Page({
  _musicCtx: <WechatMiniprogram.InnerAudioContext | null>null,
  _musicTimer: 0,

  data: {
    current: 0,
    musicPlaying: false,
  },
  
  onReady() {
    this.initMusic();
  },

  onUnload() {
    clearTimeout(this._musicTimer);
    this._musicCtx?.stop();
  },

  initMusic() {
    this._musicCtx = wx.createInnerAudioContext({
      useWebAudioImplement: false,
    });
    this._musicCtx.src = "https://qubi-1258193362.cos.ap-shanghai.myqcloud.com/wnt-wedding/pink_sea.mp3";
    this._musicCtx.loop = true;
    this._musicCtx.onPlay(() => {
      this.setData({
        musicPlaying: true,
      });
    });
    this._musicCtx.onPause(() => {
      this.setData({
        musicPlaying: false,
      });
    });
    this._musicCtx.onStop(() => {
      this.setData({
        musicPlaying: false,
      });
    });
    this._musicTimer = setTimeout(() => {
      this._musicCtx?.play();
    }, 1000);
  },

  handleTapMusic() {
    if (this.data.musicPlaying) {
      this._musicCtx?.pause();
    } else {
      this._musicCtx?.play();
    }
  },

  handleSwiperChange(e: WechatMiniprogram.SwiperChange) {
    const { current } = e.detail;
    this.setData({
      current,
    });
  },
});
