import { externalTooltipHandlerDoughnut } from "./externalHandlers.js";
import { externalTooltipHandlerLine } from "./externalHandlers.js";
const totalClassesChart = document.getElementById("total-classes-chart");
const sizeGroup = document.getElementById("size-group-chart");
const useInventory = document.getElementById("use-inventory-chart");
const range = [28, 14];
let labels = [];
range.forEach((number, index) => {
	if (index === 0) {
		for (let i = number; i < 31; i++) {
			labels.push(i + " мая");
		}
	} else {
		for (let i = 1; i < number + 1; i++) {
			labels.push(i + " июня");
		}
	}
});

new Chart(totalClassesChart, {
	type: "line",
	data: {
		labels: labels,
		datasets: [
			{
				display: false,
				label: "",
				data: [12, 19, 3, 5, 2, 3, 12, 13, 4, 5, 6, 5, 13, 10, 8, 10, 11],
				borderWidth: 2,
				borderColor: "#6c6d6f",
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},

			tooltip: {
				enabled: false,
				position: "nearest",
				// callbacks: {
				// 	title: function () {
				// 		return "занятий";
				// 	},
				// 	labelTextColor: function (context) {
				// 		return "black";
				// 	},
				// },
				// titleColor: "#403F40",
				// titleFont: { size: 16, weight: "regular" },
				// backgroundColor: "#FCDED5",

				// bodyFont: { size: 32 },
				// textDirection: "rtl",
				// displayColors: false,
				external: externalTooltipHandlerLine,
			},
		},
		scales: {
			y: {
				display: false,
				beginAtZero: true,
			},
		},
		elements: {
			line: {
				fill: false,
				borderColor: "#6c6d6f",
			},
			point: {
				backgroundColor: "#f67c56",
				borderColor: "#f67c56",
				radius: 5,
				hoverRadius: 15,
			},
		},
	},
});
new Chart(sizeGroup, {
	type: "doughnut",
	data: {
		labels: ["Футбол", "Гимнастика", "Баскетбол", "Хоккей"],
		datasets: [
			{
				label: "",
				data: [300, 50, 100, 250],
				backgroundColor: ["black", "#b8babc", "#6c6d6f", "#e3e4e5"],
				hoverOffset: 5,
				spacing: 3,
				borderColor: "white",
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				position: "nearest",
				// callbacks: {
				// 	title: function () {
				// 		return "занятий";
				// 	},
				// 	labelTextColor: function (context) {
				// 		return "black";
				// 	},
				// },
				// titleColor: "#403F40",
				// titleFont: { size: 16, weight: "regular" },
				// backgroundColor: "#FCDED5",

				// bodyFont: { size: 32 },
				// textDirection: "rtl",
				// displayColors: false,
				external: externalTooltipHandlerDoughnut,
			},
		},
	},
});
new Chart(useInventory, {
	type: "bar",
	data: {
		labels: ["Футбол", "Баскетбол", "Хоккей", "Гимнастика"],
		datasets: [
			{
				label: "Спортивного инвентаря используется",
				data: [65, 59, 80, 81, 100],
				backgroundColor: ["#b8babc", "#d2c5e8", "#e3e4e5", "#b8babc"],
				borderColor: ["transparent"],
				borderWidth: 1,
			},
		],
	},
	plugins: [ChartDataLabels],
	options: {
		scales: {
			y: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},

			tooltip: {
				enabled: false,
				backgroundColor: "#FAFAFA",
			},
			datalabels: {
				// Position of the labels
				// (start, end, center, etc.)
				anchor: "end",
				// Alignment of the labels
				// (start, end, center, etc.)
				align: "end",
				// Color of the labels
				offset: 2,
				font: {
					weight: "bold",
				},
			},
		},
	},
});
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const progressBar = document.querySelectorAll(
	".analytics-sections__progress-bar"
);
const progress = document.querySelectorAll(
	".analytics-sections__progress-bar-progress"
);
const number1 = document.querySelectorAll(
	".analytics-sections__progress-bar-number1"
);
const number2 = document.querySelectorAll(
	".analytics-sections__progress-bar-number2"
);
for (let i = 0; i < progressBar.length; i++) {
	progress[i].style = `width: ${
		(Number(number1[i].innerText.replace(/\s/g, "")) /
			Number(number2[i].innerText.replace(/\s/g, ""))) *
		100
	}%`;
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const tabs = document.querySelector(".analytics-sections_wrapp-tabs");

tabs.addEventListener("click", (e) => {
	const sectionTime = document.querySelector(
		".analytics-sections__analytics-time"
	);
	const sectionWalk = document.querySelector(
		".analytics-sections__analytics-walk"
	);
	const activeTab = document.querySelector(".analytics-sections__active-tab");
	const timeTab = document.querySelector(".analytics-sections__time-tab");
	const walkTab = document.querySelector(".analytics-sections__walk-tab");
	if (e.target.closest(".analytics-sections__time-tab")) {
		e.target.classList.remove("button-secondary");
		e.target.classList.add("button-primary");
		walkTab.classList.add("button-secondary");
		walkTab.classList.remove("button-primary");
		sectionWalk.classList.add("hidden");
		sectionTime.classList.remove("hidden");
		activeTab.innerText = "Время";
	}
	if (e.target.closest(".analytics-sections__walk-tab")) {
		e.target.classList.remove("button-secondary");
		e.target.classList.add("button-primary");
		timeTab.classList.add("button-secondary");
		timeTab.classList.remove("button-primary");
		sectionTime.classList.add("hidden");
		sectionWalk.classList.remove("hidden");
		activeTab.innerText = "Посещаемость";
	}
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
