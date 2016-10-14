<template>
	<canvas 
    class="modal-title maple-logo"
    width="300" 
    height="50">MapleStory</canvas>
</template>

<script>
    import maple from '../../assets/js/mapleFontLogo.js';

    export default {
		ready() {
			maple.renderLogo();
		}
	};
</script>