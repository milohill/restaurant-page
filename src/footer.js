import github from './images/github.svg';

export default function addFooter() {
  const footer = document.createElement('footer');
  const a = document.createElement('a');
  const img = document.createElement('img');

  a.href = "https://github.com/milohill";
  a.target = "_blank";
  img.src = github;

  a.appendChild(img);
  footer.appendChild(a);

  return footer;
}
