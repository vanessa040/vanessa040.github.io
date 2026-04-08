/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
