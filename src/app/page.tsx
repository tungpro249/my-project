"use client";
import React from 'react';
import { Layout,  Typography} from 'antd';
import Portfolio from './portfolio/page';
import { HeaderPage } from './components/layouts/Header';
import { FooterPage } from './components/layouts/Footer';

export default function App() {
  return (
    <Layout>
      <HeaderPage />
      <Portfolio />
      <FooterPage />
    </Layout>
  );
}
