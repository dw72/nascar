import axios from 'axios'
import HTMLParser from 'fast-html-parser'

const PREMIO_URL = 'https://www.premio.pl'

export async function handler(event, context) {
  const { data } = await axios.get(PREMIO_URL)
  const page = HTMLParser.parse(data, {})
  const banners = page.querySelectorAll('#carousel-top-carousel .item .banner')
  const slides = banners.map(item => {
    const link = item.querySelector('a')
    const image = item.querySelector('img')
    return {
      url: link ? link.attributes.href : '',
      img: image.attributes.src,
      alt: image.attributes.alt
    }
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(slides)
  }
}
