Ecwid.OnAPILoaded.add(function() {
    console.log("Ecwid storefront JS API has loaded - 104204 - 1.2");
});
Ecwid.OnPageSwitch.add(function(page) {
    if (page.type === "PRODUCT") {
        console.log(page.name)
        
    } else if (page.type === "CATEGORY") {
        console.log(page.name)
        
    }
})
Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CATEGORY") {
      console.log(page.name)
  }
});