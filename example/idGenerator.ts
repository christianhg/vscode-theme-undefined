export function* makeIdGenerator(): Iterator<number> {
  let id = -1;
  while (true) {
    id = id + 1;
    yield id;
  }
}
