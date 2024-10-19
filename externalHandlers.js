const getOrCreateTooltip = (chart) => {
	let tooltipEl = chart.canvas.parentNode.querySelector("div");

	if (!tooltipEl) {
		tooltipEl = document.createElement("div");

		tooltipEl.style.opacity = 1;
		tooltipEl.style.pointerEvents = "none";
		tooltipEl.style.position = "absolute";
		tooltipEl.style.transform = "translate(-50%, 0)";
		tooltipEl.style.transition = "all .1s ease";

		const table = document.createElement("table");
		table.style.margin = "0px";

		tooltipEl.appendChild(table);
		chart.canvas.parentNode.appendChild(tooltipEl);
	}

	return tooltipEl;
};
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
export const externalTooltipHandlerLine = (context) => {
	// Tooltip Element
	const { chart, tooltip } = context;
	const tooltipEl = getOrCreateTooltip(chart);

	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}

	// Set Text
	if (tooltip.body) {
		const bodyLines = tooltip.body.map((b) => b.lines);

		const tableBody = document.createElement("tbody");
		bodyLines.forEach((body, i) => {
			const span = document.createElement("span");
			span.style.marginLeft = "7px";
			span.innerText = "занятий";
			span.style.fontSize = "16px";
			span.style.color = "#403F40";
			const tr = document.createElement("tr");

			const td = document.createElement("td");
			td.style.fontSize = "32px";

			const text = document.createTextNode(body);

			td.appendChild(text);
			td.appendChild(span);
			tr.appendChild(td);
			tableBody.appendChild(tr);
		});

		const tableRoot = tooltipEl.querySelector("table");

		// Remove old children
		while (tableRoot.firstChild) {
			tableRoot.firstChild.remove();
		}

		// Add new children
		tableRoot.appendChild(tableBody);
	}

	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

	// Display, position, and set styles for font
	tooltipEl.style.opacity = 1;
	tooltipEl.style.left = positionX + tooltip.caretX + "px";
	tooltipEl.style.top = positionY + tooltip.caretY + "px";
	tooltipEl.style.padding = "20px";
	tooltipEl.style.background = "#FCDED5";
	tooltipEl.style.color = "black";
	// tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
export const externalTooltipHandlerDoughnut = (context) => {
	// Tooltip Element
	const { chart, tooltip } = context;
	const tooltipEl = getOrCreateTooltip(chart);

	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}

	// Set Text
	if (tooltip.body) {
		const bodyLines = tooltip.body.map((b) => b.lines);

		const tableBody = document.createElement("tbody");
		bodyLines.forEach((body, i) => {
			const span1 = document.createElement("span");
			span1.style.marginLeft = "7px";
			span1.innerText = "процентов";
			span1.style.fontSize = "16px";
			span1.style.color = "#403F40";
			// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
			// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
			// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
			const span2 = document.createElement("span");
			span2.style.marginLeft = "7px";
			span2.innerText = "человек";
			span2.style.fontSize = "16px";
			span2.style.color = "#403F40";
			const tr = document.createElement("tr");

			const td1 = document.createElement("td1");
			td1.style.borderRight = "1px solid #B8BABC";
			td1.style.padding = "15px";
			const td2 = document.createElement("td2");
			td2.style.padding = "15px";

			const text1 = document.createTextNode(30);
			const text2 = document.createTextNode(body);

			td1.appendChild(text1);
			td1.appendChild(span1);
			td2.appendChild(text2);
			td2.appendChild(span2);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tableBody.appendChild(tr);
		});

		const tableRoot = tooltipEl.querySelector("table");

		// Remove old children
		while (tableRoot.firstChild) {
			tableRoot.firstChild.remove();
		}

		// Add new children
		tableRoot.appendChild(tableBody);
	}

	const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

	// Display, position, and set styles for font
	tooltipEl.style.background = "white";
	tooltipEl.style.color = "black";
	tooltipEl.style.opacity = 1;
	tooltipEl.style.left = positionX + tooltip.caretX + "px";
	tooltipEl.style.top = positionY + tooltip.caretY + "px";
	tooltipEl.style.padding = "20px";
	// tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
