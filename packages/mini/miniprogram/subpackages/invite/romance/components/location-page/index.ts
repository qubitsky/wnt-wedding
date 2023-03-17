import { HOTEL_INFO, HOTEL_POS, HOTEL_AREA } from "../../../../../consts/index";

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
    map: {
      pos: HOTEL_POS,
      polygons: [
        {
          points: HOTEL_AREA,
          strokeWidth: 1,
          strokeColor: "#3875FF",
        },
      ],
      markers: [{
        id: 1,
        width: '24px',
        height: '34px',
        ...HOTEL_POS,
        callout: {
          content: HOTEL_INFO.name,
          padding: 5,
          borderRadius: 4,
          display: 'ALWAYS',
          textAlign: 'center',
        }
      }]
    }
  },

  /**
   * Component methods
   */
  methods: {

  }
})
