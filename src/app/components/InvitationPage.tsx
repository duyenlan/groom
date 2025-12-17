'use client';

import { usePlaylistAudio } from '@/hooks/usePlayAudio';
import { useState } from 'react';
import { OpeningOverlay } from './OpeningOverlay';
import { MusicButton } from './music-button';

export default function InvitationPage() {
  const playlist = [
    '/music/Angel_Baby.mp3',
    '/music/247_365_elijah_woods.mp3',
    '/music/UntilIFoundYou.mp3',
  ];

  const { playing, toggle, play } = usePlaylistAudio(playlist);
  const [started, setStarted] = useState(false);

  const handleStart = async () => {
    await play(); // ✅ user gesture
    setStarted(true);
  };

  return (
    <>
      <OpeningOverlay visible={!started} onStart={handleStart} />

      <MusicButton playing={playing} onToggle={toggle} />

      {/* Nội dung thiệp */}
    </>
  );
}
