import Layout from "@/components/Layout";
import React from 'react';
import HomeHero from "@/components/Home/Hero";

export default function Home() {
  return (
    <Layout footer={false}>
      <HomeHero />
    </Layout>
  );
}