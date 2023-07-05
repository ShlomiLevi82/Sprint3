import { storageService } from "../../../services/async-storage.service.js";
import { utilService } from "../../../services/util.service.js";

const PAGE_SIZE = 5;
const note_KEY = "noteDB";

let gFilterBy = { txt: "", noteType: 0 };
let gSortBy = { txt: 1 };
let gPageIdx;

_createnotes();

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptynote,
  getNextnoteId,
  getFilterBy,
  setFilterBy,
  getnoteCountBynoteTypeMap,
  addGooglenote,
};

function query() {
    return storageService.query(note_KEY).then((notes) => {
      if (gFilterBy.txt) {
        const regex = new RegExp(gFilterBy.txt, "i");
        notes = notes.filter((note) => regex.test(note.info.txt));
      }
      if (gFilterBy.price) {
        notes = notes.filter((note) => note.listPrice.price >= gFilterBy.price);
      }
      if (gPageIdx !== undefined) {
        const startIdx = gPageIdx * PAGE_SIZE;
        notes = notes.slice(startIdx, startIdx + PAGE_SIZE);
      }
      if (gSortBy.noteType !== undefined) {
        notes.sort((n1, n2) => (n1.info.txt - n2.info.txt) * gSortBy.noteType);
      } else if (gSortBy.txt !== undefined) {
        notes.sort((n1, n2) => (n1.info.txt - n2.info.txt) * gSortBy.txt);
      }
      return notes;
    });
  }
  

function get(noteId) {
  return storageService
    .get(note_KEY, noteId)
    .then((note) => _setNextPrevnoteId(note));
}
function addGooglenote(note) {
  return storageService.post(note_KEY, note);
}
function _setNextPrevnoteId(note) {
  return storageService.query(note_KEY).then((notes) => {
    const noteIdx = notes.findIndex((currnote) => currnote.id === note.id);
    note.nextnoteId = notes[noteIdx + 1] ? notes[noteIdx + 1].id : notes[0].id;
    note.prevnoteId = notes[noteIdx - 1]
      ? notes[noteIdx - 1].id
      : notes[notes.length - 1].id;
    return note;
  });
}

function remove(noteId) {
  return storageService.remove(note_KEY, noteId);
}

function save(note) {
  if (note.id) {
    return storageService.put(note_KEY, note);
  } else {
    return storageService.post(note_KEY, note);
  }
}

function getEmptynote(type = "", txt = "") {
  return {
    id: "n101",
    createdAt: 1112222,
    type: "NoteTxt",
    isPinned: true,
    style: { backgroundColor: "#00d" },
    info: { txt: "Fullstack Me Baby!" },
  };
}

function getFilterBy() {
  return { ...gFilterBy };
}

function setFilterBy(filterBy = {}) {
  if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt;
  if (filterBy.noteType !== undefined) gFilterBy.noteType = filterBy.noteType;
  return gFilterBy;
}

function getNextnoteId(noteId) {
  return storageService.query(note_KEY).then((notes) => {
    var idx = notes.findIndex((note) => note.id === noteId);
    if (idx === notes.length - 1) idx = -1;
    return notes[idx + 1].id;
  });
}

function getnoteCountBynoteTypeMap() {
  return storageService.query(note_KEY).then((notes) => {
    const noteCountBynoteTypeMap = notes.reduce(
      (map, note) => {
        if (note.noteType < 120) map.slow++;
        else if (note.noteType < 200) map.normal++;
        else map.fast++;
        return map;
      },
      { slow: 0, normal: 0, fast: 0 }
    );
    return noteCountBynoteTypeMap;
  });
}

function _createnotes() {
  let notes = utilService.loadFromStorage(note_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        createdAt: 1112222,
        type: "NoteTxt",
        isPinned: true,
        style: { backgroundColor: "#00d" },
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: "n102",
        type: "NoteImg",
        isPinned: false,
        info: { url: "http://some-img/me", txt: "Bobi and Me" },
        style: { backgroundColor: "#00d" },
      },
      {
        id: "n103",
        type: "NoteTodos",
        isPinned: false,
        info: {
          txt: "Get my stuff together",
          todos: [
            { txt: "Driving license", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
      },
      {
        id: "n104",
        type: "NoteTxt",
        isPinned: false,
        style: { backgroundColor: "#f80" },
        info: { txt: "Remember to buy milk" },
      },
      {
        id: "n105",
        type: "NoteImg",
        isPinned: true,
        info: { url: "http://some-img/cats", txt: "Cute Cats" },
        style: { backgroundColor: "#f0f" },
      },
      {
        id: "n106",
        type: "NoteTodos",
        isPinned: true,
        info: {
          txt: "Grocery List",
          todos: [
            { txt: "Apples", doneAt: null },
            { txt: "Bread", doneAt: null },
            { txt: "Milk", doneAt: 187111111 },
          ],
        },
      },
      {
        id: "n107",
        type: "NoteTxt",
        isPinned: false,
        style: { backgroundColor: "#0f0" },
        info: { txt: "Meeting at 3 PM" },
      },
    ];

    utilService.saveToStorage(note_KEY, notes);
  }
}

function _createnote(txt, noteType = 250) {
  const note = getEmptynote(txt, noteType);
  note.id = utilService.makeId();
  return note;
}
