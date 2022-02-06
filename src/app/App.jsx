import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import DashboardPage from './features/clippings/dashboard/DashboardPage';
import DeletedPage from './features/clippings/highlights/deleted/DeletedPage';
import FavouritesPage from './features/clippings/highlights/favourites/FavouritesPage';
import HighlightsPage from './features/clippings/highlights/highlights/HighlightsPage';
import ImportPage from './features/clippings/import/ImportPage';
import Demo from './features/demo/Demo';
import Layout from './layout/Layout';
import store from './store';

const AppContent = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/import" element={<ImportPage />} />
                <Route path="/highlights">
                    <Route path="" element={<HighlightsPage />} />
                    <Route path=":bookTitle" element={<HighlightsPage />} />
                </Route>
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/deleted" element={<DeletedPage />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/" element={<DashboardPage />} />
            </Routes>
        </Layout>
    );
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppContent />
            </Router>
        </Provider>
    );
}

export default App;
export { AppContent };
