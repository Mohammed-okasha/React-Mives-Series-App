const VideoItem = ({ video }) => {
  return (
    <div className="video_item">
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        title="video"
        width="100%"
      />
    </div>
  );
};

export default VideoItem;
