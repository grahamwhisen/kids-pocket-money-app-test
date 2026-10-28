// Local quotes and celebration artwork require no API keys or network requests.
const localQuotes = [
  "Small steps can build good habits.",
  "A plan helps turn a goal into action.",
  "Learning takes practice and patience.",
  "Notice the progress you make today."
];
const quote = $("#quote");
quote.text(`"${localQuotes[Math.floor(Math.random() * localQuotes.length)]}"`);

// Keep the existing async interface used by kidDashboard.js.
async function callGiphyApi() {
  const celebrationSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 240\" role=\"img\" aria-labelledby=\"title desc\">\n  <title id=\"title\">Well done!</title>\n  <desc id=\"desc\">A cheerful star and falling confetti celebrate a completed task.</desc>\n  <style>\n    .confetti { animation: fall 1.8s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }\n    .delay { animation-delay: .6s; }\n    @keyframes fall { 0%, 100% { transform: translateY(-8px) rotate(-12deg); } 50% { transform: translateY(12px) rotate(12deg); } }\n    @media (prefers-reduced-motion: reduce) { .confetti { animation: none; } }\n  </style>\n  <rect x=\"4\" y=\"4\" width=\"352\" height=\"232\" rx=\"28\" fill=\"#eefaf5\"/>\n  <g class=\"confetti\" fill=\"#6775de\">\n    <rect x=\"58\" y=\"50\" width=\"10\" height=\"22\" rx=\"3\"/>\n    <rect x=\"282\" y=\"74\" width=\"10\" height=\"22\" rx=\"3\"/>\n    <circle cx=\"92\" cy=\"123\" r=\"6\"/>\n  </g>\n  <g class=\"confetti delay\" fill=\"#e9799d\">\n    <rect x=\"92\" y=\"34\" width=\"20\" height=\"9\" rx=\"3\"/>\n    <rect x=\"252\" y=\"120\" width=\"20\" height=\"9\" rx=\"3\"/>\n    <circle cx=\"266\" cy=\"43\" r=\"6\"/>\n  </g>\n  <path d=\"M180 47 197 82 236 88 208 115 215 154 180 136 145 154 152 115 124 88 163 82Z\" fill=\"#ffc94d\"/>\n  <circle cx=\"168\" cy=\"102\" r=\"4\" fill=\"#364354\"/>\n  <circle cx=\"192\" cy=\"102\" r=\"4\" fill=\"#364354\"/>\n  <path d=\"M167 116 Q180 128 193 116\" fill=\"none\" stroke=\"#364354\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <text x=\"180\" y=\"199\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"30\" font-weight=\"700\" fill=\"#245744\">Well done!</text>\n</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(celebrationSvg);
}
