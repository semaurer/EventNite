const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, 0.6)',
    zIndex         : 10
  },
  content : {
    position        : 'fixed',
    height          : '12.5rem',
    width           : '17.5rem',
    margin          : '0 auto',
    top             : '-18.75rem',
    border          : '2px solid #ccc',
    padding         : '1.25rem',
    zIndex          : 11,
    transition      : "top 0.5s",
    overflow        : "default",
  }
};

export default style;
