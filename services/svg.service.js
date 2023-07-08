const KeepSvgs = {
    lightBolb: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>`,
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>`,
    archive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
    bars: `<svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,
    dots: `<svg class="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>`,
    settings: `<svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>`,
    colorPicker: '<svg class="hxXJme-LgbsSe-hxXJme-edvN0e" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path class="hxXJme-Jt5cK" d="m0 0h18v18h-18z"></path><path class="gk6SMd-Jt5cK" d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z"></path></svg>',
    vColorPicker: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="hxXJme-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480.124 578Q514 578 538 553.876t24-58Q562 462 537.876 438t-58-24Q446 414 422 438.124t-24 58Q398 530 422.124 554t58 24ZM480 864q121-111 178.5-200.699Q716 573.602 716 504q0-109-68-176.5T480 260q-100 0-168 67.5T244 504q0 69.602 57.5 159.301Q359 753 480 864Zm0 112Q319 837 239.5 721T160 504.2q0-151.2 96-239.7T480 176q128 0 224 88.5t96 239.7Q800 605 720.5 721 641 837 480 976Zm0-472Z"/></svg>',
    colorPickerNone: '<svg width="20" height="20" viewBox="0 0 24 24" focusable="false" class="zTETae-hxXJme-LgbsSe-Bz112c NMm5M"><path d="M21.19 21.19l-3.06-3.06-1.43-1.43-8.3-8.3L7 7 2.81 2.81 1.39 4.22l4.25 4.25A8.056 8.056 0 0 0 4.01 13H4c0 4.42 3.58 8 8 8 1.74 0 3.35-.57 4.66-1.51l3.12 3.12 1.41-1.42zM12 19c-3.22 0-5.86-2.55-5.99-5.74l.01-.19c.04-1.14.42-2.25 1.06-3.18l8.16 8.16c-.95.6-2.05.95-3.24.95zm0-14.17l4.25 4.24a6.014 6.014 0 0 1 1.74 4.01l.01.17c-.02.56-.13 1.11-.3 1.62l1.53 1.53c.49-1.03.77-2.18.77-3.4h-.01a7.975 7.975 0 0 0-2.33-5.35L12 2 8.41 5.58 9.83 7 12 4.83z"></path></svg>',
    checkBox: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M428.283 725.978 669.87 485.152l-57.457-57.456-184.13 182.891-82.131-80.891-57.456 57.456 139.587 138.826ZM218.87 920.131q-34.483 0-58.742-24.259t-24.259-58.742V314.87q0-34.483 24.259-58.742t58.742-24.259h522.26q34.483 0 58.742 24.259t24.259 58.742v522.26q0 34.483-24.259 58.742t-58.742 24.259H218.87Zm0-83.001h522.26V314.87H218.87v522.26Zm0-522.26v522.26-522.26Z"/></svg>',
    img: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M218.87 920.131q-34.483 0-58.742-24.609t-24.259-58.392V314.87q0-33.783 24.259-58.392t58.742-24.609h522.26q34.483 0 58.742 24.609t24.259 58.392v522.26q0 33.783-24.259 58.392t-58.742 24.609H218.87Zm0-83.001h522.26V314.87H218.87v522.26Zm41.065-66.26h440.13L552 571.217l-108 144-72-96L259.935 770.87Zm-41.065 66.26V314.87v522.26Z"/></svg>`,
    pencil2: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>`,
    paint: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm.8 3.2h10q.35 0 .575-.225.225-.225.225-.575v-1.7H6.2v1.7q0 .35.225.575.225.225.575.225Zm-.8-2.5v2.5V12.95Z"/></svg>',
    text1: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.3 7.65h7.05v-.7H10.3Zm0 2.7h7.05v-.7H10.3Zm0 2.7h4.05v-.7H10.3ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 6.1V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Zm.7-1.7L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/></svg>',
    text2: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M170.87 872.131q-34.483 0-58.742-24.271t-24.259-58.77V362.586q0-34.499 24.259-58.608 24.259-24.109 58.742-24.109h618.26q34.483 0 58.742 24.271t24.259 58.77v426.504q0 34.499-24.259 58.608-24.259 24.109-58.742 24.109H170.87ZM480 634.283l-309.13-179V789.13h618.26V455.283l-309.13 179Zm0-92.413 309.13-179H170.87l309.13 179Zm-309.13-86.587V362.87v426.26-333.847Z"/></svg>',
    more: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiAgZmlsbD0iIzAwMCI+CiAgPHBhdGggZD0ibTkgNS41YzEgMCAxLjgtMC44IDEuOC0xLjhzLTAuOC0xLjctMS44LTEuNy0xLjggMC44LTEuOCAxLjggMC44IDEuNyAxLjggMS43em0wIDEuN2MtMSAwLTEuOCAwLjgtMS44IDEuOHMwLjggMS44IDEuOCAxLjggMS44LTAuOCAxLjgtMS44LTAuOC0xLjgtMS44LTEuOHptMCA1LjNjLTEgMC0xLjggMC44LTEuOCAxLjhzMC44IDEuNyAxLjggMS43IDEuOC0wLjggMS44LTEuOC0wLjgtMS43LTEuOC0xLjd6Ii8+Cjwvc3ZnPgo=',
    deleteForever: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=',
    add: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAtNmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTAgN2MtMi42NyAwLTggMS4zNC04IDR2M2gxNnYtM2MwLTIuNjYtNS4zMy00LTgtNHptNiA1SDN2LS45OUMzLjIgMTYuMjkgNi4zIDE1IDkgMTVzNS44IDEuMjkgNiAydjF6bTMtNHYtM2gtM1Y5aDNWNmgydjNoM3YyaC0zdjNoLTJ6Ii8+Cjwvc3ZnPgo=`,
    plusBell: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTMgOWgtMnYySDl2MmgydjJoMnYtMmgydi0yaC0yeiIvPgogIDxwYXRoIGQ9Ik0xOCAxN3YtNmMwLTMuMDctMS42My01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42NCA1LjM2IDYgNy45MiA2IDExdjZINHYyaDE2di0yaC0yem0tMiAwSDh2LTZjMC0yLjQ4IDEuNTEtNC41IDQtNC41czQgMi4wMiA0IDQuNXY2em0tNCA1YzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjkgMiAyIDJ6Ii8+Cjwvc3ZnPgo=`,
    colorPallet: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg==`,
    bookMark: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==`,
    bookMarkEmpty: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==`,
    listDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K`,
    gridDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMywzIEwxMCwzIEMxMC41NSwzIDExLDMuNDUgMTEsNCBMMTEsMTAgQzExLDEwLjU1IDEwLjU1LDExIDEwLDExIEwzLDExIEMyLjQ1LDExIDIsMTAuNTUgMiwxMCBMMiw0IEMyLDMuNDUgMi40NSwzIDMsMyBaIE0zLDEzIEwxMCwxMyBDMTAuNTUsMTMgMTEsMTMuNDUgMTEsMTQgTDExLDIwIEMxMSwyMC41NSAxMC41NSwyMSAxMCwyMSBMMywyMSBDMi40NSwyMSAyLDIwLjU1IDIsMjAgTDIsMTQgQzIsMTMuNDUgMi40NSwxMyAzLDEzIFogTTE0LDMgTDIxLDMgQzIxLjU1LDMgMjIsMy40NSAyMiw0IEwyMiwxMCBDMjIsMTAuNTUgMjEuNTUsMTEgMjEsMTEgTDE0LDExIEMxMy40NSwxMSAxMywxMC41NSAxMywxMCBMMTMsNCBDMTMsMy40NSAxMy40NSwzIDE0LDMgWiBNMTQsMTMgTDIxLDEzIEMyMS41NSwxMyAyMiwxMy40NSAyMiwxNCBMMjIsMjAgQzIyLDIwLjU1IDIxLjU1LDIxIDIxLDIxIEwxNCwyMSBDMTMuNDUsMjEgMTMsMjAuNTUgMTMsMjAgTDEzLDE0IEMxMywxMy40NSAxMy40NSwxMyAxNCwxMyBaIE05LDkgTDksNSBMNCw1IEw0LDkgTDksOSBaIE05LDE5IEw5LDE1IEw0LDE1IEw0LDE5IEw5LDE5IFogTTIwLDkgTDIwLDUgTDE1LDUgTDE1LDkgTDIwLDkgWiBNMjAsMTkgTDIwLDE1IEwxNSwxNSBMMTUsMTkgTDIwLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJncmlkX3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPgo=`,
    search: `<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>`,
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M197.694 915.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V293.694q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h564.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v564.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V731.153H623.999q-22.923 39.616-62.001 60.923-39.078 21.308-82.076 21.308-42.999 0-81.999-21.308-38.999-21.307-61.922-60.923H185.385v127.153q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM480.219 768q40.012 0 72.435-23.115T605 685.77h169.615V293.694q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H197.694q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847V685.77H355q19.923 36 52.565 59.115Q440.206 768 480.219 768ZM197.694 870.615h-12.309 589.23H197.694Z"/></svg>',
    home: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M264 840h109.847V602.308h212.306V840H696V492L480 329.231 264 492v348Zm-51.999 51.999V466.001L480 264.233l267.999 201.768v425.998H534.154V654.306H425.846v237.693H212.001ZM480 584.615Z"/></svg>`,
    pin: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m624 576 96 96v72H516v228l-36 36-36-36V744H240v-72l96-96V312h-48v-72h384v72h-48v264Z"/></svg>`,
    unPin: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m624 576 96 96v72H516v228l-36 36-36-36V744H240v-72l96-96V312h-48v-72h384v72h-48v264Zm-282 96h276l-66-66V312H408v294l-66 66Zm138 0Z"/></svg>`,
    colorPallet1: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480 960q-79 0-149-30t-122.5-82.5Q156 795 126 725T96 576q0-80 30.5-149.5t84-122Q264 252 335.5 222T488 192q78 0 146.5 27T754 293q51 47 80.5 110T864 538q0 96-67 163t-163 67h-68q-8 0-14 5t-6 13q0 15 15 25t15 53q0 37-27 66.5T480 960Zm0-384Zm-216 36q25 0 42.5-17.5T324 552q0-25-17.5-42.5T264 492q-25 0-42.5 17.5T204 552q0 25 17.5 42.5T264 612Zm120-144q25 0 42.5-17.5T444 408q0-25-17.5-42.5T384 348q-25 0-42.5 17.5T324 408q0 25 17.5 42.5T384 468Zm192 0q25 0 42.5-17.5T636 408q0-25-17.5-42.5T576 348q-25 0-42.5 17.5T516 408q0 25 17.5 42.5T576 468Zm120 144q25 0 42.5-17.5T756 552q0-25-17.5-42.5T696 492q-25 0-42.5 17.5T636 552q0 25 17.5 42.5T696 612ZM480 888q11 0 17.5-8.5T504 864q0-16-15-28t-15-50q0-38 26.5-64t64.5-26h69q66 0 112-46t46-112q0-115-88.5-194.5T488 264q-134 0-227 91t-93 221q0 130 91 221t221 91Z"/></svg>`,
    unPin1: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m640 576 80 80v80H520v240l-40 40-40-40V736H240v-80l80-80V296h-40v-80h400v80h-40v280Zm-286 80h252l-46-46V296H400v314l-46 46Zm126 0Z"/></svg>`,
    pin1: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m640 576 80 80v80H520v240l-40 40-40-40V736H240v-80l80-80V296h-40v-80h400v80h-40v280Z"/></svg>`,
    copy1: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 960q-29.7 0-50.85-21.15Q144 917.7 144 888V336h72v552h456v72H216Zm144-144q-29.7 0-50.85-21.15Q288 773.7 288 744V264q0-29.7 21.15-50.85Q330.3 192 360 192h384q29.7 0 50.85 21.15Q816 234.3 816 264v480q0 29.7-21.15 50.85Q773.7 816 744 816H360Zm0-72h384V264H360v480Zm0 0V264v480Z"/></svg>`,
    audio: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480 656q-50 0-85-35t-35-85V296q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520V813q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480 736q83 0 141.5-58.5T680 536h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520 536V296q0-17-11.5-28.5T480 256q-17 0-28.5 11.5T440 296v240q0 17 11.5 28.5T480 576Z"/></svg>`,
    pencil10: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M206.152 852.239h55.174l333.609-333.848-55.174-55.173-333.609 333.847v55.174ZM777.957 460.63 597.761 280.196l42.304-42.544q28.348-28.587 67.152-28.706 38.805-.12 67.392 28.228l51.63 51.63q25.913 25.435 25.196 62.25-.718 36.816-25.674 61.772l-47.804 47.804Zm-58.761 58.761L298.761 939.826H118.326V759.63l420.435-420.434 180.435 180.195Zm-151.109-28.087-28.326-28.086 55.174 55.173-26.848-27.087Z"/></svg>`,
    stopRecord: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M204 936q-35 0-59.5-24.5T120 852V300q0-35 24.5-59.5T204 216h552q35 0 59.5 24.5T840 300v552q0 35-24.5 59.5T756 936H204Z" style="fill: rgb(255, 0, 0);"/></svg>`,
    menuFilter: `<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36"><path d="M149.825 776Q137 776 128.5 767.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 606 128.5 597.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 436 128.5 427.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290 776v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z" style="fill: rgb(255, 255, 255);"/></svg>`,
    imageFilter: `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm56-157h489L578 583 446 754l-93-127-117 152Z" style="fill: rgb(255, 255, 255);"/></svg>`,
    pencilFilter: `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M794 390 666 262l42-42q17-17 42.5-16.5T793 221l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Z" style="fill: rgb(255, 255, 255);"/></svg>`,
    listSide: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="30"><path d="M160 776q-17 0-28.5-11.5T120 736q0-17 11.5-28.5T160 696q17 0 28.5 11.5T200 736q0 17-11.5 28.5T160 776Zm0-160q-17 0-28.5-11.5T120 576q0-17 11.5-28.5T160 536q17 0 28.5 11.5T200 576q0 17-11.5 28.5T160 616Zm0-160q-17 0-28.5-11.5T120 416q0-17 11.5-28.5T160 376q17 0 28.5 11.5T200 416q0 17-11.5 28.5T160 456Zm120 320v-80h560v80H280Zm0-160v-80h560v80H280Zm0-160v-80h560v80H280Z"/></svg>',
    map: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="30"><path d="m600 936-240-84-186 72q-20 8-37-4.5T120 886V326q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812 864l-212 72Zm-40-98V370l-160-56v468l160 56Zm80 0 120-40V324l-120 46v468Zm-440-10 120-46V314l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>',
    imgSide: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="30"><path d="M218.87 920.131q-34.483 0-58.742-24.609t-24.259-58.392V314.87q0-33.783 24.259-58.392t58.742-24.609h522.26q34.483 0 58.742 24.609t24.259 58.392v522.26q0 33.783-24.259 58.392t-58.742 24.609H218.87Zm0-83.001h522.26V314.87H218.87v522.26Zm41.065-66.26h440.13L552 571.217l-108 144-72-96L259.935 770.87Zm-41.065 66.26V314.87v522.26Z"/></svg>`,
    audioSide: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="30"><path d="M480 656q-50 0-85-35t-35-85V296q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520V813q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480 736q83 0 141.5-58.5T680 536h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520 536V296q0-17-11.5-28.5T480 256q-17 0-28.5 11.5T440 296v240q0 17 11.5 28.5T480 576Z"/></svg>`,
    pencilSide: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>`,
}

const mailSvgs = {
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm0-72h528V696H632q-23 43-63.5 69.5T480 792q-49 0-89.5-26T328 696H216v144Zm264-120q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28ZM216 840h528-528Z"/></svg>',
    inboxFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm264-192q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28Z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m352 811 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243 960l63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg>',
    starFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" style="fill: rgb(255, 202, 41);"/></svg>',
    sent: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V288l720 288-720 288Zm72-107 454-181-454-181v109l216 72-216 72v109Zm0 0V395v362Z"/></svg>`,
    sentFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V672l288-96-288-96V288l720 288-720 288Z"/></svg>`,
    drafts: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432V264H264v624h432V432H528ZM264 264v189-189 624-624Z"/></svg>',
    draftsFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432h168L528 264v168Z"/></svg>',
    compose: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m291 816-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>`,
    checkBox: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>`,
    checkBoxFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m429 706.153 224.922-223.922-37.153-37.153L429 631.847l-85-84L306.847 585 429 706.153ZM228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM216 312v528-528Z"/></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>`,
    labelImportant: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M107.804 864.131 292.826 576 107.804 287.869h493.153q22.391 0 42.163 9.957 19.771 9.956 32.206 28.109L852.196 576 675.087 826.783q-12.144 17.575-31.463 27.461-19.32 9.887-41.233 9.887H107.804Zm166.087-91.001h327.066L740.804 576 600.957 378.87H273.891L401.978 576 273.891 773.13ZM401.978 576 273.891 378.87 401.978 576 273.891 773.13 401.978 576Z"/></svg>`,
    labelImportantFill: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m120 856 180-280-180-280h480q20 0 37.5 9t28.5 25l174 246-174 246q-11 16-28.5 25t-37.5 9H120Z" style="fill: rgb(236, 202, 77);"/></svg>`,
    unChecked: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M202.87 944.131q-37.783 0-64.392-26.609-26.609-26.609-26.609-64.392V298.87q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h554.26q37.783 0 64.392 26.609 26.609 26.609 26.609 64.392v554.26q0 37.783-26.609 64.392-26.609 26.609-64.392 26.609H202.87Zm0-91.001h554.26V298.87H202.87v554.26Z"/></svg>`,
    checked: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M423.283 749.978 708.87 464.152l-62.457-62.456-223.13 222.891-111.131-110.891-62.456 62.456 173.587 173.826ZM202.87 944.131q-37.783 0-64.392-26.609-26.609-26.609-26.609-64.392V298.87q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h554.26q37.783 0 64.392 26.609 26.609 26.609 26.609 64.392v554.26q0 37.783-26.609 64.392-26.609 26.609-64.392 26.609H202.87Zm0-91.001h554.26V298.87H202.87v554.26Zm0-554.26v554.26-554.26Z"/></svg>`,
    keepMail: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M440 816h80V696h120v-80H520V496h-80v120H320v80h120v120ZM240 976q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h320l240 240v480q0 33-23.5 56.5T720 976H240Zm280-520V256H240v640h480V456H520ZM240 256v200-200 640-640Z"/></svg>`,
}

const logoSvgs = {
    apps: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M240 896q-33 0-56.5-23.5T160 816q0-33 23.5-56.5T240 736q33 0 56.5 23.5T320 816q0 33-23.5 56.5T240 896Zm240 0q-33 0-56.5-23.5T400 816q0-33 23.5-56.5T480 736q33 0 56.5 23.5T560 816q0 33-23.5 56.5T480 896Zm240 0q-33 0-56.5-23.5T640 816q0-33 23.5-56.5T720 736q33 0 56.5 23.5T800 816q0 33-23.5 56.5T720 896ZM240 656q-33 0-56.5-23.5T160 576q0-33 23.5-56.5T240 496q33 0 56.5 23.5T320 576q0 33-23.5 56.5T240 656Zm240 0q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm240 0q-33 0-56.5-23.5T640 576q0-33 23.5-56.5T720 496q33 0 56.5 23.5T800 576q0 33-23.5 56.5T720 656ZM240 416q-33 0-56.5-23.5T160 336q0-33 23.5-56.5T240 256q33 0 56.5 23.5T320 336q0 33-23.5 56.5T240 416Zm240 0q-33 0-56.5-23.5T400 336q0-33 23.5-56.5T480 256q33 0 56.5 23.5T560 336q0 33-23.5 56.5T480 416Zm240 0q-33 0-56.5-23.5T640 336q0-33 23.5-56.5T720 256q33 0 56.5 23.5T800 336q0 33-23.5 56.5T720 416Z"/></svg>`,
    gmail: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"viewBox="0 0 48 48"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path></svg>`,
    home: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="48" height="48"viewBox="0 0 48 48"><path fill="#fafafa" d="M22.586,4.414L5.879,21.121C5.316,21.684,5,22.447,5,23.243V41c0,1.105,0.895,2,2,2h34 c1.105,0,2-0.895,2-2V23.243c0-0.796-0.316-1.559-0.879-2.121L25.414,4.414C24.633,3.633,23.367,3.633,22.586,4.414z"></path><path fill="#43a047" d="M12 35H36V43H12z"></path><path fill="#fbc02d" d="M13,24v19H7c-1.1,0-2-0.9-2-2V24H13z"></path><path fill="#1e88e5" d="M42.12,21.12L29.59,8.59l-5.55,5.55L35,25.1V43h6c1.1,0,2-0.9,2-2V23.24 C43,22.45,42.68,21.68,42.12,21.12z"></path><path fill="#e64a19" d="M29.59,8.59L5,33.18v-9.94c0-0.79,0.32-1.56,0.88-2.12L22.59,4.41c0.78-0.78,2.04-0.78,2.82,0 L29.59,8.59z"></path></svg>`,
    keep: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 36 36" width="48"><g fill="none" fill-rule="evenodd"><path d="m0 0h36v36h-36z"/><g fill-rule="nonzero" transform="translate(6 1.5)"><path d="m15.75 8.25 4.524375.855 3.725625-.855-8.25-8.25-1.138125 3.91125z" fill="#f29900"/><path d="m15.75 8.25v-8.25h-13.5c-1.243125 0-2.25 1.006875-2.25 2.25v28.5c0 1.243125 1.006875 2.25 2.25 2.25h19.5c1.243125 0 2.25-1.006875 2.25-2.25v-22.5z" fill="#fbbc04"/><path d="m14.625 24h-5.25v-1.875h5.25zm-.028125-3.75h-5.19375c-1.36875-.8625-2.278125-2.386875-2.278125-4.125 0-2.6925 2.1825-4.875 4.875-4.875s4.875 2.1825 4.875 4.875c0 1.738125-.909375 3.2625-2.278125 4.125z" fill="#fff"/></g></g></svg>`,
    books: `<svg fill="#61d3db" height="48px" width="48px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" xml:space="preserve" stroke="#61d3db"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M142.539,53.868l-18.75,15.953V0H55.104H24.944c-3.286,0-5.952,2.665-5.952,5.953v188.094c0,3.288,2.666,5.953,5.952,5.953 h30.161h85.029h34.921c3.286,0,5.953-2.665,5.953-5.953V5.953c0-3.288-2.667-5.953-5.953-5.953h-13.766v69.82L142.539,53.868z M49.151,185H33.992V15h15.159V185z M111.111,64.007H71.329V47.303h39.783V64.007z M111.111,34.96H71.329V18.254h39.783V34.96z"></path> </g></svg>`,
    about: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M38 896v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358 636q62 0 120 14t131 46q32 14 50.5 42.5T678 802v94H38Zm700 0v-94q0-63-32-103.5T622 633q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519 568q24-25 36.5-61.5T568 425q0-45-12.5-79.5T519 282q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98 836h520v-34q0-16-9.5-31T585 750q-72-32-121-43t-106-11q-57 0-106.5 11T130 750q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448 425q0-39-25.5-64.5T358 335q-39 0-64.5 25.5T268 425q0 39 25.5 64.5T358 515Zm0 321Zm0-411Z" style="fill: rgb(251, 188, 5);"/></svg>`,
    youtube: `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85" fill="red"/><path d="M93.333 117.559l61.333-34.89-61.333-34.894z" fill="#fff"/></svg>`,
}

function getLogoSvg(iconName) {
    return logoSvgs[iconName]
}

function getSvg(iconName) {
    return KeepSvgs[iconName]
}

function getMailSvg(iconName) {
    return mailSvgs[iconName]
}
export const svgService = { getSvg, getMailSvg, getLogoSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
// function getSvg(iconName) {
//     return svgService.getSvg(iconName)
//   }