window.addEventListener("DOMContentLoaded", (event) => {

	const probabtns = document.getElementsByClassName("probabtn");
	const hidebtns = document.getElementsByClassName("hidebtn");
	const showbtns = document.getElementsByClassName("showbtn");
	const resetbtns = document.getElementsByClassName("resetbtn");

	const main = document.getElementById("main");

	proba(probabtns);
	hide(hidebtns);
	show(showbtns);
	reset(resetbtns);



});

function download() {
	let link = document.createElement('a');
	link.download = 'personalizedWTR.png';
	link.href = document.getElementById('defaultCanvas0').toDataURL()
	link.click();
}

function reset(resetbtns) {
	Array.from(resetbtns).forEach(function (resetbtn) {
		resetbtn.addEventListener('click', () => {
			if (resetbtn.id == "layer0") {

				probaParams.layer0.sigma0 = 0;
				probaParams.layer0.sigma1 = 0;
				probaParams.layer0.sigma2 = 0;
				drawGrid(layer0, 10, probaParams.layer0.sigma0, 40, probaParams.layer0.sigma1, 70, probaParams.layer0.sigma2)

			} else if (resetbtn.id == "layer1") {

				probaParams.layer1.sigma0 = 0;
				probaParams.layer1.sigma1 = 0;
				probaParams.layer1.sigma2 = 0;
				drawGrid(layer1, 10, probaParams.layer1.sigma0, 40, probaParams.layer1.sigma1, 70, probaParams.layer1.sigma2)

			} else if (resetbtn.id == "layer2") {

				probaParams.layer2.sigma0 = 0;
				probaParams.layer2.sigma1 = 0;
				probaParams.layer2.sigma2 = 0;
				drawGrid(layer2, 10, probaParams.layer2.sigma0, 40, probaParams.layer2.sigma1, 70, probaParams.layer2.sigma2)

			}


		})
	})
}

function show(showbtns) {
	Array.from(showbtns).forEach(function (showbtn) {
		showbtn.addEventListener('click', () => {
			persistence();
			if (showbtn.id == "layer0" && boolHide.hide0) {
				drawGrid(layer0, 10, probaParams.layer0.sigma0, 40, probaParams.layer0.sigma1, 70, probaParams.layer0.sigma2)
				boolHide.hide0 = false;
			} else if (showbtn.id == "layer1" && boolHide.hide1) {
				drawGrid(layer1, 10, probaParams.layer1.sigma0, 40, probaParams.layer1.sigma1, 70, probaParams.layer1.sigma2)
				boolHide.hide1 = false;
			} else if (showbtn.id == "layer2" && boolHide.hide2) {
				drawGrid(layer2, 10, probaParams.layer2.sigma0, 40, probaParams.layer2.sigma1, 70, probaParams.layer2.sigma2)
				boolHide.hide2 = false;
			}
		})

	})
}

function hide(hidebtns) {
	Array.from(hidebtns).forEach(function (hidebtn) {
		hidebtn.addEventListener('click', () => {
			if (hidebtn.id == "layer0") {
				layer0 = []
				boolHide.hide0 = true;
			} else if (hidebtn.id == "layer1") {
				layer1 = []
				boolHide.hide1 = true;
			} else if (hidebtn.id == "layer2") {
				layer2 = []
				boolHide.hide2 = true;
			}

		})

	})
}


function proba(probabtns) {
	Array.from(probabtns).forEach(function (probabtn) {
		probabtn.addEventListener('click', () => {
			persistence();
			if (probabtn.classList.contains("layer0")) {

				probaParams.layer0[probabtn.id] = addOrSubs(probabtn, probaParams.layer0[probabtn.id]);

				layer0 = [];

				drawGrid(layer0, 10, probaParams.layer0.sigma0, 40, probaParams.layer0.sigma1, 70, probaParams.layer0.sigma2)

			} else if (probabtn.classList.contains("layer1")) {

				probaParams.layer1[probabtn.id] = addOrSubs(probabtn, probaParams.layer1[probabtn.id]);


				layer1 = [];

				drawGrid(layer1, 10, probaParams.layer1.sigma0, 40, probaParams.layer1.sigma1, 70, probaParams.layer1.sigma2)

			} else if (probabtn.classList.contains("layer2")) {

				probaParams.layer2[probabtn.id] = addOrSubs(probabtn, probaParams.layer2[probabtn.id]);

				layer2 = [];

				drawGrid(layer2, 10, probaParams.layer2.sigma0, 40, probaParams.layer2.sigma1, 70, probaParams.layer2.sigma2)
			}

		});


	});
}

function persistence() {
	probaParams.layer0.sigma0 = probaParams.layer0.sigma0;
	probaParams.layer0.sigma1 = probaParams.layer0.sigma1;
	probaParams.layer0.sigma2 = probaParams.layer0.sigma2;
}

function addOrSubs(element, sigma) {
	if (element.classList.contains("addbtn")) {
		sigma += 5;
	} else if (element.classList.contains("subsbtn")) {
		if (sigma - 5 <= 0) {
			sigma = 0;
		} else {
			sigma -= 5;
		}
	}
	return sigma;
}



/*				
console.log("layer0 sigma 0 :" + probaParams.layer0.sigma0);
console.log("layer 0 sigma 1 :" + probaParams.layer0.sigma1)
console.log("layer 0 sigma 2 :" + probaParams.layer0.sigma2)
console.log("sigma 1 :" + probaParams.layer1.sigma0);
console.log("sigma 1 :" + probaParams.layer1.sigma1)
console.log("sigma 2 :" + probaParams.layer1.sigma2)
console.log("layer 2 sigma 0 :" + probaParams.layer2.sigma0);
console.log("layer 2 sigma 1 :" + probaParams.layer2.sigma1)
console.log("layer 2 sigma 2 :" + probaParams.layer2.sigma2)*/