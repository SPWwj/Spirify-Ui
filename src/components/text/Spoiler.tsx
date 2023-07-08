import React, { useState } from 'react';
import styles from './Spoiler.module.scss';
import ParticlesComponents from 'components/ParticlesComponents';

interface SpoilerProps {
  text: string;
}

const Spoiler: React.FC<SpoilerProps> = ({ text }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={styles.spoilerContainer} onClick={() => setIsRevealed(!isRevealed)}>
      <span className={styles.spoilerText}>{text}</span>
      {!isRevealed && <div className={styles.spoilerOverlay}><ParticlesComponents /></div>}
    </div>
  );
};

export default Spoiler;
