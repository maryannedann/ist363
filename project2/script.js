async function getLyrics(songTitle) {
    const token = 'YOUR_GENIUS_ACCESS_TOKEN';  // Replace with your Genius Access Token
    const baseUrl = 'https://api.genius.com';
    const searchUrl = `${baseUrl}/search?q=${encodeURIComponent(songTitle)}`;
  
    try {
      const response = await fetch(searchUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      const songPath = data.response.hits[0].result.path;  // Getting the song's URL
      const lyricsUrl = `${baseUrl}${songPath}`;
      const lyricsResponse = await fetch(lyricsUrl);
      const lyricsData = await lyricsResponse.json();
      const lyrics = lyricsData.response.song.lyrics_body;
      return lyrics;
    } catch (error) {
      console.error('Error fetching song lyrics:', error);
      return 'Lyrics not found.';
    }
  }

  async function getYouTubeVideos(songTitle) {
    const apiKey = 'YOUR_YOUTUBE_API_KEY';  // Replace with your YouTube API Key
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(songTitle)}&key=${apiKey}`;
  
    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      const videos = data.items.map(item => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.default.url
      }));
      return videos;
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return [];
    }
  }
  