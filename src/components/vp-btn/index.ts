import Com from "./index.vue";
const install = function (App: any, opts = {}) {
  for (const [attr, value] of Object.entries(opts)) {
    if (Com.props[attr]) {
      Com.props[attr].default = value;
    }
  }
  App.component(Com);
};

export default install;
