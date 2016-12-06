
// Expose speaker notes in case we're printing with share_notes
if (SLConfig.deck.notes) {
	[].forEach.call(document.querySelectorAll('.reveal .slides section'), function (slide) {
		var value = SLConfig.deck.notes[slide.getAttribute('data-id')];
		if (value && typeof value === 'string') {
			slide.setAttribute('data-notes', value);
		}
	});
}
Reveal.addEventListener('ready', function (event) {
	Reveal.add = function (content = '', index = -1) {
		dom = {};

		dom.slides = document.querySelector('.reveal .slides');
		var newSlide = document.createElement('section');
		if (index === -1) { //adding slide to end
			newSlide.classList.add('future');
			dom.slides.appendChild(newSlide);
			document.querySelector('.navigate-right').classList.add('enabled'); //just enable it, even if it is
		} else if (index > Reveal.getIndices().h) {
			newSlide.classList.add('future');
			dom.slides.insertBefore(newSlide, dom.slides.querySelectorAll('section:nth-child(' + (index + 1) + ')')[0]);
		} else if (index <= Reveal.getIndices().h) {
			newSlide.classList.add('past');
			dom.slides.insertBefore(newSlide, dom.slides.querySelectorAll('section:nth-child(' + (index + 1) + ')')[0]);
			Reveal.next();
		}
		newSlide.innerHTML = content;
	};
	Reveal.remove = function (index = -1) {
		dom = {};

		dom.wrapper = document.querySelector('.reveal');
		dom.slides = document.querySelector('.reveal .slides');
		var target = (dom.wrapper.querySelectorAll('.slides > section:nth-child(' + (index + 1) + ')')[0]) ? dom.wrapper.querySelectorAll('.slides > section:nth-child(' + (index + 1) + ')')[0] : false;

		if (index === -1) {
			if (Reveal.isLastSlide()) Reveal.prev();
			dom.slides.removeChild(dom.wrapper.querySelectorAll('.slides > section')[dom.wrapper.querySelectorAll('.slides > section').length - 1]);
			if (Reveal.isLastSlide()) document.querySelector('.navigate-right').classList.remove('enabled');
		} else if (index > Reveal.getIndices().h && target) {
			dom.slides.removeChild(target);
			if (Reveal.getIndices().h == dom.wrapper.querySelectorAll('.slides > section').length - 1) document.querySelector('.navigate-right').classList.remove('enabled');
		} else if (index < Reveal.getIndices().h && target) {
			dom.slides.removeChild(target);
			location.hash = '/' + parseInt(Reveal.getIndices().h - 1);
		} else if (index == Reveal.getIndices().h && target) {
			if (index == 0) {
				Reveal.next();
				document.querySelector('.navigate-left').classList.remove('enabled');
			} else Reveal.prev();
			dom.slides.removeChild(target);
			if (dom.wrapper.querySelectorAll('.slides > section').length == index) document.querySelector('.navigate-right').classList.remove('enabled');
		}
	};
	if (!firstSlide.show) {
		Reveal.remove(0);
	}
	if (!secondSlide.show) {
		Reveal.remove(1);
	}
	if (!thirdSlide.show) {
		Reveal.remove(2);
	}
	if (!fourthSlide.show) {
		Reveal.remove(3);
	}
});
Reveal.addEventListener('adminTeamProgress', function () {
	var currentTimer;
	adminSlide();
});
Reveal.addEventListener('bayanAgentProgressNew', function () {
	bayanAgentProgressNew();
});
Reveal.addEventListener('bos', function () {
	bosSlide();
});

Reveal.addEventListener('bayanAgentProgress', function () {
	bayanSlide();
});

Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				mouseWheel: false,
				showNotes: SLConfig.deck.share_notes,
				slideNumber: SLConfig.deck.slide_number,

				autoSlide: SLConfig.deck.auto_slide_interval || 0,
				autoSlideStoppable: true,

				rollingLinks: false,
				center: SLConfig.deck.center || false,
				loop: SLConfig.deck.should_loop || false,
				rtl: SLConfig.deck.rtl || false,

				transition: SLConfig.deck.transition,
				backgroundTransition: SLConfig.deck.background_transition,

				pdfMaxPagesPerSlide: 1
});

if (window.hljs) hljs.initHighlightingOnLoad();
