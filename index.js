var fs = require('fs');
var path = require('path');

module.exports = {
  website: {
    assets: './_assets/',
    js: ['kmk.js'],
    css: ['kmk.css'],
  },
  hooks: {
    finish: function () {
      var themeConfig = this.config.get('pluginsConfig')['theme-kmk'];
      var output =
        themeConfig && themeConfig.output ? themeConfig.output : '_book';
      var pathFile;

      // change theme color
      const themeColor = themeConfig.color || '#f34d4d';
      cssPath = path.join(
        process.cwd(),
        output,
        'gitbook',
        'gitbook-plugin-theme-kmk',
        'kmk.css'
      );
      if (fs.existsSync(cssPath)) {
        fs.appendFileSync(
          cssPath,
          `:root { 
--ThemeColor: ${themeColor}; 
}
`
        );
      }

      // update color style
      themeConfig.titleColor = themeConfig.titleColor || {};
      const h1Color = themeConfig.titleColor['h1'] || themeColor;
      const h2Color = themeConfig.titleColor['h2'] || themeColor;
      const h3Color = themeConfig.titleColor['h3'] || themeColor;
      const h4Color = themeConfig.titleColor['h4'] || themeColor;
      const h5Color = themeConfig.titleColor['h5'] || themeColor;
      const h6Color = themeConfig.titleColor['h6'] || themeColor;
      if (fs.existsSync(cssPath)) {
        fs.appendFileSync(
          cssPath,
          `:root { 
  --H1Color: ${h1Color}; 
  --H2Color: ${h2Color}; 
  --H3Color: ${h3Color}; 
  --H4Color: ${h4Color}; 
  --H5Color: ${h5Color}; 
  --H6Color: ${h6Color}; 
}
`
        );
      }

      // allow copy
      const forbidCopy = themeConfig.forbidCopy;
      if (forbidCopy && fs.existsSync(cssPath)) {
        fs.appendFileSync(
          cssPath,
          `* {
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`
        );
      }

      // favicon
      pathFile = themeConfig && themeConfig.favicon;
      if (pathFile) {
        var faviconPath = path.join(process.cwd(), pathFile);
        var gitbookFaviconPath = path.join(
          process.cwd(),
          output,
          'gitbook',
          'images',
          'favicon.ico'
        );
        if (fs.existsSync(faviconPath)) {
          fs.writeFileSync(gitbookFaviconPath, fs.readFileSync(faviconPath));
        }
      }

      // appleTouchIconPrecomposed152
      pathFile = themeConfig && themeConfig.appleTouchIconPrecomposed152;
      if (pathFile) {
        var appleTouchIconPrecomposed152 = path.join(process.cwd(), pathFile);
        var gitbookAppleTouchPath = path.join(
          process.cwd(),
          output,
          'gitbook',
          'images',
          'apple-touch-icon-precomposed-152.png'
        );
        if (fs.existsSync(appleTouchIconPrecomposed152)) {
          fs.writeFileSync(
            gitbookAppleTouchPath,
            fs.readFileSync(appleTouchIconPrecomposed152)
          );
        }
      }

      // logo
      pathFile = themeConfig && themeConfig.logo;
      if (pathFile) {
        var logoPath = path.join(process.cwd(), pathFile);
        var pluginLogoPath = path.join(
          process.cwd(),
          output,
          'gitbook',
          'gitbook-plugin-theme-kmk',
          'logo.png'
        );
        if (fs.existsSync(logoPath)) {
          fs.writeFileSync(pluginLogoPath, fs.readFileSync(logoPath));
        }
      }

      // logo
      pathFile = themeConfig && themeConfig.copyrightLogo;
      if (pathFile) {
        var copyrightLogoPath = path.join(process.cwd(), pathFile);
        var pluginCopyrightLogoPath = path.join(
          process.cwd(),
          output,
          'gitbook',
          'gitbook-plugin-theme-kmk',
          'copyright-logo.png'
        );
        if (fs.existsSync(copyrightLogoPath)) {
          fs.writeFileSync(
            pluginCopyrightLogoPath,
            fs.readFileSync(copyrightLogoPath)
          );
        }
        if (fs.existsSync(cssPath)) {
          fs.appendFileSync(
            cssPath,
            `.book-body { 
  background: url('./copyright-logo.png'); 
  }
  `
          );
        }
      }

      // none image setup
      imgStyle = themeConfig && themeConfig.imgStyle;
      if (imgStyle) {
        let styles = `
        .markdown-section img {
          ${imgStyle.isCenter == false ? '' : 'margin: 0 auto;display: flex;'}
          ${
            imgStyle.isBox == false
              ? ''
              : 'padding: 8px;background: #e4e4e478;transition: all 1s;box-sizing: border-box;box-shadow: 0 0 4px #dcdcdc;'
          }
          ${imgStyle.otherStyle ? imgStyle.otherStyle : ''}
        }
        `;
        if (!imgStyle.isBox) {
          styles += `
          .markdown-section img:hover {
            box-shadow: 0 0 10px #bbb;
          }`;
        }
        if (fs.existsSync(cssPath)) {
          fs.appendFileSync(cssPath, styles);
        }
      }

      // css add
      cssFile = themeConfig && themeConfig.css;
      if (cssFile) {
        var cssFilePath = path.join(process.cwd(), cssFile);
        var pluginCssFilePath = path.join(
          process.cwd(),
          output,
          'gitbook',
          'gitbook-plugin-theme-kmk',
          'kmk.css'
        );
        if (fs.existsSync(cssFilePath)) {
          fs.appendFileSync(pluginCssFilePath, fs.readFileSync(cssFilePath));
        }
      }
    },
  },
};
