import { CustomEvent as ProtoTaskEvent } from '@proto/ai/inworld/packets/packets_pb';
import { v4 } from 'uuid';

import { TaskEvent } from '../../../src/entities/packets/task.entity';

const name = v4();
const parameters = [
  new ProtoTaskEvent.Parameter().setName(v4()).setValue(v4()),
  new ProtoTaskEvent.Parameter().setName(v4()).setValue(v4()),
];

test('should convert from task with parameters', () => {
  const proto = new ProtoTaskEvent()
    .setName(name)
    .setParametersList(parameters);

  expect(TaskEvent.fromProto(proto)).toEqual({
    name,
    parameters: parameters.map((p) => ({
      name: p.getName(),
      value: p.getValue(),
    })),
  });
});

test('should convert from task with no parameters', () => {
  const proto = new ProtoTaskEvent().setName(name);

  expect(TaskEvent.fromProto(proto)).toEqual({
    name,
    parameters: undefined,
  });
});

test('should create a object with no parameters', () => {
  const task = new TaskEvent({
    name,
  });

  expect(task).toEqual({
    name,
    parameters: undefined,
  });
});
