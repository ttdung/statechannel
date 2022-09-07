package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HashlockKeyPrefix is the prefix to retrieve all Hashlock
	HashlockKeyPrefix = "Hashlock/value/"
)

// HashlockKey returns the store key to retrieve a Hashlock from the index fields
func HashlockKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
