// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { MoonStars, Sun } from 'react-bootstrap-icons';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      className="text-white"
      isIconOnly
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant="light"
    >
      {theme === 'dark' ? <MoonStars /> : <Sun className="text-lg" />}
    </Button>
  );
};

export default ThemeSwitcher;
