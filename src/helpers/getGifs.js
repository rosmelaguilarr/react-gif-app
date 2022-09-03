export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=X9DP6o0FICF6HG8eGpaBz6U9CtYWIWMx&q=${category}&limit=5`
  const res = await fetch(url)
  const { data } = await res.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  
  return gifs
}