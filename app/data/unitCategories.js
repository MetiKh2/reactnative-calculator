/* eslint-disable prettier/prettier */
const units = [
  {
    key: 0,
    value: 'Area',
    items: [
      {
        title: 'Acres',
        symbol: 'ac',
        scale: 1,
      },
      {
        title: 'Ares',
        symbol: 'a',
        scale: 0.0247105381,
      },
      {
        title: 'Hectares',
        symbol: 'ha',
        scale: 2.4710538147,
      },
      {
        title: 'Square centimeters',
        symbol: 'cm²',
        scale: 2.47105381e-8,
      },
      {
        title: 'Square feet',
        symbol: 'ft²',
        scale: 0.0000229568,
      },
      {
        title: 'Square inches',
        symbol: 'in²',
        scale: 1.59422508e-7,
      },
      {
        title: 'Square metres',
        symbol: 'm²',
        scale: 0.0002471054,
      },
    ],
  },
  {
    key: 1,
    value: 'Length',
    items: [
      {
        title: 'Millimeters',
        symbol: 'mm',
        scale: 1,
      },
      {
        title: 'Centimeters',
        symbol: 'cm',
        scale: 10,
      },
      {
        title: 'Metres',
        symbol: 'm',
        scale: 1000,
      },
      {
        title: 'Kilometers',
        symbol: 'km',
        scale: 1000000,
      },
      {
        title: 'Inches',
        symbol: 'in',
        scale: 25.4,
      },
      {
        title: 'Feet',
        symbol: 'ft',
        scale: 304.8,
      },
      {
        title: 'Yards',
        symbol: 'yd',
        scale: 914.4,
      },
      {
        title: 'Miles',
        symbol: 'mi',
        scale: 1609344,
      },
      {
        title: 'Nautical miles',
        symbol: 'NM',
        scale: 1852000,
      },
      {
        title: 'Mils',
        symbol: 'mil',
        scale: 0.0254,
      },
    ],
  },
//   {
//     key: 2,
//     value: 'Temperature',
//     items: [
//       {
//         title: 'Celsius',
//         symbol: '°C',
//         scale: 1,
//       },
//       {
//         title: 'Fahrenheit',
//         symbol: '°F',
//         scale: 33.8,
//       },
//       {
//         title: 'Kelvin',
//         symbol: 'K',
//         scale: 274.15,
//       },
//     ],
//   },
  {
    key: 3,
    value: 'Volume',
    items: [
      {
        title: 'Litres',
        symbol: 'l',
        scale: 1,
      },
      {
        title: 'UK gallons',
        symbol: 'gal',
        scale: 4.54609,
      },
      {
        title: 'US gallons',
        symbol: 'gal',
        scale: 3.785411784,
      },

      {
        title: 'Millilitres',
        symbol: 'ml',
        scale: 0.001,
      },
      {
        title: 'Cubic centimeters',
        symbol: 'cc',
        scale: 0.001,
      },
      {
        title: 'Cubic Metres',
        symbol: 'm³',
        scale: 1000,
      },
      {
        title: 'Cubic inches',
        symbol: 'in³',
        scale: 0.016387064,
      },
      {
        title: 'Cubic feet',
        symbol: 'ft³',
        scale: 28.316846592,
      },
    ],
  },
  {
    key: 4,
    value: 'Mass',
    items: [
      {
        title: 'Tons',
        symbol: 't',
        scale: 1000000,
      },
      {
        title: 'UK tons',
        symbol: 't',
        scale: 1016046.9088,
      },
      {
        title: 'US tons',
        symbol: 'gal',
        scale: 907184.74,
      },

      {
        title: 'Pounds',
        symbol: 'lb',
        scale: 453.59237,
      },
      {
        title: 'Ounces',
        symbol: 'oz',
        scale: 28.349523125,
      },
      {
        title: 'Kilogrammes',
        symbol: 'kg',
        scale: 1000,
      },
      {
        title: 'Grams',
        symbol: 'g',
        scale: 1,
      },
    ],
  },
  {
    key: 5,
    value: 'Data',
    items: [
      {
        title: 'Bits',
        symbol: 'bit',
        scale: 1,
      },
      {
        title: 'Bytes',
        symbol: 'b',
        scale: 8,
      },
      {
        title: 'Kilobytes',
        symbol: 'KB',
        scale: 8192,
      },

      {
        title: 'Megabytes',
        symbol: 'MB',
        scale: 8388608,
      },
      {
        title: 'Gigabytes',
        symbol: 'GB',
        scale: 8589934592,
      },
      {
        title: 'Terabytes',
        symbol: 'TB',
        scale: 8796093022208,
      },
    ],
  },
  {
    key: 6,
    value: 'Speed',
    items: [
      {
        title: 'Metres per second',
        symbol: 'm/s',
        scale: 1,
      },
      {
        title: 'Metres per hour',
        symbol: 'm/h',
        scale: 0.0002777778,
      },
      {
        title: 'Kilometres per second',
        symbol: 'km/s',
        scale: 1000,
      },
      {
        title: 'Kilometres per hour',
        symbol: 'km/h',
        scale: 0.2777777778,
      },
      {
        title: 'Inches per second',
        symbol: 'in/s',
        scale: 0.0254,
      },
      {
        title: 'Inches per hour',
        symbol: 'in/h',
        scale: 0.0000070556,
      },
      {
        title: 'Feet per second',
        symbol: 'ft/s',
        scale: 0.3048,
      },
      {
        title: 'Feet per hour',
        symbol: 'ft/h',
        scale: 0.0000846667,
      },
      {
        title: 'Miles per second',
        symbol: 'mi/s',
        scale: 1609.344,
      },
      {
        title: 'Miles per hour',
        symbol: 'mi/h',
        scale: 0.044704,
      },
      {
        title: 'Knots',
        symbol: 'kn',
        scale: 0.5144444444,
      },
    ],
  },
  {
    key: 7,
    value: 'Time',
    items: [
        {
          title: 'Milliseconds',
          symbol: 'ms',
          scale: 1,
        },
        {
          title: 'Seconds',
          symbol: 's',
          scale: 1000,
        },
        {
          title: 'Minutes',
          symbol: 'min',
          scale: 60000,
        },
        {
            title: 'Hours',
            symbol: 'h',
            scale: 3600000,
          },
          {
            title: 'Days',
            symbol: 'd',
            scale: 86400000,
          },
          {
            title: 'Weeks',
            symbol: 'wk',
            scale: 604800000,
          },
    ]
  },
   
];

export default units;
