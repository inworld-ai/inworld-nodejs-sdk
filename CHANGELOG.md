## [1.17.0] - 2025-01-22

### Fixed

- Fix changing of scene capabilities

## [1.16.1] - 2024-12-05

### Added

- Add details to logs

### Fixed

- Wait for one-to-one conversation loading on data sending

## [1.16.0] - 2024-11-05

### Added

- Server to Client log packets
- Added latency reporting

## [1.15.0] - 2024-09-17

### Added

- Add getProto method to Inworld packets
- Support SPEECH_RECOGNITION_ONLY mode
- Add version to session state
- Allow to get session state as a Uint8Array
- Allow to manage entity items
- Tasks event support

### Fixed

- Add user to scene automatically in case of one-to-one conversation

## [1.14.2] - 2024-06-27

### Fixed

- Extract error details without external packages

## [1.14.1] - 2024-06-17

### Fixed

- Fix dependencies

## [1.14.0] - 2024-06-14

### Changed

- Support new runtime protocol session configuration

### Added

- Expose Inworld error codes
- Support Push-to-talk feature

## [1.13.1] - 2024-06-05

### Fixed

- Fix scene changing error

## [1.13.0] - 2024-06-05

### Added

- Multi-character conversation support (2.0)

## [1.12.0] - 2024-05-06

### Added

- Allow to change scene and add characters to current scene
- Allow to like, dislike or undo feedback
- Handle runtime warnings

### Changed

- Change internal way to open session

## [1.11.0] - 2024-01-20

### Added

- Outgoing narrated actions support

## [1.10.3] - 2024-01-13

### Changed

- Update license information

## [1.10.2] - 2023-11-27

### Added

- Update proto files to new structure


## [1.10.1] - 2023-11-20

### Added

- Improve client request format

## [1.10.0] - 2023-10-18

### Added

- Narrated actions support

## [1.9.0] - 2023-10-05

### Added

- Allow to get the conversation state
- Allow to propagate previous conversation state to new connection
- Debug logs support for world-engine token generation

## [1.8.0] - 2023-09-20

### Added

- Add opportunity to generate session token outside of SDK
- Add `correlationId` to text, custom and cancel response packets
- Allow to use async `onDisconnect` and `onError`

### Fixed

- Generate proto packet just once to dispatching it to the bidirectional stream

## [1.7.0] - 2023-09-01

### Added

- Allow to propagate previous dialog to new connection
- Allow manage load scene response and request via extension
- Allow to send TTS playback mute/unmute

## [1.6.0] - 2023-08-04

- Allow to propagate user profile fields

## [1.5.1] - 2023-07-06

- Added JS examples
- Added Say hello example
- Add recognized text to upload audio file example
- Added missed empty .env file to examples
- Fixed update test audio file
- Changed parameter from `name` to `scene` in `world_engine_client_grpc.service.generateSessionToken`
- Remove deprecated method support for token, emotions, character and client

## [1.5.0] - 2023-06-30

- Switch generate token API calls from studio API to world-engine one
- Add scene name pattern validation
- Fix connection configuration propagation
- Support debug and error logs

## [1.4.0] - 2023-05-17

- Replace CancelResponses by Mutation.CancelResponses on the protocol level
- Allow to use extended capabilities and scene props
- Allow to send and receive custom proto packet

## [1.3.1] - 2023-04-26

- Fix type definition for `onSession` method

## [1.3.0] - 2023-04-26

- Add parameters to triggers
- Mark `setGenerateSessionToken` as deprecated instead of `generateSessionToken` 
- Add packets to queue before open connection call
- Replace checking emotions behavior and strength by direct property access

## [1.2.0] - 2023-04-20

- Add phonemes event support
- Add silence event support
- Improve manual reconnect latency

## [1.1.8] - 2023-04-06

- Remove deprecated emotions attributes: joy, fear, trust and surprise

## [1.1.7] - 2023-03-14

- Return sent packet as result of message send call
- Add interruptions support

## [1.1.6] - 2023-03-10

- Rewrite aliases to relative paths in built files

## [1.1.5] - 2023-03-09

- Fix sending messages after reconnect
- Combine packet directly before sending

## [1.1.4] - 2023-03-09

- Mark scene as loaded after character list is set

## [1.1.3] - 2023-03-08

- Improve scene loading check

## [1.1.2] - 2023-03-07

- Convert message channel to `TextChannel` for Discord bot example

## [1.1.1] - 2023-03-07

- Add missed `@types/uuid` dependency to examples

## [1.1.0] - 2023-03-07

- Add example of local audio file uploading
- Replace number representation of packet types and control types by string ones
- Add assets to character entity
- Fix typo in audio package attribute name
- Add example of client side integration
- Add package version to `userAgent` header for grpc requests
- Ensure scene is loaded once for simultaneously sent packets

## [1.0.2] - 2023-02-14

- Fix Discord bot example

## [1.0.1] - 2023-02-14

- Fix typo in docs
- Fix internal generateSessionToken function call

## [1.0.0] - 2023-02-10

- Rename custom event to trigger
- Send default client id on scene load if it's empty
- Allow to manage session token
- Convert expirationTime from proto Timestamp to Date

## [0.9.4] - 2022-11-23

- Fix cli example interface

## [0.9.3] - 2022-11-14

- Allow to get packet that was sent to Inworld server

## [v0.9.2] - 2022-10-24

- Add support of user-defined custom events
- Use ISO string istead of google protobuf timestamp for InworldPacket
