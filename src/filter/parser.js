/**
 * @use
 * "XTUSDT" | pm("USDT") => XT/USDT
 */
export default (value, type) => {
  return value.replace(type, "/" + type)
};

