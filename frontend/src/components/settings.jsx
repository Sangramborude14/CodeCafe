import React from 'react';
import { useSettings } from '../context/SettingsContext';

export function Settings() {
    const { 
        theme, setTheme,
        palette, setPalette,
        fontSize, setFontSize,
        fontFamily, setFontFamily 
    } = useSettings();

    return (
        <div id="settings-div" className="glass-panel">
            <h1>Theme & Preferences</h1>
            
            <div className="settings-group">
                <label>Mode</label>
                <div className="btn-group">
                    <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>Light</button>
                    <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>Dark</button>
                </div>
            </div>

            <div className="settings-group">
                <label>Color Palette</label>
                <div className="btn-group">
                    <button className={palette === 'warm' ? 'active' : ''} onClick={() => setPalette('warm')}>Warm</button>
                    <button className={palette === 'cool' ? 'active' : ''} onClick={() => setPalette('cool')}>Cool</button>
                </div>
            </div>

            <div className="settings-group">
                <label>Font Size</label>
                <div className="btn-group">
                    <button className={fontSize === 'small' ? 'active' : ''} onClick={() => setFontSize('small')}>Small</button>
                    <button className={fontSize === 'medium' ? 'active' : ''} onClick={() => setFontSize('medium')}>Medium</button>
                    <button className={fontSize === 'large' ? 'active' : ''} onClick={() => setFontSize('large')}>Large</button>
                </div>
            </div>

            <div className="settings-group">
                <label>Font Family</label>
                <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="glass-select">
                    <option value="system">System Default</option>
                    <option value="serif">Serif (Times New Roman)</option>
                    <option value="mono">Monospace (VT323/Courier)</option>
                </select>
            </div>
        </div>
    );
}
