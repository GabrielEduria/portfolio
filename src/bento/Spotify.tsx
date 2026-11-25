// Spotify's own player for my playlist (the same one linked in Connect)
const Spotify = () => {
  return (
    <div className="p-3">
      <h2 className="text-2xl font-bold mb-3">On Repeat</h2>
      <iframe
        title="Gabriel's Spotify playlist"
        src="https://open.spotify.com/embed/playlist/126SjKGW3wClaHWE244IFZ?utm_source=generator&theme=0"
        width="100%"
        height="152"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-xl border-0"
      />
    </div>
  );
};

export default Spotify;
