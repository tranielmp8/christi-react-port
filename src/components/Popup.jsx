import { useEffect } from "react";

const Popup = () => {
  useEffect(() => {
    (function (w, d, t, h, s, n) {
      w.FlodeskObject = n;
      const fn = function () {
        (w[n].q = w[n].q || []).push(arguments);
      };
      w[n] = w[n] || fn;

      const f = d.getElementsByTagName(t)[0];
      const v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;

      const sm = d.createElement(t);
      sm.async = true;
      sm.type = "module";
      sm.src = h + s + ".mjs" + v;
      f.parentNode.insertBefore(sm, f);

      const sn = d.createElement(t);
      sn.async = true;
      sn.noModule = true;
      sn.src = h + s + ".js" + v;
      f.parentNode.insertBefore(sn, f);
    })(
      window,
      document,
      "script",
      "https://assets.flodesk.com",
      "/universal",
      "fd"
    );

    window.fd("form", {
      formId: "6702ebb52ac4b67f967a365a",
    });
  }, []);

  return <div id="flodesk-form"></div>;
};

export default Popup;
