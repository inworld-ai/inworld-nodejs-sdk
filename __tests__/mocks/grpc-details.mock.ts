import { ServiceError } from '@grpc/grpc-js';
import {
  InworldStatus as ProtoInworldStatus,
  ResourceNotFoundDetails,
  ResourceType,
} from '@proto/ai/inworld/common/status_pb';

import { protoTimestamp } from '../../src/common/helpers';

export const deserializeGrpcStatusDetails = jest
  .fn()
  .mockImplementation((proto: ServiceError) => {
    const status = new ProtoInworldStatus();
    let details: any;

    try {
      details = JSON.parse(proto.details);
    } catch (e) {
      return;
    }

    const {
      errorType,
      reconnectType,
      maxRetries,
      resourceNotFound,
      reconnectTime,
    } = details;

    if (
      errorType === undefined &&
      reconnectType === undefined &&
      maxRetries === undefined &&
      resourceNotFound === undefined
    ) {
      return { details: [] };
    }

    if (errorType) {
      status.setErrorType(errorType);
    }

    if (reconnectType) {
      status.setReconnectType(reconnectType);
    }

    if (maxRetries) {
      status.setMaxRetries(maxRetries);
    }

    if (reconnectTime) {
      status.setReconnectTime(protoTimestamp(new Date(reconnectTime)));
    }

    if (resourceNotFound) {
      let resourceType =
        resourceNotFound.resourceType ===
        ResourceType.RESOURCE_TYPE_CONVERSATION
          ? ResourceType.RESOURCE_TYPE_CONVERSATION
          : ResourceType.RESOURCE_TYPE_UNDEFINED;

      status.setResourceNotFound(
        new ResourceNotFoundDetails()
          .setResourceType(resourceType as unknown as ResourceType)
          .setResourceId(resourceNotFound.resourceId),
      );
    }

    return { details: [status] };
  });

jest.mock('@stackpath/node-grpc-error-details', () => ({
  deserializeGrpcStatusDetails,
}));
