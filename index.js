Ecwid.OnAPILoaded.add(function() {
    console.log("Ecwid storefront JS API has loaded - 104204 - 1.3");
});
Ecwid.OnPageSwitch.add(function(page) {
    if (page.type === "PRODUCT") {
        console.log(page.nameTransated)
        
    } else if (page.type === "CATEGORY") {
        console.log(page.nameTranslated)
        
    }
})
Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CATEGORY") {
      console.log(page.nameTranslated)
  }
});