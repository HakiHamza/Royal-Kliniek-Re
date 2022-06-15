new fullpage("#fullpage", {
  navigation: false,
  anchors: ["s1", "s2", "s3", "s4", "s5"],
  navigationTooltips: ["Home", "Work", "Team", "Locatie", "Contact"],
  showActiveTooltip: true,
  scrollingSpeed: 1000,
  slidesNavigation: true,
  controlArrows: true,
  controlArrowsHTML: [
    ' <div class=".fp-controlArrow"><div class="fp-prev"></div></div>',
    '<div class=".fp-controlArrow"><div class="fp-next"></div></div>',
  ],
});
