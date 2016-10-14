let canvasApi = '.maple-logo';

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

let RenderLogo = function(a) {
	let $canvas=$(canvasApi);

	if (!$canvas.length) {
		return;
	}

	$canvas.each(function() {
		let canvas = this;
		let ctx=canvas.getContext('2d');
		let grd=ctx.createLinearGradient(0,0,canvas.width,0);

		grd.addColorStop(0,'#36F1D4');
		grd.addColorStop(0.3,'#F5D659');
		grd.addColorStop(0.7,'#FDC4D7');
		grd.addColorStop(0.7,'#DCFD77');
		grd.addColorStop(1,'#88B6D4');

		ctx.fillStyle=grd;
		ctx.font="50px 正楷";
		ctx.fillText('MapleStory', 40, 40);
	});
};

export default {
	'renderLogo': RenderLogo
};
