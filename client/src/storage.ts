import { createInstance } from "localforage";
import { LocationObject } from "LocationTypes";

type ForageIterator = (
  value: unknown,
  key: string,
  iterationNumber: number
) => unknown;

class AppStorage {
  store: LocalForage;
  constructor(name: string) {
    this.store = createInstance({
      name: "sibyl",
      storeName: name + "Table",
    });
  }

  add(item: LocationObject) {
    return this.store.setItem(item.address, item);
  }

  remove(item: LocationObject) {
    return this.store.removeItem(item.address);
  }

  forEach(fn: ForageIterator) {
    return this.store.iterate(fn);
  }

  isEmpty() {
    return this.store.length().then((length) => length === 0);
  }

  getItems() {
    const items: LocationObject[] = [];
    return this.store
      .iterate((val: LocationObject) => items.push(val))
      .then(() => items)
      .catch((err) => console.error(err));
  }
}

const Recents = new AppStorage("recents");
const SavedLocations = new AppStorage("saved");

export { Recents, SavedLocations };
