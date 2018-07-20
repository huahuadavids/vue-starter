/**
 * @use
 * "XTUSDT" | pm("USDT") => XT/USDT
 */
export const pm = (value, type) => {
  return value.replace(type, "/" + type)
};

