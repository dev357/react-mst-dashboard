import React from "react";
import { observer } from "mobx-react";

const TestComponent = ({ store }) => <div>breakpoint:{store.view.breakpoint}</div>;

export default observer(TestComponent);
