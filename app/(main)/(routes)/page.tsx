'use client'

import { useState, useEffect } from 'react';

import ProductMain from '@/components/product/product-main'

export default function Home() {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  });

  if (!isMounted) {
    return null;
  }

  return (
    <div className='h-full w-full min-h-screen '>
      <ProductMain />
    </div>
  )
}
