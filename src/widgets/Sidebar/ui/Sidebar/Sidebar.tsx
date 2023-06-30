
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setcollapsed] = useState(false)
    const onToggle = () => {
        setcollapsed(prev => !prev)
    }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
        <ThemeSwitcher/>
        </div>
    </div>
  );
};