export const getGifs = async (query) => {
    const giftLimitArray = 1
    const apiKey = 'mBRaEw99upQvwn41fIxDNUdzOtGT8jGT';
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${query}&limit=${giftLimitArray}`)
    const {data} = await response.json()
    const gifs = data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.fixed_height.url
    }))
    console.log(gifs)
    return gifs
  }