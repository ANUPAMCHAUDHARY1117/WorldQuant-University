const weight = [0.65, 0.65, -0.3]; //NFLX is being shorted so weight is negative

const dailyAverageMean = [0.044857944, 0.010361979, -0.029674829];
const standardDeviation = [0.009320453, 0.009556763, 0.01340882];
const skew = [-0.33517305, -0.312865226, -3.101653581];
const kurt = [5.034092588, 4.729806047, 41.96801484];
const correlation = [
	[1, 0.660738586, 0.460041141],
	[0.660738586, 1, 0.593812086],
	[0.460041141, 0.593812086, 1],
];

let portfolioAverageRetuns = 0;
for (let i = 0; i < dailyAverageMean.length; i++) {
	portfolioAverageRetuns += dailyAverageMean[i] * weight[i];
}

let variance = 0;
for (i = 0; i < correlation.length; i++) {
	for (j = 0; j < correlation[i].length; j++) {
		variance +=
			weight[i] *
			weight[j] *
			correlation[i][j] *
			standardDeviation[i] *
			standardDeviation[j];
	}
}

// portfolioAverageRetuns = portfolioAverageRetuns / dailyAverageMean.length;
console.log(portfolioAverageRetuns, variance);

//Portfolio Average Returns - 0.04479539865
//Portfolio Variance - 0.00008910465905171051
