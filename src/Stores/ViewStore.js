import { types } from "mobx-state-tree";

const ViewStore = types
  .model("ViewStore", {
    width: window.innerWidth
  })
  .views(self => ({
    get breakpoint() {
      if (self.width < 600) return "xs";
      if (self.width < 960) return "sm";
      if (self.width < 1280) return "md";
      if (self.width < 1920) return "lg";
      return "xl";
    }
  }))
  .actions(self => ({
    setWidth(width) {
      self.width = width;
    },
    addResizeEventListener() {
      let resizeTimeout;
      window.addEventListener("resize", self.test); //() => {
      console.log("resize");
      // if (!resizeTimeout) {
      //   resizeTimeout = setTimeout(() => {
      //     resizeTimeout = null;
      //     self.setWidth(window.innerWidth);
      //   }, 100);
      // }
      //});
    },
    test() {
      console.log("testt");
    }
  }));

export default ViewStore;
