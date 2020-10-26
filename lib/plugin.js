import Darkmode from "darkmode-js";

export default async function({ router, store }) {
  const moduleOptions = <%= serialize(options) %>

  if (process.client) {
    const addDarkmodeWidget = () => {
      new Darkmode(moduleOptions).showWidget();
    };
    window.addEventListener("load", addDarkmodeWidget);
  }
}
