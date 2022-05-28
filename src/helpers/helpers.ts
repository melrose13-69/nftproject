export const getTimeLength = (s: number): string => {
  const payload = { min: '0', sec: '0' }
  const secondsFromAudio = s
  const minutesFromAudio = secondsFromAudio / 60
  const [minute]: string[] = String(minutesFromAudio).split('.')
  const secondInFixedMinute = +minute * 60

  payload.min = +minute >= 10 ? minute : `0${minute}`
  const outputSec = (secondsFromAudio - +secondInFixedMinute).toFixed()

  payload.sec = outputSec.length === 1 ? `0${outputSec}` : outputSec

  if (payload.sec === '60') {
    const [a, b] = payload.min.split('')

    const newMinutes = a === '0' ? `0${+b + 1}` : `${+a + 1}${b}`

    return `${newMinutes}:00`
  }

  return `${payload.min}:${payload.sec}`
}

export const getSongNameFromSrc = (src: string): string => {
  const srcSplit = src.split('/')
  const [compositor, song] = srcSplit[srcSplit.length - 1].split('-')
  const [songName] = song.split('.')

  return `${compositor.replaceAll('_', ' ')} - ${songName.replaceAll('_', ' ')}`
}

export const getProgressBarPercent = (currentTime: number, duration: number): string => {
  return `${currentTime / duration * 100}%`
}