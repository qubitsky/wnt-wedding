/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    statusBarHeight: Number,
    menuButtonHeight: Number,
    navBarHeight: Number,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}