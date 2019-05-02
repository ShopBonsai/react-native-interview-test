import { Navigation } from "react-native-navigation";
import withProviders from "./containers/withProviders";
import screens, { MOVIELIST, SHOPPINGCART } from "./screens";

class App {
  constructor() {
    this.registerScreens(screens);
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Browse",
          screen: MOVIELIST,
          title: "Browse",
        },
        {
          label: "Cart",
          screen: SHOPPINGCART,
          title: "Cart",
        },
      ],
    });
  }
  registerScreens = (screensToRegister) =>
    Object.entries(screensToRegister).forEach(([key, Screen]) =>
      Navigation.registerComponent(key, () => withProviders(Screen))
    );
}

export default new App();
