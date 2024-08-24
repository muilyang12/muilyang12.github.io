import Tabs, { TabsComponentName } from "./components/Tabs.js";
import Tab, { TabComponentName } from "./components/Tab.js";
import Introduction, { IntroductionComponentName } from "./components/index/Introduction.js";

customElements.define(TabsComponentName, Tabs);
customElements.define(TabComponentName, Tab);
customElements.define(IntroductionComponentName, Introduction);
