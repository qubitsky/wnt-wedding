let timer: ReturnType<typeof setInterval> = 0;

Component({

  options: {
    virtualHost: true,
  },

  externalClasses: ["root-class"],

  properties: {
    target: Number,
  },

  data: {
    timeLeft: {
      days: "--",
      hours: "--",
      minutes: "--",
      seconds: "--",
    },
  },

  observers: {
    target: function (target) {
      if (timer) {
        clearInterval(timer);
        timer = 0;
      }
      timer = setInterval(() => {
        const diff = target - Date.now();
        if (diff < 1000) {
          this.setData({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
          });
          clearInterval(timer);
          timer = 0;
          return;
        }
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        this.setData({
          timeLeft: {
            days: String(days).padStart(2, "0"),
            hours: String(hours % 24).padStart(2, "0"),
            minutes: String(minutes % 60).padStart(2, "0"),
            seconds: String(seconds % 60).padStart(2, "0"),
          }
        })
      }, 1000);
    },
  },

  methods: {},
});
