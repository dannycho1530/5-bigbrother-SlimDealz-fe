export const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add background color if needed
    zIndex: 9999 // Adjust z-index if needed
  },
  loadingVideo: {
    maxWidth: '80%', // Set max width of the video
    maxHeight: '80%' // Set max height of the video
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  },
  productVideo: {
    width: '50%'
  }
};
