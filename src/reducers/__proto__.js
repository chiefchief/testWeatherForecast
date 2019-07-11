export const ADDRESS = function(data = {}) {
  this.city = data.city || "";
  this.lat = data.lat || 50.431782;
  this.lng = data.lng || 30.516382;
};

export const FORECAST = function(data = []) {
  this.data = data;
};
