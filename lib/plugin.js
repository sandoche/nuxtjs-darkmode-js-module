import Darkmode from "darkmode-js";

export default async function({ router, store }) {
  if (process.client) {
    const addDarkmodeWidget = () => {
      new Darkmode().showWidget();
    };
    window.addEventListener("load", addDarkmodeWidget);
  }
}
