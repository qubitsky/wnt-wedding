// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  _musicCtx: <WechatMiniprogram.InnerAudioContext | null>null,
  data: {
    musicPlaying: false,
    bgImgs: Array.from({ length: 7 }).map((_, i) => `./images/invite_bg${i + 1}.png`)
  },
  onReady() {
    this._musicCtx = wx.createInnerAudioContext({
      useWebAudioImplement: false
    });
    this._musicCtx.src = 'https://win-web-rb01-sycdn.kuwo.cn/efa46d58cf3a7df2c608bcd883002b15/63d93853/resource/n3/87/37/3236922673.mp3';
    this._musicCtx.loop = true;
    this._musicCtx.autoplay = true;
    this._musicCtx.onPlay(() => {
      this.setData({
        musicPlaying: true
      });
    });
    this._musicCtx.onPause(() => {
      this.setData({
        musicPlaying: false
      });
    });
    this._musicCtx.onStop(() => {
      this.setData({
        musicPlaying: false
      });
    });
  },
  handleTapMusic() {
    if (this.data.musicPlaying) {
      this._musicCtx?.pause();
    } else {
      this._musicCtx?.play();
    }
  }

})
