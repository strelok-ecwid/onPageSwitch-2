Ecwid.OnAPILoaded.add(function() {
    console.log("Ecwid storefront JS API has loaded - 104204 - 1.4");
});
Ecwid.OnPageSwitch.add(function(page) {
    if (page.type === "PRODUCT") {
        console.log(page.nameTransated)        
    }
})
Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "PRODUCT") {
      console.log(page.nameTranslated)
  }
});