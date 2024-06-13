import { ServiceError } from '@grpc/grpc-js';
import { Status } from '@grpc/grpc-js/build/src/constants';
import {
  ErrorType as ProtoErrorType,
  InworldStatus as ProtoInworldStatus,
  ReconnectionType as ProtoErrorReconnectionType,
  ResourceType as ProtoErrorResourceType,
} from '@proto/ai/inworld/common/status_pb';
import { deserializeGrpcStatusDetails } from '@stackpath/node-grpc-error-details';

export enum ErrorType {
  SESSION_TOKEN_EXPIRED = 'SESSION_TOKEN_EXPIRED',
  SESSION_TOKEN_INVALID = 'SESSION_TOKEN_INVALID',
  SESSION_RESOURCES_EXHAUSTED = 'SESSION_RESOURCES_EXHAUSTED',
  BILLING_TOKENS_EXHAUSTED = 'BILLING_TOKENS_EXHAUSTED',
  ACCOUNT_DISABLED = 'ACCOUNT_DISABLED',
  SESSION_INVALID = 'SESSION_INVALID',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  SAFETY_VIOLATION = 'SAFETY_VIOLATION',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  AUDIO_SESSION_EXPIRED = 'AUDIO_SESSION_EXPIRED',
  SESSION_PAUSED = 'SESSION_PAUSED',
}

export enum ErrorReconnectionType {
  UNDEFINED = 'UNDEFINED',
  NO_RETRY = 'NO_RETRY',
  IMMEDIATE = 'IMMEDIATE',
  TIMEOUT = 'TIMEOUT',
}

export enum ErrorResourceType {
  RESOURCE_TYPE_UNDEFINED = 'RESOURCE_TYPE_UNDEFINED',
  RESOURCE_TYPE_CONVERSATION = 'RESOURCE_TYPE_CONVERSATION',
}

interface ResourceNotFoundDetails {
  resourceId?: string;
  resourceType?: ErrorResourceType;
}

interface InworldStatus {
  errorType?: ErrorType;
  reconnectTime?: string;
  reconnectType?: ErrorReconnectionType;
  maxRetries?: number;
  resourceNotFound?: ResourceNotFoundDetails;
}

const deserializeMap = {
  'ai.inworld.common.InworldStatus': ProtoInworldStatus.deserializeBinary,
};

export class InworldError {
  message: string;
  code: Status | undefined;
  details: InworldStatus[] = [];

  constructor(message: string, code?: Status, details?: InworldStatus[]) {
    this.message = message;
    this.code = code;
    this.details = details;
  }

  static fromProto(proto: ServiceError): InworldError {
    const grpcErrorDetails = deserializeGrpcStatusDetails(
      proto,
      deserializeMap,
    );

    let details: InworldStatus[] | undefined;

    if (grpcErrorDetails?.details?.length > 0) {
      details = grpcErrorDetails.details?.map((d: ProtoInworldStatus) => {
        const { errorType, maxRetries, reconnectType, resourceNotFound } =
          d.toObject();
        const { resourceId, resourceType } = resourceNotFound || {};

        return {
          errorType: this.getErrorType(errorType),
          reconnectTime: d.getReconnectTime()?.toDate().toISOString(),
          reconnectType: this.getErrorReconnectionType(reconnectType),
          maxRetries: maxRetries,
          ...((resourceId || resourceType !== undefined) && {
            resourceNotFound: {
              ...(resourceId && { resourceId }),
              ...(resourceType !== undefined && {
                resourceType: this.getErrorResourceType(resourceType),
              }),
            },
          }),
        };
      }) as InworldStatus[];
    }

    return new InworldError(proto.message, proto.code, details);
  }

  private static getErrorType(errorType: ProtoErrorType) {
    switch (errorType) {
      case ProtoErrorType.SESSION_TOKEN_EXPIRED:
        return ErrorType.SESSION_TOKEN_EXPIRED;
      case ProtoErrorType.SESSION_TOKEN_INVALID:
        return ErrorType.SESSION_TOKEN_INVALID;
      case ProtoErrorType.SESSION_RESOURCES_EXHAUSTED:
        return ErrorType.SESSION_RESOURCES_EXHAUSTED;
      case ProtoErrorType.BILLING_TOKENS_EXHAUSTED:
        return ErrorType.BILLING_TOKENS_EXHAUSTED;
      case ProtoErrorType.ACCOUNT_DISABLED:
        return ErrorType.ACCOUNT_DISABLED;
      case ProtoErrorType.SESSION_INVALID:
        return ErrorType.SESSION_INVALID;
      case ProtoErrorType.RESOURCE_NOT_FOUND:
        return ErrorType.RESOURCE_NOT_FOUND;
      case ProtoErrorType.SAFETY_VIOLATION:
        return ErrorType.SAFETY_VIOLATION;
      case ProtoErrorType.SESSION_EXPIRED:
        return ErrorType.SESSION_EXPIRED;
      case ProtoErrorType.AUDIO_SESSION_EXPIRED:
        return ErrorType.AUDIO_SESSION_EXPIRED;
      case ProtoErrorType.SESSION_PAUSED:
        return ErrorType.SESSION_PAUSED;
      default:
        return undefined;
    }
  }

  private static getErrorReconnectionType(
    reconnectType: ProtoErrorReconnectionType,
  ) {
    switch (reconnectType) {
      case ProtoErrorReconnectionType.UNDEFINED:
        return ErrorReconnectionType.UNDEFINED;
      case ProtoErrorReconnectionType.NO_RETRY:
        return ErrorReconnectionType.NO_RETRY;
      case ProtoErrorReconnectionType.IMMEDIATE:
        return ErrorReconnectionType.IMMEDIATE;
      case ProtoErrorReconnectionType.TIMEOUT:
        return ErrorReconnectionType.TIMEOUT;
      default:
        return undefined;
    }
  }

  private static getErrorResourceType(resourceType: ProtoErrorResourceType) {
    switch (resourceType) {
      case ProtoErrorResourceType.RESOURCE_TYPE_CONVERSATION:
        return ErrorResourceType.RESOURCE_TYPE_CONVERSATION;
      default:
        return ErrorResourceType.RESOURCE_TYPE_UNDEFINED;
    }
  }
}
