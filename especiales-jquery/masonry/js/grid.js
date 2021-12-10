$('.grid').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    columnWidth: 320
    // use element for option
    // columnWidth: '.grid-sizer',
    // percentPosition: true
  })