import {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from "redux-persist";
import App from './App';
import Loader from "./components/Loader/Loader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const persist = persistStore(store);

root.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <PersistGate persistor={persist}>
          <App />
        </PersistGate>
      </Suspense>
    </Provider>
  </HashRouter>
);
