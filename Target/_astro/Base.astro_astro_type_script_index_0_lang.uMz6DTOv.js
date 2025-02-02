const p = "modulepreload",
	w = function (o) {
		return "/" + o;
	},
	l = {},
	h = function (d, a, b) {
		let s = Promise.resolve();
		if (a && a.length > 0) {
			document.getElementsByTagName("link");
			const r = document.querySelector("meta[property=csp-nonce]"),
				e = r?.nonce || r?.getAttribute("nonce");
			s = Promise.allSettled(
				a.map((t) => {
					if (((t = w(t)), t in l)) return;
					l[t] = !0;
					const i = t.endsWith(".css"),
						u = i ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${u}`)) return;
					const n = document.createElement("link");
					if (
						((n.rel = i ? "stylesheet" : p),
						i || (n.as = "script"),
						(n.crossOrigin = ""),
						(n.href = t),
						e && n.setAttribute("nonce", e),
						document.head.appendChild(n),
						i)
					)
						return new Promise((m, f) => {
							n.addEventListener("load", m),
								n.addEventListener("error", () =>
									f(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(r) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = r), window.dispatchEvent(e), !e.defaultPrevented))
				throw r;
		}
		return s.then((r) => {
			for (const e of r || []) e.status === "rejected" && c(e.reason);
			return d().catch(c);
		});
	};
(
	await h(async () => {
		const { initializeApp: o } = await import("./index.esm.CU1LiKjY.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyDBmnQxVvBOEqdr5498xb7Nb86WO5xA9f4",
	authDomain: "image-wtf-web.firebaseapp.com",
	projectId: "image-wtf-web",
	storageBucket: "image-wtf-web.appspot.com",
	messagingSenderId: "199878156405",
	appId: "1:199878156405:web:6adce1a48bdf961fda983c",
	measurementId: "G-XFRD8Q5GFM",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.uMz6DTOv.js.map
