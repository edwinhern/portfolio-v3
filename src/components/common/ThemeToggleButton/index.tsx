import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  if (theme === 'uninitialized') return null;

  return (
    <Button
      onClick={toggleTheme}
      variant='outline'
      size='icon'
      aria-label='Toggle Theme'
      title='Toggle Theme'
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
};

export default ThemeToggleButton;
