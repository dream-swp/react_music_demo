export interface RankingResult {
    code: string
    playlist: Ranking
}

export interface Ranking extends Playlist {}

export interface Playlist {
    id: number
    name: string
    coverImgId: string
    coverImgUrl: string
    coverImgId_str: string
    adType: number
    userId: number
    createTime: number
    status: number
    opRecommend: boolean
    highQuality: boolean
    newImported: boolean
    updateTime: number
    trackCount: number
    specialType: number
    privacy: number
    trackUpdateTime: number
    commentThreadId: string
    playCount: number
    trackNumberUpdateTime: number
    subscribedCount: number
    cloudTrackCount: number
    ordered: boolean
    description: string
    tags: string[]
    updateFrequency: string
    backgroundCoverId: number
    backgroundCoverUrl: string
    titleImage: number
    titleImageUrl: string
    detailPageTitle: string
    englishTitle: string
    officialPlaylistType: string
    copied: boolean
    relateResType: string
    coverStatus: number
    mix: boolean
    subscribers: []
    creator: Creator
    tracks: Tracks[]
    videoIds: string
    videos: string
    trackIds: []
    bannedTrackIds: string
    mvResourceInfos: string
    shareCount: number
    commentCount: number
    remixVideo: string
    newDetailPageRemixVideo: string
    sharedUsers: string
    historySharedUsers: string
    gradeStatus: string
    score: string
    algTags: string
    distributeTags: []
    trialMode: number
    displayTags: string
    displayUserInfoAsTagOnly: boolean
    playlistType: string
    uiPlaylistType: string
    bizExtInfo: {}
    bizExtData: string
    promptedMgcInfo: string
    mixPodcastPlaylist: boolean
    podcastTrackCount: number
    mixInfo: string
    ToplistType: string
}

export interface Tracks {
    name: string
    id: number
    al: {
        id: number
        name: string
        picUrl: string
        tns: []
        pic_str: string
        pic: string
    }
}

export interface Creator {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    accountStatus: number
    gender: number
    city: number
    birthday: number
    userId: number
    userType: number
    nickname: string
    signature: string
    description: string
    detailDescription: string
    avatarImgId: string
    backgroundImgId: string
    backgroundUrl: string
    authority: number
    mutual: boolean
    expertTags: string
    experts: string
    djStatus: number
    vipType: number
    remarkName: string
    authenticationTypes: number
    avatarDetail: {
        userType: number
        identityLevel: number
        identityIconUrl: string
    }
    avatarImgIdStr: string
    backgroundImgIdStr: string
    anchor: boolean
    avatarImgId_str: string
}
