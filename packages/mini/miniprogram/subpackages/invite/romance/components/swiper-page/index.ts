Component({

  options: {
    virtualHost: true,
  },

  externalClasses: ["root-class", "body-class"],

  properties: {

  },

  data: {
    topBlank: 60
  },

  lifetimes: {
    attached() {
      const app = getApp();
      const { navBarHeight, statusBarHeight } = app.globalData;
      this.setData({
        topBlank: navBarHeight + statusBarHeight,
      });
    }
  },

  methods: {

  }
})
