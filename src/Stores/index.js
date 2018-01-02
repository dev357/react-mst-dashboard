import { types } from "mobx-state-tree";
import ViewStore from "./ViewStore";

const Store = types
  .model("Store", {
    view: types.optional(ViewStore, {}),
    heading: "react-mst-dashboard"
  })
  .views(self => ({
    get headingTest() {
      return self.heading + "-testt";
    }
  }));

export default Store;
