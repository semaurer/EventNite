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
    height          : '290px',
    width           : '450px',
    margin          : '0 auto',
    top             : '-300px',
    border          : '1px solid #ccc',
    padding         : '0',
    zIndex          : 11,
    transition      : "top 0.5s",
    overflow        : "default"
  }
};

export default style;
