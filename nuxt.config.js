export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '英特股份',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      { name: 'renderer', content: 'webkit' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/dist/idangerous.swiper.css',
    '@/assets/style/global.less',
    '@/assets/style/iconfont/iconfont.css',
    //配置全局 css
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/babel-polyfill', ssr: true }, // 将es6转换为es5 兼容ie9
    { src: '@/plugins/swiper.js', ssr: false },
    '@/plugins/i18n.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  styleResources:{
    less:'./assets/style/variable.less'
  },
  router:{
    // middleware:['browserVersion']
  },
  // router: {
  //   mode: 'history',
  //   middleware: 'global',
  //   fallback: true
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      // presets: ['@nuxt/babel-preset-app'],
      // "presets":["es2015"],
      // transpile:[/^sunshine-layout/,/^sunshine-ui/,/^tree-table-vue/,/^view-design/],  //转换解析第三方包
      plugins: ['@babel/plugin-syntax-dynamic-import', [
        '@babel/plugin-transform-runtime',
        {
          'corejs': false,
          'helpers': true,
          'regenerator': true,
          'useESModules': false
        }
      ]],
      'configFile': false,
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        "postcss-px-to-viewport": {
          viewportWidth: 1440, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          // viewportHeight: 1600, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
          unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore', '.ignore-vw', 'mobile'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false, // (Boolean) 允许在媒体查询中转换`px`
          exclude: /(\/|\\)(node_modules)(\/|\\)/
        },
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          flexbox: true,
          grid: true,
          overrideBrowserslist: ['last 3 versions', '> 1%','ie 9', 'ie 8', 'ie 7'],
        }
      }
    }
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/backApi': {
      target: 'http://int.veianweb.com/',
      pathRewrite: { '^/backApi': '' }
    },
  },
  alias: {

  },
}
