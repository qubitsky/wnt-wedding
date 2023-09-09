// subpackages/invite/great-happy/page-cover/index.ts
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },
  lifetimes: {
    attached() {
      const app = getApp();
      const { statusBarHeight } = app.globalData;
      this.setData({
        topBlank: statusBarHeight + 10,
      });
    }
  },
  /**
   * Component methods
   */
  methods: {

  }
})
