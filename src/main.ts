import { createApp } from 'vue';
import './styles/main.scss';
import App from './App.vue';
import { getEffectStyles } from './effects';

// Inject effect styles
const styleTag = document.createElement('style');
styleTag.textContent = getEffectStyles();
document.head.appendChild(styleTag);

createApp(App).mount('#app');
