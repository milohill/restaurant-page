import load from './page-load.js';
import './styles/style.css';

const content = document.querySelector('#content');

const initialPageContent = load();

content.appendChild(initialPageContent);
