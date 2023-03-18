import { mockData } from "../../../../../utils/mock";

Component({
  properties: {
    active: Boolean,
  },

  lifetimes: {
    ready(this: any) {
      this.initBarrage();
      this.timeoutOpenBarrage();
    },
  },

  observers: {
    active(this: any, v) {
      if (v) {
        this.timeoutOpenBarrage();
      } else {
        this.closeBarrage();
      }
    },
  },

  methods: {
    initBarrage(this: any) {
      const barrageComp = this.selectComponent(".barrage");
      this._barrage = barrageComp.getBarrageInstance({
        font: "12px system-ui",
        duration: 50,
        lineHeight: 2,
        mode: "separate",
        // tunnelShow: true,
        safeGap: 20,
      });
    },
    timeoutOpenBarrage(this: any) {
      this._openTimer = setTimeout(() => {
        if (!this.data.active) return;
        this.openBarrage();
      }, 3000);
    },
    openBarrage(this: any) {
      if (!this._barrage || this._isBarrageOpen) return;
      this._barrage.open();
      const self = this;
      this._barrageTimer = setTimeout(function addData() {
        const data = mockData(5);
        self._barrage.addData(data);
        self._barrageTimer = setTimeout(addData, 3000);
      }, 0);
      this._isBarrageOpen = true;
    },
    closeBarrage(this: any) {
      if (!this._barrage || !this._isBarrageOpen) return;
      clearTimeout(this._barrageTimer);
      this._barrage.close();
      this._isBarrageOpen = false;
    },
    handleTouchEnd(this: any) {
      this.timeoutOpenBarrage();
    }
  },
});
