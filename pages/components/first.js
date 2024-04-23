import React, { useEffect } from 'react';

const Firstcomponent = () => {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "../app.cal.com/embed/embed.js", "init");

    // Initialize Cal.com
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: "janismjartans/my-paid-community-discovery-call",
      layout: "month_view"
    });
    Cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <div id="container01" className="style9 container default full screen">
      <div className="wrapper">
        <div className="inner" data-onvisible-trigger="1">
          <h2 id="text19" className="style10 animate__animated animate__fadeInUp animate__delay-1s" style={{ opacity: 1, transform: 'none' }}>Ready to get started?</h2>
          <p id="text20" className="style19" style={{ opacity: 1 }}>
            <span className="p">Currently working with maximum 2 creators/coaches per month to ensure quality.</span>
            <span className="p">Schedule a discovery call below to find out if we're a fit!</span>
          </p>
          <ul id="buttons04" className="style4 buttons" style={{ opacity: 1, transform: 'none' }}>
            <li><a href="https://cal.com/janismjartans/my-paid-community-discovery-call" className="button n01"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"></path></svg><span className="label">Schedule Call</span></a></li>
          </ul>

              <iframe
              src="https://cal.com/favour-sunday-ioousg/15min?date=2024-04-24&month=2024-04"
              width="100%"
              height="1000px" // Adjust the height as needed
            ></iframe>



        </div>
      </div>
    </div>
  );
};

export default Firstcomponent;
