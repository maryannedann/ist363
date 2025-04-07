document.getElementById('fetchBtn').addEventListener('click', fetchData);
document.getElementById('fetchVideosBtn').addEventListener('click', fetchYouTube);

async function fetchData() {
  const songTitle = document.getElementById('song_title').value.trim();
  const artistName = document.getElementById('artist_name').value.trim();

  if (!songTitle || !artistName) {
    document.getElementById('lyrics').innerHTML = '<p>Please enter both artist and song name.</p>';
    return;
  }

  const lyrics = await getLyrics(songTitle, artistName);
  document.getElementById('lyrics').innerHTML = `<pre>${lyrics}</pre>`;
}

async function getLyrics(songTitle, artistName = '') {
  const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(songTitle)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.lyrics) {
      return data.lyrics;
    } else {
      return 'Lyrics not found.';
    }
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return 'Error fetching lyrics.';
  }
}

async function fetchYouTube() {
  const songTitle = document.getElementById('video_song_title').value.trim();
  const apiKey = 'AIzaSyDVxblzcymkgcGlx3XoSreDJw5R97d3Z2I'; 
  if (!songTitle) {
    document.getElementById('videos').innerHTML = '<p>Please enter a song title.</p>';
    return;
  }

  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(songTitle)}&type=video&maxResults=3&key=${apiKey}`;

  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = '';

    if (data.items.length === 0) {
      videosContainer.innerHTML = '<p>No videos found.</p>';
      return;
    }

    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;

      const videoDiv = document.createElement('div');
      videoDiv.innerHTML = `
        <h3>${title}</h3>
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
          <img src="${thumbnail}" alt="${title}" />
        </a>
      `;
      videosContainer.appendChild(videoDiv);
    });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    document.getElementById('videos').innerHTML = `<p>Error fetching videos.</p>`;
  }
}
