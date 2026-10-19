export function formatCount(count: number = 0) {
    if (count > 100000) {
        return Math.floor(count / 100000) + '万'
    }
    return count + ''
}

export function getImageSize(imageUrl?: string, width: number = 140, height: number = width) {
    if (imageUrl == null || imageUrl.trim().length === 0) {
        return ''
    }
    return imageUrl + `?param=${width}x${height}`
}
