export default ({ Vue }) => {
  Vue.filter('svg', (code, options) => {
    options = {
      ...options, width: 512, height: 512, class: 'svg-icon',
    };
    return `<svg viewBox='0 0 61 60' height='${options.height}px' width='${options.height}px' class='${options.class}'><use xlink:href='#svg-icon-${code}' /></svg>`;
  });
};
