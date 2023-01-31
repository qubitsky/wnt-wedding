Component({

  options: {
    virtualHost: true,
  },

  externalClasses: ["root-class"],

  properties: {
    style: String,
    name: String,
    src: String,
    size: Number,
    color: String,
    rpx: Boolean,
  },

  data: {
    imgSrc: "",
    sizeStyle: "",
  },

  observers: {
    "size, rpx": function (size, rpx) {
      const sizeVal = rpx ? `${size * 2}rpx` : `${size}px`;
      this.setData({
        sizeStyle: `width: ${sizeVal}; height: ${sizeVal};`,
      });
    },
    "name, src": function (name, src) {
      this.setData({
        imgSrc: src || `/assets/icons/${name}.svg`,
      });
    },
  },

  methods: {},

});
