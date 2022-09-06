package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TimelockKeyPrefix is the prefix to retrieve all Timelock
	TimelockKeyPrefix = "Timelock/value/"
)

// TimelockKey returns the store key to retrieve a Timelock from the index fields
func TimelockKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
