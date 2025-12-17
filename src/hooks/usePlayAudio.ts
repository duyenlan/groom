'use client';

import { useEffect, useRef, useState } from 'react';

export const usePlaylistAudio = (playlist: string[]) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  // Shuffle playlist 1 lần
  const shuffled = useRef([...playlist].sort(() => Math.random() - 0.5));

  useEffect(() => {
    const audio = new Audio(shuffled.current[0]);
    audioRef.current = audio;

    audio.onended = () => {
      setIndex((i) => (i + 1) % shuffled.current.length);
    };

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Khi đổi bài
  useEffect(() => {
    try {
      if (!audioRef.current) return;

      audioRef.current.src = shuffled.current[index];
      audioRef.current?.play();
      setPlaying(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      
    }
  }, [index]);

  const play = async () => {
    try {
      if (!audioRef.current) return;
      await audioRef.current?.play();
      setPlaying(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {}
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlaying(false);
  };

  const toggle = async () => {
    try {
      if (playing) pause();
      else await play();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      
    }
  };

  return {
    audioRef,
    playing,
    play,
    pause,
    toggle,
  };
};
