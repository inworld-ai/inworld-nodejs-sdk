## 2022-04-26 v1.3.1
* Fix type definition for `onSession` method

## 2022-04-26 v1.3.0

* Add parameters to triggers
* Mark `setGenerateSessionToken` as deprecated instead of `generateSessionToken` 
* Add packets to queue before open connection call
* Replace checking emotions behavior and strength by direct property access

## 2022-04-20 v1.2.0

* Add phonemes event support
* Add silence event support
* Improve manual reconnect latency

## 2022-04-06 v1.1.8

* Remove deprecated emotions attributes: joy, fear, trust and surprise

## 2022-03-14 v1.1.7

* Return sent packet as result of message send call
* Add interruptions support

## 2022-03-10 v1.1.6

* Rewrite aliases to relative paths in built files

## 2022-03-09 v1.1.5

* Fix sending messages after reconnect
* Combine packet directly before sending

## 2022-03-09 v1.1.4

* Mark scene as loaded after character list is set

## 2022-03-08 v1.1.3

* Improve scene loading check

## 2022-03-07 v1.1.2

* Convert message channel to `TextChannel` for Discord bot example

## 2022-03-07 v1.1.1

* Add missed `@types/uuid` dependency to examples

## 2022-03-07 v1.1.0

* Add example of local audio file uploading
* Replace number representation of packet types and control types by string ones
* Add assets to character entity
* Fix typo in audio package attribute name
* Add example of client side integration
* Add package version to `userAgent` header for grpc requests
* Ensure scene is loaded once for simultaneously sent packets

## 2022-02-14 v1.0.2

* Fix Discord bot example

## 2022-02-14 v1.0.1

* Fix typo in docs
* Fix internal generateSessionToken function call

## 2022-02-10 v1.0.0

* Rename custom event to trigger
* Send default client id on scene load if it's empty
* Allow to manage session token
* Convert expirationTime from proto Timestamp to Date

## 2022-11-23 v0.9.4

* Fix cli example interface

## 2022-11-14 v0.9.3

* Allow to get packet that was sent to Inworld server

## 2022-10-24 v0.9.2

* Add support of user-defined custom events
* Use ISO string istead of google protobuf timestamp for InworldPacket
