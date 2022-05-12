# Theme-KMK

## Usage

setup `book.json`

```js
// book.js
{
  "plugins": ["theme-kmk"],
  "pluginsConfig": {
    "theme-kmk": {
      "color": "#FF4848",
      "favicon": "static/favicon.ico", // favicon
      "logo": "static/logo.png", // top logo
      "appleTouchIconPrecomposed152": "static/apple.png", // apple logo
      "copyrightLogo": "assets/copyright.png",  // footer logo
      "forbidCopy": true, // forbid
      "search-placeholder": "Input Keywords to Search", // search
      "book-summary-title": "Article Directory", // search
      "book-anchor-title": "Search In the Article", // search
      "hide-elements": [".summary .gitbook-link", ".summary .divider"], // hide item
      "copyright": {
        "author": "KMK"  // footer
      }
    }
  },
  "variables": {
    "themeKmk": {
      // top navigation
      "nav": [
        {
          "target": "_blank", // open link
          "url": "http://...",  // redirect to
          "name": "Tour"  // nav name
        }
      ],
      "footer": {
        "copyright": true // show copyright
      }
    }
  }
}
```
