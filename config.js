module.exports = {
  "title": "Oojmed Status",
  "name": "oojmed_status",
  "description": "The status for Oojmed, a non-profit software development group.",
  "defaultLocale": "en",

  "locales": [
    {
      "code": "en",
      "iso": "en-US",
      "name": "English",
      "file": "en.json"
    }
  ],

  "content": {
    "frontMatterFormat": "yaml",
    "systems": [
      'txttosl-api',
      'txttosl-marketing',
      'txttosl-app',
      'txttosl-docs',
      'oojmed',
      'oojmed-blog',
      'oojmed-status'
    ]
  },

  "theme": {
    "links": {
      "en": {
        "contact": "mailto:contact@oojmed.com",
        "home": "https://oojmed.com",
        "privacy": "https://oojmed.com/policies/privacy/"
      }
    },

    "scheduled": {
      "position": 'aboveGlobalStatus'
    }
  },

  "head": {
    "link": [
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e4e88' }
    ]
  }
}