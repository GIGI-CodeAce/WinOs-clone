function urlImg(name){
    return `https://raw.githubusercontent.com/GIGIsOtherStuff/WinOSmedia/main/Files/deskAppIcons/${name}.png`
}

const AppsInfo = [
    {
        id: 1,
        name: 'Calculator',
        img: urlImg('calculator')
    },
    {
        id: 2,
        name: 'Chrome',
        img: urlImg('chrome')
    },
    {
        id: 3,
        name: 'Folder',
        img: urlImg('blankFolder')
    },
    {
        id: 4,
        name: 'Spotify',
        img: urlImg('spotify')
    },
    {
        id: 5,
        name: 'Notepad',
        img: urlImg('note')
    },
    {
        id: 6,
        name: 'Settings',
        img: urlImg('settings')
    },
    {
        id: 7,
        name: 'Recycle bin',
        img: urlImg('trash')
    }
]

export default AppsInfo;