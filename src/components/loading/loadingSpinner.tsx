import { styles } from './styles';

const LoadingSpinner = () => (
  <div style={styles.loadingContainer}>
    <video
      src="/assets/loadingmain.webm"
      autoPlay
      loop
      muted
      style={styles.loadingVideo}
    />
  </div>
);

export default LoadingSpinner;
