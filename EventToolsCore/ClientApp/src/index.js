import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MenuService } from './services/MenuService';
import { LinkMenuItem } from './data/menuItems';
import { UserService } from './services/UserService';
import { SearchService } from './services/SearchService';
import { EntityFormatService } from './services/EntityFormatService';
import { RendererResolutionService } from './services/RendererResolutionService';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const menuService = new MenuService();
menuService.addMenuItem(new LinkMenuItem('bob', 'Choose this', 'some description', '/search'));

const userService = new UserService();
const entityFormatService = new EntityFormatService();
const searchService = new SearchService();
const rendererResolutionService = new RendererResolutionService();

ReactDOM.render(
    <Provider menuService={menuService} userService={userService} entityFormatService={entityFormatService} searchService={searchService} rendererResolutionService={rendererResolutionService}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </Provider>,
  rootElement);

registerServiceWorker();
