import realm from "./schema";

export function createSample(item) {
  return new Promise(function(resolve, reject) {
    realm.write(() => {
      realm.create("Item", item);
      return resolve("success");
    });
    return reject("error");
  });
}

export function findAll() {
  return new Promise(function(resolve, reject) {
    realm.write(() => {
      return resolve(realm.objects("Item").sorted("date", false));
    });
  });
}

export function remove(item) {
  return new Promise(function(resolve, reject) {
    realm.write(() => {
      realm.delete(item);
      return resolve("success");
    });
    return reject("error");
  });
}

export function update(item) {
  return new Promise(function(resolve, reject) {
    realm.write(() => {
      realm.create("Item", item);
      return resolve("success");
    });
    return reject("error");
  });
}
