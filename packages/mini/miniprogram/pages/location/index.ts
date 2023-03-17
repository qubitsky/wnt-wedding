import { HOTEL_INFO, HOTEL_POS, HOTEL_AREA } from '../../consts/index'

const INIT_MARKER = {
  id: 1,
  callout: {
    content: HOTEL_INFO.name,
    padding: 6,
    fontSize: 14,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#3875FF",
    bgColor: "#ffffff",
    display: "ALWAYS",
  },
  iconPath: "./images/Marker1_Activated@3x.png",
  width: "34px",
  height: "34px",
  ...HOTEL_POS,
};

Page({
  _mapCtx: <WechatMiniprogram.MapContext | null>null,

  data: {
    hotelInfo: HOTEL_INFO,
    hotelPics: Array.from({ length: 6 }).map((_, i) => `https://qubi-1258193362.cos.ap-shanghai.myqcloud.com/wnt-wedding/wenshang_hotel_${i + 1}.jpeg`),
    scale: 15.8,
    enableSatellite: false,
    pos: HOTEL_POS,
    polygons: [
      {
        points: HOTEL_AREA,
        strokeWidth: 1,
        strokeColor: "#3875FF",
      },
    ],
    markers: [
      {
        ...INIT_MARKER,
      },
    ],
  },

  onReady() {
    this._mapCtx = wx.createMapContext('hotel-map');
  },

  handleZoomIn() {
    this.setData({
      scale: Math.min(20, this.data.scale + 1)
    });
  },

  handleZoomOut() {
    this.setData({
      scale: Math.max(3, this.data.scale - 1)
    });
  },

  handleTapThumb(e: WechatMiniprogram.CustomEvent) {
    const { url } = e.currentTarget.dataset;
    const { hotelPics } = this.data;
    wx.previewImage({
      current: url,
      urls: hotelPics
    });
  },

  handleGuide() {
    this._mapCtx?.openMapApp({
      ...HOTEL_POS,
      destination: HOTEL_INFO.name
    });
  },

  handleTapLayer() {
    const {enableSatellite} = this.data;
    this.setData({
      scale: enableSatellite ? 15.8 : 15.7,
      enableSatellite: !enableSatellite
    });
  },

});
