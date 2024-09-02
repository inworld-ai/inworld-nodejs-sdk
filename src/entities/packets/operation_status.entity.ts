import { OperationStatusEvent as ProtoOperationStatusEvent } from '@proto/ai/inworld/packets/packets_pb';
import * as GoogleRpcStatus from '@proto/google/rpc/status_pb';

export class OperationStatusEvent {
  readonly status: GoogleRpcStatus.Status;

  constructor({ status }: { status?: GoogleRpcStatus.Status }) {
    this.status = status;
  }

  static fromProto(proto: ProtoOperationStatusEvent) {
    return new OperationStatusEvent({
      status: proto.getStatus(),
    });
  }
}
