import { HOTEL_INFO, HOTEL_POS, HOTEL_AREA } from "../../../consts/index";

Page({
  _musicCtx: <WechatMiniprogram.InnerAudioContext | null>null,

  data: {
    targetDate: new Date(2023, 11, 2).getTime(),
    paddingTop: 0,
    musicPlaying: false,
    fireworkGifs: [],
    pos: HOTEL_POS,
    polygons: [
      {
        points: HOTEL_AREA,
        strokeWidth: 1,
        strokeColor: "#3875FF",
      },
    ],
    markers: [{
      id: 1,
      width: '34px',
      height: '34px',
      ...HOTEL_POS,
      callout: {
        content: HOTEL_INFO.name,
        padding: 5,
        borderRadius: 4,
        display: 'ALWAYS',
        textAlign: 'center',
      }
    }]
  },
  onLoad() {
    const app = getApp();
    const { navBarHeight, statusBarHeight } = app.globalData;
    this.setData({
      paddingTop: navBarHeight + statusBarHeight,
    });
  },
  onReady() {
    this._fwGifPlay();
    this._musicCtx = wx.createInnerAudioContext({
      useWebAudioImplement: false,
    });
    this._musicCtx.src =
      "https://win-web-rb01-sycdn.kuwo.cn/efa46d58cf3a7df2c608bcd883002b15/63d93853/resource/n3/87/37/3236922673.mp3";
    this._musicCtx.loop = true;
    // this._musicCtx.autoplay = true;
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
  },
  _gifIndex: 0,
  _fwGifPlay() {
    this.setData({
      [`fireworkGifs[${this
        ._gifIndex++}]`]: `./images/firework${this._gifIndex}.gif`,
    });
    if (this._gifIndex < 3) {
      setTimeout(() => {
        this._fwGifPlay();
      }, 1000);
    }
  },
  handleTapMusic() {
    if (this.data.musicPlaying) {
      this._musicCtx?.pause();
    } else {
      this._musicCtx?.play();
    }
  },
});
