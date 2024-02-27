const LoomVideo = ({ src }: { src: string }) => {
  return (
    <div className="video-wrapper">
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        title="Loom Video"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default LoomVideo;
