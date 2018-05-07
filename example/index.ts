import { makeIdGenerator } from './idGenerator';
import { names } from './names';

interface Person {
  id: number;
  age: number;
  longName: boolean;
  name: string;
  online: boolean;
}

/**
 * Some important comment about this function
 */
function makeCreatePerson(idGenerator: Iterator<number>) {
  return (name: string): Person => ({
    id: idGenerator.next().value,
    age: 42,
    longName: name.length >= 9,
    name,
    online: false
  });
}

const createPerson = makeCreatePerson(makeIdGenerator());

export const persons = names.map(createPerson);
