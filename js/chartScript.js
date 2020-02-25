window.onload = function () {


var options1 = {
	animationEnabled: true,
	title: {
		text: "Acessos Cursos X Média Avaliações"
	},
	data: [{
		type: "column", //change it to line, area, bar, pie, etc
		legendText: "Try Resizing with the handle to the bottom right",
		showInLegend: false,
		dataPoints: [
			{ label: "C# Avançado - Acessos", y: 123, color: "#00ffc3" },
			{ label: "C# Avançado - Atingiu a media", y: 99, color: "#00ffc3" },
			{ label: "" },
			{ label: "Photoshop CS5 - Acessos", y: 103, color: "#00ffc3"},
			{ label: "Photoshop CS5 - Atingiu a media", y:49, color:"#ffa272" },
			{ label: "" },
			{ label: "Programação Web - Acessos", y: 100, color: "#00ffc3" },
			{ label: "Programação Web - Atingiu a media", y: 90, color: "#00ffc3" },
			{ label: "" },
			{ label: "Marketing - Acessos", y: 90, color: "#00ffc3" },
			{ label: "Marketing - Atingiu a media", y: 90, color: "#00ffc3" },
			{ label: "" },
			{ label: "Vendas - Acessos", y: 38, color: "#ff6969" },
			{ label: "Vendas - Atingiu a media", y: 31, color: "#ff6969" }
			]
		}]
};

$("#resizable").resizable({
	create: function (event, ui) {
		//Create chart.
		$("#chartContainer1").CanvasJSChart(options1);
	},
	resize: function (event, ui) {
		//Update chart size according to its container size.
		$("#chartContainer1").CanvasJSChart().render();
	}
});

}
