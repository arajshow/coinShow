// TradingViewWidget.jsx
import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
	const onLoadScriptRef = useRef();

	useEffect(() => {
		onLoadScriptRef.current = createWidget;

		if (!tvScriptLoadingPromise) {
			tvScriptLoadingPromise = new Promise((resolve) => {
				const script = document.createElement("script");
				script.id = "tradingview-widget-loading-script";
				script.src =
					"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
				script.type = "text/javascript";
				script.onload = resolve;

				document.head.appendChild(script);
			});
		}

		tvScriptLoadingPromise.then(
			() => onLoadScriptRef.current && onLoadScriptRef.current()
		);

		return () => (onLoadScriptRef.current = null);

		function createWidget() {
			if (
				document.getElementById("basic-area-chart-demo") &&
				"TradingView" in window
			) {
				new window.TradingView.widget({
					container_id: "basic-area-chart-demo",
					width: "100%",
					height: "100%",
					autosize: true,
					symbol: "AAPL",
					interval: "D",
					timezone: "exchange",
					theme: "light",
					style: "3",
					hide_top_toolbar: true,
					save_image: false,
					locale: "en",
				});
			}
		}
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			style={{ height: "100%", width: "100%" }}
		>
			<div
				id="basic-area-chart-demo"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			/>
			here i want to show chart
		</div>
	);
}
