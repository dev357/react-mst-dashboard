/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
export function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r,
    g,
    b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * Converts an HSL color value to hex.
 * returns hex.
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {string}          The hex representation (#ff0000)
 */
export function hslToHex(h, s, l) {
  const rgb = hslToRgb(h, s, l);
  const toHex = (x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
}

export function luminance(rgb) {
  const arr = rgb.map((c) => {
    c /= 255;
    if (c <= 0.03928) {
      c /= 12.92;
    } else {
      c = Math.pow((c + 0.055) / 1.055, 2.4);
    }
    return c;
  });
  return 0.2126 * arr[0] + 0.7152 * arr[1] + 0.0722 * arr[2];
}
