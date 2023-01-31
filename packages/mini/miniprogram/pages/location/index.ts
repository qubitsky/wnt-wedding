const HOTEL_INFO = {
  name: "安福文山大酒店",
  address: "江西省吉安市安福县武功山大道与安成南路交汇处西南角金岸广场",
};

const HOTEL_POS = {
  latitude: 27.382407,
  longitude: 114.6164,
};

const HOTEL_AREA = [
  // 左下顶点
  {
    latitude: 27.382273,
    longitude: 114.615997,
  },
  // 右下顶点
  {
    latitude: 27.382188,
    longitude: 114.61644,
  },
  // 右上顶点
  {
    latitude: 27.382566,
    longitude: 114.616651,
  },
  {
    latitude: 27.382619,
    longitude: 114.616462,
  },
  {
    latitude: 27.382496,
    longitude: 114.616017,
  },
];

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
    hotelPics: Array.from({ length: 6 }).map((_, i) => `/assets/images/wenshang_hotel_${i + 1}.jpeg`),
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
