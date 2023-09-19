import { HOTEL_POS, HOTEL_AREA } from '../../../../consts/index';

const INIT_MARKER = {
  id: 1,
  iconPath: "./images/Marker1_Activated@3x.png",
  width: "34px",
  height: "34px",
  ...HOTEL_POS,
};

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

  /**
   * Component methods
   */
  methods: {

  }
})