import React from 'react';

export default function SmoothScroll() {
  return window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
