import React from 'react';
import appStore from '../../assets/app-store.png'; // We'll add this image to the assets folder

interface AppStoreButtonsProps {
  className?: string;
  variant?: 'light' | 'dark';
  appType?: 'customer' | 'helm' | 'tocca';
}

export function AppStoreButtons({
  className = '',
  variant = 'light',
  appType = 'customer',
}: AppStoreButtonsProps) {
  const baseButtonClass = 'transition-opacity hover:opacity-90';

  const getStoreLinks = () => {
    switch (appType) {
      case 'helm':
        return {
          appStore: 'https://apps.apple.com/app/id6736836133',
          playStore: 'https://play.google.com/store/apps/details?id=com.Lumeth.Helm&pcampaignid=web_share',
        };
      case 'tocca':
        return {
          appStore: 'https://apps.apple.com/app/id6736836696',
          playStore: 'https://play.google.com/store/apps/details?id=com.lumeth.worker&pcampaignid=web_share',
        };
      default: // customer
        return {
          appStore: 'https://apps.apple.com/app/id6737151440',
          playStore: 'https://play.google.com/store/apps/details?id=com.Lumeth.Customer&pcampaignid=web_share',
        };
    }
  };

  const { appStore: appStoreLink, playStore } = getStoreLinks();

  return (
    <div className={`flex flex-wrap gap-4 items-center ${className}`}>
      {/* App Store Button */}
      <a
        href={appStoreLink}
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-[40px] w-auto transition-transform hover:scale-105"
        />
      </a>

      {/* Play Store Button */}
      <a
        href={playStore}
        className={baseButtonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://play.google.com/intl/en_us/badges/static/images/badges/${
            variant === 'light' ? 'en_badge_web_generic.png' : 'en_badge_web_generic.png'
          }`}
          alt="Get it on Google Play"
          className="h-[40px] w-auto transition-transform hover:scale-105"
        />
      </a>
    </div>
  );
}