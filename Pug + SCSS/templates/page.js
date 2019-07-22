module.exports = pageName => `
extends ../layouts/default
block head
  - var pageTitle = 'BSS70'
block content
  +b.${pageName}
`;