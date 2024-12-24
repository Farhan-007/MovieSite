export const Vidsrc = ({src}) => {
  return (
        <iframe
            src={src}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
            }}
            allowFullScreen
            allowAutoPlay
        />
    )
}