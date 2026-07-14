Reveal.initialize({
  embedded: false,
  hash: true,
  controls: true,
  progress: true,
  center: false,
  transition: "fade",
  backgroundTransition: "fade",
  width: 1280,
  height: 720,
  margin: 0.03,
  minScale: 0.2,
  maxScale: 1.5,
  slideNumber: "c/t",
  showSlideNumber: "all",
  pdfSeparateFragments: false,
  plugins: typeof RevealSearch === "undefined" ? [] : [RevealSearch]
});
