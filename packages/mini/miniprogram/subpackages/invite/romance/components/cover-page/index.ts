import { mockData } from "../../../../../utils/mock";

Component({
  properties: {
    active: Boolean,
  },

  lifetimes: {
    ready(this: any) {
      // this.initBarrage();
      // if (this.data.active && !this._isBarrageOpen) {
      //   this.openBarrage();
      // }
    },
  },

  observers: {
    // active(v) {
    //   if (v) {
    //     this.openBarrage();
    //   } else {
    //     this.closeBarrage();
    //   }
    // },
  },

  methods: {
    initBarrage(this: any) {
      const barrageComp = this.selectComponent(".barrage");
      this._barrage = barrageComp.getBarrageInstance({
        font: "12px system-ui",
        duration: 30,
        lineHeight: 2,
        mode: "separate",
        tunnelShow: true,
        safeGap: 20,
      });
    },
    openBarrage(this: any) {
      if (!this._barrage || this._isBarrageOpen) return;
      this._barrage.open();
      const self = this;
      this._barrageTimer = setTimeout(function addData() {
        const data = mockData(10);
        self._barrage.addData(data);
        self._barrageTimer = setTimeout(addData, 3000);
      }, 3000);
      this._isBarrageOpen = true;
    },
    closeBarrage(this: any) {
      if (!this._barrage || !this._isBarrageOpen) return;
      clearTimeout(this._barrageTimer);
      this._barrage.close();
      this._isBarrageOpen = false;
    },
  },
});
