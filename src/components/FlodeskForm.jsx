import { useEffect } from 'react';

const FlodeskForm = () => {
  useEffect(() => {
    (function(w, d, t, h, s, n) {
      w.FlodeskObject = n;
      var fn = function() {
        (w[n].q = w[n].q || []).push(arguments);
      };
      w[n] = w[n] || fn;
      var f = d.getElementsByTagName(t)[0];
      var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
      var sm = d.createElement(t);
      sm.async = true;
      sm.type = 'module';
      sm.src = h + s + '.mjs' + v;
      f.parentNode.insertBefore(sm, f);
      var sn = d.createElement(t);
      sn.async = true;
      sn.noModule = true;
      sn.src = h + s + '.js' + v;
      f.parentNode.insertBefore(sn, f);
    })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');

    // Call Flodesk function to render the form
    window.fd('form', {
      formId: '661c3e7af306d02e4bfb8e6d',
      containerEl: '#fd-form-661c3e7af306d02e4bfb8e6d'
    });
  }, []);

  return (
    <div id="fd-form-661c3e7af306d02e4bfb8e6d"></div>
  );
};

export default FlodeskForm;