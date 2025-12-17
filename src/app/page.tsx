'use client';

import { useState } from 'react';
import { Hero } from './(sections)/hero';
import { LoveStorySection } from './(sections)/LoveStorySection';
import { WeddingCalendarSection } from './(sections)/WeddingCalendarSection';
import { GroomMapSection } from './(sections)/GroomMapSection';
import { QRSection } from './(sections)/QRSection';
import { ThankYouSection } from './(sections)/ThankYouSection';
import { usePlaylistAudio } from '@/hooks/usePlayAudio';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { MusicButton } from './components/music-button';
import Footer from '@/components/Footer';

export default function InvitationPage() {
  const [opened, setOpened] = useState(false);

  const playlist = [
    '/music/Angel_Baby.mp3',
    '/music/247_365_elijah_woods.mp3',
    '/music/UntilIFoundYou.mp3',
  ];

  const { playing, toggle, play } = usePlaylistAudio(playlist);

  return (
    <>
      {!opened && (
        <EnvelopeIntro
          onOpen={async () => {
            await play(); // 🎵 user gesture → nhạc chạy hợp lệ
            setOpened(true);
          }}
        />
      )}

      {opened && (
        <>
          <MusicButton playing={playing} onToggle={toggle} />

          {/* 🌸 Hoa mai rơi nếu có */}
          {/* <FallingFlowers /> */}

          {/* Các section bình thường */}
          <Hero />
          <WeddingCalendarSection />
          <LoveStorySection />
          <GroomMapSection />
          <QRSection />
          <ThankYouSection />
          <Footer />
        </>
      )}
    </>
  );
}
